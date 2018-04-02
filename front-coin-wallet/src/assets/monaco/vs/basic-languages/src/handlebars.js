/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.7.0(18916e97a4ff0f1b195d68d01d632631cc84d50e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/handlebars", ["require", "exports"], function (e, t) {
    var n = "undefined" == typeof monaco ? self.monaco : monaco, a = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
    t.conf = {
        wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
        comments: {blockComment: ["{{!--", "--}}"]},
        brackets: [["<!--", "-->"], ["{{", "}}"], ["<", ">"], ["{", "}"], ["(", ")"]],
        autoClosingPairs: [{open: "{", close: "}"}, {open: "[", close: "]"}, {open: "(", close: ")"}, {
            open: '"',
            close: '"'
        }, {open: "'", close: "'"}],
        surroundingPairs: [{open: "<", close: ">"}, {open: '"', close: '"'}, {open: "'", close: "'"}],
        onEnterRules: [{
            beforeText: new RegExp("<(?!(?:" + a.join("|") + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {indentAction: n.languages.IndentAction.IndentOutdent}
        }, {
            beforeText: new RegExp("<(?!(?:" + a.join("|") + "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            action: {indentAction: n.languages.IndentAction.Indent}
        }]
    }, t.htmlTokenTypes = {
        DELIM_START: "delimiter.html",
        DELIM_END: "delimiter.html",
        DELIM_COMMENT: "comment.html",
        COMMENT: "comment.content.html",
        getTag: function (e) {
            return "tag.html"
        }
    }, t.language = {
        defaultToken: "",
        tokenPostfix: "",
        tokenizer: {
            root: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.root"
            }], [/<!DOCTYPE/, "metatag.html", "@doctype"], [/<!--/, "comment.html", "@comment"], [/(<)(\w+)(\/>)/, [t.htmlTokenTypes.DELIM_START, "tag.html", t.htmlTokenTypes.DELIM_END]], [/(<)(script)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag.html",
                next: "@script"
            }]], [/(<)(style)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag.html",
                next: "@style"
            }]], [/(<)([:\w]+)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag.html",
                next: "@otherTag"
            }]], [/(<\/)(\w+)/, [t.htmlTokenTypes.DELIM_START, {
                token: "tag.html",
                next: "@otherTag"
            }]], [/</, t.htmlTokenTypes.DELIM_START], [/\{/, t.htmlTokenTypes.DELIM_START], [/[^<{]+/]],
            doctype: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.comment"
            }], [/[^>]+/, "metatag.content.html"], [/>/, "metatag.html", "@pop"]],
            comment: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.comment"
            }], [/-->/, "comment.html", "@pop"], [/[^-]+/, "comment.content.html"], [/./, "comment.content.html"]],
            otherTag: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.otherTag"
            }], [/\/?>/, t.htmlTokenTypes.DELIM_END, "@pop"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/]],
            script: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.script"
            }], [/type/, "attribute.name", "@scriptAfterType"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@scriptEmbedded.text/javascript",
                nextEmbedded: "text/javascript"
            }], [/[ \t\r\n]+/], [/(<\/)(script\s*)(>)/, [t.htmlTokenTypes.DELIM_START, "tag.html", {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@pop"
            }]]],
            scriptAfterType: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.scriptAfterType"
            }], [/=/, "delimiter", "@scriptAfterTypeEquals"], [/[ \t\r\n]+/], [/<\/script\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            scriptAfterTypeEquals: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.scriptAfterTypeEquals"
            }], [/"([^"]*)"/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.$1"
            }], [/'([^']*)'/, {
                token: "attribute.value",
                switchTo: "@scriptWithCustomType.$1"
            }], [/[ \t\r\n]+/], [/<\/script\s*>/, {token: "@rematch", next: "@pop"}]],
            scriptWithCustomType: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.scriptWithCustomType.$S2"
            }], [/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@scriptEmbedded.$S2",
                nextEmbedded: "$S2"
            }], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/], [/<\/script\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            scriptEmbedded: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInEmbeddedState.scriptEmbedded.$S2",
                nextEmbedded: "@pop"
            }], [/<\/script/, {token: "@rematch", next: "@pop", nextEmbedded: "@pop"}]],
            style: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.style"
            }], [/type/, "attribute.name", "@styleAfterType"], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@styleEmbedded.text/css",
                nextEmbedded: "text/css"
            }], [/[ \t\r\n]+/], [/(<\/)(style\s*)(>)/, [t.htmlTokenTypes.DELIM_START, "tag.html", {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@pop"
            }]]],
            styleAfterType: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.styleAfterType"
            }], [/=/, "delimiter", "@styleAfterTypeEquals"], [/[ \t\r\n]+/], [/<\/style\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            styleAfterTypeEquals: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.styleAfterTypeEquals"
            }], [/"([^"]*)"/, {
                token: "attribute.value",
                switchTo: "@styleWithCustomType.$1"
            }], [/'([^']*)'/, {
                token: "attribute.value",
                switchTo: "@styleWithCustomType.$1"
            }], [/[ \t\r\n]+/], [/<\/style\s*>/, {token: "@rematch", next: "@pop"}]],
            styleWithCustomType: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInSimpleState.styleWithCustomType.$S2"
            }], [/>/, {
                token: t.htmlTokenTypes.DELIM_END,
                next: "@styleEmbedded.$S2",
                nextEmbedded: "$S2"
            }], [/"([^"]*)"/, "attribute.value"], [/'([^']*)'/, "attribute.value"], [/[\w\-]+/, "attribute.name"], [/=/, "delimiter"], [/[ \t\r\n]+/], [/<\/style\s*>/, {
                token: "@rematch",
                next: "@pop"
            }]],
            styleEmbedded: [[/\{\{/, {
                token: "@rematch",
                switchTo: "@handlebarsInEmbeddedState.styleEmbedded.$S2",
                nextEmbedded: "@pop"
            }], [/<\/style/, {token: "@rematch", next: "@pop", nextEmbedded: "@pop"}]],
            handlebarsInSimpleState: [[/\{\{\{?/, "delimiter.handlebars"], [/\}\}\}?/, {
                token: "delimiter.handlebars",
                switchTo: "@$S2.$S3"
            }], {include: "handlebarsRoot"}],
            handlebarsInEmbeddedState: [[/\{\{\{?/, "delimiter.handlebars"], [/\}\}\}?/, {
                token: "delimiter.handlebars",
                switchTo: "@$S2.$S3",
                nextEmbedded: "$S3"
            }], {include: "handlebarsRoot"}],
            handlebarsRoot: [[/[#\/][^\s}]+/, "keyword.helper.handlebars"], [/else\b/, "keyword.helper.handlebars"], [/[\s]+/], [/[^}]/, "variable.parameter.handlebars"]]
        }
    }
});