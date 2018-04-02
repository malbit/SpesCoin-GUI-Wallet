/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 1.2.2(5618dbdb4f72c31da0555b463daa3b053decf40a)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
!function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-languageserver-types/main", ["require", "exports"], e)
}(function (e, t) {
    var n;
    !function (e) {
        function t(e, t) {
            return {line: e, character: t}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && V.number(t.line) && V.number(t.character)
        }

        e.create = t, e.is = n
    }(n = t.Position || (t.Position = {}));
    var r;
    !function (e) {
        function t(e, t, r, i) {
            if (V.number(e) && V.number(t) && V.number(r) && V.number(i))return {
                start: n.create(e, t),
                end: n.create(r, i)
            };
            if (n.is(e) && n.is(t))return {start: e, end: t};
            throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + r + ", " + i + "]")
        }

        function r(e) {
            var t = e;
            return V.defined(t) && n.is(t.start) && n.is(t.end)
        }

        e.create = t, e.is = r
    }(r = t.Range || (t.Range = {}));
    var i;
    !function (e) {
        function t(e, t) {
            return {uri: e, range: t}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && r.is(t.range) && (V.string(t.uri) || V.undefined(t.uri))
        }

        e.create = t, e.is = n
    }(i = t.Location || (t.Location = {}));
    var o;
    !function (e) {
        e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4
    }(o = t.DiagnosticSeverity || (t.DiagnosticSeverity = {}));
    var a;
    !function (e) {
        function t(e, t, n, r, i) {
            var o = {range: e, message: t};
            return V.defined(n) && (o.severity = n), V.defined(r) && (o.code = r), V.defined(i) && (o.source = i), o
        }

        function n(e) {
            var t = e;
            return V.defined(t) && r.is(t.range) && V.string(t.message) && (V.number(t.severity) || V.undefined(t.severity)) && (V.number(t.code) || V.string(t.code) || V.undefined(t.code)) && (V.string(t.source) || V.undefined(t.source))
        }

        e.create = t, e.is = n
    }(a = t.Diagnostic || (t.Diagnostic = {}));
    var s;
    !function (e) {
        function t(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)n[r - 2] = arguments[r];
            var i = {title: e, command: t};
            return V.defined(n) && n.length > 0 && (i.arguments = n), i
        }

        function n(e) {
            var t = e;
            return V.defined(t) && V.string(t.title) && V.string(t.title)
        }

        e.create = t, e.is = n
    }(s = t.Command || (t.Command = {}));
    var c;
    !function (e) {
        function t(e, t) {
            return {range: e, newText: t}
        }

        function n(e, t) {
            return {range: {start: e, end: e}, newText: t}
        }

        function r(e) {
            return {range: e, newText: ""}
        }

        e.replace = t, e.insert = n, e.del = r
    }(c = t.TextEdit || (t.TextEdit = {}));
    var u;
    !function (e) {
        function t(e, t) {
            return {textDocument: e, edits: t}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && d.is(t.textDocument) && Array.isArray(t.edits)
        }

        e.create = t, e.is = n
    }(u = t.TextDocumentEdit || (t.TextDocumentEdit = {}));
    var l = function () {
        function e(e) {
            this.edits = e
        }

        return e.prototype.insert = function (e, t) {
            this.edits.push(c.insert(e, t))
        }, e.prototype.replace = function (e, t) {
            this.edits.push(c.replace(e, t))
        }, e.prototype["delete"] = function (e) {
            this.edits.push(c.del(e))
        }, e.prototype.add = function (e) {
            this.edits.push(e)
        }, e.prototype.all = function () {
            return this.edits
        }, e.prototype.clear = function () {
            this.edits.splice(0, this.edits.length)
        }, e
    }(), f = function () {
        function e(e) {
            var t = this;
            this._textEditChanges = Object.create(null), e ? (this._workspaceEdit = e, e.changes.forEach(function (e) {
                var n = new l(e.edits);
                t._textEditChanges[e.textDocument.uri] = n
            })) : this._workspaceEdit = {changes: []}
        }

        return Object.defineProperty(e.prototype, "edit", {
            get: function () {
                return this._workspaceEdit
            }, enumerable: !0, configurable: !0
        }), e.prototype.getTextEditChange = function (e) {
            if (d.is(e)) {
                var t = e, n = this._textEditChanges[t.uri];
                if (!n) {
                    var r = [], i = {textDocument: t, edits: r};
                    this._workspaceEdit.changes.push(i), n = new l(r), this._textEditChanges[t.uri] = n
                }
                return n
            }
            return this._textEditChanges[e]
        }, e
    }();
    t.WorkspaceChange = f;
    var p;
    !function (e) {
        function t(e) {
            return {uri: e}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && V.string(t.uri)
        }

        e.create = t, e.is = n
    }(p = t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {}));
    var d;
    !function (e) {
        function t(e, t) {
            return {uri: e, version: t}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && V.string(t.uri) && V.number(t.version)
        }

        e.create = t, e.is = n
    }(d = t.VersionedTextDocumentIdentifier || (t.VersionedTextDocumentIdentifier = {}));
    var h;
    !function (e) {
        function t(e, t, n, r) {
            return {uri: e, languageId: t, version: n, text: r}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && V.string(t.uri) && V.string(t.languageId) && V.number(t.version) && V.string(t.text)
        }

        e.create = t, e.is = n
    }(h = t.TextDocumentItem || (t.TextDocumentItem = {}));
    var m;
    !function (e) {
        e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18
    }(m = t.CompletionItemKind || (t.CompletionItemKind = {}));
    var g;
    !function (e) {
        e.PlainText = 1, e.Snippet = 2
    }(g = t.InsertTextFormat || (t.InsertTextFormat = {}));
    var v;
    !function (e) {
        function t(e) {
            return {label: e}
        }

        e.create = t
    }(v = t.CompletionItem || (t.CompletionItem = {}));
    var y;
    !function (e) {
        function t(e, t) {
            return {items: e ? e : [], isIncomplete: !!t}
        }

        e.create = t
    }(y = t.CompletionList || (t.CompletionList = {}));
    var x;
    !function (e) {
        function t(e) {
            return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        }

        e.fromPlainText = t
    }(x = t.MarkedString || (t.MarkedString = {}));
    var b;
    !function (e) {
        function t(e, t) {
            return t ? {label: e, documentation: t} : {label: e}
        }

        e.create = t
    }(b = t.ParameterInformation || (t.ParameterInformation = {}));
    var S;
    !function (e) {
        function t(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)n[r - 2] = arguments[r];
            var i = {label: e};
            return V.defined(t) && (i.documentation = t), V.defined(n) ? i.parameters = n : i.parameters = [], i
        }

        e.create = t
    }(S = t.SignatureInformation || (t.SignatureInformation = {}));
    var T;
    !function (e) {
        e.Text = 1, e.Read = 2, e.Write = 3
    }(T = t.DocumentHighlightKind || (t.DocumentHighlightKind = {}));
    var k;
    !function (e) {
        function t(e, t) {
            var n = {range: e};
            return V.number(t) && (n.kind = t), n
        }

        e.create = t
    }(k = t.DocumentHighlight || (t.DocumentHighlight = {}));
    var C;
    !function (e) {
        e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18
    }(C = t.SymbolKind || (t.SymbolKind = {}));
    var O;
    !function (e) {
        function t(e, t, n, r, i) {
            var o = {name: e, kind: t, location: {uri: r, range: n}};
            return i && (o.containerName = i), o
        }

        e.create = t
    }(O = t.SymbolInformation || (t.SymbolInformation = {}));
    var E;
    !function (e) {
        function t(e) {
            return {diagnostics: e}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && V.typedArray(t.diagnostics, a.is)
        }

        e.create = t, e.is = n
    }(E = t.CodeActionContext || (t.CodeActionContext = {}));
    var j;
    !function (e) {
        function t(e, t) {
            var n = {range: e};
            return V.defined(t) && (n.data = t), n
        }

        function n(e) {
            var t = e;
            return V.defined(t) && r.is(t.range) && (V.undefined(t.command) || s.is(t.command))
        }

        e.create = t, e.is = n
    }(j = t.CodeLens || (t.CodeLens = {}));
    var I;
    !function (e) {
        function t(e, t) {
            return {tabSize: e, insertSpaces: t}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && V.number(t.tabSize) && V["boolean"](t.insertSpaces)
        }

        e.create = t, e.is = n
    }(I = t.FormattingOptions || (t.FormattingOptions = {}));
    var w = function () {
        function e() {
        }

        return e
    }();
    t.DocumentLink = w, function (e) {
        function t(e, t) {
            return {range: e, target: t}
        }

        function n(e) {
            var t = e;
            return V.defined(t) && r.is(t.range) && (V.undefined(t.target) || V.string(t.target))
        }

        e.create = t, e.is = n
    }(w = t.DocumentLink || (t.DocumentLink = {})), t.DocumentLink = w, t.EOL = ["\n", "\r\n", "\r"];
    var A;
    !function (e) {
        function t(e, t, n, r) {
            return new F(e, t, n, r)
        }

        function n(e) {
            var t = e;
            return !!(V.defined(t) && V.string(t.uri) && (V.undefined(t.languageId) || V.string(t.languageId)) && V.number(t.lineCount) && V.func(t.getText) && V.func(t.positionAt) && V.func(t.offsetAt))
        }

        e.create = t, e.is = n
    }(A = t.TextDocument || (t.TextDocument = {}));
    var P;
    !function (e) {
        e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3
    }(P = t.TextDocumentSaveReason || (t.TextDocumentSaveReason = {}));
    var V, F = function () {
        function e(e, t, n, r) {
            this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = null
        }

        return Object.defineProperty(e.prototype, "uri", {
            get: function () {
                return this._uri
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "languageId", {
            get: function () {
                return this._languageId
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "version", {
            get: function () {
                return this._version
            }, enumerable: !0, configurable: !0
        }), e.prototype.getText = function () {
            return this._content
        }, e.prototype.update = function (e, t) {
            this._content = e.text, this._version = t, this._lineOffsets = null
        }, e.prototype.getLineOffsets = function () {
            if (null === this._lineOffsets) {
                for (var e = [], t = this._content, n = !0, r = 0; r < t.length; r++) {
                    n && (e.push(r), n = !1);
                    var i = t.charAt(r);
                    n = "\r" === i || "\n" === i, "\r" === i && r + 1 < t.length && "\n" === t.charAt(r + 1) && r++
                }
                n && t.length > 0 && e.push(t.length), this._lineOffsets = e
            }
            return this._lineOffsets
        }, e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(), r = 0, i = t.length;
            if (0 === i)return n.create(0, e);
            for (; r < i;) {
                var o = Math.floor((r + i) / 2);
                t[o] > e ? i = o : r = o + 1
            }
            var a = r - 1;
            return n.create(a, e - t[a])
        }, e.prototype.offsetAt = function (e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length)return this._content.length;
            if (e.line < 0)return 0;
            var n = t[e.line], r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n)
        }, Object.defineProperty(e.prototype, "lineCount", {
            get: function () {
                return this.getLineOffsets().length
            }, enumerable: !0, configurable: !0
        }), e
    }();
    !function (e) {
        function t(e) {
            return "undefined" != typeof e
        }

        function n(e) {
            return "undefined" == typeof e
        }

        function r(e) {
            return e === !0 || e === !1
        }

        function i(e) {
            return "[object String]" === c.call(e)
        }

        function o(e) {
            return "[object Number]" === c.call(e)
        }

        function a(e) {
            return "[object Function]" === c.call(e)
        }

        function s(e, t) {
            return Array.isArray(e) && e.every(t)
        }

        var c = Object.prototype.toString;
        e.defined = t, e.undefined = n, e["boolean"] = r, e.string = i, e.number = o, e.func = a, e.typedArray = s
    }(V || (V = {}))
}), define("vscode-languageserver-types", ["vscode-languageserver-types/main"], function (e) {
    return e
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-nls/vscode-nls", ["require", "exports"], e)
}(function (e, t) {
    function n(e, t) {
        var n;
        return n = 0 === t.length ? e : e.replace(/\{(\d+)\}/g, function (e, n) {
            var r = n[0];
            return "undefined" != typeof t[r] ? t[r] : e
        })
    }

    function r(e, t) {
        for (var r = [], i = 2; i < arguments.length; i++)r[i - 2] = arguments[i];
        return n(t, r)
    }

    function i(e) {
        return r
    }

    function o(e) {
        return i
    }

    t.loadMessageBundle = i, t.config = o
}), define("vscode-nls", ["vscode-nls/vscode-nls"], function (e) {
    return e
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("jsonc-parser/main", ["require", "exports", "vscode-nls"], e)
}(function (e, t) {
    function n(e, t) {
        function n(t, n) {
            for (var r = 0, i = 0; r < t || !n;) {
                var o = e.charCodeAt(p);
                if (o >= 48 && o <= 57)i = 16 * i + o - 48; else if (o >= 65 && o <= 70)i = 16 * i + o - 65 + 10; else {
                    if (!(o >= 97 && o <= 102))break;
                    i = 16 * i + o - 97 + 10
                }
                p++, r++
            }
            return r < t && (i = -1), i
        }

        function a(e) {
            p = e, h = "", g = 0, v = y.Unknown, x = m.None
        }

        function s() {
            var t = p;
            if (48 === e.charCodeAt(p))p++; else for (p++; p < e.length && o(e.charCodeAt(p));)p++;
            if (p < e.length && 46 === e.charCodeAt(p)) {
                if (p++, !(p < e.length && o(e.charCodeAt(p))))return x = m.UnexpectedEndOfNumber, e.substring(t, p);
                for (p++; p < e.length && o(e.charCodeAt(p));)p++
            }
            var n = p;
            if (p < e.length && (69 === e.charCodeAt(p) || 101 === e.charCodeAt(p)))if (p++, (p < e.length && 43 === e.charCodeAt(p) || 45 === e.charCodeAt(p)) && p++, p < e.length && o(e.charCodeAt(p))) {
                for (p++; p < e.length && o(e.charCodeAt(p));)p++;
                n = p
            } else x = m.UnexpectedEndOfNumber;
            return e.substring(t, n)
        }

        function c() {
            for (var t = "", r = p; ;) {
                if (p >= d) {
                    t += e.substring(r, p), x = m.UnexpectedEndOfString;
                    break
                }
                var o = e.charCodeAt(p);
                if (34 === o) {
                    t += e.substring(r, p), p++;
                    break
                }
                if (92 !== o) {
                    if (i(o)) {
                        t += e.substring(r, p), x = m.UnexpectedEndOfString;
                        break
                    }
                    p++
                } else {
                    if (t += e.substring(r, p), p++, p >= d) {
                        x = m.UnexpectedEndOfString;
                        break
                    }
                    switch (o = e.charCodeAt(p++)) {
                        case 34:
                            t += '"';
                            break;
                        case 92:
                            t += "\\";
                            break;
                        case 47:
                            t += "/";
                            break;
                        case 98:
                            t += "\b";
                            break;
                        case 102:
                            t += "\f";
                            break;
                        case 110:
                            t += "\n";
                            break;
                        case 114:
                            t += "\r";
                            break;
                        case 116:
                            t += "\t";
                            break;
                        case 117:
                            var a = n(4, !0);
                            a >= 0 ? t += String.fromCharCode(a) : x = m.InvalidUnicode;
                            break;
                        default:
                            x = m.InvalidEscapeCharacter
                    }
                    r = p
                }
            }
            return t
        }

        function u() {
            if (h = "", x = m.None, g = p, p >= d)return g = d, v = y.EOF;
            var t = e.charCodeAt(p);
            if (r(t)) {
                do p++, h += String.fromCharCode(t), t = e.charCodeAt(p); while (r(t));
                return v = y.Trivia
            }
            if (i(t))return p++, h += String.fromCharCode(t), 13 === t && 10 === e.charCodeAt(p) && (p++, h += "\n"), v = y.LineBreakTrivia;
            switch (t) {
                case 123:
                    return p++, v = y.OpenBraceToken;
                case 125:
                    return p++, v = y.CloseBraceToken;
                case 91:
                    return p++, v = y.OpenBracketToken;
                case 93:
                    return p++, v = y.CloseBracketToken;
                case 58:
                    return p++, v = y.ColonToken;
                case 44:
                    return p++, v = y.CommaToken;
                case 34:
                    return p++, h = c(), v = y.StringLiteral;
                case 47:
                    var n = p - 1;
                    if (47 === e.charCodeAt(p + 1)) {
                        for (p += 2; p < d && !i(e.charCodeAt(p));)p++;
                        return h = e.substring(n, p), v = y.LineCommentTrivia
                    }
                    if (42 === e.charCodeAt(p + 1)) {
                        p += 2;
                        for (var a = d - 1, u = !1; p < a;) {
                            var f = e.charCodeAt(p);
                            if (42 === f && 47 === e.charCodeAt(p + 1)) {
                                p += 2, u = !0;
                                break
                            }
                            p++
                        }
                        return u || (p++, x = m.UnexpectedEndOfComment), h = e.substring(n, p), v = y.BlockCommentTrivia
                    }
                    return h += String.fromCharCode(t), p++, v = y.Unknown;
                case 45:
                    if (h += String.fromCharCode(t), p++, p === d || !o(e.charCodeAt(p)))return v = y.Unknown;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    return h += s(), v = y.NumericLiteral;
                default:
                    for (; p < d && l(t);)p++, t = e.charCodeAt(p);
                    if (g !== p) {
                        switch (h = e.substring(g, p)) {
                            case"true":
                                return v = y.TrueKeyword;
                            case"false":
                                return v = y.FalseKeyword;
                            case"null":
                                return v = y.NullKeyword
                        }
                        return v = y.Unknown
                    }
                    return h += String.fromCharCode(t), p++, v = y.Unknown
            }
        }

        function l(e) {
            if (r(e) || i(e))return !1;
            switch (e) {
                case 125:
                case 93:
                case 123:
                case 91:
                case 34:
                case 58:
                case 44:
                    return !1
            }
            return !0
        }

        function f() {
            var e;
            do e = u(); while (e >= y.LineCommentTrivia && e <= y.Trivia);
            return e
        }

        void 0 === t && (t = !1);
        var p = 0, d = e.length, h = "", g = 0, v = y.Unknown, x = m.None;
        return {
            setPosition: a, getPosition: function () {
                return p
            }, scan: t ? f : u, getToken: function () {
                return v
            }, getTokenValue: function () {
                return h
            }, getTokenOffset: function () {
                return g
            }, getTokenLength: function () {
                return p - g
            }, getTokenError: function () {
                return x
            }
        }
    }

    function r(e) {
        return 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || 5760 === e || e >= 8192 && e <= 8203 || 8239 === e || 8287 === e || 12288 === e || 65279 === e
    }

    function i(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e
    }

    function o(e) {
        return e >= 48 && e <= 57
    }

    function a(e, t) {
        var r, i, o = n(e), a = [], s = 0;
        do switch (i = o.getPosition(), r = o.scan()) {
            case y.LineCommentTrivia:
            case y.BlockCommentTrivia:
            case y.EOF:
                s !== i && a.push(e.substring(s, i)), void 0 !== t && a.push(o.getTokenValue().replace(/[^\r\n]/g, t)), s = o.getPosition()
        } while (r !== y.EOF);
        return a.join("")
    }

    function s(e) {
        switch (e) {
            case x.InvalidSymbol:
                return v("error.invalidSymbol", "Invalid symbol");
            case x.InvalidNumberFormat:
                return v("error.invalidNumberFormat", "Invalid number format");
            case x.PropertyNameExpected:
                return v("error.propertyNameExpected", "Property name expected");
            case x.ValueExpected:
                return v("error.valueExpected", "Value expected");
            case x.ColonExpected:
                return v("error.colonExpected", "Colon expected");
            case x.CommaExpected:
                return v("error.commaExpected", "Comma expected");
            case x.CloseBraceExpected:
                return v("error.closeBraceExpected", "Closing brace expected");
            case x.CloseBracketExpected:
                return v("error.closeBracketExpected", "Closing bracket expected");
            case x.EndOfFileExpected:
                return v("error.endOfFileExpected", "End of file expected");
            default:
                return ""
        }
    }

    function c(e) {
        switch (typeof e) {
            case"boolean":
                return "boolean";
            case"number":
                return "number";
            case"string":
                return "string";
            default:
                return "null"
        }
    }

    function u(e, t) {
        function n(e, t, n, r) {
            a.value = e, a.offset = t, a.length = n, a.type = r, a.columnOffset = void 0, o = a
        }

        var r = [], i = new Object, o = void 0, a = {
            value: void 0,
            offset: void 0,
            length: void 0,
            type: void 0
        }, s = !1;
        try {
            h(e, {
                onObjectBegin: function (e, n) {
                    if (t <= e)throw i;
                    o = void 0, s = t > e, r.push("")
                }, onObjectProperty: function (e, o, a) {
                    if (t < o)throw i;
                    if (n(e, o, a, "property"), r[r.length - 1] = e, t <= o + a)throw i
                }, onObjectEnd: function (e, n) {
                    if (t <= e)throw i;
                    o = void 0, r.pop()
                }, onArrayBegin: function (e, n) {
                    if (t <= e)throw i;
                    o = void 0, r.push(0)
                }, onArrayEnd: function (e, n) {
                    if (t <= e)throw i;
                    o = void 0, r.pop()
                }, onLiteralValue: function (e, r, o) {
                    if (t < r)throw i;
                    if (n(e, r, o, c(e)), t <= r + o)throw i
                }, onSeparator: function (e, n, a) {
                    if (t <= n)throw i;
                    if (":" === e && "property" === o.type)o.columnOffset = n, s = !1, o = void 0; else if ("," === e) {
                        var c = r[r.length - 1];
                        "number" == typeof c ? r[r.length - 1] = c + 1 : (s = !0, r[r.length - 1] = ""), o = void 0
                    }
                }
            })
        } catch (u) {
            if (u !== i)throw u
        }
        return "" === r[r.length - 1] && r.pop(), {
            path: r, previousNode: o, isAtPropertyKey: s, matches: function (e) {
                for (var t = 0, n = 0; t < e.length && n < r.length; n++)if (e[t] === r[n] || "*" === e[t])t++; else if ("**" !== e[t])return !1;
                return t === e.length
            }
        }
    }

    function l(e, t, n) {
        function r(e) {
            Array.isArray(o) ? o.push(e) : i && (o[i] = e)
        }

        void 0 === t && (t = []);
        var i = null, o = [], a = [], s = {
            onObjectBegin: function () {
                var e = {};
                r(e), a.push(o), o = e, i = null
            }, onObjectProperty: function (e) {
                i = e
            }, onObjectEnd: function () {
                o = a.pop()
            }, onArrayBegin: function () {
                var e = [];
                r(e), a.push(o), o = e, i = null
            }, onArrayEnd: function () {
                o = a.pop()
            }, onLiteralValue: r, onError: function (e) {
                t.push({error: e})
            }
        };
        return h(e, s, n), o[0]
    }

    function f(e, t, n) {
        function r(e) {
            "property" === o.type && (o.length = e - o.offset, o = o.parent)
        }

        function i(e) {
            return o.children.push(e), e
        }

        void 0 === t && (t = []);
        var o = {type: "array", offset: -1, length: -1, children: []}, a = {
            onObjectBegin: function (e) {
                o = i({type: "object", offset: e, length: -1, parent: o, children: []})
            }, onObjectProperty: function (e, t, n) {
                o = i({type: "property", offset: t, length: -1, parent: o, children: []}), o.children.push({
                    type: "string",
                    value: e,
                    offset: t,
                    length: n,
                    parent: o
                })
            }, onObjectEnd: function (e, t) {
                o.length = e + t - o.offset, o = o.parent, r(e + t)
            }, onArrayBegin: function (e, t) {
                o = i({type: "array", offset: e, length: -1, parent: o, children: []})
            }, onArrayEnd: function (e, t) {
                o.length = e + t - o.offset, o = o.parent, r(e + t)
            }, onLiteralValue: function (e, t, n) {
                i({type: c(e), offset: t, length: n, parent: o, value: e}), r(t + n)
            }, onSeparator: function (e, t, n) {
                "property" === o.type && (":" === e ? o.columnOffset = t : "," === e && r(t))
            }, onError: function (e) {
                t.push({error: e})
            }
        };
        h(e, a, n);
        var s = o.children[0];
        return s && delete s.parent, s
    }

    function p(e, t) {
        if (e) {
            for (var n = e, r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                if ("string" == typeof o) {
                    if ("object" !== n.type)return;
                    for (var a = !1, s = 0, c = n.children; s < c.length; s++) {
                        var u = c[s];
                        if (u.children[0].value === o) {
                            n = u.children[1], a = !0;
                            break
                        }
                    }
                    if (!a)return
                } else {
                    var l = o;
                    if ("array" !== n.type || l < 0 || l >= n.children.length)return;
                    n = n.children[l]
                }
            }
            return n
        }
    }

    function d(e) {
        if ("array" === e.type)return e.children.map(d);
        if ("object" === e.type) {
            for (var t = {}, n = 0, r = e.children; n < r.length; n++) {
                var i = r[n];
                t[i.children[0].value] = d(i.children[1])
            }
            return t
        }
        return e.value
    }

    function h(e, t, r) {
        function i(e) {
            return e ? function () {
                return e(h.getTokenOffset(), h.getTokenLength())
            } : function () {
                return !0
            }
        }

        function o(e) {
            return e ? function (t) {
                return e(t, h.getTokenOffset(), h.getTokenLength())
            } : function () {
                return !0
            }
        }

        function a() {
            for (; ;) {
                var e = h.scan();
                switch (e) {
                    case y.LineCommentTrivia:
                    case y.BlockCommentTrivia:
                        O && s(x.InvalidSymbol);
                        break;
                    case y.Unknown:
                        s(x.InvalidSymbol);
                        break;
                    case y.Trivia:
                    case y.LineBreakTrivia:
                        break;
                    default:
                        return e
                }
            }
        }

        function s(e, t, n) {
            if (void 0 === t && (t = []), void 0 === n && (n = []), C(e), t.length + n.length > 0)for (var r = h.getToken(); r !== y.EOF;) {
                if (t.indexOf(r) !== -1) {
                    a();
                    break
                }
                if (n.indexOf(r) !== -1)break;
                r = a()
            }
        }

        function c(e) {
            var t = h.getTokenValue();
            return e ? T(t) : g(t), a(), !0
        }

        function u() {
            switch (h.getToken()) {
                case y.NumericLiteral:
                    var e = 0;
                    try {
                        e = JSON.parse(h.getTokenValue()), "number" != typeof e && (s(x.InvalidNumberFormat), e = 0)
                    } catch (t) {
                        s(x.InvalidNumberFormat)
                    }
                    T(e);
                    break;
                case y.NullKeyword:
                    T(null);
                    break;
                case y.TrueKeyword:
                    T(!0);
                    break;
                case y.FalseKeyword:
                    T(!1);
                    break;
                default:
                    return !1
            }
            return a(), !0
        }

        function l() {
            return h.getToken() !== y.StringLiteral ? (s(x.PropertyNameExpected, [], [y.CloseBraceToken, y.CommaToken]), !1) : (c(!1), h.getToken() === y.ColonToken ? (k(":"), a(), d() || s(x.ValueExpected, [], [y.CloseBraceToken, y.CommaToken])) : s(x.ColonExpected, [], [y.CloseBraceToken, y.CommaToken]), !0)
        }

        function f() {
            m(), a();
            for (var e = !1; h.getToken() !== y.CloseBraceToken && h.getToken() !== y.EOF;)h.getToken() === y.CommaToken ? (e || s(x.ValueExpected, [], []), k(","), a()) : e && s(x.CommaExpected, [], []), l() || s(x.ValueExpected, [], [y.CloseBraceToken, y.CommaToken]), e = !0;
            return v(), h.getToken() !== y.CloseBraceToken ? s(x.CloseBraceExpected, [y.CloseBraceToken], []) : a(), !0
        }

        function p() {
            b(), a();
            for (var e = !1; h.getToken() !== y.CloseBracketToken && h.getToken() !== y.EOF;)h.getToken() === y.CommaToken ? (e || s(x.ValueExpected, [], []), k(","), a()) : e && s(x.CommaExpected, [], []), d() || s(x.ValueExpected, [], [y.CloseBracketToken, y.CommaToken]), e = !0;
            return S(), h.getToken() !== y.CloseBracketToken ? s(x.CloseBracketExpected, [y.CloseBracketToken], []) : a(), !0
        }

        function d() {
            switch (h.getToken()) {
                case y.OpenBracketToken:
                    return p();
                case y.OpenBraceToken:
                    return f();
                case y.StringLiteral:
                    return c(!0);
                default:
                    return u()
            }
        }

        var h = n(e, !1), m = i(t.onObjectBegin), g = o(t.onObjectProperty), v = i(t.onObjectEnd), b = i(t.onArrayBegin), S = i(t.onArrayEnd), T = o(t.onLiteralValue), k = o(t.onSeparator), C = o(t.onError), O = r && r.disallowComments;
        return a(), h.getToken() === y.EOF || (d() ? (h.getToken() !== y.EOF && s(x.EndOfFileExpected, [], []), !0) : (s(x.ValueExpected, [], []), !1))
    }

    var m, g = e("vscode-nls"), v = g.loadMessageBundle();
    !function (e) {
        e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter"
    }(m = t.ScanError || (t.ScanError = {}));
    var y;
    !function (e) {
        e[e.Unknown = 0] = "Unknown", e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.EOF = 16] = "EOF"
    }(y = t.SyntaxKind || (t.SyntaxKind = {})), t.createScanner = n, t.stripComments = a;
    var x;
    !function (e) {
        e[e.InvalidSymbol = 0] = "InvalidSymbol", e[e.InvalidNumberFormat = 1] = "InvalidNumberFormat", e[e.PropertyNameExpected = 2] = "PropertyNameExpected", e[e.ValueExpected = 3] = "ValueExpected", e[e.ColonExpected = 4] = "ColonExpected", e[e.CommaExpected = 5] = "CommaExpected", e[e.CloseBraceExpected = 6] = "CloseBraceExpected", e[e.CloseBracketExpected = 7] = "CloseBracketExpected", e[e.EndOfFileExpected = 8] = "EndOfFileExpected"
    }(x = t.ParseErrorCode || (t.ParseErrorCode = {})), t.getParseErrorMessage = s, t.getLocation = u, t.parse = l, t.parseTree = f, t.findNodeAtLocation = p, t.getNodeValue = d, t.visit = h
}), define("jsonc-parser", ["jsonc-parser/main"], function (e) {
    return e
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/utils/json", ["require", "exports"], e)
}(function (e, t) {
    function n(e, t, r) {
        if (null !== e && "object" == typeof e) {
            var i = t + "\t";
            if (Array.isArray(e)) {
                if (0 === e.length)return "[]";
                for (var o = "[\n", a = 0; a < e.length; a++)o += i + n(e[a], i, r), a < e.length - 1 && (o += ","), o += "\n";
                return o += t + "]"
            }
            var s = Object.keys(e);
            if (0 === s.length)return "{}";
            for (var o = "{\n", a = 0; a < s.length; a++) {
                var c = s[a];
                o += i + JSON.stringify(c) + ": " + n(e[c], i, r), a < s.length - 1 && (o += ","), o += "\n"
            }
            return o += t + "}"
        }
        return r(e)
    }

    t.stringifyObject = n
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/services/jsonCompletion", ["require", "exports", "jsonc-parser", "../utils/json", "vscode-languageserver-types", "vscode-nls"], e)
}(function (e, t) {
    var n = e("jsonc-parser"), r = e("../utils/json"), i = e("vscode-languageserver-types"), o = e("vscode-nls"), a = o.loadMessageBundle(), s = function () {
        function e(e, t, n) {
            void 0 === t && (t = []), this.templateVarIdCounter = 0, this.schemaService = e, this.contributions = t, this.promise = n || Promise
        }

        return e.prototype.doResolve = function (e) {
            for (var t = this.contributions.length - 1; t >= 0; t--)if (this.contributions[t].resolveCompletion) {
                var n = this.contributions[t].resolveCompletion(e);
                if (n)return n
            }
            return this.promise.resolve(e)
        }, e.prototype.doComplete = function (e, t, n) {
            var r = this, o = {items: [], isIncomplete: !1}, a = e.offsetAt(t), s = n.getNodeFromOffsetEndInclusive(a);
            if (this.isInComment(e, s ? s.start : 0, a))return Promise.resolve(o);
            var c = this.getCurrentWord(e, a), u = null;
            u = !s || "string" !== s.type && "number" !== s.type && "boolean" !== s.type && "null" !== s.type ? i.Range.create(e.positionAt(a - c.length), t) : i.Range.create(e.positionAt(s.start), e.positionAt(s.end));
            var l = {}, f = {
                add: function (e) {
                    var t = l[e.label];
                    t ? t.documentation || (t.documentation = e.documentation) : (l[e.label] = e, u && (e.textEdit = i.TextEdit.replace(u, e.insertText)), o.items.push(e))
                }, setAsIncomplete: function () {
                    o.isIncomplete = !0
                }, error: function (e) {
                    console.error(e)
                }, log: function (e) {
                    console.log(e)
                }, getNumberOfProposals: function () {
                    return o.items.length
                }
            };
            return this.schemaService.getSchemaForResource(e.uri, n).then(function (t) {
                var p = [], d = !0, h = "", m = null;
                if (s && "string" === s.type) {
                    var g = s;
                    g.isKey && (d = !(s.parent && s.parent.value), m = s.parent ? s.parent : null, h = e.getText().substring(s.start + 1, s.end - 1), s.parent && (s = s.parent.parent))
                }
                if (s && "object" === s.type) {
                    if (s.start === a)return o;
                    var v = s.properties;
                    v.forEach(function (e) {
                        m && m === e || (l[e.key.value] = i.CompletionItem.create("__"))
                    });
                    var y = "";
                    d && (y = r.evaluateSeparatorAfter(e, e.offsetAt(u.end))), t ? r.getPropertyCompletions(t, n, s, d, y, f) : r.getSchemaLessPropertyCompletions(n, s, h, f);
                    var x = s.getPath();
                    r.contributions.forEach(function (t) {
                        var n = t.collectPropertyCompletions(e.uri, x, c, d, "" === y, f);
                        n && p.push(n)
                    }), !t && c.length > 0 && '"' !== e.getText().charAt(a - c.length - 1) && f.add({
                        kind: i.CompletionItemKind.Property,
                        label: r.getLabelForValue(c),
                        insertText: r.getInsertTextForProperty(c, null, !1, y),
                        insertTextFormat: i.InsertTextFormat.Snippet,
                        documentation: ""
                    })
                }
                var b = a;
                !s || "string" !== s.type && "number" !== s.type && "boolean" !== s.type && "null" !== s.type || (b = s.end, s = s.parent);
                var S = "";
                s && (S = r.evaluateSeparatorAfter(e, b));
                var T = {};
                if (t ? r.getValueCompletions(t, n, s, a, S, f, T) : r.getSchemaLessValueCompletions(n, s, a, S, e, f), s) {
                    if ("property" === s.type && a > s.colonOffset) {
                        var k = s.key.value, C = s.value;
                        if (!C || a <= C.end) {
                            var O = s.parent.getPath();
                            r.contributions.forEach(function (t) {
                                var n = t.collectValueCompletions(e.uri, O, k, f);
                                n && p.push(n)
                            })
                        }
                    }
                } else r.contributions.forEach(function (t) {
                    var n = t.collectDefaultCompletions(e.uri, f);
                    n && p.push(n)
                });
                return r.promise.all(p).then(function () {
                    return 0 === f.getNumberOfProposals() && r.addFillerValueCompletions(T, S, f), o
                })
            })
        }, e.prototype.getPropertyCompletions = function (e, t, n, r, o, a) {
            var s = this, c = [];
            t.validate(e.schema, c, n.start), c.forEach(function (e) {
                if (e.node === n && !e.inverted) {
                    var t = e.schema.properties;
                    t && Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        n.deprecationMessage || a.add({
                            kind: i.CompletionItemKind.Property,
                            label: e,
                            insertText: s.getInsertTextForProperty(e, n, r, o),
                            insertTextFormat: i.InsertTextFormat.Snippet,
                            filterText: s.getFilterTextForValue(e),
                            documentation: n.description || ""
                        })
                    })
                }
            })
        }, e.prototype.getSchemaLessPropertyCompletions = function (e, t, n, r) {
            var o = this, a = function (e) {
                e.properties.forEach(function (e) {
                    var t = e.key.value;
                    r.add({
                        kind: i.CompletionItemKind.Property,
                        label: t,
                        insertText: o.getInsertTextForValue(t, ""),
                        insertTextFormat: i.InsertTextFormat.Snippet,
                        filterText: o.getFilterTextForValue(t),
                        documentation: ""
                    })
                })
            };
            if (t.parent)if ("property" === t.parent.type) {
                var s = t.parent.key.value;
                e.visit(function (e) {
                    var n = e;
                    return "property" === e.type && e !== t.parent && n.key.value === s && n.value && "object" === n.value.type && a(n.value), !0
                })
            } else"array" === t.parent.type && t.parent.items.forEach(function (e) {
                "object" === e.type && e !== t && a(e)
            }); else"object" === t.type && r.add({
                kind: i.CompletionItemKind.Property,
                label: "$schema",
                insertText: this.getInsertTextForProperty("$schema", null, !0, ""),
                insertTextFormat: i.InsertTextFormat.Snippet,
                documentation: "",
                filterText: this.getFilterTextForValue("$schema")
            })
        }, e.prototype.getSchemaLessValueCompletions = function (e, t, n, r, o, a) {
            var s = this, c = function (e) {
                e.parent.contains(n, !0) || a.add({
                    kind: s.getSuggestionKind(e.type),
                    label: s.getLabelTextForMatchingNode(e, o),
                    insertText: s.getInsertTextForMatchingNode(e, o, r),
                    insertTextFormat: i.InsertTextFormat.Snippet,
                    documentation: ""
                }), "boolean" === e.type && s.addBooleanValueCompletion(!e.getValue(), r, a)
            };
            if (t) {
                if ("property" === t.type) {
                    var u = t;
                    if (n > u.colonOffset) {
                        var l = u.value;
                        if (l && (n > l.end || "object" === l.type || "array" === l.type))return;
                        var f = u.key.value;
                        e.visit(function (e) {
                            var t = e;
                            return "property" === e.type && t.key.value === f && t.value && c(t.value), !0
                        }), "$schema" === f && t.parent && !t.parent.parent && this.addDollarSchemaCompletions(r, a)
                    }
                }
                if ("array" === t.type)if (t.parent && "property" === t.parent.type) {
                    var p = t.parent.key.value;
                    e.visit(function (e) {
                        var t = e;
                        return "property" === e.type && t.key.value === p && t.value && "array" === t.value.type && t.value.items.forEach(function (e) {
                            c(e)
                        }), !0
                    })
                } else t.items.forEach(function (e) {
                    c(e)
                })
            } else a.add({
                kind: this.getSuggestionKind("object"),
                label: "Empty object",
                insertText: this.getInsertTextForValue({}, ""),
                insertTextFormat: i.InsertTextFormat.Snippet,
                documentation: ""
            }), a.add({
                kind: this.getSuggestionKind("array"),
                label: "Empty array",
                insertText: this.getInsertTextForValue([], ""),
                insertTextFormat: i.InsertTextFormat.Snippet,
                documentation: ""
            })
        }, e.prototype.getValueCompletions = function (e, t, n, r, i, o, a) {
            var s = this;
            if (n) {
                var c = null;
                if ("property" === n.type && r > n.colonOffset) {
                    var u = n.value;
                    if (u && r > u.end)return;
                    c = n.key.value, n = n.parent
                }
                if (n && (null !== c || "array" === n.type)) {
                    var l = [];
                    t.validate(e.schema, l, n.start), l.forEach(function (e) {
                        if (e.node === n && !e.inverted && e.schema && (e.schema.items && s.addSchemaValueCompletions(e.schema.items, i, o, a), e.schema.properties)) {
                            var t = e.schema.properties[c];
                            t && s.addSchemaValueCompletions(t, i, o, a)
                        }
                    }), "$schema" !== c || n.parent || this.addDollarSchemaCompletions(i, o), a["boolean"] && (this.addBooleanValueCompletion(!0, i, o), this.addBooleanValueCompletion(!1, i, o)), a["null"] && this.addNullValueCompletion(i, o)
                }
            } else this.addSchemaValueCompletions(e.schema, "", o, a)
        }, e.prototype.addSchemaValueCompletions = function (e, t, n, r) {
            var i = this;
            this.addDefaultValueCompletions(e, t, n), this.addEnumValueCompletions(e, t, n), this.collectTypes(e, r), Array.isArray(e.allOf) && e.allOf.forEach(function (e) {
                return i.addSchemaValueCompletions(e, t, n, r)
            }), Array.isArray(e.anyOf) && e.anyOf.forEach(function (e) {
                return i.addSchemaValueCompletions(e, t, n, r)
            }), Array.isArray(e.oneOf) && e.oneOf.forEach(function (e) {
                return i.addSchemaValueCompletions(e, t, n, r)
            })
        }, e.prototype.addDefaultValueCompletions = function (e, t, n, r) {
            var o = this;
            void 0 === r && (r = 0);
            var s = !1;
            if (e["default"]) {
                for (var c = e.type, u = e["default"], l = r; l > 0; l--)u = [u], c = "array";
                n.add({
                    kind: this.getSuggestionKind(c),
                    label: this.getLabelForValue(u),
                    insertText: this.getInsertTextForValue(u, t),
                    insertTextFormat: i.InsertTextFormat.Snippet,
                    detail: a("json.suggest.default", "Default value")
                }), s = !0
            }
            Array.isArray(e.defaultSnippets) && e.defaultSnippets.forEach(function (a) {
                var c, u = e.type, l = a.body, f = a.label;
                if (l) {
                    for (var p = e.type, d = r; d > 0; d--)l = [l], p = "array";
                    c = o.getInsertTextForSnippetValue(l, t), f = f || o.getLabelForSnippetValue(l)
                } else if (a.bodyText) {
                    for (var h = "", m = "", g = "", d = r; d > 0; d--)h = h + g + "[\n", m = m + "\n" + g + "]", g += "\t", u = "array";
                    c = h + g + a.bodyText.split("\n").join("\n" + g) + m + t, f = f || c
                }
                n.add({
                    kind: o.getSuggestionKind(u),
                    label: f,
                    documentation: a.description,
                    insertText: c,
                    insertTextFormat: i.InsertTextFormat.Snippet,
                    filterText: c
                }), s = !0
            }), s || !e.items || Array.isArray(e.items) || this.addDefaultValueCompletions(e.items, t, n, r + 1)
        }, e.prototype.addEnumValueCompletions = function (e, t, n) {
            if (Array.isArray(e["enum"]))for (var r = 0, o = e["enum"].length; r < o; r++) {
                var a = e["enum"][r], s = e.description;
                e.enumDescriptions && r < e.enumDescriptions.length && (s = e.enumDescriptions[r]), n.add({
                    kind: this.getSuggestionKind(e.type),
                    label: this.getLabelForValue(a),
                    insertText: this.getInsertTextForValue(a, t),
                    insertTextFormat: i.InsertTextFormat.Snippet,
                    documentation: s
                })
            }
        }, e.prototype.collectTypes = function (e, t) {
            var n = e.type;
            Array.isArray(n) ? n.forEach(function (e) {
                return t[e] = !0
            }) : t[n] = !0
        }, e.prototype.addFillerValueCompletions = function (e, t, n) {
            e.object && n.add({
                kind: this.getSuggestionKind("object"),
                label: "{}",
                insertText: this.getInsertTextForGuessedValue({}, t),
                insertTextFormat: i.InsertTextFormat.Snippet,
                detail: a("defaults.object", "New object"),
                documentation: ""
            }), e.array && n.add({
                kind: this.getSuggestionKind("array"),
                label: "[]",
                insertText: this.getInsertTextForGuessedValue([], t),
                insertTextFormat: i.InsertTextFormat.Snippet,
                detail: a("defaults.array", "New array"),
                documentation: ""
            })
        }, e.prototype.addBooleanValueCompletion = function (e, t, n) {
            n.add({
                kind: this.getSuggestionKind("boolean"),
                label: e ? "true" : "false",
                insertText: this.getInsertTextForValue(e, t),
                insertTextFormat: i.InsertTextFormat.Snippet,
                documentation: ""
            })
        }, e.prototype.addNullValueCompletion = function (e, t) {
            t.add({
                kind: this.getSuggestionKind("null"),
                label: "null",
                insertText: "null" + e,
                insertTextFormat: i.InsertTextFormat.Snippet,
                documentation: ""
            })
        }, e.prototype.addDollarSchemaCompletions = function (e, t) {
            var n = this, r = this.schemaService.getRegisteredSchemaIds(function (e) {
                return "http" === e || "https" === e
            });
            r.forEach(function (r) {
                return t.add({
                    kind: i.CompletionItemKind.Module,
                    label: n.getLabelForValue(r),
                    filterText: JSON.stringify(r),
                    insertText: n.getInsertTextForValue(r, e),
                    insertTextFormat: i.InsertTextFormat.Snippet,
                    documentation: ""
                })
            })
        }, e.prototype.getLabelForValue = function (e) {
            var t = JSON.stringify(e);
            return t.length > 57 ? t.substr(0, 57).trim() + "..." : t
        }, e.prototype.getFilterTextForValue = function (e) {
            return JSON.stringify(e)
        }, e.prototype.getLabelForSnippetValue = function (e) {
            var t = JSON.stringify(e);
            return t = t.replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1"), t.length > 57 ? t.substr(0, 57).trim() + "..." : t
        }, e.prototype.getInsertTextForPlainText = function (e) {
            return e.replace(/[\\\$\}]/g, "\\$&")
        }, e.prototype.getInsertTextForValue = function (e, t) {
            var n = JSON.stringify(e, null, "\t");
            return "{}" === n ? "{\n\t$1\n}" + t : "[]" === n ? "[\n\t$1\n]" + t : this.getInsertTextForPlainText(n + t)
        }, e.prototype.getInsertTextForSnippetValue = function (e, t) {
            var n = function (e) {
                return "string" == typeof e && "^" === e[0] ? e.substr(1) : JSON.stringify(e)
            };
            return r.stringifyObject(e, "", n) + t
        }, e.prototype.getInsertTextForGuessedValue = function (e, t) {
            switch (typeof e) {
                case"object":
                    return null === e ? "${1:null}" + t : this.getInsertTextForValue(e, t);
                case"string":
                    var n = JSON.stringify(e);
                    return n = n.substr(1, n.length - 2), n = this.getInsertTextForPlainText(n), '"${1:' + n + '}"' + t;
                case"number":
                case"integer":
                case"boolean":
                    return "${1:" + JSON.stringify(e) + "}" + t
            }
            return this.getInsertTextForValue(e, t)
        }, e.prototype.getSuggestionKind = function (e) {
            if (Array.isArray(e)) {
                var t = e;
                e = t.length > 0 ? t[0] : null
            }
            if (!e)return i.CompletionItemKind.Value;
            switch (e) {
                case"string":
                    return i.CompletionItemKind.Value;
                case"object":
                    return i.CompletionItemKind.Module;
                case"property":
                    return i.CompletionItemKind.Property;
                default:
                    return i.CompletionItemKind.Value
            }
        }, e.prototype.getLabelTextForMatchingNode = function (e, t) {
            switch (e.type) {
                case"array":
                    return "[]";
                case"object":
                    return "{}";
                default:
                    var n = t.getText().substr(e.start, e.end - e.start);
                    return n
            }
        }, e.prototype.getInsertTextForMatchingNode = function (e, t, n) {
            switch (e.type) {
                case"array":
                    return this.getInsertTextForValue([], n);
                case"object":
                    return this.getInsertTextForValue({}, n);
                default:
                    var r = t.getText().substr(e.start, e.end - e.start) + n;
                    return this.getInsertTextForPlainText(r)
            }
        }, e.prototype.getInsertTextForProperty = function (e, t, n, r) {
            var i = this.getInsertTextForValue(e, "");
            if (!n)return i;
            var o = i + ": ";
            if (t) {
                var a = t["default"];
                if ("undefined" != typeof a)o += this.getInsertTextForGuessedValue(a, ""); else if (t["enum"] && t["enum"].length > 0)o += this.getInsertTextForGuessedValue(t["enum"][0], ""); else {
                    var s = Array.isArray(t.type) ? t.type[0] : t.type;
                    switch (s || (t.properties ? s = "object" : t.items && (s = "array")), s) {
                        case"boolean":
                            o += "${1:false}";
                            break;
                        case"string":
                            o += '"$1"';
                            break;
                        case"object":
                            o += "{\n\t$1\n}";
                            break;
                        case"array":
                            o += "[\n\t$1\n]";
                            break;
                        case"number":
                        case"integer":
                            o += "${1:0}";
                            break;
                        case"null":
                            o += "${1:null}";
                            break;
                        default:
                            return i
                    }
                }
            } else o += "$1";
            return o += r
        }, e.prototype.getCurrentWord = function (e, t) {
            for (var n = t - 1, r = e.getText(); n >= 0 && ' \t\n\r\x0B":{[,]}'.indexOf(r.charAt(n)) === -1;)n--;
            return r.substring(n + 1, t)
        }, e.prototype.evaluateSeparatorAfter = function (e, t) {
            var r = n.createScanner(e.getText(), !0);
            r.setPosition(t);
            var i = r.scan();
            switch (i) {
                case n.SyntaxKind.CommaToken:
                case n.SyntaxKind.CloseBraceToken:
                case n.SyntaxKind.CloseBracketToken:
                case n.SyntaxKind.EOF:
                    return "";
                default:
                    return ","
            }
        }, e.prototype.isInComment = function (e, t, r) {
            var i = n.createScanner(e.getText(), !1);
            i.setPosition(t);
            for (var o = i.scan(); o !== n.SyntaxKind.EOF && i.getTokenOffset() + i.getTokenLength() < r;)o = i.scan();
            return (o === n.SyntaxKind.LineCommentTrivia || o === n.SyntaxKind.BlockCommentTrivia) && i.getTokenOffset() <= r
        }, e
    }();
    t.JSONCompletion = s
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/services/jsonHover", ["require", "exports", "vscode-languageserver-types"], e)
}(function (e, t) {
    var n = e("vscode-languageserver-types"), r = function () {
        function e(e, t, n) {
            void 0 === t && (t = []), this.schemaService = e, this.contributions = t, this.promise = n || Promise
        }

        return e.prototype.doHover = function (e, t, r) {
            var i = e.offsetAt(t), o = r.getNodeFromOffset(i);
            if (!o || ("object" === o.type || "array" === o.type) && i > o.start + 1 && i < o.end - 1)return this.promise.resolve(void 0);
            var a = o;
            if ("string" === o.type) {
                var s = o;
                if (s.isKey) {
                    var c = o.parent;
                    if (o = c.value, !o)return this.promise.resolve(void 0)
                }
            }
            for (var u = n.Range.create(e.positionAt(a.start), e.positionAt(a.end)), l = function (e) {
                var t = {contents: e, range: u};
                return t
            }, f = o.getPath(), p = this.contributions.length - 1; p >= 0; p--) {
                var d = this.contributions[p], h = d.getInfoContribution(e.uri, f);
                if (h)return h.then(function (e) {
                    return l(e)
                })
            }
            return this.schemaService.getSchemaForResource(e.uri, r).then(function (e) {
                if (e) {
                    var t = [];
                    r.validate(e.schema, t, o.start);
                    var i = null, a = null;
                    if (t.every(function (e) {
                            if (e.node === o && !e.inverted && e.schema && (i = i || e.schema.description, e.schema["enum"] && e.schema.enumDescriptions)) {
                                var t = e.schema["enum"].indexOf(o.getValue());
                                a = e.schema.enumDescriptions[t]
                            }
                            return !0
                        }), i)return a && (i = i + "\n\n" + a), l([n.MarkedString.fromPlainText(i)])
                }
            })
        }, e
    }();
    t.JSONHover = r
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/services/jsonValidation", ["require", "exports", "vscode-languageserver-types"], e)
}(function (e, t) {
    var n = e("vscode-languageserver-types"), r = function () {
        function e(e, t) {
            this.jsonSchemaService = e, this.promise = t, this.validationEnabled = !0
        }

        return e.prototype.configure = function (e) {
            e && (this.validationEnabled = e.validate)
        }, e.prototype.doValidation = function (e, t) {
            return this.validationEnabled ? this.jsonSchemaService.getSchemaForResource(e.uri, t).then(function (r) {
                if (r)if (r.errors.length && t.root) {
                    var i = t.root, o = "object" === i.type ? i.getFirstProperty("$schema") : null;
                    if (o) {
                        var a = o.value || o;
                        t.warnings.push({location: {start: a.start, end: a.end}, message: r.errors[0]})
                    } else t.warnings.push({location: {start: i.start, end: i.start + 1}, message: r.errors[0]})
                } else t.validate(r.schema);
                var s = [], c = {};
                return t.errors.concat(t.warnings).forEach(function (r, i) {
                    var o = r.location.start + " " + r.location.end + " " + r.message;
                    if (!c[o]) {
                        c[o] = !0;
                        var a = {start: e.positionAt(r.location.start), end: e.positionAt(r.location.end)};
                        s.push({
                            severity: i >= t.errors.length ? n.DiagnosticSeverity.Warning : n.DiagnosticSeverity.Error,
                            range: a,
                            message: r.message
                        })
                    }
                }), s
            }) : this.promise.resolve([])
        }, e
    }();
    t.JSONValidation = r
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/utils/strings", ["require", "exports"], e)
}(function (e, t) {
    function n(e, t) {
        if (e.length < t.length)return !1;
        for (var n = 0; n < t.length; n++)if (e[n] !== t[n])return !1;
        return !0
    }

    function r(e, t) {
        var n = e.length - t.length;
        return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t
    }

    function i(e) {
        return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*")
    }

    t.startsWith = n, t.endsWith = r, t.convertSimple2RegExpPattern = i
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/services/jsonDocumentSymbols", ["require", "exports", "../utils/strings", "vscode-languageserver-types"], e)
}(function (e, t) {
    var n = e("../utils/strings"), r = e("vscode-languageserver-types"), i = function () {
        function e() {
        }

        return e.prototype.findDocumentSymbols = function (e, t) {
            var i = this, o = t.root;
            if (!o)return null;
            var a = e.uri;
            if (("vscode://defaultsettings/keybindings.json" === a || n.endsWith(a.toLowerCase(), "/user/keybindings.json")) && "array" === o.type) {
                var s = [];
                return o.items.forEach(function (t) {
                    if ("object" === t.type) {
                        var n = t.getFirstProperty("key");
                        if (n && n.value) {
                            var i = r.Location.create(e.uri, r.Range.create(e.positionAt(t.start), e.positionAt(t.end)));
                            s.push({name: n.value.getValue(), kind: r.SymbolKind.Function, location: i})
                        }
                    }
                }), s
            }
            var c = function (t, n, o) {
                if ("array" === n.type)n.items.forEach(function (e) {
                    c(t, e, o)
                }); else if ("object" === n.type) {
                    var a = n;
                    a.properties.forEach(function (n) {
                        var a = r.Location.create(e.uri, r.Range.create(e.positionAt(n.start), e.positionAt(n.end))), s = n.value;
                        if (s) {
                            var u = o ? o + "." + n.key.value : n.key.value;
                            t.push({
                                name: n.key.getValue(),
                                kind: i.getSymbolKind(s.type),
                                location: a,
                                containerName: o
                            }), c(t, s, u)
                        }
                    })
                }
                return t
            }, u = c([], o, void 0);
            return u
        }, e.prototype.getSymbolKind = function (e) {
            switch (e) {
                case"object":
                    return r.SymbolKind.Module;
                case"string":
                    return r.SymbolKind.String;
                case"number":
                    return r.SymbolKind.Number;
                case"array":
                    return r.SymbolKind.Array;
                case"boolean":
                    return r.SymbolKind.Boolean;
                default:
                    return r.SymbolKind.Variable
            }
        }, e
    }();
    t.JSONDocumentSymbols = i
});
var __extends = this && this.__extends || function (e, t) {
        function n() {
            this.constructor = e
        }

        for (var r in t)t.hasOwnProperty(r) && (e[r] = t[r]);
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    };
!function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/parser/jsonParser", ["require", "exports", "jsonc-parser", "vscode-nls"], e)
}(function (e, t) {
    function n(e, t) {
        function n() {
            for (; ;) {
                var e = O.scan();
                switch (e) {
                    case i.SyntaxKind.LineCommentTrivia:
                    case i.SyntaxKind.BlockCommentTrivia:
                        E && o(a("InvalidCommentTokem", "Comments are not allowed"));
                        break;
                    case i.SyntaxKind.Trivia:
                    case i.SyntaxKind.LineBreakTrivia:
                        break;
                    default:
                        return e
                }
            }
        }

        function r(e) {
            return O.getToken() === e && (n(), !0)
        }

        function o(e, t, r, o) {
            if (void 0 === t && (t = null), void 0 === r && (r = []), void 0 === o && (o = []), 0 === C.errors.length || C.errors[0].location.start !== O.getTokenOffset()) {
                var a = {
                    message: e,
                    location: {start: O.getTokenOffset(), end: O.getTokenOffset() + O.getTokenLength()}
                };
                C.errors.push(a)
            }
            if (t && m(t, !1), r.length + o.length > 0)for (var s = O.getToken(); s !== i.SyntaxKind.EOF;) {
                if (r.indexOf(s) !== -1) {
                    n();
                    break
                }
                if (o.indexOf(s) !== -1)break;
                s = n()
            }
            return t
        }

        function s() {
            switch (O.getTokenError()) {
                case i.ScanError.InvalidUnicode:
                    return o(a("InvalidUnicode", "Invalid unicode sequence in string")), !0;
                case i.ScanError.InvalidEscapeCharacter:
                    return o(a("InvalidEscapeCharacter", "Invalid escape character in string")), !0;
                case i.ScanError.UnexpectedEndOfNumber:
                    return o(a("UnexpectedEndOfNumber", "Unexpected end of number")), !0;
                case i.ScanError.UnexpectedEndOfComment:
                    return o(a("UnexpectedEndOfComment", "Unexpected end of comment")), !0;
                case i.ScanError.UnexpectedEndOfString:
                    return o(a("UnexpectedEndOfString", "Unexpected end of string")), !0
            }
            return !1
        }

        function m(e, t) {
            return e.end = O.getTokenOffset() + O.getTokenLength(), t && n(), e
        }

        function v(e, t) {
            if (O.getToken() !== i.SyntaxKind.OpenBracketToken)return null;
            var s = new l(e, t, O.getTokenOffset());
            n();
            var c = 0;
            if (s.addItem(k(s, c++)))for (; r(i.SyntaxKind.CommaToken);)s.addItem(k(s, c++)) || j || o(a("ValueExpected", "Value expected"));
            return O.getToken() !== i.SyntaxKind.CloseBracketToken ? o(a("ExpectedCloseBracket", "Expected comma or closing bracket"), s) : m(s, !0)
        }

        function y(e, t) {
            var r = b(null, null, !0);
            if (!r) {
                if (O.getToken() === i.SyntaxKind.Unknown) {
                    var s = O.getTokenValue();
                    s.match(/^['\w]/) && o(a("DoubleQuotesExpected", "Property keys must be doublequoted"))
                }
                return null
            }
            var c = new d(e, r);
            return t[r.value] && C.warnings.push({
                location: {start: c.key.start, end: c.key.end},
                message: a("DuplicateKeyWarning", "Duplicate object key")
            }), t[r.value] = !0, O.getToken() !== i.SyntaxKind.ColonToken ? o(a("ColonExpected", "Colon expected"), c, [], [i.SyntaxKind.CloseBraceToken, i.SyntaxKind.CommaToken]) : (c.colonOffset = O.getTokenOffset(), n(), c.setValue(k(c, r.value)) ? (c.end = c.value.end, c) : o(a("ValueExpected", "Value expected"), c, [], [i.SyntaxKind.CloseBraceToken, i.SyntaxKind.CommaToken]))
        }

        function x(e, t) {
            if (O.getToken() !== i.SyntaxKind.OpenBraceToken)return null;
            var s = new h(e, t, O.getTokenOffset());
            n();
            var c = Object.create(null);
            if (s.addProperty(y(s, c)))for (; r(i.SyntaxKind.CommaToken);)s.addProperty(y(s, c)) || j || o(a("PropertyExpected", "Property expected"));
            return O.getToken() !== i.SyntaxKind.CloseBraceToken ? o(a("ExpectedCloseBrace", "Expected comma or closing brace"), s) : m(s, !0)
        }

        function b(e, t, n) {
            if (O.getToken() !== i.SyntaxKind.StringLiteral)return null;
            var r = new p(e, t, n, O.getTokenOffset());
            return r.value = O.getTokenValue(), s(), m(r, !0)
        }

        function S(e, t) {
            if (O.getToken() !== i.SyntaxKind.NumericLiteral)return null;
            var n = new f(e, t, O.getTokenOffset());
            if (!s()) {
                var r = O.getTokenValue();
                try {
                    var c = JSON.parse(r);
                    if ("number" != typeof c)return o(a("InvalidNumberFormat", "Invalid number format"), n);
                    n.value = c
                } catch (u) {
                    return o(a("InvalidNumberFormat", "Invalid number format"), n)
                }
                n.isInteger = r.indexOf(".") === -1
            }
            return m(n, !0)
        }

        function T(e, t) {
            var n;
            switch (O.getToken()) {
                case i.SyntaxKind.NullKeyword:
                    n = new c(e, t, O.getTokenOffset());
                    break;
                case i.SyntaxKind.TrueKeyword:
                    n = new u(e, t, (!0), O.getTokenOffset());
                    break;
                case i.SyntaxKind.FalseKeyword:
                    n = new u(e, t, (!1), O.getTokenOffset());
                    break;
                default:
                    return null
            }
            return m(n, !0)
        }

        function k(e, t) {
            return v(e, t) || x(e, t) || b(e, t, !1) || S(e, t) || T(e, t)
        }

        var C = new g(t), O = i.createScanner(e, !1), E = t && t.disallowComments, j = t && t.ignoreDanglingComma;
        return n(), C.root = k(null, null), C.root ? O.getToken() !== i.SyntaxKind.EOF && o(a("End of file expected", "End of file expected")) : o(a("Invalid symbol", "Expected a JSON object, array or literal")), C
    }

    var r, i = e("jsonc-parser"), o = e("vscode-nls"), a = o.loadMessageBundle();
    !function (e) {
        e[e.EnumValueMismatch = 1] = "EnumValueMismatch"
    }(r = t.ErrorCode || (t.ErrorCode = {}));
    var s = function () {
        function e(e, t, n, r, i) {
            this.type = t, this.location = n, this.start = r, this.end = i, this.parent = e
        }

        return e.prototype.getPath = function () {
            var e = this.parent ? this.parent.getPath() : [];
            return null !== this.location && e.push(this.location), e
        }, e.prototype.getChildNodes = function () {
            return []
        }, e.prototype.getLastChild = function () {
            return null
        }, e.prototype.getValue = function () {
        }, e.prototype.contains = function (e, t) {
            return void 0 === t && (t = !1), e >= this.start && e < this.end || t && e === this.end
        }, e.prototype.toString = function () {
            return "type: " + this.type + " (" + this.start + "/" + this.end + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "")
        }, e.prototype.visit = function (e) {
            return e(this)
        }, e.prototype.getNodeFromOffset = function (e) {
            var t = function (n) {
                if (e >= n.start && e < n.end) {
                    for (var r = n.getChildNodes(), i = 0; i < r.length && r[i].start <= e; i++) {
                        var o = t(r[i]);
                        if (o)return o
                    }
                    return n
                }
                return null
            };
            return t(this)
        }, e.prototype.getNodeFromOffsetEndInclusive = function (e) {
            var t = function (n) {
                if (e >= n.start && e <= n.end) {
                    for (var r = n.getChildNodes(), i = 0; i < r.length && r[i].start <= e; i++) {
                        var o = t(r[i]);
                        if (o)return o
                    }
                    return n
                }
                return null
            };
            return t(this)
        }, e.prototype.validate = function (e, t, n, i) {
            var o = this;
            if (void 0 === i && (i = -1), i === -1 || this.contains(i)) {
                if (Array.isArray(e.type) ? e.type.indexOf(this.type) === -1 && t.warnings.push({
                        location: {
                            start: this.start,
                            end: this.end
                        },
                        message: e.errorMessage || a("typeArrayMismatchWarning", "Incorrect type. Expected one of {0}", e.type.join(", "))
                    }) : e.type && this.type !== e.type && t.warnings.push({
                        location: {
                            start: this.start,
                            end: this.end
                        }, message: e.errorMessage || a("typeMismatchWarning", 'Incorrect type. Expected "{0}"', e.type)
                    }), Array.isArray(e.allOf) && e.allOf.forEach(function (e) {
                        o.validate(e, t, n, i)
                    }), e.not) {
                    var s = new m, c = [];
                    this.validate(e.not, s, c, i), s.hasErrors() || t.warnings.push({
                        location: {
                            start: this.start,
                            end: this.end
                        }, message: a("notSchemaWarning", "Matches a schema that is not allowed.")
                    }), n && c.forEach(function (e) {
                        e.inverted = !e.inverted, n.push(e)
                    })
                }
                var u = function (e, r) {
                    var i = [], s = null;
                    return e.forEach(function (e) {
                        var t = new m, n = [];
                        if (o.validate(e, t, n), t.hasErrors() || i.push(e), s)if (r || t.hasErrors() || s.validationResult.hasErrors()) {
                            var a = t.compare(s.validationResult);
                            a > 0 ? s = {
                                schema: e,
                                validationResult: t,
                                matchingSchemas: n
                            } : 0 === a && (s.matchingSchemas.push.apply(s.matchingSchemas, n), s.validationResult.mergeEnumValueMismatch(t))
                        } else s.matchingSchemas.push.apply(s.matchingSchemas, n), s.validationResult.propertiesMatches += t.propertiesMatches, s.validationResult.propertiesValueMatches += t.propertiesValueMatches; else s = {
                            schema: e,
                            validationResult: t,
                            matchingSchemas: n
                        }
                    }), i.length > 1 && r && t.warnings.push({
                        location: {start: o.start, end: o.start + 1},
                        message: a("oneOfWarning", "Matches multiple schemas when only one must validate.")
                    }), null !== s && (t.merge(s.validationResult), t.propertiesMatches += s.validationResult.propertiesMatches, t.propertiesValueMatches += s.validationResult.propertiesValueMatches, n && n.push.apply(n, s.matchingSchemas)), i.length
                };
                Array.isArray(e.anyOf) && u(e.anyOf, !1), Array.isArray(e.oneOf) && u(e.oneOf, !0), Array.isArray(e["enum"]) && (e["enum"].indexOf(this.getValue()) === -1 ? (t.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    },
                    code: r.EnumValueMismatch,
                    message: e.errorMessage || a("enumWarning", "Value is not accepted. Valid values: {0}", JSON.stringify(e["enum"]))
                }), t.mismatchedEnumValues = e["enum"]) : t.enumValueMatch = !0), e.deprecationMessage && t.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: e.deprecationMessage
                }), null !== n && n.push({node: this, schema: e})
            }
        }, e
    }();
    t.ASTNode = s;
    var c = function (e) {
        function t(t, n, r, i) {
            return e.call(this, t, "null", n, r, i) || this
        }

        return __extends(t, e), t.prototype.getValue = function () {
            return null
        }, t
    }(s);
    t.NullASTNode = c;
    var u = function (e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, "boolean", n, i, o) || this;
            return a.value = r, a
        }

        return __extends(t, e), t.prototype.getValue = function () {
            return this.value
        }, t
    }(s);
    t.BooleanASTNode = u;
    var l = function (e) {
        function t(t, n, r, i) {
            var o = e.call(this, t, "array", n, r, i) || this;
            return o.items = [], o
        }

        return __extends(t, e), t.prototype.getChildNodes = function () {
            return this.items
        }, t.prototype.getLastChild = function () {
            return this.items[this.items.length - 1]
        }, t.prototype.getValue = function () {
            return this.items.map(function (e) {
                return e.getValue()
            })
        }, t.prototype.addItem = function (e) {
            return !!e && (this.items.push(e), !0)
        }, t.prototype.visit = function (e) {
            for (var t = e(this), n = 0; n < this.items.length && t; n++)t = this.items[n].visit(e);
            return t
        }, t.prototype.validate = function (t, n, r, i) {
            var o = this;
            if (void 0 === i && (i = -1), i === -1 || this.contains(i)) {
                if (e.prototype.validate.call(this, t, n, r, i), Array.isArray(t.items)) {
                    var s = t.items;
                    s.forEach(function (e, t) {
                        var a = new m, c = o.items[t];
                        c ? (c.validate(e, a, r, i), n.mergePropertyMatch(a)) : o.items.length >= s.length && n.propertiesValueMatches++
                    }), t.additionalItems === !1 && this.items.length > s.length ? n.warnings.push({
                        location: {
                            start: this.start,
                            end: this.end
                        },
                        message: a("additionalItemsWarning", "Array has too many items according to schema. Expected {0} or fewer", s.length)
                    }) : this.items.length >= s.length && (n.propertiesValueMatches += this.items.length - s.length)
                } else t.items && this.items.forEach(function (e) {
                    var o = new m;
                    e.validate(t.items, o, r, i), n.mergePropertyMatch(o)
                });
                if (t.minItems && this.items.length < t.minItems && n.warnings.push({
                        location: {
                            start: this.start,
                            end: this.end
                        }, message: a("minItemsWarning", "Array has too few items. Expected {0} or more", t.minItems)
                    }), t.maxItems && this.items.length > t.maxItems && n.warnings.push({
                        location: {
                            start: this.start,
                            end: this.end
                        }, message: a("maxItemsWarning", "Array has too many items. Expected {0} or fewer", t.minItems)
                    }), t.uniqueItems === !0) {
                    var c = this.items.map(function (e) {
                        return e.getValue()
                    }), u = c.some(function (e, t) {
                        return t !== c.lastIndexOf(e)
                    });
                    u && n.warnings.push({
                        location: {start: this.start, end: this.end},
                        message: a("uniqueItemsWarning", "Array has duplicate items")
                    })
                }
            }
        }, t
    }(s);
    t.ArrayASTNode = l;
    var f = function (e) {
        function t(t, n, r, i) {
            var o = e.call(this, t, "number", n, r, i) || this;
            return o.isInteger = !0, o.value = Number.NaN, o
        }

        return __extends(t, e), t.prototype.getValue = function () {
            return this.value
        }, t.prototype.validate = function (t, n, r, i) {
            if (void 0 === i && (i = -1), i === -1 || this.contains(i)) {
                var o = !1;
                ("integer" === t.type || Array.isArray(t.type) && t.type.indexOf("integer") !== -1) && (o = !0), o && this.isInteger === !0 && (this.type = "integer"), e.prototype.validate.call(this, t, n, r, i), this.type = "number";
                var s = this.getValue();
                "number" == typeof t.multipleOf && s % t.multipleOf !== 0 && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("multipleOfWarning", "Value is not divisible by {0}", t.multipleOf)
                }), "number" == typeof t.minimum && (t.exclusiveMinimum && s <= t.minimum && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("exclusiveMinimumWarning", "Value is below the exclusive minimum of {0}", t.minimum)
                }), !t.exclusiveMinimum && s < t.minimum && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("minimumWarning", "Value is below the minimum of {0}", t.minimum)
                })), "number" == typeof t.maximum && (t.exclusiveMaximum && s >= t.maximum && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("exclusiveMaximumWarning", "Value is above the exclusive maximum of {0}", t.maximum)
                }), !t.exclusiveMaximum && s > t.maximum && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("maximumWarning", "Value is above the maximum of {0}", t.maximum)
                }))
            }
        }, t
    }(s);
    t.NumberASTNode = f;
    var p = function (e) {
        function t(t, n, r, i, o) {
            var a = e.call(this, t, "string", n, i, o) || this;
            return a.isKey = r, a.value = "", a
        }

        return __extends(t, e), t.prototype.getValue = function () {
            return this.value
        }, t.prototype.validate = function (t, n, r, i) {
            if (void 0 === i && (i = -1), (i === -1 || this.contains(i)) && (e.prototype.validate.call(this, t, n, r, i), t.minLength && this.value.length < t.minLength && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("minLengthWarning", "String is shorter than the minimum length of ", t.minLength)
                }), t.maxLength && this.value.length > t.maxLength && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("maxLengthWarning", "String is shorter than the maximum length of ", t.maxLength)
                }), t.pattern)) {
                var o = new RegExp(t.pattern);
                o.test(this.value) || n.warnings.push({
                    location: {start: this.start, end: this.end},
                    message: t.errorMessage || a("patternWarning", 'String does not match the pattern of "{0}"', t.pattern)
                })
            }
        }, t
    }(s);
    t.StringASTNode = p;
    var d = function (e) {
        function t(t, n) {
            var r = e.call(this, t, "property", null, n.start) || this;
            return r.key = n, n.parent = r, n.location = n.value, r.colonOffset = -1, r
        }

        return __extends(t, e), t.prototype.getChildNodes = function () {
            return this.value ? [this.key, this.value] : [this.key]
        }, t.prototype.getLastChild = function () {
            return this.value
        }, t.prototype.setValue = function (e) {
            return this.value = e, null !== e
        }, t.prototype.visit = function (e) {
            return e(this) && this.key.visit(e) && this.value && this.value.visit(e)
        }, t.prototype.validate = function (e, t, n, r) {
            void 0 === r && (r = -1), (r === -1 || this.contains(r)) && this.value && this.value.validate(e, t, n, r)
        }, t
    }(s);
    t.PropertyASTNode = d;
    var h = function (e) {
        function t(t, n, r, i) {
            var o = e.call(this, t, "object", n, r, i) || this;
            return o.properties = [], o
        }

        return __extends(t, e), t.prototype.getChildNodes = function () {
            return this.properties
        }, t.prototype.getLastChild = function () {
            return this.properties[this.properties.length - 1]
        }, t.prototype.addProperty = function (e) {
            return !!e && (this.properties.push(e), !0)
        }, t.prototype.getFirstProperty = function (e) {
            for (var t = 0; t < this.properties.length; t++)if (this.properties[t].key.value === e)return this.properties[t];
            return null
        }, t.prototype.getKeyList = function () {
            return this.properties.map(function (e) {
                return e.key.getValue()
            })
        }, t.prototype.getValue = function () {
            var e = Object.create(null);
            return this.properties.forEach(function (t) {
                var n = t.value && t.value.getValue();
                n && (e[t.key.getValue()] = n)
            }), e
        }, t.prototype.visit = function (e) {
            for (var t = e(this), n = 0; n < this.properties.length && t; n++)t = this.properties[n].visit(e);
            return t
        }, t.prototype.validate = function (t, n, r, i) {
            var o = this;
            if (void 0 === i && (i = -1), i === -1 || this.contains(i)) {
                e.prototype.validate.call(this, t, n, r, i);
                var s = Object.create(null), c = [];
                this.properties.forEach(function (e) {
                    var t = e.key.value;
                    s[t] = e.value, c.push(t)
                }), Array.isArray(t.required) && t.required.forEach(function (e) {
                    if (!s[e]) {
                        var t = o.parent && o.parent && o.parent.key, r = t ? {
                            start: t.start,
                            end: t.end
                        } : {start: o.start, end: o.start + 1};
                        n.warnings.push({
                            location: r,
                            message: a("MissingRequiredPropWarning", 'Missing property "{0}"', e)
                        })
                    }
                });
                var u = function (e) {
                    for (var t = c.indexOf(e); t >= 0;)c.splice(t, 1), t = c.indexOf(e)
                };
                t.properties && Object.keys(t.properties).forEach(function (e) {
                    u(e);
                    var o = t.properties[e], a = s[e];
                    if (a) {
                        var c = new m;
                        a.validate(o, c, r, i), n.mergePropertyMatch(c)
                    }
                }), t.patternProperties && Object.keys(t.patternProperties).forEach(function (e) {
                    var o = new RegExp(e);
                    c.slice(0).forEach(function (a) {
                        if (o.test(a)) {
                            u(a);
                            var c = s[a];
                            if (c) {
                                var l = new m;
                                c.validate(t.patternProperties[e], l, r, i), n.mergePropertyMatch(l)
                            }
                        }
                    })
                }), t.additionalProperties ? c.forEach(function (e) {
                    var o = s[e];
                    if (o) {
                        var a = new m;
                        o.validate(t.additionalProperties, a, r, i), n.mergePropertyMatch(a)
                    }
                }) : t.additionalProperties === !1 && c.length > 0 && c.forEach(function (e) {
                    var r = s[e];
                    if (r) {
                        var i = r.parent;
                        n.warnings.push({
                            location: {start: i.key.start, end: i.key.end},
                            message: t.errorMessage || a("DisallowedExtraPropWarning", "Property {0} is not allowed", e)
                        })
                    }
                }), t.maxProperties && this.properties.length > t.maxProperties && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    }, message: a("MaxPropWarning", "Object has more properties than limit of {0}", t.maxProperties)
                }), t.minProperties && this.properties.length < t.minProperties && n.warnings.push({
                    location: {
                        start: this.start,
                        end: this.end
                    },
                    message: a("MinPropWarning", "Object has fewer properties than the required number of {0}", t.minProperties)
                }), t.dependencies && Object.keys(t.dependencies).forEach(function (e) {
                    var c = s[e];
                    if (c)if (Array.isArray(t.dependencies[e])) {
                        var u = t.dependencies[e];
                        u.forEach(function (t) {
                            s[t] ? n.propertiesValueMatches++ : n.warnings.push({
                                location: {start: o.start, end: o.end},
                                message: a("RequiredDependentPropWarning", "Object is missing property {0} required by property {1}", t, e)
                            })
                        })
                    } else if (t.dependencies[e]) {
                        var l = t.dependencies[e], f = new m;
                        o.validate(l, f, r, i), n.mergePropertyMatch(f)
                    }
                })
            }
        }, t
    }(s);
    t.ObjectASTNode = h;
    var m = function () {
        function e() {
            this.errors = [], this.warnings = [], this.propertiesMatches = 0, this.propertiesValueMatches = 0, this.enumValueMatch = !1, this.mismatchedEnumValues = null
        }

        return e.prototype.hasErrors = function () {
            return !!this.errors.length || !!this.warnings.length
        }, e.prototype.mergeAll = function (e) {
            var t = this;
            e.forEach(function (e) {
                t.merge(e)
            })
        }, e.prototype.merge = function (e) {
            this.errors = this.errors.concat(e.errors), this.warnings = this.warnings.concat(e.warnings)
        }, e.prototype.mergeEnumValueMismatch = function (e) {
            if (this.mismatchedEnumValues && e.mismatchedEnumValues) {
                this.mismatchedEnumValues = this.mismatchedEnumValues.concat(e.mismatchedEnumValues);
                for (var t = 0, n = this.warnings; t < n.length; t++) {
                    var i = n[t];
                    i.code === r.EnumValueMismatch && (i.message = a("enumWarning", "Value is not accepted. Valid values: {0}", JSON.stringify(this.mismatchedEnumValues)))
                }
            } else this.mismatchedEnumValues = null
        }, e.prototype.mergePropertyMatch = function (e) {
            this.merge(e), this.propertiesMatches++, (e.enumValueMatch || !e.hasErrors() && e.propertiesMatches) && this.propertiesValueMatches++
        }, e.prototype.compare = function (e) {
            var t = this.hasErrors();
            return t !== e.hasErrors() ? t ? -1 : 1 : this.enumValueMatch !== e.enumValueMatch ? e.enumValueMatch ? -1 : 1 : this.propertiesValueMatches !== e.propertiesValueMatches ? this.propertiesValueMatches - e.propertiesValueMatches : this.propertiesMatches - e.propertiesMatches
        }, e
    }();
    t.ValidationResult = m;
    var g = function () {
        function e(e) {
            this.validationResult = new m
        }

        return Object.defineProperty(e.prototype, "errors", {
            get: function () {
                return this.validationResult.errors
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "warnings", {
            get: function () {
                return this.validationResult.warnings
            }, enumerable: !0, configurable: !0
        }), e.prototype.getNodeFromOffset = function (e) {
            return this.root && this.root.getNodeFromOffset(e)
        }, e.prototype.getNodeFromOffsetEndInclusive = function (e) {
            return this.root && this.root.getNodeFromOffsetEndInclusive(e)
        }, e.prototype.visit = function (e) {
            this.root && this.root.visit(e)
        }, e.prototype.validate = function (e, t, n) {
            void 0 === t && (t = null), void 0 === n && (n = -1), this.root && this.root.validate(e, this.validationResult, t, n)
        }, e
    }();
    t.JSONDocument = g, t.parse = n
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/services/configuration", ["require", "exports", "vscode-nls"], e)
}(function (e, t) {
    var n = e("vscode-nls"), r = n.loadMessageBundle();
    t.schemaContributions = {
        schemaAssociations: {}, schemas: {
            "http://json-schema.org/draft-04/schema#": {
                title: r("schema.json", "Describes a JSON file using a schema. See json-schema.org for more info."),
                $schema: "http://json-schema.org/draft-04/schema#",
                definitions: {
                    schemaArray: {type: "array", minItems: 1, items: {$ref: "#"}},
                    positiveInteger: {type: "integer", minimum: 0},
                    positiveIntegerDefault0: {allOf: [{$ref: "#/definitions/positiveInteger"}, {"default": 0}]},
                    simpleTypes: {
                        type: "string",
                        "enum": ["array", "boolean", "integer", "null", "number", "object", "string"]
                    },
                    stringArray: {type: "array", items: {type: "string"}, minItems: 1, uniqueItems: !0}
                },
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        format: "uri",
                        description: r("schema.json.id", "A unique identifier for the schema.")
                    },
                    $schema: {
                        type: "string",
                        format: "uri",
                        description: r("schema.json.$schema", "The schema to verify this document against ")
                    },
                    title: {type: "string", description: r("schema.json.title", "A descriptive title of the element")},
                    description: {
                        type: "string",
                        description: r("schema.json.description", "A long description of the element. Used in hover menus and suggestions.")
                    },
                    "default": {description: r("schema.json.default", "A default value. Used by suggestions.")},
                    multipleOf: {
                        type: "number",
                        minimum: 0,
                        exclusiveMinimum: !0,
                        description: r("schema.json.multipleOf", "A number that should cleanly divide the current value (i.e. have no remainder)")
                    },
                    maximum: {
                        type: "number",
                        description: r("schema.json.maximum", "The maximum numerical value, inclusive by default.")
                    },
                    exclusiveMaximum: {
                        type: "boolean",
                        "default": !1,
                        description: r("schema.json.exclusiveMaximum", "Makes the maximum property exclusive.")
                    },
                    minimum: {
                        type: "number",
                        description: r("schema.json.minimum", "The minimum numerical value, inclusive by default.")
                    },
                    exclusiveMinimum: {
                        type: "boolean",
                        "default": !1,
                        description: r("schema.json.exclusiveMininum", "Makes the minimum property exclusive.")
                    },
                    maxLength: {
                        allOf: [{$ref: "#/definitions/positiveInteger"}],
                        description: r("schema.json.maxLength", "The maximum length of a string.")
                    },
                    minLength: {
                        allOf: [{$ref: "#/definitions/positiveIntegerDefault0"}],
                        description: r("schema.json.minLength", "The minimum length of a string.")
                    },
                    pattern: {
                        type: "string",
                        format: "regex",
                        description: r("schema.json.pattern", "A regular expression to match the string against. It is not implicitly anchored.")
                    },
                    additionalItems: {
                        anyOf: [{type: "boolean"}, {$ref: "#"}],
                        "default": {},
                        description: r("schema.json.additionalItems", "For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail.")
                    },
                    items: {
                        anyOf: [{$ref: "#"}, {$ref: "#/definitions/schemaArray"}],
                        "default": {},
                        description: r("schema.json.items", "For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on.")
                    },
                    maxItems: {
                        allOf: [{$ref: "#/definitions/positiveInteger"}],
                        description: r("schema.json.maxItems", "The maximum number of items that can be inside an array. Inclusive.")
                    },
                    minItems: {
                        allOf: [{$ref: "#/definitions/positiveIntegerDefault0"}],
                        description: r("schema.json.minItems", "The minimum number of items that can be inside an array. Inclusive.")
                    },
                    uniqueItems: {
                        type: "boolean",
                        "default": !1,
                        description: r("schema.json.uniqueItems", "If all of the items in the array must be unique. Defaults to false.")
                    },
                    maxProperties: {
                        allOf: [{$ref: "#/definitions/positiveInteger"}],
                        description: r("schema.json.maxProperties", "The maximum number of properties an object can have. Inclusive.")
                    },
                    minProperties: {
                        allOf: [{$ref: "#/definitions/positiveIntegerDefault0"}],
                        description: r("schema.json.minProperties", "The minimum number of properties an object can have. Inclusive.")
                    },
                    required: {
                        allOf: [{$ref: "#/definitions/stringArray"}],
                        description: r("schema.json.required", "An array of strings that lists the names of all properties required on this object.")
                    },
                    additionalProperties: {
                        anyOf: [{type: "boolean"}, {$ref: "#"}],
                        "default": {},
                        description: r("schema.json.additionalProperties", "Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail.")
                    },
                    definitions: {
                        type: "object",
                        additionalProperties: {$ref: "#"},
                        "default": {},
                        description: r("schema.json.definitions", "Not used for validation. Place subschemas here that you wish to reference inline with $ref")
                    },
                    properties: {
                        type: "object",
                        additionalProperties: {$ref: "#"},
                        "default": {},
                        description: r("schema.json.properties", "A map of property names to schemas for each property.")
                    },
                    patternProperties: {
                        type: "object",
                        additionalProperties: {$ref: "#"},
                        "default": {},
                        description: r("schema.json.patternProperties", "A map of regular expressions on property names to schemas for matching properties.")
                    },
                    dependencies: {
                        type: "object",
                        additionalProperties: {anyOf: [{$ref: "#"}, {$ref: "#/definitions/stringArray"}]},
                        description: r("schema.json.dependencies", "A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object.")
                    },
                    "enum": {
                        type: "array",
                        minItems: 1,
                        uniqueItems: !0,
                        description: r("schema.json.enum", "The set of literal values that are valid")
                    },
                    type: {
                        anyOf: [{$ref: "#/definitions/simpleTypes"}, {
                            type: "array",
                            items: {$ref: "#/definitions/simpleTypes"},
                            minItems: 1,
                            uniqueItems: !0
                        }],
                        description: r("schema.json.type", "Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types.")
                    },
                    format: {
                        anyOf: [{
                            type: "string",
                            description: r("schema.json.format", "Describes the format expected for the value."),
                            "enum": ["date-time", "uri", "email", "hostname", "ipv4", "ipv6", "regex"]
                        }, {type: "string"}]
                    },
                    allOf: {
                        allOf: [{$ref: "#/definitions/schemaArray"}],
                        description: r("schema.json.allOf", "An array of schemas, all of which must match.")
                    },
                    anyOf: {
                        allOf: [{$ref: "#/definitions/schemaArray"}],
                        description: r("schema.json.anyOf", "An array of schemas, where at least one must match.")
                    },
                    oneOf: {
                        allOf: [{$ref: "#/definitions/schemaArray"}],
                        description: r("schema.json.oneOf", "An array of schemas, exactly one of which must match.")
                    },
                    not: {allOf: [{$ref: "#"}], description: r("schema.json.not", "A schema which must not match.")}
                },
                dependencies: {exclusiveMaximum: ["maximum"], exclusiveMinimum: ["minimum"]},
                "default": {}
            }
        }
    }
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-uri/index", ["require", "exports"], e)
}(function (e, t) {
    function n(e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
    }

    function r(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, n)
    }

    function i(e) {
        return e
    }

    var o = function () {
        function e() {
            this._scheme = e._empty, this._authority = e._empty, this._path = e._empty, this._query = e._empty, this._fragment = e._empty, this._formatted = null, this._fsPath = null
        }

        return Object.defineProperty(e.prototype, "scheme", {
            get: function () {
                return this._scheme
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "authority", {
            get: function () {
                return this._authority
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "path", {
            get: function () {
                return this._path
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "query", {
            get: function () {
                return this._query
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fragment", {
            get: function () {
                return this._fragment
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "fsPath", {
            get: function () {
                if (!this._fsPath) {
                    var t;
                    t = this._authority && "file" === this.scheme ? "//" + this._authority + this._path : e._driveLetterPath.test(this._path) ? this._path[1].toLowerCase() + this._path.substr(2) : this._path, a && (t = t.replace(/\//g, "\\")), this._fsPath = t
                }
                return this._fsPath
            }, enumerable: !0, configurable: !0
        }), e.prototype["with"] = function (t) {
            if (!t)return this;
            var n = t.scheme || this.scheme, r = t.authority || this.authority, i = t.path || this.path, o = t.query || this.query, a = t.fragment || this.fragment;
            if (n === this.scheme && r === this.authority && i === this.path && o === this.query && a === this.fragment)return this;
            var s = new e;
            return s._scheme = n, s._authority = r, s._path = i, s._query = o, s._fragment = a, e._validate(s), s
        }, e.from = function (t) {
            if (!t)throw new Error;
            return (new e)["with"](t)
        }, e.parse = function (t) {
            var n = new e, r = e._parseComponents(t);
            return n._scheme = r.scheme, n._authority = decodeURIComponent(r.authority), n._path = decodeURIComponent(r.path), n._query = decodeURIComponent(r.query), n._fragment = decodeURIComponent(r.fragment), e._validate(n), n
        }, e.file = function (t) {
            var n = new e;
            if (n._scheme = "file", t = t.replace(/\\/g, e._slash), t[0] === e._slash && t[0] === t[1]) {
                var r = t.indexOf(e._slash, 2);
                r === -1 ? n._authority = t.substring(2) : (n._authority = t.substring(2, r), n._path = t.substring(r))
            } else n._path = t;
            return n._path[0] !== e._slash && (n._path = e._slash + n._path), e._validate(n), n
        }, e._parseComponents = function (t) {
            var n = {
                scheme: e._empty,
                authority: e._empty,
                path: e._empty,
                query: e._empty,
                fragment: e._empty
            }, r = e._regexp.exec(t);
            return r && (n.scheme = r[2] || n.scheme, n.authority = r[4] || n.authority, n.path = r[5] || n.path, n.query = r[7] || n.query, n.fragment = r[9] || n.fragment), n
        }, e._validate = function (e) {
            if (e.authority && e.path && "/" !== e.path[0])throw new Error('[UriError]: If a Uri contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            if (!e.authority && 0 === e.path.indexOf("//"))throw new Error('[UriError]: If a Uri does not contain an authority component, then the path cannot begin with two slash characters ("//")')
        }, e.prototype.toString = function (t) {
            return void 0 === t && (t = !1), t ? e._asFormatted(this, !0) : (this._formatted || (this._formatted = e._asFormatted(this, !1)), this._formatted)
        }, e._asFormatted = function (t, o) {
            var a = o ? i : r, s = "", c = t.scheme, u = t.authority, l = t.path, f = t.query, p = t.fragment;
            if (c && (s += c, s += ":"), (u || "file" === c) && (s += "//"), u) {
                u = u.toLowerCase();
                var d = u.indexOf(":");
                d === -1 ? s += a(u) : (s += a(u.substr(0, d)), s += u.substr(d))
            }
            if (l) {
                var h = e._upperCaseDrive.exec(l);
                h && (l = h[1] + h[2].toLowerCase() + l.substr(h[1].length + h[2].length));
                for (var m = 0; ;) {
                    var d = l.indexOf(e._slash, m);
                    if (d === -1) {
                        s += a(l.substring(m)).replace(/[#?]/, n);
                        break
                    }
                    s += a(l.substring(m, d)).replace(/[#?]/, n), s += e._slash, m = d + 1
                }
            }
            return f && (s += "?", s += a(f)), p && (s += "#", s += a(p)), s
        }, e.prototype.toJSON = function () {
            return {
                scheme: this.scheme,
                authority: this.authority,
                path: this.path,
                fsPath: this.fsPath,
                query: this.query,
                fragment: this.fragment
            }
        }, e._empty = "", e._slash = "/", e._regexp = /^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, e._driveLetterPath = /^\/[a-zA-z]:/, e._upperCaseDrive = /^(\/)?([A-Z]:)/, e
    }();
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
    var a;
    if ("object" == typeof process)a = "win32" === process.platform; else if ("object" == typeof navigator) {
        var s = navigator.userAgent;
        a = s.indexOf("Windows") >= 0
    }
}), define("vscode-uri", ["vscode-uri/index"], function (e) {
    return e
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/services/jsonSchemaService", ["require", "exports", "jsonc-parser", "vscode-uri", "../utils/strings", "vscode-nls"], e)
}(function (e, t) {
    function n(e) {
        try {
            var t = i["default"].parse(e);
            if ("file" === t.scheme)return t.fsPath
        } catch (n) {
        }
        return e
    }

    var r = e("jsonc-parser"), i = e("vscode-uri"), o = e("../utils/strings"), a = e("vscode-nls"), s = a.loadMessageBundle(), c = function () {
        function e(e) {
            this.combinedSchemaId = "schemaservice://combinedSchema/" + encodeURIComponent(e);
            try {
                this.patternRegExp = new RegExp(o.convertSimple2RegExpPattern(e) + "$")
            } catch (t) {
                this.patternRegExp = null
            }
            this.schemas = [], this.combinedSchema = null
        }

        return e.prototype.addSchema = function (e) {
            this.schemas.push(e), this.combinedSchema = null
        }, e.prototype.matchesPattern = function (e) {
            return this.patternRegExp && this.patternRegExp.test(e)
        }, e.prototype.getCombinedSchema = function (e) {
            return this.combinedSchema || (this.combinedSchema = e.createCombinedSchema(this.combinedSchemaId, this.schemas)), this.combinedSchema
        }, e
    }(), u = function () {
        function e(e, t, n) {
            this.service = e, this.url = t, n && (this.unresolvedSchema = this.service.promise.resolve(new l(n)))
        }

        return e.prototype.getUnresolvedSchema = function () {
            return this.unresolvedSchema || (this.unresolvedSchema = this.service.loadSchema(this.url)), this.unresolvedSchema
        }, e.prototype.getResolvedSchema = function () {
            var e = this;
            return this.resolvedSchema || (this.resolvedSchema = this.getUnresolvedSchema().then(function (t) {
                return e.service.resolveSchemaContent(t, e.url)
            })), this.resolvedSchema
        }, e.prototype.clearSchema = function () {
            this.resolvedSchema = null, this.unresolvedSchema = null
        }, e
    }(), l = function () {
        function e(e, t) {
            void 0 === t && (t = []), this.schema = e, this.errors = t
        }

        return e
    }();
    t.UnresolvedSchema = l;
    var f = function () {
        function e(e, t) {
            void 0 === t && (t = []), this.schema = e, this.errors = t
        }

        return e.prototype.getSection = function (e) {
            return this.getSectionRecursive(e, this.schema)
        }, e.prototype.getSectionRecursive = function (e, t) {
            var n = this;
            if (!t || 0 === e.length)return t;
            var r = e.shift();
            if (t.properties && t.properties[r])return this.getSectionRecursive(e, t.properties[r]);
            if (t.patternProperties)Object.keys(t.patternProperties).forEach(function (i) {
                var o = new RegExp(i);
                if (o.test(r))return n.getSectionRecursive(e, t.patternProperties[i])
            }); else {
                if (t.additionalProperties)return this.getSectionRecursive(e, t.additionalProperties);
                if (r.match("[0-9]+")) {
                    if (t.items)return this.getSectionRecursive(e, t.items);
                    if (Array.isArray(t.items))try {
                        var i = parseInt(r, 10);
                        return t.items[i] ? this.getSectionRecursive(e, t.items[i]) : null
                    } catch (o) {
                        return null
                    }
                }
            }
            return null
        }, e
    }();
    t.ResolvedSchema = f;
    var p = function () {
        function e(e, t, n) {
            this.contextService = t, this.requestService = e, this.promiseConstructor = n || Promise, this.callOnDispose = [], this.contributionSchemas = {}, this.contributionAssociations = {}, this.schemasById = {}, this.filePatternAssociations = [], this.filePatternAssociationById = {}, this.registeredSchemasIds = {}
        }

        return e.prototype.getRegisteredSchemaIds = function (e) {
            return Object.keys(this.registeredSchemasIds).filter(function (t) {
                var n = i["default"].parse(t).scheme;
                return "schemaservice" !== n && (!e || e(n))
            })
        }, Object.defineProperty(e.prototype, "promise", {
            get: function () {
                return this.promiseConstructor
            }, enumerable: !0, configurable: !0
        }), e.prototype.dispose = function () {
            for (; this.callOnDispose.length > 0;)this.callOnDispose.pop()()
        }, e.prototype.onResourceChange = function (e) {
            e = this.normalizeId(e);
            var t = this.schemasById[e];
            return !!t && (t.clearSchema(), !0)
        }, e.prototype.normalizeId = function (e) {
            return i["default"].parse(e).toString()
        }, e.prototype.setSchemaContributions = function (e) {
            var t = this;
            if (e.schemas) {
                var n = e.schemas;
                for (var r in n) {
                    var i = this.normalizeId(r);
                    this.contributionSchemas[i] = this.addSchemaHandle(i, n[r])
                }
            }
            if (e.schemaAssociations) {
                var o = e.schemaAssociations;
                for (var a in o) {
                    var s = o[a];
                    this.contributionAssociations[a] = s;
                    var c = this.getOrAddFilePatternAssociation(a);
                    s.forEach(function (e) {
                        var n = t.normalizeId(e);
                        c.addSchema(n)
                    })
                }
            }
        }, e.prototype.addSchemaHandle = function (e, t) {
            var n = new u(this, e, t);
            return this.schemasById[e] = n, n
        }, e.prototype.getOrAddSchemaHandle = function (e, t) {
            return this.schemasById[e] || this.addSchemaHandle(e, t)
        }, e.prototype.getOrAddFilePatternAssociation = function (e) {
            var t = this.filePatternAssociationById[e];
            return t || (t = new c(e), this.filePatternAssociationById[e] = t, this.filePatternAssociations.push(t)), t
        }, e.prototype.registerExternalSchema = function (e, t, n) {
            var r = this;
            void 0 === t && (t = null);
            var i = this.normalizeId(e);
            return this.registeredSchemasIds[i] = !0, t && t.forEach(function (e) {
                r.getOrAddFilePatternAssociation(e).addSchema(i)
            }), n ? this.addSchemaHandle(i, n) : this.getOrAddSchemaHandle(i)
        }, e.prototype.clearExternalSchemas = function () {
            var e = this;
            this.schemasById = {}, this.filePatternAssociations = [], this.filePatternAssociationById = {}, this.registeredSchemasIds = {};
            for (var t in this.contributionSchemas)this.schemasById[t] = this.contributionSchemas[t], this.registeredSchemasIds[t] = !0;
            for (var n in this.contributionAssociations) {
                var r = this.getOrAddFilePatternAssociation(n);
                this.contributionAssociations[n].forEach(function (t) {
                    var n = e.normalizeId(t);
                    r.addSchema(n)
                })
            }
        }, e.prototype.getResolvedSchema = function (e) {
            var t = this.normalizeId(e), n = this.schemasById[t];
            return n ? n.getResolvedSchema() : this.promise.resolve(null)
        }, e.prototype.loadSchema = function (e) {
            if (!this.requestService) {
                var t = s("json.schema.norequestservice", "Unable to load schema from '{0}'. No schema request service available", n(e));
                return this.promise.resolve(new l({}, [t]))
            }
            return this.requestService(e).then(function (t) {
                if (!t) {
                    var i = s("json.schema.nocontent", "Unable to load schema from '{0}': No content.", n(e));
                    return new l({}, [i])
                }
                var o = {}, a = [];
                o = r.parse(t, a);
                var c = a.length ? [s("json.schema.invalidFormat", "Unable to parse content from '{0}': {1}.", n(e), r.getParseErrorMessage(a[0]))] : [];
                return new l(o, c)
            }, function (t) {
                var r = s("json.schema.unabletoload", "Unable to load schema from '{0}': {1}", n(e), t.toString());
                return new l({}, [r])
            })
        }, e.prototype.resolveSchemaContent = function (e, t) {
            var n = this, r = e.errors.slice(0), i = e.schema, o = this.contextService, a = function (e, t) {
                if (!t)return e;
                var n = e;
                return "/" === t[0] && (t = t.substr(1)), t.split("/").some(function (e) {
                    return n = n[e], !n
                }), n
            }, c = function (e, t, n) {
                var i = a(t, n);
                if (i)for (var o in i)i.hasOwnProperty(o) && !e.hasOwnProperty(o) && (e[o] = i[o]); else r.push(s("json.schema.invalidref", "$ref '{0}' in {1} can not be resolved.", n, t.id));
                delete e.$ref
            }, u = function (e, t, i, a) {
                return o && !/^\w+:\/\/.*/.test(t) && (t = o.resolveRelativePath(t, a)), t = n.normalizeId(t), n.getOrAddSchemaHandle(t).getUnresolvedSchema().then(function (n) {
                    if (n.errors.length) {
                        var o = i ? t + "#" + i : t;
                        r.push(s("json.schema.problemloadingref", "Problems loading reference '{0}': {1}", o, n.errors[0]))
                    }
                    return c(e, n.schema, i), l(e, n.schema, t)
                })
            }, l = function (e, t, r) {
                for (var i = [e], o = [], a = [], s = function () {
                    for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                    for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        "object" == typeof o && i.push(o)
                    }
                }, l = function () {
                    for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                    for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        if ("object" == typeof o)for (var a in o) {
                            var s = o[a];
                            i.push(s)
                        }
                    }
                }, f = function () {
                    for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                    for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        Array.isArray(o) && i.push.apply(i, o)
                    }
                }; i.length;) {
                    var p = i.pop();
                    if (!(o.indexOf(p) >= 0)) {
                        if (o.push(p), p.$ref) {
                            var d = p.$ref.split("#", 2);
                            if (d[0].length > 0) {
                                a.push(u(p, d[0], d[1], r));
                                continue
                            }
                            c(p, t, d[1])
                        }
                        s(p.items, p.additionalProperties, p.not), l(p.definitions, p.properties, p.patternProperties, p.dependencies), f(p.anyOf, p.allOf, p.oneOf, p.items)
                    }
                }
                return n.promise.all(a)
            };
            return l(i, i, t).then(function (e) {
                return new f(i, r)
            })
        }, e.prototype.getSchemaForResource = function (e, t) {
            if (t && t.root && "object" === t.root.type) {
                var n = t.root.properties.filter(function (e) {
                    return "$schema" === e.key.value && !!e.value
                });
                if (n.length > 0) {
                    var r = n[0].value.getValue();
                    if (o.startsWith(r, ".") && this.contextService && (r = this.contextService.resolveRelativePath(r, e)), r) {
                        var i = this.normalizeId(r);
                        return this.getOrAddSchemaHandle(i).getResolvedSchema()
                    }
                }
            }
            for (var a = this.filePatternAssociations.length - 1; a >= 0; a--) {
                var s = this.filePatternAssociations[a];
                if (s.matchesPattern(e))return s.getCombinedSchema(this).getResolvedSchema()
            }
            return this.promise.resolve(null)
        }, e.prototype.createCombinedSchema = function (e, t) {
            if (1 === t.length)return this.getOrAddSchemaHandle(t[0]);
            var n = {
                allOf: t.map(function (e) {
                    return {$ref: e}
                })
            };
            return this.addSchemaHandle(e, n)
        }, e
    }();
    t.JSONSchemaService = p
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/services/jsonFormatter", ["require", "exports", "jsonc-parser", "vscode-languageserver-types"], e)
}(function (e, t) {
    function n(e, t, n) {
        function u() {
            return T + r(S, p + C)
        }

        function l() {
            var e = O.scan();
            for (k = !1; e === s.SyntaxKind.Trivia || e === s.SyntaxKind.LineBreakTrivia;)k = k || e === s.SyntaxKind.LineBreakTrivia, e = O.scan();
            return e
        }

        function f(t, n, r) {
            if (n < g && r > m && v.substring(n, r) !== t) {
                var i = c.Range.create(e.positionAt(n), e.positionAt(r));
                E.push(c.TextEdit.replace(i, t))
            }
        }

        var p, d, h, m, g, v = e.getText();
        if (t) {
            m = e.offsetAt(t.start), g = e.offsetAt(t.end);
            var y = c.Position.create(t.start.line, 0);
            h = e.offsetAt(y);
            for (var x = e.offsetAt(c.Position.create(t.end.line + 1, 0)), b = e.offsetAt(c.Position.create(t.end.line, 0)); x > b && a(v, x - 1);)x--;
            t = c.Range.create(y, e.positionAt(x)), d = v.substring(h, x), p = i(d, 0, n)
        } else d = v, t = c.Range.create(c.Position.create(0, 0), e.positionAt(d.length)), p = 0, h = 0, m = 0, g = v.length;
        var S, T = o(e), k = !1, C = 0;
        S = n.insertSpaces ? r(" ", n.tabSize) : "\t";
        var O = s.createScanner(d, !1), E = [], j = l();
        if (j !== s.SyntaxKind.EOF) {
            var I = O.getTokenOffset() + h, w = r(S, p);
            f(w, h, I)
        }
        for (; j !== s.SyntaxKind.EOF;) {
            for (var A = O.getTokenOffset() + O.getTokenLength() + h, P = l(), V = ""; !k && (P === s.SyntaxKind.LineCommentTrivia || P === s.SyntaxKind.BlockCommentTrivia);) {
                var F = O.getTokenOffset() + h;
                f(" ", A, F), A = O.getTokenOffset() + O.getTokenLength() + h, V = P === s.SyntaxKind.LineCommentTrivia ? u() : "", P = l()
            }
            if (P === s.SyntaxKind.CloseBraceToken)j !== s.SyntaxKind.OpenBraceToken && (C--, V = u()); else if (P === s.SyntaxKind.CloseBracketToken)j !== s.SyntaxKind.OpenBracketToken && (C--, V = u()); else {
                switch (j) {
                    case s.SyntaxKind.OpenBracketToken:
                    case s.SyntaxKind.OpenBraceToken:
                        C++, V = u();
                        break;
                    case s.SyntaxKind.CommaToken:
                    case s.SyntaxKind.LineCommentTrivia:
                        V = u();
                        break;
                    case s.SyntaxKind.BlockCommentTrivia:
                        V = k ? u() : " ";
                        break;
                    case s.SyntaxKind.ColonToken:
                        V = " ";
                        break;
                    case s.SyntaxKind.NullKeyword:
                    case s.SyntaxKind.TrueKeyword:
                    case s.SyntaxKind.FalseKeyword:
                    case s.SyntaxKind.NumericLiteral:
                        P !== s.SyntaxKind.NullKeyword && P !== s.SyntaxKind.FalseKeyword && P !== s.SyntaxKind.NumericLiteral || (V = " ")
                }
                !k || P !== s.SyntaxKind.LineCommentTrivia && P !== s.SyntaxKind.BlockCommentTrivia || (V = u())
            }
            var _ = O.getTokenOffset() + h;
            f(V, A, _), j = P
        }
        return E
    }

    function r(e, t) {
        for (var n = "", r = 0; r < t; r++)n += e;
        return n
    }

    function i(e, t, n) {
        for (var r = 0, i = 0, o = n.tabSize || 4; r < e.length;) {
            var a = e.charAt(r);
            if (" " === a)i++; else {
                if ("\t" !== a)break;
                i += o
            }
            r++
        }
        return Math.floor(i / o)
    }

    function o(e) {
        var t = e.getText();
        if (e.lineCount > 1) {
            for (var n = e.offsetAt(c.Position.create(1, 0)), r = n; r > 0 && a(t, r - 1);)r--;
            return t.substr(r, n - r)
        }
        return "\n"
    }

    function a(e, t) {
        return "\r\n".indexOf(e.charAt(t)) !== -1
    }

    var s = e("jsonc-parser"), c = e("vscode-languageserver-types");
    t.format = n
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vscode-json-languageservice/jsonLanguageService", ["require", "exports", "vscode-languageserver-types", "./services/jsonCompletion", "./services/jsonHover", "./services/jsonValidation", "./services/jsonDocumentSymbols", "./parser/jsonParser", "./services/configuration", "./services/jsonSchemaService", "./services/jsonFormatter"], e)
}(function (e, t) {
    function n(e) {
        var t = e.promiseConstructor || Promise, n = new l.JSONSchemaService(e.schemaRequestService, e.workspaceContext, t);
        n.setSchemaContributions(u.schemaContributions);
        var r = new i.JSONCompletion(n, e.contributions, t), p = new o.JSONHover(n, e.contributions, t), d = new s.JSONDocumentSymbols, h = new a.JSONValidation(n, t), m = !1;
        return {
            configure: function (e) {
                n.clearExternalSchemas(), e.schemas && e.schemas.forEach(function (e) {
                    n.registerExternalSchema(e.uri, e.fileMatch, e.schema)
                }), h.configure(e), m = e && !e.allowComments
            },
            resetSchema: function (e) {
                return n.onResourceChange(e)
            },
            doValidation: h.doValidation.bind(h),
            parseJSONDocument: function (e) {
                return c.parse(e.getText(), {disallowComments: m})
            },
            doResolve: r.doResolve.bind(r),
            doComplete: r.doComplete.bind(r),
            findDocumentSymbols: d.findDocumentSymbols.bind(d),
            doHover: p.doHover.bind(p),
            format: f.format
        }
    }

    var r = e("vscode-languageserver-types");
    t.TextDocument = r.TextDocument, t.Position = r.Position, t.CompletionItem = r.CompletionItem, t.CompletionList = r.CompletionList, t.Range = r.Range, t.SymbolInformation = r.SymbolInformation, t.Diagnostic = r.Diagnostic, t.TextEdit = r.TextEdit, t.FormattingOptions = r.FormattingOptions, t.MarkedString = r.MarkedString;
    var i = e("./services/jsonCompletion"), o = e("./services/jsonHover"), a = e("./services/jsonValidation"), s = e("./services/jsonDocumentSymbols"), c = e("./parser/jsonParser"), u = e("./services/configuration"), l = e("./services/jsonSchemaService"), f = e("./services/jsonFormatter");
    t.getLanguageService = n
}), define("vscode-json-languageservice", ["vscode-json-languageservice/jsonLanguageService"], function (e) {
    return e
}), function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
        var t = e(require, exports);
        void 0 !== t && (module.exports = t)
    } else"function" == typeof define && define.amd && define("vs/language/json/jsonWorker", ["require", "exports", "vscode-json-languageservice", "vscode-languageserver-types"], e)
}(function (e, t) {
    function n(e, t) {
        return new s(e, t)
    }

    var r = monaco.Promise, i = e("vscode-json-languageservice"), o = e("vscode-languageserver-types"), a = function () {
        function e(e) {
            this.wrapped = new monaco.Promise(e)
        }

        return e.prototype.then = function (e, t) {
            return this.wrapped.then(e, t)
        }, e.prototype.getWrapped = function () {
            return this.wrapped
        }, e.prototype.cancel = function () {
            this.wrapped.cancel()
        }, e.resolve = function (e) {
            return monaco.Promise.as(e)
        }, e.reject = function (e) {
            return monaco.Promise.wrapError(e)
        }, e.all = function (e) {
            return monaco.Promise.join(e)
        }, e
    }(), s = function () {
        function e(e, t) {
            this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageService = i.getLanguageService({promiseConstructor: a}), this._languageService.configure(this._languageSettings)
        }

        return e.prototype.doValidation = function (e) {
            var t = this._getTextDocument(e), n = this._languageService.parseJSONDocument(t);
            return this._languageService.doValidation(t, n)
        }, e.prototype.doComplete = function (e, t) {
            var n = this._getTextDocument(e), r = this._languageService.parseJSONDocument(n);
            return this._languageService.doComplete(n, t, r)
        }, e.prototype.doResolve = function (e) {
            return this._languageService.doResolve(e)
        }, e.prototype.doHover = function (e, t) {
            var n = this._getTextDocument(e), r = this._languageService.parseJSONDocument(n);
            return this._languageService.doHover(n, t, r)
        }, e.prototype.format = function (e, t, n) {
            var i = this._getTextDocument(e), o = this._languageService.format(i, t, n);
            return r.as(o)
        }, e.prototype.resetSchema = function (e) {
            return r.as(this._languageService.resetSchema(e))
        }, e.prototype.findDocumentSymbols = function (e) {
            var t = this._getTextDocument(e), n = this._languageService.parseJSONDocument(t), i = this._languageService.findDocumentSymbols(t, n);
            return r.as(i)
        }, e.prototype._getTextDocument = function (e) {
            for (var t = this._ctx.getMirrorModels(), n = 0, r = t; n < r.length; n++) {
                var i = r[n];
                if (i.uri.toString() === e)return o.TextDocument.create(e, this._languageId, i.version, i.getValue())
            }
            return null
        }, e
    }();
    t.JSONWorker = s, t.create = n
});