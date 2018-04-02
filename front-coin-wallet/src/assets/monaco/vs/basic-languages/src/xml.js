/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.7.0(18916e97a4ff0f1b195d68d01d632631cc84d50e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/xml", ["require", "exports"], function (e, t) {
    t.conf = {
        comments: {blockComment: ["<!--", "-->"]},
        brackets: [["{", "}"], ["[", "]"], ["(", ")"], ["<", ">"]],
        autoClosingPairs: [{open: "'", close: "'", notIn: ["string", "comment"]}, {
            open: '"',
            close: '"',
            notIn: ["string", "comment"]
        }]
    }, t.language = {
        defaultToken: "",
        tokenPostfix: ".xml",
        ignoreCase: !0,
        qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
        tokenizer: {
            root: [[/[^<&]+/, ""], {include: "@whitespace"}, [/(<)(@qualifiedName)/, [{token: "delimiter"}, {
                token: "tag",
                next: "@tag"
            }]], [/(<\/)(@qualifiedName)(\s*)(>)/, [{token: "delimiter"}, {token: "tag"}, "", {token: "delimiter"}]], [/(<\?)(@qualifiedName)/, [{token: "delimiter"}, {
                token: "metatag",
                next: "@tag"
            }]], [/(<\!)(@qualifiedName)/, [{token: "delimiter"}, {
                token: "metatag",
                next: "@tag"
            }]], [/<\!\[CDATA\[/, {token: "delimiter.cdata", next: "@cdata"}], [/&\w+;/, "string.escape"]],
            cdata: [[/[^\]]+/, ""], [/\]\]>/, {token: "delimiter.cdata", next: "@pop"}], [/\]/, ""]],
            tag: [[/[ \t\r\n]+/, ""], [/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/, ["attribute.name", "", "attribute.value"]], [/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/, ["attribute.name", "", "attribute.value"]], [/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/, ["attribute.name", "", "attribute.value"]], [/@qualifiedName/, "attribute.name"], [/\?>/, {
                token: "delimiter",
                next: "@pop"
            }], [/(\/)(>)/, [{token: "tag"}, {token: "delimiter", next: "@pop"}]], [/>/, {
                token: "delimiter",
                next: "@pop"
            }]],
            whitespace: [[/[ \t\r\n]+/, ""], [/<!--/, {token: "comment", next: "@comment"}]],
            comment: [[/[^<\-]+/, "comment.content"], [/-->/, {
                token: "comment",
                next: "@pop"
            }], [/<!--/, "comment.content.invalid"], [/[<\-]/, "comment.content"]]
        }
    }
});