"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  function tokenise(str) {
    var tokens = [];
    var re = {
      "float": /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)/,
      "integer": /^-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/,
      "identifier": /^[A-Z_a-z][0-9A-Z_a-z-]*/,
      "string": /^"[^"]*"/,
      "whitespace": /^(?:[\t\n\r ]+|[\t\n\r ]*((\/\/.*|\/\*(.|\n|\r)*?\*\/)[\t\n\r ]*))+/,
      "other": /^[^\t\n\r 0-9A-Z_a-z]/
    };
    var types = ["float", "integer", "identifier", "string", "whitespace", "other"];
    while (str.length > 0) {
      var matched = false;

      var _loop = function _loop() {
        var type = types[i];
        str = str.replace(re[type], function (tok) {
          tokens.push({ type: type, value: tok });
          matched = true;
          return "";
        });
        if (matched) return "break";
      };

      for (var i in types) {
        var _ret = _loop();

        if (_ret === "break") break;
      }
      if (matched) continue;
      throw new Error("Token stream not progressing");
    }
    return tokens;
  };

  var WebIDLParseError = function () {
    function WebIDLParseError(str, line, input, tokens) {
      _classCallCheck(this, WebIDLParseError);

      this.message = str;
      this.line = line;
      this.input = input;
      this.tokens = tokens;
    }

    WebIDLParseError.prototype.toString = function toString() {
      return this.message + ", line " + this.line + " (tokens: '" + this.input + "')\n" + JSON.stringify(this.tokens, null, 4);
    };

    return WebIDLParseError;
  }();

  function _parse(tokens, opt) {
    var line = 1;
    tokens = tokens.slice();
    var names = new Map();

    var FLOAT = "float";
    var INT = "integer";
    var ID = "identifier";
    var STR = "string";
    var OTHER = "other";

    var EMPTY_OPERATION = Object.freeze({
      type: "operation",
      getter: false,
      setter: false,
      deleter: false,
      "static": false,
      stringifier: false
    });

    function error(str) {
      var tok = "";
      var numTokens = 0;
      var maxTokens = 5;
      while (numTokens < maxTokens && tokens.length > numTokens) {
        tok += tokens[numTokens].value;
        numTokens++;
      }
      throw new WebIDLParseError(str, line, tok, tokens.slice(0, maxTokens));
    };

    function sanitize_name(name, type) {
      if (names.has(name)) {
        error("The name \"" + name + "\" of type \"" + names.get(name) + "\" is already seen");
      }
      names.set(name, type);
      return name;
    }

    var last_token = null;

    function consume(type, value) {
      if (!tokens.length || tokens[0].type !== type) return;
      if (typeof value === "undefined" || tokens[0].value === value) {
        last_token = tokens.shift();
        if (type === ID) last_token.value = last_token.value.replace(/^_/, "");
        return last_token;
      }
    };

    function ws() {
      if (!tokens.length) return;
      if (tokens[0].type === "whitespace") {
        var t = tokens.shift();
        t.value.replace(/\n/g, function (m) {
          line++;
          return m;
        });
        return t;
      }
    };

    function all_ws(store, pea) {
      // pea == post extended attribute, tpea = same for types
      var t = { type: "whitespace", value: "" };
      while (true) {
        var w = ws();
        if (!w) break;
        t.value += w.value;
      }
      if (t.value.length > 0) {
        if (store) {
          var _w = t.value;
          var re = {
            "ws": /^([\t\n\r ]+)/,
            "line-comment": /^\/\/(.*)\r?\n?/,
            "multiline-comment": /^\/\*((?:.|\n|\r)*?)\*\//
          };
          var wsTypes = [];
          for (var k in re) {
            wsTypes.push(k);
          }while (_w.length) {
            var matched = false;

            var _loop2 = function _loop2() {
              var type = wsTypes[i];
              _w = _w.replace(re[type], function (tok, m1) {
                store.push({ type: type + (pea ? "-" + pea : ""), value: m1 });
                matched = true;
                return "";
              });
              if (matched) return "break";
            };

            for (var i in wsTypes) {
              var _ret2 = _loop2();

              if (_ret2 === "break") break;
            }
            if (matched) continue;
            throw new Error("Surprising white space construct."); // this shouldn't happen
          }
        }
        return t;
      }
    };

    function integer_type() {
      var ret = "";
      all_ws();
      if (consume(ID, "unsigned")) ret = "unsigned ";
      all_ws();
      if (consume(ID, "short")) return ret + "short";
      if (consume(ID, "long")) {
        ret += "long";
        all_ws();
        if (consume(ID, "long")) return ret + " long";
        return ret;
      }
      if (ret) error("Failed to parse integer type");
    };

    function float_type() {
      var ret = "";
      all_ws();
      if (consume(ID, "unrestricted")) ret = "unrestricted ";
      all_ws();
      if (consume(ID, "float")) return ret + "float";
      if (consume(ID, "double")) return ret + "double";
      if (ret) error("Failed to parse float type");
    };

    function primitive_type() {
      var num_type = integer_type() || float_type();
      if (num_type) return num_type;
      all_ws();
      if (consume(ID, "boolean")) return "boolean";
      if (consume(ID, "byte")) return "byte";
      if (consume(ID, "octet")) return "octet";
    };

    function const_value() {
      if (consume(ID, "true")) return { type: "boolean", value: true };
      if (consume(ID, "false")) return { type: "boolean", value: false };
      if (consume(ID, "null")) return { type: "null" };
      if (consume(ID, "Infinity")) return { type: "Infinity", negative: false };
      if (consume(ID, "NaN")) return { type: "NaN" };
      var ret = consume(FLOAT) || consume(INT);
      if (ret) return { type: "number", value: ret.value };
      var tok = consume(OTHER, "-");
      if (tok) {
        if (consume(ID, "Infinity")) return { type: "Infinity", negative: true };else tokens.unshift(tok);
      }
    };

    function type_suffix(obj) {
      while (true) {
        all_ws();
        if (consume(OTHER, "?")) {
          if (obj.nullable) error("Can't nullable more than once");
          obj.nullable = true;
        } else return;
      }
    };

    function single_type() {
      var prim = primitive_type();
      var ret = { sequence: false, generic: null, nullable: false, union: false };
      var name = void 0;
      var value = void 0;
      if (prim) {
        ret.idlType = prim;
      } else if (name = consume(ID)) {
        value = name.value;
        all_ws();
        // Generic types
        if (consume(OTHER, "<")) {
          // backwards compat
          if (value === "sequence") {
            ret.sequence = true;
          }
          ret.generic = value;
          var types = [];
          do {
            all_ws();
            types.push(type_with_extended_attributes() || error("Error parsing generic type " + value));
            all_ws();
          } while (consume(OTHER, ","));
          if (value === "sequence") {
            if (types.length !== 1) error("A sequence must have exactly one subtype");
          } else if (value === "record") {
            if (types.length !== 2) error("A record must have exactly two subtypes");
            if (!/^(DOMString|USVString|ByteString)$/.test(types[0].idlType)) {
              error("Record key must be DOMString, USVString, or ByteString");
            }
            if (types[0].extAttrs) error("Record key cannot have extended attribute");
          } else if (value === "Promise") {
            if (types[0].extAttrs) error("Promise type cannot have extended attribute");
          }
          ret.idlType = types.length === 1 ? types[0] : types;
          all_ws();
          if (!consume(OTHER, ">")) error("Unterminated generic type " + value);
          type_suffix(ret);
          return ret;
        } else {
          ret.idlType = value;
        }
      } else {
        return;
      }
      type_suffix(ret);
      if (ret.nullable && ret.idlType === "any") error("Type any cannot be made nullable");
      return ret;
    };

    function union_type() {
      all_ws();
      if (!consume(OTHER, "(")) return;
      var ret = { sequence: false, generic: null, nullable: false, union: true, idlType: [] };
      var fst = type_with_extended_attributes() || error("Union type with no content");
      ret.idlType.push(fst);
      while (true) {
        all_ws();
        if (!consume(ID, "or")) break;
        var typ = type_with_extended_attributes() || error("No type after 'or' in union type");
        ret.idlType.push(typ);
      }
      if (!consume(OTHER, ")")) error("Unterminated union type");
      type_suffix(ret);
      return ret;
    };

    function type() {
      return single_type() || union_type();
    };

    function type_with_extended_attributes() {
      var extAttrs = extended_attrs();
      var ret = single_type() || union_type();
      if (extAttrs.length && ret) ret.extAttrs = extAttrs;
      return ret;
    };

    function argument(store) {
      var ret = { optional: false, variadic: false };
      ret.extAttrs = extended_attrs(store);
      all_ws(store, "pea");
      var opt_token = consume(ID, "optional");
      if (opt_token) {
        ret.optional = true;
        all_ws();
      }
      ret.idlType = type_with_extended_attributes();
      if (!ret.idlType) {
        if (opt_token) tokens.unshift(opt_token);
        return;
      }
      var type_token = last_token;
      if (!ret.optional) {
        all_ws();
        if (tokens.length >= 3 && tokens[0].type === "other" && tokens[0].value === "." && tokens[1].type === "other" && tokens[1].value === "." && tokens[2].type === "other" && tokens[2].value === ".") {
          tokens.shift();
          tokens.shift();
          tokens.shift();
          ret.variadic = true;
        }
      }
      all_ws();
      var name = consume(ID);
      if (!name) {
        if (opt_token) tokens.unshift(opt_token);
        tokens.unshift(type_token);
        return;
      }
      ret.name = name.value;
      if (ret.optional) {
        all_ws();
        var dflt = default_();
        if (typeof dflt !== "undefined") {
          ret["default"] = dflt;
        }
      }
      return ret;
    };

    function argument_list(store) {
      var ret = [];
      var arg = argument(store ? ret : null);
      if (!arg) return;
      ret.push(arg);
      while (true) {
        all_ws(store ? ret : null);
        if (!consume(OTHER, ",")) return ret;
        var nxt = argument(store ? ret : null) || error("Trailing comma in arguments list");
        ret.push(nxt);
      }
    };

    function simple_extended_attr(store) {
      all_ws();
      var name = consume(ID);
      if (!name) return;
      var ret = {
        name: name.value,
        "arguments": null,
        type: "extended-attribute",
        rhs: null
      };
      all_ws();
      var eq = consume(OTHER, "=");
      if (eq) {
        all_ws();
        ret.rhs = consume(ID) || consume(FLOAT) || consume(INT) || consume(STR);
        if (!ret.rhs && consume(OTHER, "(")) {
          // [Exposed=(Window,Worker)]
          var rhs_list = [];
          var id = consume(ID);
          if (id) {
            rhs_list.push(id.value);
          }
          identifiers(rhs_list);
          consume(OTHER, ")") || error("Unexpected token in extended attribute argument list or type pair");
          ret.rhs = {
            type: "identifier-list",
            value: rhs_list
          };
        }
        if (!ret.rhs) return error("No right hand side to extended attribute assignment");
      }
      all_ws();
      if (consume(OTHER, "(")) {
        var args = void 0,
            pair = void 0;
        // [Constructor(DOMString str)]
        if (args = argument_list(store)) {
          ret["arguments"] = args;
        }
        // [Constructor()]
        else {
            ret["arguments"] = [];
          }
        all_ws();
        consume(OTHER, ")") || error("Unexpected token in extended attribute argument list");
      }
      return ret;
    };

    // Note: we parse something simpler than the official syntax. It's all that ever
    // seems to be used
    function extended_attrs(store) {
      var eas = [];
      all_ws(store);
      if (!consume(OTHER, "[")) return eas;
      eas[0] = simple_extended_attr(store) || error("Extended attribute with not content");
      all_ws();
      while (consume(OTHER, ",")) {
        if (eas.length) {
          eas.push(simple_extended_attr(store));
        } else {
          eas.push(simple_extended_attr(store) || error("Trailing comma in extended attribute"));
        }
      }
      all_ws();
      consume(OTHER, "]") || error("No end of extended attribute");
      return eas;
    };

    function default_() {
      all_ws();
      if (consume(OTHER, "=")) {
        all_ws();
        var def = const_value();
        if (def) {
          return def;
        } else if (consume(OTHER, "[")) {
          if (!consume(OTHER, "]")) error("Default sequence value must be empty");
          return { type: "sequence", value: [] };
        } else {
          var str = consume(STR) || error("No value for default");
          str.value = str.value.replace(/^"/, "").replace(/"$/, "");
          return str;
        }
      }
    };

    function const_(store) {
      all_ws(store, "pea");
      if (!consume(ID, "const")) return;
      var ret = { type: "const", nullable: false };
      all_ws();
      var typ = primitive_type();
      if (!typ) {
        typ = consume(ID) || error("No type for const");
        typ = typ.value;
      }
      ret.idlType = typ;
      all_ws();
      if (consume(OTHER, "?")) {
        ret.nullable = true;
        all_ws();
      }
      var name = consume(ID) || error("No name for const");
      ret.name = name.value;
      all_ws();
      consume(OTHER, "=") || error("No value assignment for const");
      all_ws();
      var cnt = const_value();
      if (cnt) ret.value = cnt;else error("No value for const");
      all_ws();
      consume(OTHER, ";") || error("Unterminated const");
      return ret;
    };

    function inheritance() {
      all_ws();
      if (consume(OTHER, ":")) {
        all_ws();
        var inh = consume(ID) || error("No type in inheritance");
        return inh.value;
      }
    };

    function operation_rest(ret, store) {
      all_ws();
      if (!ret) ret = {};
      var name = consume(ID);
      ret.name = name ? name.value : null;
      all_ws();
      consume(OTHER, "(") || error("Invalid operation");
      ret["arguments"] = argument_list(store) || [];
      all_ws();
      consume(OTHER, ")") || error("Unterminated operation");
      all_ws();
      consume(OTHER, ";") || error("Unterminated operation");
      return ret;
    };

    function callback(store) {
      all_ws(store, "pea");
      var ret = void 0;
      if (!consume(ID, "callback")) return;
      all_ws();
      var tok = consume(ID, "interface");
      if (tok) {
        ret = interface_rest();
        ret.type = "callback interface";
        return ret;
      }
      var name = consume(ID) || error("No name for callback");
      ret = { type: "callback", name: sanitize_name(name.value, "callback") };
      all_ws();
      consume(OTHER, "=") || error("No assignment in callback");
      all_ws();
      ret.idlType = return_type();
      all_ws();
      consume(OTHER, "(") || error("No arguments in callback");
      ret["arguments"] = argument_list(store) || [];
      all_ws();
      consume(OTHER, ")") || error("Unterminated callback");
      all_ws();
      consume(OTHER, ";") || error("Unterminated callback");
      return ret;
    };

    function attribute(store) {
      all_ws(store, "pea");
      var grabbed = [];
      var ret = {
        type: "attribute",
        "static": false,
        stringifier: false,
        inherit: false,
        readonly: false
      };
      var w = all_ws();
      if (w) grabbed.push(w);
      if (consume(ID, "inherit")) {
        if (ret["static"] || ret.stringifier) error("Cannot have a static or stringifier inherit");
        ret.inherit = true;
        grabbed.push(last_token);
        var _w2 = all_ws();
        if (_w2) grabbed.push(_w2);
      }
      if (consume(ID, "readonly")) {
        ret.readonly = true;
        grabbed.push(last_token);
        var _w3 = all_ws();
        if (_w3) grabbed.push(_w3);
      }
      var rest = attribute_rest(ret);
      if (!rest) {
        tokens = grabbed.concat(tokens);
      }
      return rest;
    };

    function attribute_rest(ret) {
      if (!consume(ID, "attribute")) {
        return;
      }
      all_ws();
      ret.idlType = type_with_extended_attributes() || error("No type in attribute");
      if (ret.idlType.sequence) error("Attributes cannot accept sequence types");
      if (ret.idlType.generic === "record") error("Attributes cannot accept record types");
      all_ws();
      var name = consume(ID) || error("No name in attribute");
      ret.name = name.value;
      all_ws();
      consume(OTHER, ";") || error("Unterminated attribute");
      return ret;
    };

    function return_type() {
      var typ = type();
      if (!typ) {
        if (consume(ID, "void")) {
          return "void";
        } else error("No return type");
      }
      return typ;
    };

    function operation(store) {
      all_ws(store, "pea");
      var ret = _extends({}, EMPTY_OPERATION);
      while (true) {
        all_ws();
        if (consume(ID, "getter")) ret.getter = true;else if (consume(ID, "setter")) ret.setter = true;else if (consume(ID, "deleter")) ret.deleter = true;else break;
      }
      if (ret.getter || ret.setter || ret.deleter) {
        all_ws();
        ret.idlType = return_type();
        operation_rest(ret, store);
        return ret;
      }
      ret.idlType = return_type();
      all_ws();
      if (consume(ID, "iterator")) {
        all_ws();
        ret.type = "iterator";
        if (consume(ID, "object")) {
          ret.iteratorObject = "object";
        } else if (consume(OTHER, "=")) {
          all_ws();
          var name = consume(ID) || error("No right hand side in iterator");
          ret.iteratorObject = name.value;
        }
        all_ws();
        consume(OTHER, ";") || error("Unterminated iterator");
        return ret;
      } else {
        operation_rest(ret, store);
        return ret;
      }
    };

    function static_member(store) {
      all_ws(store, "pea");
      if (!consume(ID, "static")) return;
      all_ws();
      return noninherited_attribute(store, "static") || regular_operation(store, "static") || error("No body in static member");
    }

    function stringifier(store) {
      all_ws(store, "pea");
      if (!consume(ID, "stringifier")) return;
      all_ws();
      if (consume(OTHER, ";")) {
        return _extends({}, EMPTY_OPERATION, { stringifier: true });
      }
      return noninherited_attribute(store, "stringifier") || regular_operation(store, "stringifier") || error("Unterminated stringifier");
    }

    function identifiers(arr) {
      while (true) {
        all_ws();
        if (consume(OTHER, ",")) {
          all_ws();
          var name = consume(ID) || error("Trailing comma in identifiers list");
          arr.push(name.value);
        } else break;
      }
    };

    function iterable_type() {
      if (consume(ID, "iterable")) return "iterable";else if (consume(ID, "legacyiterable")) return "legacyiterable";else if (consume(ID, "maplike")) return "maplike";else if (consume(ID, "setlike")) return "setlike";else return;
    };

    function readonly_iterable_type() {
      if (consume(ID, "maplike")) return "maplike";else if (consume(ID, "setlike")) return "setlike";else return;
    };

    function iterable(store) {
      all_ws(store, "pea");
      var grabbed = [];
      var ret = { type: null, idlType: null, readonly: false };
      if (consume(ID, "readonly")) {
        ret.readonly = true;
        grabbed.push(last_token);
        var w = all_ws();
        if (w) grabbed.push(w);
      }
      var consumeItType = ret.readonly ? readonly_iterable_type : iterable_type;

      var ittype = consumeItType();
      if (!ittype) {
        tokens = grabbed.concat(tokens);
        return;
      }

      var secondTypeRequired = ittype === "maplike";
      var secondTypeAllowed = secondTypeRequired || ittype === "iterable";
      ret.type = ittype;
      if (ret.type !== 'maplike' && ret.type !== 'setlike') delete ret.readonly;
      all_ws();
      if (consume(OTHER, "<")) {
        ret.idlType = type_with_extended_attributes() || error("Error parsing " + ittype + " declaration");
        all_ws();
        if (secondTypeAllowed) {
          var type2 = null;
          if (consume(OTHER, ",")) {
            all_ws();
            type2 = type_with_extended_attributes();
            all_ws();
          }
          if (type2) ret.idlType = [ret.idlType, type2];else if (secondTypeRequired) error("Missing second type argument in " + ittype + " declaration");
        }
        if (!consume(OTHER, ">")) error("Unterminated " + ittype + " declaration");
        all_ws();
        if (!consume(OTHER, ";")) error("Missing semicolon after " + ittype + " declaration");
      } else error("Error parsing " + ittype + " declaration");

      return ret;
    };

    function interface_rest(isPartial, store) {
      all_ws();
      var name = consume(ID) || error("No name for interface");
      var mems = [];
      var ret = {
        type: "interface",
        name: isPartial ? name.value : sanitize_name(name.value, "interface"),
        partial: false,
        members: mems
      };
      if (!isPartial) ret.inheritance = inheritance() || null;
      all_ws();
      consume(OTHER, "{") || error("Bodyless interface");
      while (true) {
        all_ws(store ? mems : null);
        if (consume(OTHER, "}")) {
          all_ws();
          consume(OTHER, ";") || error("Missing semicolon after interface");
          return ret;
        }
        var ea = extended_attrs(store ? mems : null);
        all_ws();
        var cnt = const_(store ? mems : null);
        if (cnt) {
          cnt.extAttrs = ea;
          ret.members.push(cnt);
          continue;
        }
        var mem = opt.allowNestedTypedefs && typedef(store ? mems : null) || static_member(store ? mems : null) || stringifier(store ? mems : null) || iterable(store ? mems : null) || attribute(store ? mems : null) || operation(store ? mems : null) || error("Unknown member");
        mem.extAttrs = ea;
        ret.members.push(mem);
      }
    };

    function mixin_rest(isPartial, store) {
      all_ws();
      if (!consume(ID, "mixin")) return;
      all_ws();
      var name = consume(ID) || error("No name for interface mixin");
      var mems = [];
      var ret = {
        type: "interface mixin",
        name: isPartial ? name.value : sanitize_name(name.value, "interface mixin"),
        partial: false,
        members: mems
      };
      all_ws();
      consume(OTHER, "{") || error("Bodyless interface mixin");
      while (true) {
        all_ws(store ? mems : null);
        if (consume(OTHER, "}")) {
          all_ws();
          consume(OTHER, ";") || error("Missing semicolon after interface mixin");
          return ret;
        }
        var ea = extended_attrs(store ? mems : null);
        all_ws();
        var cnt = const_(store ? mems : null);
        if (cnt) {
          cnt.extAttrs = ea;
          ret.members.push(cnt);
          continue;
        }
        var mem = stringifier(store ? mems : null) || noninherited_attribute(store ? mems : null) || regular_operation(store ? mems : null) || error("Unknown member");
        mem.extAttrs = ea;
        ret.members.push(mem);
      }
    }

    function interface_(isPartial, store) {
      all_ws(isPartial ? null : store, "pea");
      if (!consume(ID, "interface")) return;
      return mixin_rest(isPartial, store) || interface_rest(isPartial, store) || error("Interface has no proper body");
    }

    function namespace(isPartial, store) {
      all_ws(isPartial ? null : store, "pea");
      if (!consume(ID, "namespace")) return;
      all_ws();
      var name = consume(ID) || error("No name for namespace");
      var mems = [];
      var ret = {
        type: "namespace",
        name: isPartial ? name.value : sanitize_name(name.value, "namespace"),
        partial: isPartial,
        members: mems
      };
      all_ws();
      consume(OTHER, "{") || error("Bodyless namespace");
      while (true) {
        all_ws(store ? mems : null);
        if (consume(OTHER, "}")) {
          all_ws();
          consume(OTHER, ";") || error("Missing semicolon after namespace");
          return ret;
        }
        var ea = extended_attrs(store ? mems : null);
        all_ws();
        var mem = noninherited_attribute(store ? mems : null) || regular_operation(store ? mems : null) || error("Unknown member");
        mem.extAttrs = ea;
        ret.members.push(mem);
      }
    }

    function noninherited_attribute(store, prefix) {
      var w = all_ws(store, "pea");
      var grabbed = [];
      var ret = {
        type: "attribute",
        "static": false,
        stringifier: false,
        inherit: false,
        readonly: false
      };
      if (prefix) {
        ret[prefix] = true;
      }
      if (w) grabbed.push(w);
      if (consume(ID, "readonly")) {
        ret.readonly = true;
        grabbed.push(last_token);
        var _w4 = all_ws();
        if (_w4) grabbed.push(_w4);
      }
      var rest = attribute_rest(ret);
      if (!rest) {
        tokens = grabbed.concat(tokens);
      }
      return rest;
    }

    function regular_operation(store, prefix) {
      all_ws(store, "pea");
      var ret = _extends({}, EMPTY_OPERATION);
      if (prefix) {
        ret[prefix] = true;
      }
      ret.idlType = return_type();
      return operation_rest(ret, store);
    }

    function partial(store) {
      all_ws(store, "pea");
      if (!consume(ID, "partial")) return;
      var thing = dictionary(true, store) || interface_(true, store) || namespace(true, store) || error("Partial doesn't apply to anything");
      thing.partial = true;
      return thing;
    };

    function dictionary(isPartial, store) {
      all_ws(isPartial ? null : store, "pea");
      if (!consume(ID, "dictionary")) return;
      all_ws();
      var name = consume(ID) || error("No name for dictionary");
      var mems = [];
      var ret = {
        type: "dictionary",
        name: isPartial ? name.value : sanitize_name(name.value, "dictionary"),
        partial: false,
        members: mems
      };
      if (!isPartial) ret.inheritance = inheritance() || null;
      all_ws();
      consume(OTHER, "{") || error("Bodyless dictionary");
      while (true) {
        all_ws(store ? mems : null);
        if (consume(OTHER, "}")) {
          all_ws();
          consume(OTHER, ";") || error("Missing semicolon after dictionary");
          return ret;
        }
        var ea = extended_attrs(store ? mems : null);
        all_ws(store ? mems : null, "pea");
        var required = consume(ID, "required");
        var typ = type_with_extended_attributes() || error("No type for dictionary member");
        all_ws();
        var _name = consume(ID) || error("No name for dictionary member");
        var dflt = default_();
        if (required && dflt) error("Required member must not have a default");
        var member = {
          type: "field",
          name: _name.value,
          required: !!required,
          idlType: typ,
          extAttrs: ea
        };
        if (typeof dflt !== "undefined") {
          member["default"] = dflt;
        }
        ret.members.push(member);
        all_ws();
        consume(OTHER, ";") || error("Unterminated dictionary member");
      }
    };

    function enum_(store) {
      all_ws(store, "pea");
      if (!consume(ID, "enum")) return;
      all_ws();
      var name = consume(ID) || error("No name for enum");
      var vals = [];
      var ret = {
        type: "enum",
        name: sanitize_name(name.value, "enum"),
        values: vals
      };
      all_ws();
      consume(OTHER, "{") || error("No curly for enum");
      var saw_comma = false;
      while (true) {
        all_ws(store ? vals : null);
        if (consume(OTHER, "}")) {
          all_ws();
          consume(OTHER, ";") || error("No semicolon after enum");
          return ret;
        }
        var val = consume(STR) || error("Unexpected value in enum");
        val.value = val.value.replace(/"/g, "");
        ret.values.push(val);
        all_ws(store ? vals : null);
        if (consume(OTHER, ",")) {
          if (store) vals.push({ type: "," });
          all_ws(store ? vals : null);
          saw_comma = true;
        } else {
          saw_comma = false;
        }
      }
    };

    function typedef(store) {
      all_ws(store, "pea");
      if (!consume(ID, "typedef")) return;
      var ret = {
        type: "typedef"
      };
      all_ws();
      ret.idlType = type_with_extended_attributes() || error("No type in typedef");
      all_ws();
      var name = consume(ID) || error("No name in typedef");
      ret.name = sanitize_name(name.value, "typedef");
      all_ws();
      consume(OTHER, ";") || error("Unterminated typedef");
      return ret;
    };

    function implements_(store) {
      all_ws(store, "pea");
      var target = consume(ID);
      if (!target) return;
      var w = all_ws();
      if (consume(ID, "implements")) {
        var ret = {
          type: "implements",
          target: target.value
        };
        all_ws();
        var imp = consume(ID) || error("Incomplete implements statement");
        ret["implements"] = imp.value;
        all_ws();
        consume(OTHER, ";") || error("No terminating ; for implements statement");
        return ret;
      } else {
        // rollback
        tokens.unshift(w);
        tokens.unshift(target);
      }
    };

    function includes(store) {
      all_ws(store, "pea");
      var target = consume(ID);
      if (!target) return;
      var w = all_ws();
      if (consume(ID, "includes")) {
        var ret = {
          type: "includes",
          target: target.value
        };
        all_ws();
        var imp = consume(ID) || error("Incomplete includes statement");
        ret["includes"] = imp.value;
        all_ws();
        consume(OTHER, ";") || error("No terminating ; for includes statement");
        return ret;
      } else {
        // rollback
        tokens.unshift(w);
        tokens.unshift(target);
      }
    };

    function definition(store) {
      return callback(store) || interface_(false, store) || partial(store) || dictionary(false, store) || enum_(store) || typedef(store) || implements_(store) || includes(store) || namespace(false, store);
    };

    function definitions(store) {
      if (!tokens.length) return [];
      var defs = [];
      while (true) {
        var ea = extended_attrs(store ? defs : null);
        var def = definition(store ? defs : null);
        if (!def) {
          if (ea.length) error("Stray extended attributes");
          break;
        }
        def.extAttrs = ea;
        defs.push(def);
      }
      return defs;
    };
    var res = definitions(opt.ws);
    if (tokens.length) error("Unrecognised tokens");
    return res;
  };

  var obj = {
    parse: function parse(str, opt) {
      if (!opt) opt = {};
      var tokens = tokenise(str);
      return _parse(tokens, opt);
    }
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = obj;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return obj;
    });
  } else {
    (self || window).WebIDL2 = obj;
  }
})();
