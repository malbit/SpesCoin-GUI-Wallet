/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.7.0(18916e97a4ff0f1b195d68d01d632631cc84d50e)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/src/dockerfile", ["require", "exports"], function (e, n) {
    n.conf = {
        brackets: [["{", "}"], ["[", "]"], ["(", ")"], ["<", ">"]],
        autoClosingPairs: [{open: '"', close: '"', notIn: ["string", "comment"]}, {
            open: "'",
            close: "'",
            notIn: ["string", "comment"]
        }, {open: "{", close: "}", notIn: ["string", "comment"]}, {
            open: "[",
            close: "]",
            notIn: ["string", "comment"]
        }, {open: "(", close: ")", notIn: ["string", "comment"]}, {open: "<", close: ">", notIn: ["string", "comment"]}]
    }, n.language = {
        defaultToken: "",
        tokenPostfix: ".dockerfile",
        instructions: /FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|ENTRYPOINT/,
        instructionAfter: /ONBUILD/,
        variableAfter: /ENV/,
        variable: /\${?[\w]+}?/,
        tokenizer: {
            root: [{include: "@whitespace"}, {include: "@comment"}, [/(@instructionAfter)(\s+)/, ["keyword", {
                token: "",
                next: "@instructions"
            }]], ["", "keyword", "@instructions"]],
            instructions: [[/(@variableAfter)(\s+)([\w]+)/, ["keyword", "", {
                token: "variable",
                next: "@arguments"
            }]], [/(@instructions)/, "keyword", "@arguments"]],
            arguments: [{include: "@whitespace"}, {include: "@strings"}, [/(@variable)/, {
                cases: {
                    "@eos": {
                        token: "variable",
                        next: "@popall"
                    }, "@default": "variable"
                }
            }], [/\\/, {cases: {"@eos": "", "@default": ""}}], [/./, {
                cases: {
                    "@eos": {token: "", next: "@popall"},
                    "@default": ""
                }
            }]],
            whitespace: [[/\s+/, {cases: {"@eos": {token: "", next: "@popall"}, "@default": ""}}]],
            comment: [[/(^#.*$)/, "comment", "@popall"]],
            strings: [[/'$/, "string", "@popall"], [/'/, "string", "@stringBody"], [/"$/, "string", "@popall"], [/"/, "string", "@dblStringBody"]],
            stringBody: [[/[^\\\$']/, {
                cases: {
                    "@eos": {token: "string", next: "@popall"},
                    "@default": "string"
                }
            }], [/\\./, "string.escape"], [/'$/, "string", "@popall"], [/'/, "string", "@pop"], [/(@variable)/, "variable"], [/\\$/, "string"], [/$/, "string", "@popall"]],
            dblStringBody: [[/[^\\\$"]/, {
                cases: {
                    "@eos": {token: "string", next: "@popall"},
                    "@default": "string"
                }
            }], [/\\./, "string.escape"], [/"$/, "string", "@popall"], [/"/, "string", "@pop"], [/(@variable)/, "variable"], [/\\$/, "string"], [/$/, "string", "@popall"]]
        }
    }
});