/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.7.0(18916e97a4ff0f1b195d68d01d632631cc84d50e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/fsharp", ["require", "exports"], function (e, t) {
    t.conf = {
        comments: {lineComment: "//", blockComment: ["(*", "*)"]},
        brackets: [["{", "}"], ["[", "]"], ["(", ")"], ["<", ">"]],
        autoClosingPairs: [{open: "{", close: "}", notIn: ["string", "comment"]}, {
            open: "[",
            close: "]",
            notIn: ["string", "comment"]
        }, {open: "(", close: ")", notIn: ["string", "comment"]}, {open: '"', close: '"', notIn: ["string", "comment"]}]
    }, t.language = {
        defaultToken: "",
        tokenPostfix: ".fs",
        keywords: ["abstract", "and", "atomic", "as", "assert", "asr", "base", "begin", "break", "checked", "component", "const", "constraint", "constructor", "continue", "class", "default", "delegate", "do", "done", "downcast", "downto", "elif", "else", "end", "exception", "eager", "event", "external", "extern", "false", "finally", "for", "fun", "function", "fixed", "functor", "global", "if", "in", "include", "inherit", "inline", "interface", "internal", "land", "lor", "lsl", "lsr", "lxor", "lazy", "let", "match", "member", "mod", "module", "mutable", "namespace", "method", "mixin", "new", "not", "null", "of", "open", "or", "object", "override", "private", "parallel", "process", "protected", "pure", "public", "rec", "return", "static", "sealed", "struct", "sig", "then", "to", "true", "tailcall", "trait", "try", "type", "upcast", "use", "val", "void", "virtual", "volatile", "when", "while", "with", "yield"],
        symbols: /[=><!~?:&|+\-*\^%;\.,\/]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        integersuffix: /[uU]?[yslnLI]?/,
        floatsuffix: /[fFmM]?/,
        tokenizer: {
            root: [[/[a-zA-Z_]\w*/, {
                cases: {
                    "@keywords": {token: "keyword.$0"},
                    "@default": "identifier"
                }
            }], {include: "@whitespace"}, [/\[<.*>\]/, "annotation"], [/^#(if|else|endif)/, "keyword"], [/[{}()\[\]]/, "@brackets"], [/[<>](?!@symbols)/, "@brackets"], [/@symbols/, "delimiter"], [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, "number.float"], [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, "number.float"], [/0x[0-9a-fA-F]+LF/, "number.float"], [/0x[0-9a-fA-F]+(@integersuffix)/, "number.hex"], [/0b[0-1]+(@integersuffix)/, "number.bin"], [/\d+(@integersuffix)/, "number"], [/[;,.]/, "delimiter"], [/"([^"\\]|\\.)*$/, "string.invalid"], [/"""/, "string", '@string."""'], [/"/, "string", '@string."'], [/\@"/, {
                token: "string.quote",
                next: "@litstring"
            }], [/'[^\\']'B?/, "string"], [/(')(@escapes)(')/, ["string", "string.escape", "string"]], [/'/, "string.invalid"]],
            whitespace: [[/[ \t\r\n]+/, ""], [/\(\*/, "comment", "@comment"], [/\/\/.*$/, "comment"]],
            comment: [[/[^\*]+/, "comment"], [/\*\)/, "comment", "@pop"], [/\*/, "comment"]],
            string: [[/[^\\"]+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/("""|"B?)/, {
                cases: {
                    "$#==$S2": {
                        token: "string",
                        next: "@pop"
                    }, "@default": "string"
                }
            }]],
            litstring: [[/[^"]+/, "string"], [/""/, "string.escape"], [/"/, {token: "string.quote", next: "@pop"}]]
        }
    }
});