/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.7.0(18916e97a4ff0f1b195d68d01d632631cc84d50e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/html", ["require", "exports"], function (e, t) {
    var n = "undefined" == typeof monaco ? self.monaco : monaco, o = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
    t.conf = {
        wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
        comments: {blockComment: ["<!--", "-->"]},
        brackets: [["<!--", "-->"], ["<", ">"], ["{", "}"], ["(", ")"]],
        autoClosingPairs: [{open: "{", close: "}"}, {open: "[", close: "]"}, {open: "(", close: ")"}, {
            open: '"',
            close: '"'
        }, {open: "'", close: "'"}],
        surroundingPairs: [{open: '"', close: '"'}, {open: "'", close: "'"}, {open: "{", close: "}"}, {
            open: "[",
            close: "]"
        }, {open: "(", close: ")"}, {open: "<", close: ">"}],
        onEnterRules: [{
            beforeText: new RegExp("<(?!(?:" + o.join("|") + "))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {indentAction: n.languages.IndentAction.IndentOutdent}
        }, {
            beforeText: new RegExp("<(?!(?:" + o.join("|") + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            action: {indentAction: n.languages.IndentAction.Indent}
        }]
    }, t.htmlTokenTypes = {
        DELIM_START: "delimiter",
        DELIM_END: "delimiter",
        DELIM_COMMENT: "comment",
        getTag: function (e) {
            return "tag"
        }
    }, t.language = {
        defaultToken: "",
        tokenPostfix: ".html",
        ignoreCase: !0,
        tokenizer: {
            root: [[/<!DOCTYPE/, "metatag", "@doctype"], [/<!--/, "comment", "@comment"], [/(<)(\w+)(\/>)/, [t.htmlTokenTypes.DELIM_START, "tag", t.htmlTokenTypes.DELIM_END]], [/(<)(script)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag",
                next: "@script"
            }]], [/(<)(style)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag",
                next: "@style"
            }]], [/(<)([:\w]+)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag",
                next: "@otherTag"
            }]], [/(<\/)(\w+)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag",
                next: "@otherTag"
            }]], [/</, t.htmlTokenTypes.DELIM_START], [/[^<]+/]],
            doctype: [[/[^>]+/, "metatag.content"], [/>/, "metatag", "@pop"]],
            comment: [[/-->/, "comment", "@pop"], [/[^-]+/, "comment.content"], [/./, "comment.content"]],
            otherTag: [[/\/?>/, t.htmlTokenTypes.DELIM_END, "@pop"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/]],
            script: [[/type/, "attribute.name", "@scriptAfterType"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@scriptEmbedded",
                nextEmbedded: "text/javascript"
            }], [/[ \t\r\n]+/], [/(<\/)(script\s*)(>)/, [t.htmlTokenTypes.DELIM_START, "tag", {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@pop"
            }]]],
            scriptAfterType: [[/=/, "delimiter", "@scriptAfterTypeEquals"], [/[ \t\r\n]+/], [/<\/script\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            scriptAfterTypeEquals: [[/"([^"]*)"/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.$1"
            }], [/'([^']*)'/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.$1"
            }], [/[ \t\r\n]+/], [/<\/script\s*>/, {token: "@rematch", next: "@pop"}]],
            scriptWithCustomType: [[/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@scriptEmbedded.$S2",
                nextEmbedded: "$S2"
            }], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/], [/<\/script\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            scriptEmbedded: [[/<\/script/, {token: "@rematch", next: "@pop", nextEmbedded: "@pop"}], [/[^<]+/, ""]],
            style: [[/type/, "attribute.name", "@styleAfterType"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@styleEmbedded",
                nextEmbedded: "text/css"
            }], [/[ \t\r\n]+/], [/(<\/)(style\s*)(>)/, [t.htmlTokenTypes.DELIM_START, "tag", {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@pop"
            }]]],
            styleAfterType: [[/=/, "delimiter", "@styleAfterTypeEquals"], [/[ \t\r\n]+/], [/<\/style\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            styleAfterTypeEquals: [[/"([^"]*)"/, {
                token: "attribute.value",
                switchTo: "@styleWithCustomType.$1"
            }], [/'([^']*)'/, {
                token: "attribute.value",
                switchTo: "@styleWithCustomType.$1"
            }], [/[ \t\r\n]+/], [/<\/style\s*>/, {token: "@rematch", next: "@pop"}]],
            styleWithCustomType: [[/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@styleEmbedded.$S2",
                nextEmbedded: "$S2"
            }], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/], [/<\/style\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            styleEmbedded: [[/<\/style/, {token: "@rematch", next: "@pop", nextEmbedded: "@pop"}], [/[^<]+/, ""]]
        }
    }
});