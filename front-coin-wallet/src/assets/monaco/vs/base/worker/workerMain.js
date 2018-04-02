/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.8.2(59c417515cc4385a81ab1755611263b94d0071e2)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
(function () {
    var e, t = ["exports", "require", "vs/base/common/winjs.base", "vs/base/common/platform", "vs/base/common/errors", "vs/base/common/event", "vs/editor/common/core/range", "vs/editor/common/core/position", "vs/editor/common/core/uint", "vs/base/common/lifecycle", "vs/base/common/uri", "vs/base/common/diff/diff", "vs/base/common/cancellation", "vs/base/common/map", "vs/base/common/functional", "vs/base/common/strings", "vs/base/common/types", "vs/base/common/async", "vs/base/common/keyCodes", "vs/base/common/callbackList", "vs/editor/common/core/selection", "vs/editor/common/core/token", "vs/base/common/diff/diffChange", "vs/editor/common/core/characterClassifier", "vs/editor/common/diff/diffComputer", "vs/editor/common/model/wordHelper", "vs/editor/common/modes/linkComputer", "vs/editor/common/modes/supports/inplaceReplaceSupport", "vs/editor/common/standalone/standaloneBase", "vs/editor/common/viewModel/prefixSumComputer", "vs/editor/common/model/mirrorModel2", "vs/base/common/worker/simpleWorker", "vs/editor/common/services/editorSimpleWorker", "vs/base/common/winjs.base.raw"], n = function (e) {
        for (var n = [], r = 0, i = e.length; r < i; r++)n[r] = t[e[r]];
        return n
    }, r = this;
    !function (e) {
        e.global = r, e.isNode = "undefined" != typeof module && !!module.exports, e.isWindows = function () {
            return !!("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.indexOf("Windows") >= 0) || "undefined" != typeof process && "win32" === process.platform
        }(), e.isWebWorker = "function" == typeof e.global.importScripts, e.isElectronRenderer = "undefined" != typeof process && "undefined" != typeof process.versions && "undefined" != typeof process.versions.electron && "renderer" === process.type, e.isElectronMain = "undefined" != typeof process && "undefined" != typeof process.versions && "undefined" != typeof process.versions.electron && "browser" === process.type, e.hasPerformanceNow = e.global.performance && "function" == typeof e.global.performance.now
    }(e || (e = {}));
    var e;
    !function (e) {
        function t() {
            return e.hasPerformanceNow ? e.global.performance.now() : Date.now()
        }

        var n;
        !function (e) {
            e[e.LoaderAvailable = 1] = "LoaderAvailable", e[e.BeginLoadingScript = 10] = "BeginLoadingScript", e[e.EndLoadingScriptOK = 11] = "EndLoadingScriptOK", e[e.EndLoadingScriptError = 12] = "EndLoadingScriptError", e[e.BeginInvokeFactory = 21] = "BeginInvokeFactory", e[e.EndInvokeFactory = 22] = "EndInvokeFactory", e[e.NodeBeginEvaluatingScript = 31] = "NodeBeginEvaluatingScript", e[e.NodeEndEvaluatingScript = 32] = "NodeEndEvaluatingScript", e[e.NodeBeginNativeRequire = 33] = "NodeBeginNativeRequire", e[e.NodeEndNativeRequire = 34] = "NodeEndNativeRequire"
        }(n = e.LoaderEventType || (e.LoaderEventType = {})), e.getHighPerformanceTimestamp = t;
        var r = function () {
            function e(e, t, n) {
                this.type = e, this.detail = t, this.timestamp = n
            }

            return e
        }();
        e.LoaderEvent = r;
        var i = function () {
            function e(e) {
                this._events = [new r(n.LoaderAvailable, "", e)]
            }

            return e.prototype.record = function (e, n) {
                this._events.push(new r(e, n, t()))
            }, e.prototype.getEvents = function () {
                return this._events
            }, e
        }();
        e.LoaderEventRecorder = i;
        var o = function () {
            function e() {
            }

            return e.prototype.record = function (e, t) {
            }, e.prototype.getEvents = function () {
                return []
            }, e
        }();
        o.INSTANCE = new o, e.NullLoaderEventRecorder = o
    }(e || (e = {}));
    var e;
    !function (e) {
        var t = function () {
            function t() {
            }

            return t.fileUriToFilePath = function (t) {
                if (t = decodeURI(t), e.isWindows) {
                    if (/^file:\/\/\//.test(t))return t.substr(8);
                    if (/^file:\/\//.test(t))return t.substr(5)
                } else if (/^file:\/\//.test(t))return t.substr(7);
                return t
            }, t.startsWith = function (e, t) {
                return e.length >= t.length && e.substr(0, t.length) === t
            }, t.endsWith = function (e, t) {
                return e.length >= t.length && e.substr(e.length - t.length) === t
            }, t.containsQueryString = function (e) {
                return /^[^\#]*\?/gi.test(e)
            }, t.isAbsolutePath = function (e) {
                return /^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(e)
            }, t.forEachProperty = function (e, t) {
                if (e) {
                    var n = void 0;
                    for (n in e)e.hasOwnProperty(n) && t(n, e[n])
                }
            }, t.isEmpty = function (e) {
                var n = !0;
                return t.forEachProperty(e, function () {
                    n = !1
                }), n
            }, t.recursiveClone = function (e) {
                if (!e || "object" != typeof e)return e;
                var n = Array.isArray(e) ? [] : {};
                return t.forEachProperty(e, function (e, r) {
                    r && "object" == typeof r ? n[e] = t.recursiveClone(r) : n[e] = r
                }), n
            }, t.generateAnonymousModule = function () {
                return "===anonymous" + t.NEXT_ANONYMOUS_ID++ + "==="
            }, t.isAnonymousModule = function (e) {
                return /^===anonymous/.test(e)
            }, t
        }();
        t.NEXT_ANONYMOUS_ID = 1, e.Utilities = t
    }(e || (e = {}));
    var e;
    !function (e) {
        var t = function () {
            function t() {
            }

            return t.validateConfigurationOptions = function (t) {
                function n(e) {
                    return "load" === e.errorCode ? (console.error('Loading "' + e.moduleId + '" failed'), console.error("Detail: ", e.detail), e.detail && e.detail.stack && console.error(e.detail.stack), console.error("Here are the modules that depend on it:"), void console.error(e.neededBy)) : "factory" === e.errorCode ? (console.error('The factory method of "' + e.moduleId + '" has thrown an exception'), console.error(e.detail), void(e.detail && e.detail.stack && console.error(e.detail.stack))) : void 0
                }

                return t = t || {}, "string" != typeof t.baseUrl && (t.baseUrl = ""), "boolean" != typeof t.isBuild && (t.isBuild = !1), "object" != typeof t.paths && (t.paths = {}), "object" != typeof t.config && (t.config = {}), "undefined" == typeof t.catchError && (t.catchError = e.isWebWorker), "string" != typeof t.urlArgs && (t.urlArgs = ""), "function" != typeof t.onError && (t.onError = n), "object" == typeof t.ignoreDuplicateModules && Array.isArray(t.ignoreDuplicateModules) || (t.ignoreDuplicateModules = []), t.baseUrl.length > 0 && (e.Utilities.endsWith(t.baseUrl, "/") || (t.baseUrl += "/")), Array.isArray(t.nodeModules) || (t.nodeModules = []), ("number" != typeof t.nodeCachedDataWriteDelay || t.nodeCachedDataWriteDelay < 0) && (t.nodeCachedDataWriteDelay = 7e3), "function" != typeof t.onNodeCachedDataError && (t.onNodeCachedDataError = function (e) {
                    "cachedDataRejected" === e.errorCode ? console.warn("Rejected cached data from file: " + e.path) : "unlink" !== e.errorCode && "writeFile" !== e.errorCode || (console.error("Problems writing cached data file: " + e.path), console.error(e.detail))
                }), t
            }, t.mergeConfigurationOptions = function (n, r) {
                void 0 === n && (n = null), void 0 === r && (r = null);
                var i = e.Utilities.recursiveClone(r || {});
                return e.Utilities.forEachProperty(n, function (t, n) {
                    "ignoreDuplicateModules" === t && "undefined" != typeof i.ignoreDuplicateModules ? i.ignoreDuplicateModules = i.ignoreDuplicateModules.concat(n) : "paths" === t && "undefined" != typeof i.paths ? e.Utilities.forEachProperty(n, function (e, t) {
                        return i.paths[e] = t
                    }) : "config" === t && "undefined" != typeof i.config ? e.Utilities.forEachProperty(n, function (e, t) {
                        return i.config[e] = t
                    }) : i[t] = e.Utilities.recursiveClone(n)
                }), t.validateConfigurationOptions(i)
            }, t
        }();
        e.ConfigurationOptionsUtil = t;
        var n = function () {
            function n(n) {
                if (this.options = t.mergeConfigurationOptions(n), this._createIgnoreDuplicateModulesMap(), this._createNodeModulesMap(), this._createSortedPathsRules(), "" === this.options.baseUrl) {
                    if (e.isNode && this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename) {
                        var r = this.options.nodeRequire.main.filename, i = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
                        this.options.baseUrl = r.substring(0, i + 1)
                    }
                    if (e.isNode && this.options.nodeMain) {
                        var r = this.options.nodeMain, i = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\"));
                        this.options.baseUrl = r.substring(0, i + 1)
                    }
                }
            }

            return n.prototype._createIgnoreDuplicateModulesMap = function () {
                this.ignoreDuplicateModulesMap = {};
                for (var e = 0; e < this.options.ignoreDuplicateModules.length; e++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[e]] = !0
            }, n.prototype._createNodeModulesMap = function () {
                this.nodeModulesMap = Object.create(null);
                for (var e = 0, t = this.options.nodeModules; e < t.length; e++) {
                    var n = t[e];
                    this.nodeModulesMap[n] = !0
                }
            }, n.prototype._createSortedPathsRules = function () {
                var t = this;
                this.sortedPathsRules = [], e.Utilities.forEachProperty(this.options.paths, function (e, n) {
                    Array.isArray(n) ? t.sortedPathsRules.push({from: e, to: n}) : t.sortedPathsRules.push({
                        from: e,
                        to: [n]
                    })
                }), this.sortedPathsRules.sort(function (e, t) {
                    return t.from.length - e.from.length
                })
            }, n.prototype.cloneAndMerge = function (e) {
                return new n(t.mergeConfigurationOptions(e, this.options))
            }, n.prototype.getOptionsLiteral = function () {
                return this.options
            }, n.prototype._applyPaths = function (t) {
                for (var n, r = 0, i = this.sortedPathsRules.length; r < i; r++)if (n = this.sortedPathsRules[r], e.Utilities.startsWith(t, n.from)) {
                    for (var o = [], s = 0, u = n.to.length; s < u; s++)o.push(n.to[s] + t.substr(n.from.length));
                    return o
                }
                return [t]
            }, n.prototype._addUrlArgsToUrl = function (t) {
                return e.Utilities.containsQueryString(t) ? t + "&" + this.options.urlArgs : t + "?" + this.options.urlArgs
            }, n.prototype._addUrlArgsIfNecessaryToUrl = function (e) {
                return this.options.urlArgs ? this._addUrlArgsToUrl(e) : e
            }, n.prototype._addUrlArgsIfNecessaryToUrls = function (e) {
                if (this.options.urlArgs)for (var t = 0, n = e.length; t < n; t++)e[t] = this._addUrlArgsToUrl(e[t]);
                return e
            }, n.prototype.moduleIdToPaths = function (t) {
                if (this.nodeModulesMap[t] === !0)return this.isBuild() ? ["empty:"] : ["node|" + t];
                var n, r = t;
                if (e.Utilities.endsWith(r, ".js") || e.Utilities.isAbsolutePath(r))e.Utilities.endsWith(r, ".js") || e.Utilities.containsQueryString(r) || (r += ".js"), n = [r]; else {
                    n = this._applyPaths(r);
                    for (var i = 0, o = n.length; i < o; i++)this.isBuild() && "empty:" === n[i] || (e.Utilities.isAbsolutePath(n[i]) || (n[i] = this.options.baseUrl + n[i]), e.Utilities.endsWith(n[i], ".js") || e.Utilities.containsQueryString(n[i]) || (n[i] = n[i] + ".js"))
                }
                return this._addUrlArgsIfNecessaryToUrls(n)
            }, n.prototype.requireToUrl = function (t) {
                var n = t;
                return e.Utilities.isAbsolutePath(n) || (n = this._applyPaths(n)[0], e.Utilities.isAbsolutePath(n) || (n = this.options.baseUrl + n)), this._addUrlArgsIfNecessaryToUrl(n)
            }, n.prototype.isBuild = function () {
                return this.options.isBuild
            }, n.prototype.isDuplicateMessageIgnoredFor = function (e) {
                return this.ignoreDuplicateModulesMap.hasOwnProperty(e)
            }, n.prototype.getConfigForModule = function (e) {
                if (this.options.config)return this.options.config[e]
            }, n.prototype.shouldCatchError = function () {
                return this.options.catchError
            }, n.prototype.shouldRecordStats = function () {
                return this.options.recordStats
            }, n.prototype.onError = function (e) {
                this.options.onError(e)
            }, n
        }();
        e.Configuration = n
    }(e || (e = {}));
    var e;
    !function (e) {
        var t = function () {
            function e(e) {
                this.actualScriptLoader = e, this.callbackMap = {}
            }

            return e.prototype.load = function (e, t, n, r) {
                var i = this, o = {callback: n, errorback: r};
                return this.callbackMap.hasOwnProperty(t) ? void this.callbackMap[t].push(o) : (this.callbackMap[t] = [o], void this.actualScriptLoader.load(e, t, function () {
                    return i.triggerCallback(t)
                }, function (e) {
                    return i.triggerErrorback(t, e)
                }))
            }, e.prototype.triggerCallback = function (e) {
                var t = this.callbackMap[e];
                delete this.callbackMap[e];
                for (var n = 0; n < t.length; n++)t[n].callback()
            }, e.prototype.triggerErrorback = function (e, t) {
                var n = this.callbackMap[e];
                delete this.callbackMap[e];
                for (var r = 0; r < n.length; r++)n[r].errorback(t)
            }, e
        }(), n = function () {
            function e() {
            }

            return e.prototype.attachListeners = function (e, t, n) {
                var r = function () {
                    e.removeEventListener("load", i), e.removeEventListener("error", o)
                }, i = function (e) {
                    r(), t()
                }, o = function (e) {
                    r(), n(e)
                };
                e.addEventListener("load", i), e.addEventListener("error", o)
            }, e.prototype.load = function (e, t, n, r) {
                var i = document.createElement("script");
                i.setAttribute("async", "async"), i.setAttribute("type", "text/javascript"), this.attachListeners(i, n, r), i.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(i)
            }, e
        }(), r = function () {
            function e() {
            }

            return e.prototype.load = function (e, t, n, r) {
                try {
                    importScripts(t), n()
                } catch (e) {
                    r(e)
                }
            }, e
        }(), i = function () {
            function t() {
                this._initialized = !1
            }

            return t.prototype._init = function (e) {
                this._initialized || (this._initialized = !0, this._fs = e("fs"), this._vm = e("vm"), this._path = e("path"), this._crypto = e("crypto"))
            }, t.prototype.load = function (n, r, i, o) {
                var s = this, u = n.getConfig().getOptionsLiteral(), a = u.nodeRequire || e.global.nodeRequire, l = u.nodeInstrumenter || function (e) {
                        return e
                    };
                this._init(a);
                var c = n.getRecorder();
                if (/^node\|/.test(r)) {
                    var f = r.split("|"), h = null;
                    try {
                        h = a(f[1])
                    } catch (e) {
                        return void o(e)
                    }
                    n.enqueueDefineAnonymousModule([], function () {
                        return h
                    }), i()
                } else r = e.Utilities.fileUriToFilePath(r), this._fs.readFile(r, {encoding: "utf8"}, function (a, f) {
                    if (a)return void o(a);
                    var h = s._path.normalize(r);
                    if (e.isElectronRenderer) {
                        var d = h.match(/^([a-z])\:(.*)/i);
                        d && (h = d[1].toUpperCase() + ":" + d[2]), h = "file:///" + h.replace(/\\/g, "/")
                    }
                    var p, m = "(function (require, define, __filename, __dirname) { ", _ = "\n});";
                    if (p = f.charCodeAt(0) === t._BOM ? m + f.substring(1) + _ : m + f + _, p = l(p, h), u.nodeCachedDataDir) {
                        var g = s._getCachedDataPath(u.nodeCachedDataDir, r);
                        s._fs.readFile(g, function (e, o) {
                            var a = {
                                filename: h,
                                produceCachedData: "undefined" == typeof o,
                                cachedData: o
                            }, l = s._loadAndEvalScript(r, h, p, a, c);
                            i(), l.cachedDataRejected ? (u.onNodeCachedDataError({
                                errorCode: "cachedDataRejected",
                                path: g
                            }), t._runSoon(function () {
                                return s._fs.unlink(g, function (e) {
                                    e && n.getConfig().getOptionsLiteral().onNodeCachedDataError({
                                        errorCode: "unlink",
                                        path: g,
                                        detail: e
                                    })
                                })
                            }, u.nodeCachedDataWriteDelay)) : l.cachedDataProduced && t._runSoon(function () {
                                return s._fs.writeFile(g, l.cachedData, function (e) {
                                    e && n.getConfig().getOptionsLiteral().onNodeCachedDataError({
                                        errorCode: "writeFile",
                                        path: g,
                                        detail: e
                                    })
                                })
                            }, u.nodeCachedDataWriteDelay)
                        })
                    } else s._loadAndEvalScript(r, h, p, {filename: h}, c), i()
                })
            }, t.prototype._loadAndEvalScript = function (t, n, r, i, o) {
                o.record(e.LoaderEventType.NodeBeginEvaluatingScript, t);
                var s = new this._vm.Script(r, i), u = s.runInThisContext(i);
                return u.call(e.global, e.RequireFunc, e.DefineFunc, n, this._path.dirname(t)), o.record(e.LoaderEventType.NodeEndEvaluatingScript, t), s
            }, t.prototype._getCachedDataPath = function (e, t) {
                var n = this._crypto.createHash("md5").update(t, "utf8").digest("hex"), r = this._path.basename(t).replace(/\.js$/, "");
                return this._path.join(e, n + "-" + r + ".code")
            }, t._runSoon = function (e, t) {
                var n = t + Math.ceil(Math.random() * t);
                setTimeout(e, n)
            }, t
        }();
        i._BOM = 65279, e.scriptLoader = new t(e.isWebWorker ? new r : e.isNode ? new i : new n)
    }(e || (e = {}));
    var e;
    !function (e) {
        var t = function () {
            function t(e) {
                var t = e.lastIndexOf("/");
                t !== -1 ? this.fromModulePath = e.substr(0, t + 1) : this.fromModulePath = ""
            }

            return t._normalizeModuleId = function (e) {
                var t, n = e;
                for (t = /\/\.\//; t.test(n);)n = n.replace(t, "/");
                for (n = n.replace(/^\.\//g, ""), t = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; t.test(n);)n = n.replace(t, "/");
                return n = n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, "")
            }, t.prototype.resolveModule = function (n) {
                var r = n;
                return e.Utilities.isAbsolutePath(r) || (e.Utilities.startsWith(r, "./") || e.Utilities.startsWith(r, "../")) && (r = t._normalizeModuleId(this.fromModulePath + r)), r
            }, t
        }();
        t.ROOT = new t(""), e.ModuleIdResolver = t;
        var n = function () {
            function t(e, t, n, r, i, o) {
                this.id = e, this.strId = t, this.dependencies = n, this._callback = r, this._errorback = i, this.moduleIdResolver = o, this.exports = {}, this.exportsPassedIn = !1, this.unresolvedDependenciesCount = this.dependencies.length, this._isComplete = !1
            }

            return t._safeInvokeFunction = function (t, n) {
                try {
                    return {returnedValue: t.apply(e.global, n), producedError: null}
                } catch (e) {
                    return {returnedValue: null, producedError: e}
                }
            }, t._invokeFactory = function (t, n, r, i) {
                return t.isBuild() && !e.Utilities.isAnonymousModule(n) ? {
                    returnedValue: null,
                    producedError: null
                } : t.shouldCatchError() ? this._safeInvokeFunction(r, i) : {
                    returnedValue: r.apply(e.global, i),
                    producedError: null
                }
            }, t.prototype.complete = function (n, r, i) {
                this._isComplete = !0;
                var o = null;
                if (this._callback)if ("function" == typeof this._callback) {
                    n.record(e.LoaderEventType.BeginInvokeFactory, this.strId);
                    var s = t._invokeFactory(r, this.strId, this._callback, i);
                    o = s.producedError, n.record(e.LoaderEventType.EndInvokeFactory, this.strId), o || "undefined" == typeof s.returnedValue || this.exportsPassedIn && !e.Utilities.isEmpty(this.exports) || (this.exports = s.returnedValue)
                } else this.exports = this._callback;
                o && r.onError({
                    errorCode: "factory",
                    moduleId: this.strId,
                    detail: o
                }), this.dependencies = null, this._callback = null, this._errorback = null, this.moduleIdResolver = null
            }, t.prototype.onDependencyError = function (e) {
                return !!this._errorback && (this._errorback(e), !0)
            }, t.prototype.isComplete = function () {
                return this._isComplete
            }, t
        }();
        e.Module = n;
        var r = function () {
            function e() {
                this._nextId = 0, this._strModuleIdToIntModuleId = new Map, this._intModuleIdToStrModuleId = [], this.getModuleId("exports"), this.getModuleId("module"), this.getModuleId("require")
            }

            return e.prototype.getMaxModuleId = function () {
                return this._nextId
            }, e.prototype.getModuleId = function (e) {
                var t = this._strModuleIdToIntModuleId.get(e);
                return "undefined" == typeof t && (t = this._nextId++, this._strModuleIdToIntModuleId.set(e, t), this._intModuleIdToStrModuleId[t] = e), t
            }, e.prototype.getStrModuleId = function (e) {
                return this._intModuleIdToStrModuleId[e]
            }, e
        }(), i = function () {
            function e(e) {
                this.id = e
            }

            return e
        }();
        i.EXPORTS = new i(0), i.MODULE = new i(1), i.REQUIRE = new i(2), e.RegularDependency = i;
        var o = function () {
            function e(e, t, n) {
                this.id = e, this.pluginId = t, this.pluginParam = n
            }

            return e
        }();
        e.PluginDependency = o;
        var s = function () {
            function s(t, n) {
                void 0 === n && (n = 0), this._recorder = null, this._loaderAvailableTimestamp = n, this._moduleIdProvider = new r, this._config = new e.Configuration, this._scriptLoader = t, this._modules2 = [], this._knownModules2 = [], this._inverseDependencies2 = [], this._inversePluginDependencies2 = new Map, this._currentAnnonymousDefineCall = null, this._buildInfoPath = [], this._buildInfoDefineStack = [], this._buildInfoDependencies = []
            }

            return s._findRelevantLocationInStack = function (e, t) {
                for (var n = function (e) {
                    return e.replace(/\\/g, "/")
                }, r = n(e), i = t.split(/\n/), o = 0; o < i.length; o++) {
                    var s = i[o].match(/(.*):(\d+):(\d+)\)?$/);
                    if (s) {
                        var u = s[1], a = s[2], l = s[3], c = Math.max(u.lastIndexOf(" ") + 1, u.lastIndexOf("(") + 1);
                        if (u = u.substr(c), u = n(u), u === r) {
                            var f = {line: parseInt(a, 10), col: parseInt(l, 10)};
                            return 1 === f.line && (f.col -= "(function (require, define, __filename, __dirname) { ".length), f
                        }
                    }
                }
                throw new Error("Could not correlate define call site for needle " + e)
            }, s.prototype.getBuildInfo = function () {
                if (!this._config.isBuild())return null;
                for (var e = [], t = 0, n = 0, r = this._modules2.length; n < r; n++) {
                    var i = this._modules2[n];
                    if (i) {
                        var o = this._buildInfoPath[i.id] || null, u = this._buildInfoDefineStack[i.id] || null, a = this._buildInfoDependencies[i.id];
                        e[t++] = {
                            id: i.strId,
                            path: o,
                            defineLocation: o && u ? s._findRelevantLocationInStack(o, u) : null,
                            dependencies: a,
                            shim: null,
                            exports: i.exports
                        }
                    }
                }
                return e
            }, s.prototype.getRecorder = function () {
                return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new e.LoaderEventRecorder(this._loaderAvailableTimestamp) : this._recorder = e.NullLoaderEventRecorder.INSTANCE), this._recorder
            }, s.prototype.getLoaderEvents = function () {
                return this.getRecorder().getEvents()
            }, s.prototype.enqueueDefineAnonymousModule = function (e, t) {
                if (null !== this._currentAnnonymousDefineCall)throw new Error("Can only have one anonymous define call per script file");
                var n = null;
                this._config.isBuild() && (n = new Error("StackLocation").stack), this._currentAnnonymousDefineCall = {
                    stack: n,
                    dependencies: e,
                    callback: t
                }
            }, s.prototype.defineModule = function (e, r, i, o, s, u) {
                var a = this;
                void 0 === u && (u = new t(e));
                var l = this._moduleIdProvider.getModuleId(e);
                if (this._modules2[l])return void(this._config.isDuplicateMessageIgnoredFor(e) || console.warn("Duplicate definition of module '" + e + "'"));
                var c = new n(l, e, this._normalizeDependencies(r, u), i, o, u);
                this._modules2[l] = c, this._config.isBuild() && (this._buildInfoDefineStack[l] = s, this._buildInfoDependencies[l] = c.dependencies.map(function (e) {
                    return a._moduleIdProvider.getStrModuleId(e.id)
                })), this._resolve(c)
            }, s.prototype._normalizeDependency = function (e, t) {
                if ("exports" === e)return i.EXPORTS;
                if ("module" === e)return i.MODULE;
                if ("require" === e)return i.REQUIRE;
                var n = e.indexOf("!");
                if (n >= 0) {
                    var r = t.resolveModule(e.substr(0, n)), s = t.resolveModule(e.substr(n + 1)), u = this._moduleIdProvider.getModuleId(r + "!" + s), a = this._moduleIdProvider.getModuleId(r);
                    return new o(u, a, s)
                }
                return new i(this._moduleIdProvider.getModuleId(t.resolveModule(e)))
            }, s.prototype._normalizeDependencies = function (e, t) {
                for (var n = [], r = 0, i = 0, o = e.length; i < o; i++)n[r++] = this._normalizeDependency(e[i], t);
                return n
            }, s.prototype._relativeRequire = function (t, n, r, i) {
                return "string" == typeof n ? this.synchronousRequire(n, t) : void this.defineModule(e.Utilities.generateAnonymousModule(), n, r, i, null, t)
            }, s.prototype.synchronousRequire = function (e, n) {
                void 0 === n && (n = new t(e));
                var r = this._normalizeDependency(e, n), i = this._modules2[r.id];
                if (!i)throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This is the first mention of this module!");
                if (!i.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '" + e + "'. This module has not been resolved completely yet.");
                return i.exports
            }, s.prototype.configure = function (t, n) {
                var r = this._config.shouldRecordStats();
                n ? this._config = new e.Configuration(t) : this._config = this._config.cloneAndMerge(t), this._config.shouldRecordStats() && !r && (this._recorder = null)
            }, s.prototype.getConfig = function () {
                return this._config
            }, s.prototype._onLoad = function (e) {
                if (null !== this._currentAnnonymousDefineCall) {
                    var t = this._currentAnnonymousDefineCall;
                    this._currentAnnonymousDefineCall = null, this.defineModule(this._moduleIdProvider.getStrModuleId(e), t.dependencies, t.callback, null, t.stack)
                }
            }, s.prototype._createLoadError = function (e, t) {
                var n = this, r = this._moduleIdProvider.getStrModuleId(e), i = (this._inverseDependencies2[e] || []).map(function (e) {
                    return n._moduleIdProvider.getStrModuleId(e)
                });
                return {errorCode: "load", moduleId: r, neededBy: i, detail: t}
            }, s.prototype._onLoadError = function (e, t) {
                for (var n = this._createLoadError(e, t), r = [], i = 0, o = this._moduleIdProvider.getMaxModuleId(); i < o; i++)r[i] = !1;
                var s = !1, u = [];
                for (u.push(e), r[e] = !0; u.length > 0;) {
                    var a = u.shift(), l = this._modules2[a];
                    l && (s = l.onDependencyError(n) || s);
                    var c = this._inverseDependencies2[a];
                    if (c)for (var i = 0, o = c.length; i < o; i++) {
                        var f = c[i];
                        r[f] || (u.push(f), r[f] = !0)
                    }
                }
                s || this._config.onError(n)
            }, s.prototype._hasDependencyPath = function (e, t) {
                var n = this._modules2[e];
                if (!n)return !1;
                for (var r = [], i = 0, o = this._moduleIdProvider.getMaxModuleId(); i < o; i++)r[i] = !1;
                var s = [];
                for (s.push(n), r[e] = !0; s.length > 0;) {
                    var u = s.shift(), a = u.dependencies;
                    if (a)for (var i = 0, o = a.length; i < o; i++) {
                        var l = a[i];
                        if (l.id === t)return !0;
                        var c = this._modules2[l.id];
                        c && !r[l.id] && (r[l.id] = !0, s.push(c))
                    }
                }
                return !1
            }, s.prototype._findCyclePath = function (e, t, n) {
                if (e === t || 50 === n)return [e];
                var r = this._modules2[e];
                if (!r)return null;
                for (var i = r.dependencies, o = 0, s = i.length; o < s; o++) {
                    var u = this._findCyclePath(i[o].id, t, n + 1);
                    if (null !== u)return u.push(e), u
                }
                return null
            }, s.prototype._createRequire = function (t) {
                var n = this, r = function (e, r, i) {
                    return n._relativeRequire(t, e, r, i)
                };
                return r.toUrl = function (e) {
                    return n._config.requireToUrl(t.resolveModule(e))
                }, r.getStats = function () {
                    return n.getLoaderEvents()
                }, r.__$__nodeRequire = e.global.nodeRequire, r
            }, s.prototype._loadModule = function (t) {
                var n = this;
                if (!this._modules2[t] && !this._knownModules2[t]) {
                    this._knownModules2[t] = !0;
                    var r = this._moduleIdProvider.getStrModuleId(t), i = this._config.moduleIdToPaths(r);
                    e.isNode && r.indexOf("/") === -1 && i.push("node|" + r);
                    var o = -1, s = function (r) {
                        if (o++, o >= i.length)n._onLoadError(t, r); else {
                            var u = i[o], a = n.getRecorder();
                            if (n._config.isBuild() && "empty:" === u)return n._buildInfoPath[t] = u, n.defineModule(n._moduleIdProvider.getStrModuleId(t), [], null, null, null), void n._onLoad(t);
                            a.record(e.LoaderEventType.BeginLoadingScript, u), n._scriptLoader.load(n, u, function () {
                                n._config.isBuild() && (n._buildInfoPath[t] = u), a.record(e.LoaderEventType.EndLoadingScriptOK, u), n._onLoad(t)
                            }, function (t) {
                                a.record(e.LoaderEventType.EndLoadingScriptError, u), s(t)
                            })
                        }
                    };
                    s(null)
                }
            }, s.prototype._loadPluginDependency = function (e, n) {
                var r = this;
                if (!this._modules2[n.id] && !this._knownModules2[n.id]) {
                    this._knownModules2[n.id] = !0;
                    var i = function (e) {
                        r.defineModule(r._moduleIdProvider.getStrModuleId(n.id), [], e, null, null)
                    };
                    i.error = function (e) {
                        r._config.onError(r._createLoadError(n.id, e))
                    }, e.load(n.pluginParam, this._createRequire(t.ROOT), i, this._config.getOptionsLiteral())
                }
            }, s.prototype._resolve = function (e) {
                for (var t = this, n = e.dependencies, r = 0, s = n.length; r < s; r++) {
                    var u = n[r];
                    if (u !== i.EXPORTS)if (u !== i.MODULE)if (u !== i.REQUIRE) {
                        var a = this._modules2[u.id];
                        if (a && a.isComplete())e.unresolvedDependenciesCount--; else if (this._hasDependencyPath(u.id, e.id)) {
                            console.warn("There is a dependency cycle between '" + this._moduleIdProvider.getStrModuleId(u.id) + "' and '" + this._moduleIdProvider.getStrModuleId(e.id) + "'. The cyclic path follows:");
                            var l = this._findCyclePath(u.id, e.id, 0);
                            l.reverse(), l.push(u.id), console.warn(l.map(function (e) {
                                return t._moduleIdProvider.getStrModuleId(e)
                            }).join(" => \n")), e.unresolvedDependenciesCount--
                        } else if (this._inverseDependencies2[u.id] = this._inverseDependencies2[u.id] || [], this._inverseDependencies2[u.id].push(e.id), u instanceof o) {
                            var c = this._modules2[u.pluginId];
                            if (c && c.isComplete()) {
                                this._loadPluginDependency(c.exports, u);
                                continue
                            }
                            var f = this._inversePluginDependencies2.get(u.pluginId);
                            f || (f = [], this._inversePluginDependencies2.set(u.pluginId, f)), f.push(u), this._loadModule(u.pluginId)
                        } else this._loadModule(u.id)
                    } else e.unresolvedDependenciesCount--; else e.unresolvedDependenciesCount--; else e.exportsPassedIn = !0, e.unresolvedDependenciesCount--
                }
                0 === e.unresolvedDependenciesCount && this._onModuleComplete(e)
            }, s.prototype._onModuleComplete = function (e) {
                var t = this, n = this.getRecorder();
                if (!e.isComplete()) {
                    for (var r = e.dependencies, o = [], s = 0, u = r.length; s < u; s++) {
                        var a = r[s];
                        if (a !== i.EXPORTS)if (a !== i.MODULE)if (a !== i.REQUIRE) {
                            var l = this._modules2[a.id];
                            l ? o[s] = l.exports : o[s] = null
                        } else o[s] = this._createRequire(e.moduleIdResolver); else o[s] = {
                            id: e.strId,
                            config: function () {
                                return t._config.getConfigForModule(e.strId)
                            }
                        }; else o[s] = e.exports
                    }
                    e.complete(n, this._config, o);
                    var c = this._inverseDependencies2[e.id];
                    if (this._inverseDependencies2[e.id] = null, c)for (var s = 0, u = c.length; s < u; s++) {
                        var f = c[s], h = this._modules2[f];
                        h.unresolvedDependenciesCount--, 0 === h.unresolvedDependenciesCount && this._onModuleComplete(h)
                    }
                    var d = this._inversePluginDependencies2.get(e.id);
                    if (d) {
                        this._inversePluginDependencies2.delete(e.id);
                        for (var s = 0, u = d.length; s < u; s++)this._loadPluginDependency(e.exports, d[s])
                    }
                }
            }, s
        }();
        e.ModuleManager = s
    }(e || (e = {}));
    var i, e;
    !function (e) {
        function t() {
            if (n = new e.ModuleManager(e.scriptLoader, r), e.isNode) {
                var t = e.global.require || require, u = function (r) {
                    n.getRecorder().record(e.LoaderEventType.NodeBeginNativeRequire, r);
                    try {
                        return t(r)
                    } finally {
                        n.getRecorder().record(e.LoaderEventType.NodeEndNativeRequire, r)
                    }
                };
                e.global.nodeRequire = u, s.nodeRequire = u
            }
            e.isNode && !e.isElectronRenderer ? (module.exports = s, i = function () {
                o.apply(null, arguments)
            }, require = s) : ("undefined" != typeof e.global.require && "function" != typeof e.global.require && s.config(e.global.require), e.isElectronRenderer ? i = function () {
                o.apply(null, arguments)
            } : e.global.define = i = o, e.global.require = s, e.global.require.__$__nodeRequire = u)
        }

        var n, r, o = function () {
            function e(e, t, r) {
                "string" != typeof e && (r = t, t = e, e = null), "object" == typeof t && Array.isArray(t) || (r = t, t = null), t || (t = ["require", "exports", "module"]), e ? n.defineModule(e, t, r, null, null) : n.enqueueDefineAnonymousModule(t, r)
            }

            return e
        }();
        o.amd = {jQuery: !0}, e.DefineFunc = o;
        var s = function () {
            function t() {
                if (1 === arguments.length) {
                    if (arguments[0]instanceof Object && !Array.isArray(arguments[0]))return void t.config(arguments[0]);
                    if ("string" == typeof arguments[0])return n.synchronousRequire(arguments[0])
                }
                if ((2 === arguments.length || 3 === arguments.length) && Array.isArray(arguments[0]))return void n.defineModule(e.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null);
                throw new Error("Unrecognized require call")
            }

            return t.config = function (e, t) {
                void 0 === t && (t = !1), n.configure(e, t)
            }, t.getConfig = function () {
                return n.getConfig().getOptionsLiteral()
            }, t.reset = function () {
                n = new e.ModuleManager(e.scriptLoader, r)
            }, t.getBuildInfo = function () {
                return n.getBuildInfo()
            }, t.getStats = function () {
                return n.getLoaderEvents()
            }, t
        }();
        e.RequireFunc = s, "function" == typeof e.global.define && e.global.define.amd || (t(), r = e.getHighPerformanceTimestamp())
    }(e || (e = {})), i(t[22], n([1, 0]), function (e, t) {
        "use strict";
        t.DifferenceType = {Add: 0, Remove: 1, Change: 2};
        var n = function () {
            function e(e, t, n, r) {
                this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r
            }

            return e.prototype.getChangeType = function () {
                return 0 === this.originalLength ? t.DifferenceType.Add : 0 === this.modifiedLength ? t.DifferenceType.Remove : t.DifferenceType.Change
            }, e.prototype.getOriginalEnd = function () {
                return this.originalStart + this.originalLength
            }, e.prototype.getModifiedEnd = function () {
                return this.modifiedStart + this.modifiedLength
            }, e
        }();
        t.DiffChange = n
    }), i(t[11], n([1, 0, 22]), function (e, t, n) {
        "use strict";
        function r(e) {
            return {
                getLength: function () {
                    return e.length
                }, getElementHash: function (t) {
                    return e[t]
                }
            }
        }

        function i(e, t) {
            return new c(r(e), r(t)).ComputeDiff()
        }

        t.stringDiff = i;
        var o = function () {
            function e() {
            }

            return e.Assert = function (e, t) {
                if (!e)throw new Error(t)
            }, e
        }();
        t.Debug = o;
        var s = function () {
            function e() {
            }

            return e.Copy = function (e, t, n, r, i) {
                for (var o = 0; o < i; o++)n[r + o] = e[t + o]
            }, e
        }();
        t.MyArray = s;
        var u = 1447, a = function () {
            function e() {
                this.m_changes = [], this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE, this.m_originalCount = 0, this.m_modifiedCount = 0
            }

            return e.prototype.MarkNextChange = function () {
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new n.DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE
            }, e.prototype.AddOriginalElement = function (e, t) {
                this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++
            }, e.prototype.AddModifiedElement = function (e, t) {
                this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++
            }, e.prototype.getChanges = function () {
                return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes
            }, e.prototype.getReverseChanges = function () {
                return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes
            }, e
        }(), l = Object.prototype.hasOwnProperty, c = function () {
            function e(e, t, n) {
                void 0 === n && (n = null), this.OriginalSequence = e, this.ModifiedSequence = t, this.ContinueProcessingPredicate = n, this.m_originalIds = [], this.m_modifiedIds = [], this.m_forwardHistory = [], this.m_reverseHistory = [], this.ComputeUniqueIdentifiers()
            }

            return e.prototype.ComputeUniqueIdentifiers = function () {
                var e = this.OriginalSequence.getLength(), t = this.ModifiedSequence.getLength();
                this.m_originalIds = new Array(e), this.m_modifiedIds = new Array(t);
                var n, r = {}, i = 1;
                for (n = 0; n < e; n++) {
                    var o = this.OriginalSequence.getElementHash(n);
                    l.call(r, o) ? this.m_originalIds[n] = r[o] : (this.m_originalIds[n] = i++, r[o] = this.m_originalIds[n])
                }
                for (n = 0; n < t; n++) {
                    var s = this.ModifiedSequence.getElementHash(n);
                    l.call(r, s) ? this.m_modifiedIds[n] = r[s] : (this.m_modifiedIds[n] = i++, r[s] = this.m_modifiedIds[n])
                }
            }, e.prototype.ElementsAreEqual = function (e, t) {
                return this.m_originalIds[e] === this.m_modifiedIds[t]
            }, e.prototype.ComputeDiff = function () {
                return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1)
            }, e.prototype._ComputeDiff = function (e, t, n, r) {
                var i = [!1];
                return this.ComputeDiffRecursive(e, t, n, r, i)
            }, e.prototype.ComputeDiffRecursive = function (e, t, r, i, s) {
                for (s[0] = !1; e <= t && r <= i && this.ElementsAreEqual(e, r);)e++, r++;
                for (; t >= e && i >= r && this.ElementsAreEqual(t, i);)t--, i--;
                if (e > t || r > i) {
                    var u = void 0;
                    return r <= i ? (o.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), u = [new n.DiffChange(e, 0, r, i - r + 1)]) : e <= t ? (o.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), u = [new n.DiffChange(e, t - e + 1, r, 0)]) : (o.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), o.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), u = []), u
                }
                var a = [0], l = [0], c = this.ComputeRecursionPoint(e, t, r, i, a, l, s), f = a[0], h = l[0];
                if (null !== c)return c;
                if (!s[0]) {
                    var d = this.ComputeDiffRecursive(e, f, r, h, s), p = [];
                    return p = s[0] ? [new n.DiffChange(f + 1, t - (f + 1) + 1, h + 1, i - (h + 1) + 1)] : this.ComputeDiffRecursive(f + 1, t, h + 1, i, s), this.ConcatenateChanges(d, p)
                }
                return [new n.DiffChange(e, t - e + 1, r, i - r + 1)]
            }, e.prototype.WALKTRACE = function (e, t, r, i, o, s, u, l, c, f, h, d, p, m, _, g, v, y) {
                var b, E = null, C = null, S = new a, L = t, A = r, N = p[0] - g[0] - i, P = Number.MIN_VALUE, M = this.m_forwardHistory.length - 1;
                do b = N + e, b === L || b < A && c[b - 1] < c[b + 1] ? (h = c[b + 1], m = h - N - i, h < P && S.MarkNextChange(),
                    P = h, S.AddModifiedElement(h + 1, m), N = b + 1 - e) : (h = c[b - 1] + 1, m = h - N - i, h < P && S.MarkNextChange(), P = h - 1, S.AddOriginalElement(h, m + 1), N = b - 1 - e), M >= 0 && (c = this.m_forwardHistory[M], e = c[0], L = 1, A = c.length - 1); while (--M >= -1);
                if (E = S.getReverseChanges(), y[0]) {
                    var w = p[0] + 1, D = g[0] + 1;
                    if (null !== E && E.length > 0) {
                        var I = E[E.length - 1];
                        w = Math.max(w, I.getOriginalEnd()), D = Math.max(D, I.getModifiedEnd())
                    }
                    C = [new n.DiffChange(w, d - w + 1, D, _ - D + 1)]
                } else {
                    S = new a, L = s, A = u, N = p[0] - g[0] - l, P = Number.MAX_VALUE, M = v ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
                    do b = N + o, b === L || b < A && f[b - 1] >= f[b + 1] ? (h = f[b + 1] - 1, m = h - N - l, h > P && S.MarkNextChange(), P = h + 1, S.AddOriginalElement(h + 1, m + 1), N = b + 1 - o) : (h = f[b - 1], m = h - N - l, h > P && S.MarkNextChange(), P = h, S.AddModifiedElement(h + 1, m + 1), N = b - 1 - o), M >= 0 && (f = this.m_reverseHistory[M], o = f[0], L = 1, A = f.length - 1); while (--M >= -1);
                    C = S.getChanges()
                }
                return this.ConcatenateChanges(E, C)
            }, e.prototype.ComputeRecursionPoint = function (e, t, r, i, o, a, l) {
                var c, f, h, d = 0, p = 0, m = 0, _ = 0;
                e--, r--, o[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
                var g = t - e + (i - r), v = g + 1, y = new Array(v), b = new Array(v), E = i - r, C = t - e, S = e - r, L = t - i, A = C - E, N = A % 2 === 0;
                y[E] = e, b[C] = t, l[0] = !1;
                var P, M;
                for (h = 1; h <= g / 2 + 1; h++) {
                    var w = 0, D = 0;
                    for (d = this.ClipDiagonalBound(E - h, h, E, v), p = this.ClipDiagonalBound(E + h, h, E, v), P = d; P <= p; P += 2) {
                        for (c = P === d || P < p && y[P - 1] < y[P + 1] ? y[P + 1] : y[P - 1] + 1, f = c - (P - E) - S, M = c; c < t && f < i && this.ElementsAreEqual(c + 1, f + 1);)c++, f++;
                        if (y[P] = c, c + f > w + D && (w = c, D = f), !N && Math.abs(P - C) <= h - 1 && c >= b[P])return o[0] = c, a[0] = f, M <= b[P] && u > 0 && h <= u + 1 ? this.WALKTRACE(E, d, p, S, C, m, _, L, y, b, c, t, o, f, i, a, N, l) : null
                    }
                    var I = (w - e + (D - r) - h) / 2;
                    if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(w, this.OriginalSequence, I))return l[0] = !0, o[0] = w, a[0] = D, I > 0 && u > 0 && h <= u + 1 ? this.WALKTRACE(E, d, p, S, C, m, _, L, y, b, c, t, o, f, i, a, N, l) : (e++, r++, [new n.DiffChange(e, t - e + 1, r, i - r + 1)]);
                    for (m = this.ClipDiagonalBound(C - h, h, C, v), _ = this.ClipDiagonalBound(C + h, h, C, v), P = m; P <= _; P += 2) {
                        for (c = P === m || P < _ && b[P - 1] >= b[P + 1] ? b[P + 1] - 1 : b[P - 1], f = c - (P - C) - L, M = c; c > e && f > r && this.ElementsAreEqual(c, f);)c--, f--;
                        if (b[P] = c, N && Math.abs(P - E) <= h && c <= y[P])return o[0] = c, a[0] = f, M >= y[P] && u > 0 && h <= u + 1 ? this.WALKTRACE(E, d, p, S, C, m, _, L, y, b, c, t, o, f, i, a, N, l) : null
                    }
                    if (h <= u) {
                        var k = new Array(p - d + 2);
                        k[0] = E - d + 1, s.Copy(y, d, k, 1, p - d + 1), this.m_forwardHistory.push(k), k = new Array(_ - m + 2), k[0] = C - m + 1, s.Copy(b, m, k, 1, _ - m + 1), this.m_reverseHistory.push(k)
                    }
                }
                return this.WALKTRACE(E, d, p, S, C, m, _, L, y, b, c, t, o, f, i, a, N, l)
            }, e.prototype.ConcatenateChanges = function (e, t) {
                var n = [], r = null;
                return 0 === e.length || 0 === t.length ? t.length > 0 ? t : e : this.ChangesOverlap(e[e.length - 1], t[0], n) ? (r = new Array(e.length + t.length - 1), s.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = n[0], s.Copy(t, 1, r, e.length, t.length - 1), r) : (r = new Array(e.length + t.length), s.Copy(e, 0, r, 0, e.length), s.Copy(t, 0, r, e.length, t.length), r)
            }, e.prototype.ChangesOverlap = function (e, t, r) {
                if (o.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), o.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
                    var i = e.originalStart, s = e.originalLength, u = e.modifiedStart, a = e.modifiedLength;
                    return e.originalStart + e.originalLength >= t.originalStart && (s = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (a = t.modifiedStart + t.modifiedLength - e.modifiedStart), r[0] = new n.DiffChange(i, s, u, a), !0
                }
                return r[0] = null, !1
            }, e.prototype.ClipDiagonalBound = function (e, t, n, r) {
                if (e >= 0 && e < r)return e;
                var i = n, o = r - n - 1, s = t % 2 === 0;
                if (e < 0) {
                    var u = i % 2 === 0;
                    return s === u ? 0 : 1
                }
                var a = o % 2 === 0;
                return s === a ? r - 1 : r - 2
            }, e
        }();
        t.LcsDiff = c
    }), i(t[14], n([1, 0]), function (e, t) {
        "use strict";
        function n(e) {
            return function () {
                for (var t = [], n = 0; n < arguments.length; n++)t[n] = arguments[n];
                return !e.apply(void 0, t)
            }
        }

        function r(e) {
            var t, n = this, r = !1;
            return function () {
                return r ? t : (r = !0, t = e.apply(n, arguments))
            }
        }

        t.not = n, t.once = r
    }), i(t[18], n([1, 0]), function (e, t) {
        "use strict";
        function n(e, t) {
            var n = [];
            e(n);
            for (var r = {}, i = 0, s = n.length; i < s; i++)n[i] && (r[n[i]] = i);
            t(r);
            var u = {};
            for (var a in r)r.hasOwnProperty(a) && (u[a] = r[a], u[a.toLowerCase()] = r[a]);
            return new o(n, u)
        }

        function r(e, t) {
            var n = (65535 & t) << 16 >>> 0;
            return (e | n) >>> 0
        }

        var i;
        !function (e) {
            e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7",e[e.NUMPAD_8 = 101] = "NUMPAD_8",e[e.NUMPAD_9 = 102] = "NUMPAD_9",e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY",e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD",e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR",e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT",e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL",e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE",e[e.MAX_VALUE = 109] = "MAX_VALUE"
        }(i = t.KeyCode || (t.KeyCode = {}));
        var o = function () {
            function e(e, t) {
                this._fromKeyCode = e, this._toKeyCode = t
            }

            return e.prototype.fromKeyCode = function (e) {
                return this._fromKeyCode[e]
            }, e.prototype.toKeyCode = function (e) {
                return this._toKeyCode.hasOwnProperty(e) ? this._toKeyCode[e] : 0
            }, e
        }();
        t.Mapping = o;
        var s = n(function (e) {
            e[0] = "unknown", e[1] = "Backspace", e[2] = "Tab", e[3] = "Enter", e[4] = "Shift", e[5] = "Ctrl", e[6] = "Alt", e[7] = "PauseBreak", e[8] = "CapsLock", e[9] = "Escape", e[10] = "Space", e[11] = "PageUp", e[12] = "PageDown", e[13] = "End", e[14] = "Home", e[15] = "LeftArrow", e[16] = "UpArrow", e[17] = "RightArrow", e[18] = "DownArrow", e[19] = "Insert", e[20] = "Delete", e[21] = "0", e[22] = "1", e[23] = "2", e[24] = "3", e[25] = "4", e[26] = "5", e[27] = "6", e[28] = "7", e[29] = "8", e[30] = "9", e[31] = "A", e[32] = "B", e[33] = "C", e[34] = "D", e[35] = "E", e[36] = "F", e[37] = "G", e[38] = "H", e[39] = "I", e[40] = "J", e[41] = "K", e[42] = "L", e[43] = "M", e[44] = "N", e[45] = "O", e[46] = "P", e[47] = "Q", e[48] = "R", e[49] = "S", e[50] = "T", e[51] = "U", e[52] = "V", e[53] = "W", e[54] = "X", e[55] = "Y", e[56] = "Z", e[58] = "ContextMenu", e[59] = "F1", e[60] = "F2", e[61] = "F3", e[62] = "F4", e[63] = "F5", e[64] = "F6", e[65] = "F7", e[66] = "F8", e[67] = "F9", e[68] = "F10", e[69] = "F11", e[70] = "F12", e[71] = "F13", e[72] = "F14", e[73] = "F15", e[74] = "F16", e[75] = "F17", e[76] = "F18", e[77] = "F19", e[78] = "NumLock", e[79] = "ScrollLock", e[80] = ";", e[81] = "=", e[82] = ",", e[83] = "-", e[84] = ".", e[85] = "/", e[86] = "`", e[87] = "[", e[88] = "\\", e[89] = "]", e[90] = "'", e[91] = "OEM_8", e[92] = "OEM_102", e[93] = "NumPad0", e[94] = "NumPad1", e[95] = "NumPad2", e[96] = "NumPad3", e[97] = "NumPad4", e[98] = "NumPad5", e[99] = "NumPad6", e[100] = "NumPad7", e[101] = "NumPad8",e[102] = "NumPad9",e[103] = "NumPad_Multiply",e[104] = "NumPad_Add",e[105] = "NumPad_Separator",e[106] = "NumPad_Subtract",e[107] = "NumPad_Decimal",e[108] = "NumPad_Divide"
        }, function (e) {
            e["\r"] = 3
        });
        t.USER_SETTINGS = n(function (e) {
            for (var t = 0, n = s._fromKeyCode.length; t < n; t++)e[t] = s._fromKeyCode[t];
            e[15] = "Left", e[16] = "Up", e[17] = "Right", e[18] = "Down"
        }, function (e) {
            e.OEM_1 = 80, e.OEM_PLUS = 81, e.OEM_COMMA = 82, e.OEM_MINUS = 83, e.OEM_PERIOD = 84, e.OEM_2 = 85, e.OEM_3 = 86, e.OEM_4 = 87, e.OEM_5 = 88, e.OEM_6 = 89, e.OEM_7 = 90, e.OEM_8 = 91, e.OEM_102 = 92
        });
        var u;
        !function (e) {
            function t(e) {
                return s.fromKeyCode(e)
            }

            function n(e) {
                return s.toKeyCode(e)
            }

            e.toString = t, e.fromString = n
        }(u = t.KeyCodeUtils || (t.KeyCodeUtils = {}));
        var a;
        !function (e) {
            e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl", e[e.KeyCode = 255] = "KeyCode", e[e.ModifierMask = 3840] = "ModifierMask"
        }(a || (a = {}));
        var l;
        !function (e) {
            e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl"
        }(l = t.KeyMod || (t.KeyMod = {})), t.KeyChord = r;
        var c = function () {
            function e() {
            }

            return e.extractFirstPart = function (e) {
                return (65535 & e) >>> 0
            }, e.extractChordPart = function (e) {
                return (4294901760 & e) >>> 16
            }, e.hasChord = function (e) {
                return 0 !== this.extractChordPart(e)
            }, e.hasCtrlCmd = function (e) {
                return !!(2048 & e)
            }, e.hasShift = function (e) {
                return !!(1024 & e)
            }, e.hasAlt = function (e) {
                return !!(512 & e)
            }, e.hasWinCtrl = function (e) {
                return !!(256 & e)
            }, e.isModifierKey = function (e) {
                if ((3840 & e) === e)return !0;
                var t = this.extractKeyCode(e);
                return 5 === t || 57 === t || 6 === t || 4 === t
            }, e.extractKeyCode = function (e) {
                return 255 & e
            }, e
        }();
        t.BinaryKeybindings = c;
        var f = function () {
            function e(e) {
                this.value = e
            }

            return e.prototype.equals = function (e) {
                return this.value === e.value
            }, e.prototype.hasCtrlCmd = function () {
                return c.hasCtrlCmd(this.value)
            }, e.prototype.hasShift = function () {
                return c.hasShift(this.value)
            }, e.prototype.hasAlt = function () {
                return c.hasAlt(this.value)
            }, e.prototype.hasWinCtrl = function () {
                return c.hasWinCtrl(this.value)
            }, e.prototype.isModifierKey = function () {
                return c.isModifierKey(this.value)
            }, e.prototype.getKeyCode = function () {
                return c.extractKeyCode(this.value)
            }, e
        }();
        t.Keybinding = f
    });
    var o = this && this.__extends || function (e, t) {
            function n() {
                this.constructor = e
            }

            for (var r in t)t.hasOwnProperty(r) && (e[r] = t[r]);
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        };
    i(t[9], n([1, 0]), function (e, t) {
        "use strict";
        function n(e) {
            for (var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
            return Array.isArray(e) ? (e.forEach(function (e) {
                return e && e.dispose()
            }), []) : 0 !== t.length ? (n(e), n(t), []) : e ? (e.dispose(), e) : void 0
        }

        function r(e) {
            return {
                dispose: function () {
                    return n(e)
                }
            }
        }

        function i() {
            for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
            return r(e.map(function (e) {
                return {dispose: e}
            }))
        }

        t.empty = Object.freeze({
            dispose: function () {
            }
        }), t.dispose = n, t.combinedDisposable = r, t.toDisposable = i;
        var s = function () {
            function e() {
                this._toDispose = []
            }

            return e.prototype.dispose = function () {
                this._toDispose = n(this._toDispose)
            }, e.prototype._register = function (e) {
                return this._toDispose.push(e), e
            }, e
        }();
        t.Disposable = s;
        var u = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.add = function (e) {
                if (!Array.isArray(e))return this._register(e);
                for (var t = 0, n = e; t < n.length; t++) {
                    var r = n[t];
                    return this._register(r)
                }
            }, t
        }(s);
        t.Disposables = u;
        var a = function () {
            function e() {
            }

            return Object.defineProperty(e.prototype, "value", {
                set: function (e) {
                    this._value && this._value.dispose(), this._value = e
                }, enumerable: !0, configurable: !0
            }), e.prototype.dispose = function () {
                this.value = null
            }, e
        }();
        t.OneDisposable = a;
        var l = function () {
            function e() {
                this.references = Object.create(null)
            }

            return e.prototype.acquire = function (e) {
                var t = this, n = this.references[e];
                n || (n = this.references[e] = {counter: 0, object: this.createReferencedObject(e)});
                var r = n.object, i = function () {
                    0 === --n.counter && (t.destroyReferencedObject(n.object), delete t.references[e])
                };
                return n.counter++, {object: r, dispose: i}
            }, e
        }();
        t.ReferenceCollection = l;
        var c = function () {
            function e(e) {
                this.object = e
            }

            return e.prototype.dispose = function () {
            }, e
        }();
        t.ImmortalReference = c
    }), i(t[13], n([1, 0]), function (e, t) {
        "use strict";
        var n = function () {
            function e() {
                this.map = Object.create(null), this._size = 0
            }

            return Object.defineProperty(e.prototype, "size", {
                get: function () {
                    return this._size
                }, enumerable: !0, configurable: !0
            }), e.prototype.get = function (e) {
                var t = this.peek(e);
                return t ? t : null
            }, e.prototype.getOrSet = function (e, t) {
                var n = this.get(e);
                return n ? n : (this.set(e, t), t)
            }, e.prototype.keys = function () {
                var e = [];
                for (var t in this.map)e.push(this.map[t].key);
                return e
            }, e.prototype.values = function () {
                var e = [];
                for (var t in this.map)e.push(this.map[t].value);
                return e
            }, e.prototype.entries = function () {
                var e = [];
                for (var t in this.map)e.push(this.map[t]);
                return e
            }, e.prototype.set = function (e, t) {
                return !this.get(e) && (this.push(e, t), !0)
            }, e.prototype.delete = function (e) {
                var t = this.get(e);
                return t ? (this.pop(e), t) : null
            }, e.prototype.has = function (e) {
                return !!this.get(e)
            }, e.prototype.clear = function () {
                this.map = Object.create(null), this._size = 0
            }, e.prototype.push = function (e, t) {
                var n = {key: e, value: t};
                this.map[e.toString()] = n, this._size++
            }, e.prototype.pop = function (e) {
                delete this.map[e.toString()], this._size--
            }, e.prototype.peek = function (e) {
                var t = this.map[e.toString()];
                return t ? t.value : null
            }, e
        }();
        t.LinkedMap = n;
        var r = function () {
            function e(e, t) {
                void 0 === e && (e = Number.MAX_VALUE), void 0 === t && (t = 1), this.limit = e, this.map = Object.create(null), this._size = 0, this.ratio = e * t
            }

            return Object.defineProperty(e.prototype, "size", {
                get: function () {
                    return this._size
                }, enumerable: !0, configurable: !0
            }), e.prototype.set = function (e, t) {
                if (this.map[e])return !1;
                var n = {key: e, value: t};
                return this.push(n), this._size > this.limit && this.trim(), !0
            }, e.prototype.get = function (e) {
                var t = this.map[e];
                return t ? t.value : null
            }, e.prototype.getOrSet = function (e, t) {
                var n = this.get(e);
                return n ? n : (this.set(e, t), t)
            }, e.prototype.delete = function (e) {
                var t = this.map[e];
                return t ? (this.map[e] = void 0, this._size--, t.next ? t.next.prev = t.prev : this.head = t.prev, t.prev ? t.prev.next = t.next : this.tail = t.next, t.value) : null
            }, e.prototype.has = function (e) {
                return !!this.map[e]
            }, e.prototype.clear = function () {
                this.map = Object.create(null), this._size = 0, this.head = null, this.tail = null
            }, e.prototype.push = function (e) {
                this.head && (e.prev = this.head, this.head.next = e), this.tail || (this.tail = e), this.head = e, this.map[e.key] = e, this._size++
            }, e.prototype.trim = function () {
                if (this.tail)if (this.ratio < this.limit)for (var e = 0, t = this.tail; t.next;) {
                    if (this.map[t.key] = void 0, this._size--, e === this.ratio) {
                        this.tail = t.next, this.tail.prev = null;
                        break
                    }
                    t = t.next, e++
                } else this.map[this.tail.key] = void 0, this._size--, this.tail = this.tail.next, this.tail.prev = null
            }, e
        }();
        t.BoundedLinkedMap = r;
        var i = function (e) {
            function t(t) {
                return e.call(this, t) || this
            }

            return o(t, e), t.prototype.get = function (e) {
                var t = this.map[e];
                return t ? (this.delete(e), this.push(t), t.value) : null
            }, t
        }(r);
        t.LRUCache = i;
        var s = function () {
            function e() {
                this.children = new Map
            }

            return e
        }(), u = function () {
            function e(e) {
                this._root = new s, this._splitter = e
            }

            return e.prototype.insert = function (e, t) {
                for (var n = this._splitter(e), r = 0, i = this._root; r < n.length; r++) {
                    var o = i.children[n[r]];
                    {
                        if (!o)break;
                        i = o
                    }
                }
                for (var u; r < n.length; r++)u = new s, i.children[n[r]] = u, i = u;
                i.element = t
            }, e.prototype.lookUp = function (e) {
                for (var t, n = this._splitter(e), r = this._root.children, i = 0, o = n; i < o.length; i++) {
                    var s = o[i];
                    if (t = r[s], !t)return;
                    r = t.children
                }
                return t.element
            }, e.prototype.findSubstr = function (e) {
                for (var t, n = this._splitter(e), r = this._root.children, i = 0, o = n; i < o.length; i++) {
                    var s = o[i], u = r[s];
                    if (!u)break;
                    u.element && (t = u), r = u.children
                }
                if (t)return t.element
            }, e.prototype.findSuperstr = function (t) {
                for (var n, r = this._splitter(t), i = this._root.children, o = 0, s = r; o < s.length; o++) {
                    var u = s[o];
                    if (n = i[u], !n)return;
                    i = n.children
                }
                var a = new e(this._splitter);
                return a._root = n, a
            }, e
        }();
        u.PathSplitter = function (e) {
            return e.split(/[\\/]/).filter(function (e) {
                return !!e
            })
        }, t.TrieMap = u
    }), i(t[3], n([1, 0]), function (e, t) {
        "use strict";
        function n() {
            return "undefined" != typeof g.Worker
        }

        var r = !1, i = !1, o = !1, s = !1, u = !1, a = !1, l = !1, c = void 0, f = void 0;
        if (t.LANGUAGE_DEFAULT = "en", "object" == typeof process) {
            r = "win32" === process.platform, i = "darwin" === process.platform, o = "linux" === process.platform, s = !r && 0 === process.getuid();
            var h = process.env.VSCODE_NLS_CONFIG;
            if (h)try {
                var d = JSON.parse(h), p = d.availableLanguages["*"];
                c = d.locale, f = p ? p : t.LANGUAGE_DEFAULT
            } catch (e) {
            }
            u = !0
        } else if ("object" == typeof navigator) {
            var m = navigator.userAgent;
            r = m.indexOf("Windows") >= 0, i = m.indexOf("Macintosh") >= 0, o = m.indexOf("Linux") >= 0, a = !0, c = navigator.language, f = c, l = !!self.QUnit
        }
        var _;
        !function (e) {
            e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows"
        }(_ = t.Platform || (t.Platform = {})), t._platform = _.Web, u && (i ? t._platform = _.Mac : r ? t._platform = _.Windows : o && (t._platform = _.Linux)), t.isWindows = r, t.isMacintosh = i, t.isLinux = o, t.isRootUser = s, t.isNative = u, t.isWeb = a, t.isQunit = l, t.platform = t._platform, t.language = f, t.locale = c;
        var g = "object" == typeof self ? self : global;
        t.globals = g, t.hasWebWorkerSupport = n, t.setTimeout = g.setTimeout.bind(g), t.clearTimeout = g.clearTimeout.bind(g), t.setInterval = g.setInterval.bind(g), t.clearInterval = g.clearInterval.bind(g)
    }), i(t[15], n([1, 0, 13]), function (e, t, n) {
        "use strict";
        function r(e) {
            return !e || "string" != typeof e || 0 === e.trim().length
        }

        function i(e, t, n) {
            void 0 === n && (n = "0");
            for (var r = "" + e, i = [r], o = r.length; o < t; o++)i.push(n);
            return i.reverse().join("")
        }

        function o(e) {
            for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            return 0 === t.length ? e : e.replace(q, function (e, n) {
                var r = parseInt(n, 10);
                return isNaN(r) || r < 0 || r >= t.length ? e : t[r]
            })
        }

        function s(e) {
            return e.replace(/[<|>|&]/g, function (e) {
                switch (e) {
                    case"<":
                        return "&lt;";
                    case">":
                        return "&gt;";
                    case"&":
                        return "&amp;";
                    default:
                        return e
                }
            })
        }

        function u(e) {
            return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
        }

        function a(e, t) {
            void 0 === t && (t = " ");
            var n = l(e, t);
            return c(n, t)
        }

        function l(e, t) {
            if (!e || !t)return e;
            var n = t.length;
            if (0 === n || 0 === e.length)return e;
            for (var r = 0, i = -1; (i = e.indexOf(t, r)) === r;)r += n;
            return e.substring(r)
        }

        function c(e, t) {
            if (!e || !t)return e;
            var n = t.length, r = e.length;
            if (0 === n || 0 === r)return e;
            for (var i = r, o = -1; ;) {
                if (o = e.lastIndexOf(t, i - 1), o === -1 || o + n !== i)break;
                if (0 === o)return "";
                i = o
            }
            return e.substring(0, i)
        }

        function f(e) {
            return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&").replace(/[\*]/g, ".*")
        }

        function h(e) {
            return e.replace(/\*/g, "")
        }

        function d(e, t) {
            if (e.length < t.length)return !1;
            for (var n = 0; n < t.length; n++)if (e[n] !== t[n])return !1;
            return !0
        }

        function p(e, t) {
            var n = e.length - t.length;
            return n > 0 ? e.indexOf(t, n) === n : 0 === n && e === t
        }

        function m(e, t, n) {
            void 0 === n && (n = 0);
            var r = e.indexOf(t, n);
            return r < 0 && (n > 0 && (e = e.substr(n)), t = u(t), r = e.search(new RegExp(t, "i"))), r
        }

        function _(e, t, n) {
            if (void 0 === n && (n = {}), "" === e)throw new Error("Cannot create regex from empty string");
            t || (e = e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")), n.wholeWord && (/\B/.test(e.charAt(0)) || (e = "\\b" + e), /\B/.test(e.charAt(e.length - 1)) || (e += "\\b"));
            var r = "";
            return n.global && (r += "g"), n.matchCase || (r += "i"), n.multiline && (r += "m"), new RegExp(e, r)
        }

        function g(e) {
            if ("^" === e.source || "^$" === e.source || "$" === e.source)return !1;
            var t = e.exec("");
            return t && 0 === e.lastIndex
        }

        function v(e) {
            if (!t.canNormalize || !e)return e;
            var n = B.get(e);
            if (n)return n;
            var r;
            return r = Y.test(e) ? e.normalize("NFC") : e, B.set(e, r), r
        }

        function y(e) {
            for (var t = 0, n = e.length; t < n; t++) {
                var r = e.charCodeAt(t);
                if (32 !== r && 9 !== r)return t
            }
            return -1
        }

        function b(e) {
            for (var t = 0, n = e.length; t < n; t++) {
                var r = e.charCodeAt(t);
                if (32 !== r && 9 !== r)return e.substring(0, t)
            }
            return e
        }

        function E(e, t) {
            void 0 === t && (t = e.length - 1);
            for (var n = t; n >= 0; n--) {
                var r = e.charCodeAt(n);
                if (32 !== r && 9 !== r)return n
            }
            return -1
        }

        function C(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }

        function S(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                var i = e.charCodeAt(r), o = t.charCodeAt(r);
                if (i !== o) {
                    var s = i - o;
                    if (32 !== s && s !== -32 || !L(i) || !L(o))return C(e[r].toLowerCase(), t[r].toLowerCase())
                }
            }
            return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
        }

        function L(e) {
            return e >= 97 && e <= 122 || e >= 65 && e <= 90
        }

        function A(e, t) {
            var n = e.length, r = t.length;
            if (n !== r)return !1;
            for (var i = 0; i < n; i++) {
                var o = e.charCodeAt(i), s = t.charCodeAt(i);
                if (o !== s)if (L(o) && L(s)) {
                    var u = Math.abs(o - s);
                    if (0 !== u && 32 !== u)return !1
                } else if (String.fromCharCode(o).toLocaleLowerCase() !== String.fromCharCode(s).toLocaleLowerCase())return !1
            }
            return !0
        }

        function N(e, t) {
            var n, r = Math.min(e.length, t.length);
            for (n = 0; n < r; n++)if (e.charCodeAt(n) !== t.charCodeAt(n))return n;
            return r
        }

        function P(e, t) {
            var n, r = Math.min(e.length, t.length), i = e.length - 1, o = t.length - 1;
            for (n = 0; n < r; n++)if (e.charCodeAt(i - n) !== t.charCodeAt(o - n))return n;
            return r
        }

        function M(e) {
            return 55296 <= e && e <= 56319
        }

        function w(e) {
            return 56320 <= e && e <= 57343
        }

        function D(e) {
            return j.test(e)
        }

        function I(e) {
            return V.test(e)
        }

        function k(e) {
            return e = +e, e >= 11904 && e <= 55215 || e >= 63744 && e <= 64255 || e >= 65281 && e <= 65374
        }

        function U(e, t, n) {
            void 0 === n && (n = 4);
            var r = Math.abs(e.length - t.length);
            if (r > n)return 0;
            var i, o, s = [], u = [];
            for (i = 0; i < t.length + 1; ++i)u.push(0);
            for (i = 0; i < e.length + 1; ++i)s.push(u);
            for (i = 1; i < e.length + 1; ++i)for (o = 1; o < t.length + 1; ++o)e[i - 1] === t[o - 1] ? s[i][o] = s[i - 1][o - 1] + 1 : s[i][o] = Math.max(s[i - 1][o], s[i][o - 1]);
            return s[e.length][t.length] - Math.sqrt(r)
        }

        function T(e) {
            for (var t, n = /\r\n|\r|\n/g, r = [0]; t = n.exec(e);)r.push(n.lastIndex);
            return r
        }

        function x(e, n) {
            if (e.length < n)return e;
            for (var r = e.split(/\b/), i = 0, o = r.length - 1; o >= 0; o--)if (i += r[o].length, i > n) {
                r.splice(0, o);
                break
            }
            return r.join(t.empty).replace(/^\s/, t.empty)
        }

        function O(e) {
            return e && (e = e.replace(H, ""), e = e.replace(z, ""), e = e.replace(J, "")), e
        }

        function R(e) {
            return e && e.length > 0 && 65279 === e.charCodeAt(0)
        }

        function F(e, t, n) {
            var r = e.length + t.length;
            return r > n && (e = "..." + e.substr(r - n)), e += t.length > n ? t.substr(t.length - n) : t
        }

        function K(e) {
            return btoa(encodeURIComponent(e))
        }

        function W(e, t) {
            for (var n = "", r = 0; r < t; r++)n += e;
            return n
        }

        t.empty = "", t.isFalsyOrWhitespace = r, t.pad = i;
        var q = /{(\d+)}/g;
        t.format = o, t.escape = s, t.escapeRegExpCharacters = u, t.trim = a, t.ltrim = l, t.rtrim = c, t.convertSimple2RegExpPattern = f, t.stripWildcards = h, t.startsWith = d, t.endsWith = p, t.indexOfIgnoreCase = m, t.createRegExp = _, t.regExpLeadsToEndlessLoop = g, t.canNormalize = "function" == typeof"".normalize;
        var Y = /[^\u0000-\u0080]/, B = new n.BoundedLinkedMap(1e4);
        t.normalizeNFC = v, t.firstNonWhitespaceIndex = y, t.getLeadingWhitespace = b, t.lastNonWhitespaceIndex = E, t.compare = C, t.compareIgnoreCase = S, t.equalsIgnoreCase = A, t.commonPrefixLength = N, t.commonSuffixLength = P, t.isHighSurrogate = M, t.isLowSurrogate = w;
        var j = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
        t.containsRTL = D;
        var V = /^[\t\n\r\x20-\x7E]*$/;
        t.isBasicASCII = I, t.isFullWidthCharacter = k, t.difference = U, t.computeLineStarts = T, t.lcut = x;
        var H = /\x1B\x5B[12]?K/g, z = /\x1b\[\d+m/g, J = /\x1b\[0?m/g;
        t.removeAnsiEscapeCodes = O, t.UTF8_BOM_CHARACTER = String.fromCharCode(65279), t.startsWithUTF8BOM = R, t.appendWithLimit = F, t.safeBtoa = K, t.repeat = W
    }), i(t[16], n([1, 0]), function (e, t) {
        "use strict";
        function n(e) {
            return Array.isArray ? Array.isArray(e) : !(!e || typeof e.length !== _.number || e.constructor !== Array)
        }

        function r(e) {
            return typeof e === _.string || e instanceof String
        }

        function i(e) {
            return n(e) && e.every(function (e) {
                    return r(e)
                })
        }

        function o(e) {
            return !(typeof e !== _.object || null === e || Array.isArray(e) || e instanceof RegExp || e instanceof Date)
        }

        function s(e) {
            return (typeof e === _.number || e instanceof Number) && !isNaN(e)
        }

        function u(e) {
            return e === !0 || e === !1
        }

        function a(e) {
            return typeof e === _.undefined
        }

        function l(e) {
            return a(e) || null === e
        }

        function c(e) {
            if (!o(e))return !1;
            for (var t in e)if (g.call(e, t))return !1;
            return !0
        }

        function f(e) {
            return typeof e === _.function
        }

        function h() {
            for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
            return e && e.length > 0 && e.every(f)
        }

        function d(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)p(e[r], t[r])
        }

        function p(e, t) {
            if (r(t)) {
                if (typeof e !== t)throw new Error("argument does not match constraint: typeof " + t)
            } else if (f(t)) {
                if (e instanceof t)return;
                if (e && e.constructor === t)return;
                if (1 === t.length && t.call(void 0, e) === !0)return;
                throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true")
            }
        }

        function m(e) {
            for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            var r = Object.create(e.prototype);
            return e.apply(r, t), r
        }

        var _ = {number: "number", string: "string", undefined: "undefined", object: "object", function: "function"};
        t.isArray = n, t.isString = r, t.isStringArray = i, t.isObject = o, t.isNumber = s, t.isBoolean = u, t.isUndefined = a, t.isUndefinedOrNull = l;
        var g = Object.prototype.hasOwnProperty;
        t.isEmptyObject = c, t.isFunction = f, t.areFunctions = h, t.validateConstraints = d, t.validateConstraint = p, t.create = m
    }), i(t[4], n([1, 0, 3, 16]), function (e, t, n, r) {
        "use strict";
        function i(e) {
            t.errorHandler.setUnexpectedErrorHandler(e)
        }

        function o(e) {
            l(e) || t.errorHandler.onUnexpectedError(e)
        }

        function s(e) {
            l(e) || t.errorHandler.onUnexpectedExternalError(e)
        }

        function u(e) {
            return e.then(null, o)
        }

        function a(e) {
            if (e instanceof Error) {
                var t = e.name, n = e.message, r = e.stacktrace || e.stack;
                return {$isError: !0, name: t, message: n, stack: r}
            }
            return e
        }

        function l(e) {
            return e instanceof Error && e.name === v && e.message === v
        }

        function c() {
            var e = new Error(v);
            return e.name = e.message, e
        }

        function f() {
            return new Error("Not Implemented")
        }

        function h(e) {
            return e ? new Error("Illegal argument: " + e) : new Error("Illegal argument")
        }

        function d(e) {
            return e ? new Error("Illegal state: " + e) : new Error("Illegal state")
        }

        function p(e) {
            return e ? new Error("readonly property '" + e + " cannot be changed'") : new Error("readonly property cannot be changed")
        }

        function m(e, t) {
            void 0 === t && (t = {});
            var n = new Error(e);
            return r.isNumber(t.severity) && (n.severity = t.severity), t.actions && (n.actions = t.actions), n
        }

        function _(e) {
            return e ? e.message ? e.message : e.stack ? e.stack.split("\n")[0] : String(e) : "Error"
        }

        var g = function () {
            function e() {
                this.listeners = [], this.unexpectedErrorHandler = function (e) {
                    n.setTimeout(function () {
                        if (e.stack)throw new Error(e.message + "\n\n" + e.stack);
                        throw e
                    }, 0)
                }
            }

            return e.prototype.addListener = function (e) {
                var t = this;
                return this.listeners.push(e), function () {
                    t._removeListener(e)
                }
            }, e.prototype.emit = function (e) {
                this.listeners.forEach(function (t) {
                    t(e)
                })
            }, e.prototype._removeListener = function (e) {
                this.listeners.splice(this.listeners.indexOf(e), 1)
            }, e.prototype.setUnexpectedErrorHandler = function (e) {
                this.unexpectedErrorHandler = e
            }, e.prototype.getUnexpectedErrorHandler = function () {
                return this.unexpectedErrorHandler
            }, e.prototype.onUnexpectedError = function (e) {
                this.unexpectedErrorHandler(e), this.emit(e)
            }, e.prototype.onUnexpectedExternalError = function (e) {
                this.unexpectedErrorHandler(e)
            }, e
        }();
        t.ErrorHandler = g, t.errorHandler = new g, t.setUnexpectedErrorHandler = i, t.onUnexpectedError = o, t.onUnexpectedExternalError = s, t.onUnexpectedPromiseError = u, t.transformErrorForSerialization = a;
        var v = "Canceled";
        t.isPromiseCanceledError = l, t.canceled = c, t.notImplemented = f, t.illegalArgument = h, t.illegalState = d, t.readonly = p, t.create = m, t.getErrorMessage = _
    }), i(t[19], n([1, 0, 4]), function (e, t, n) {
        "use strict";
        var r = function () {
            function e() {
            }

            return e.prototype.add = function (e, t, n) {
                var r = this;
                void 0 === t && (t = null), this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(n) && n.push({
                    dispose: function () {
                        return r.remove(e, t)
                    }
                })
            }, e.prototype.remove = function (e, t) {
                if (void 0 === t && (t = null), this._callbacks) {
                    for (var n = !1, r = 0, i = this._callbacks.length; r < i; r++)if (this._callbacks[r] === e) {
                        if (this._contexts[r] === t)return this._callbacks.splice(r, 1), void this._contexts.splice(r, 1);
                        n = !0
                    }
                    if (n)throw new Error("When adding a listener with a context, you should remove it with the same context")
                }
            }, e.prototype.invoke = function () {
                for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                if (this._callbacks) {
                    for (var r = [], i = this._callbacks.slice(0), o = this._contexts.slice(0), s = 0, u = i.length; s < u; s++)try {
                        r.push(i[s].apply(o[s], e))
                    } catch (e) {
                        n.onUnexpectedError(e)
                    }
                    return r
                }
            }, e.prototype.isEmpty = function () {
                return !this._callbacks || 0 === this._callbacks.length
            }, e.prototype.entries = function () {
                var e = this;
                return this._callbacks ? this._callbacks.map(function (t, n) {
                    return [t, e._contexts[n]]
                }) : []
            }, e.prototype.dispose = function () {
                this._callbacks = void 0, this._contexts = void 0
            }, e
        }();
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = r
    }), i(t[5], n([1, 0, 9, 19, 14]), function (e, t, n, r, i) {
        "use strict";
        function o(e, t) {
            return function (n, r, i) {
                var o = e.addListener2(t, function () {
                    n.apply(r, arguments)
                });
                return Array.isArray(i) && i.push(o), o
            }
        }

        function s(e) {
            var t, n = new v({
                onFirstListenerAdd: function () {
                    return t = e(function (e) {
                        return n.fire(e)
                    })
                }, onLastListenerRemove: function () {
                    return t.dispose()
                }
            });
            return n.event
        }

        function u(e) {
            var t = new v, n = !1;
            return e.then(null, function () {
                return null
            }).then(function () {
                n ? t.fire() : setTimeout(function () {
                    return t.fire()
                }, 0)
            }), n = !0, t.event
        }

        function a(e) {
            var t = null, n = null, r = new v({
                onFirstListenerAdd: function () {
                    t = e.then(function (e) {
                        return n = e(function (e) {
                            return r.fire(e)
                        })
                    }, function () {
                        return null
                    })
                }, onLastListenerRemove: function () {
                    t && (t.cancel(), t = null), n && (n.dispose(), n = null)
                }
            });
            return r.event
        }

        function l(e) {
            return function (t, n, r) {
                void 0 === n && (n = null);
                var i = e(function (e) {
                    return i.dispose(), t.call(n, e)
                }, null, r);
                return i
            }
        }

        function c() {
            for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
            var r = [], i = new v({
                onFirstListenerAdd: function () {
                    r = e.map(function (e) {
                        return e(function (e) {
                            return i.fire(e)
                        })
                    })
                }, onLastListenerRemove: function () {
                    r = n.dispose(r)
                }
            });
            return i.event
        }

        function f(e, t, n) {
            void 0 === n && (n = 100);
            var r, i, o, s = new v({
                onFirstListenerAdd: function () {
                    r = e(function (e) {
                        i = t(i, e), clearTimeout(o), o = setTimeout(function () {
                            var e = i;
                            i = void 0, s.fire(e)
                        }, n)
                    })
                }, onLastListenerRemove: function () {
                    r.dispose()
                }
            });
            return s.event
        }

        function h(e, t) {
            return function (n, r, i) {
                return void 0 === r && (r = null), e(function (e) {
                    return n.call(r, t(e))
                }, null, i)
            }
        }

        function d(e, t) {
            return function (n, r, i) {
                return void 0 === r && (r = null), e(function (e) {
                    return t(e) && n.call(r, e)
                }, null, i)
            }
        }

        function p(e) {
            return new E(e)
        }

        function m(e) {
            var t = (new Date).getTime();
            return h(l(e), function (e) {
                return (new Date).getTime() - t
            })
        }

        function _(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = []), n = n.slice();
            var r = e(function (e) {
                n ? n.push(e) : o.fire(e)
            }), i = function () {
                n.forEach(function (e) {
                    return o.fire(e)
                }), n = null
            }, o = new v({
                onFirstListenerAdd: function () {
                    r || (r = e(function (e) {
                        return o.fire(e)
                    }))
                }, onFirstListenerDidAdd: function () {
                    n && (t ? setTimeout(i) : i())
                }, onLastListenerRemove: function () {
                    r.dispose(), r = null
                }
            });
            return o.event
        }

        var g;
        !function (e) {
            var t = {
                dispose: function () {
                }
            };
            e.None = function () {
                return t
            }
        }(g || (g = {})), Object.defineProperty(t, "__esModule", {value: !0}), t.default = g;
        var v = function () {
            function e(e) {
                this._options = e
            }

            return Object.defineProperty(e.prototype, "event", {
                get: function () {
                    var t = this;
                    return this._event || (this._event = function (n, i, o) {
                        t._callbacks || (t._callbacks = new r.default);
                        var s = t._callbacks.isEmpty();
                        s && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t), t._callbacks.add(n, i), s && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t);
                        var u;
                        return u = {
                            dispose: function () {
                                u.dispose = e._noop, t._disposed || (t._callbacks.remove(n, i), t._options && t._options.onLastListenerRemove && t._callbacks.isEmpty() && t._options.onLastListenerRemove(t))
                            }
                        }, Array.isArray(o) && o.push(u), u
                    }), this._event
                }, enumerable: !0, configurable: !0
            }), e.prototype.fire = function (e) {
                this._callbacks && this._callbacks.invoke.call(this._callbacks, e)
            }, e.prototype.dispose = function () {
                this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0, this._disposed = !0)
            }, e
        }();
        v._noop = function () {
        }, t.Emitter = v;
        var y = function () {
            function e() {
                var e = this;
                this.hasListeners = !1, this.events = [], this.emitter = new v({
                    onFirstListenerAdd: function () {
                        return e.onFirstListenerAdd()
                    }, onLastListenerRemove: function () {
                        return e.onLastListenerRemove()
                    }
                })
            }

            return Object.defineProperty(e.prototype, "event", {
                get: function () {
                    return this.emitter.event
                }, enumerable: !0, configurable: !0
            }), e.prototype.add = function (e) {
                var t = this, r = {event: e, listener: null};
                this.events.push(r), this.hasListeners && this.hook(r);
                var o = function () {
                    t.hasListeners && t.unhook(r);
                    var e = t.events.indexOf(r);
                    t.events.splice(e, 1)
                };
                return n.toDisposable(i.once(o))
            }, e.prototype.onFirstListenerAdd = function () {
                var e = this;
                this.hasListeners = !0, this.events.forEach(function (t) {
                    return e.hook(t)
                })
            }, e.prototype.onLastListenerRemove = function () {
                var e = this;
                this.hasListeners = !1, this.events.forEach(function (t) {
                    return e.unhook(t)
                })
            }, e.prototype.hook = function (e) {
                var t = this;
                e.listener = e.event(function (e) {
                    return t.emitter.fire(e)
                })
            }, e.prototype.unhook = function (e) {
                e.listener.dispose(), e.listener = null
            }, e.prototype.dispose = function () {
                this.emitter.dispose()
            }, e
        }();
        t.EventMultiplexer = y, t.fromEventEmitter = o, t.fromCallback = s, t.fromPromise = u, t.delayed = a, t.once = l, t.any = c, t.debounceEvent = f;
        var b = function () {
            function e() {
                this.buffers = []
            }

            return e.prototype.wrapEvent = function (e) {
                var t = this;
                return function (n, r, i) {
                    return e(function (e) {
                        var i = t.buffers[t.buffers.length - 1];
                        i ? i.push(function () {
                            return n.call(r, e)
                        }) : n.call(r, e)
                    }, void 0, i)
                }
            }, e.prototype.bufferEvents = function (e) {
                var t = [];
                this.buffers.push(t), e(), this.buffers.pop(), t.forEach(function (e) {
                    return e()
                })
            }, e
        }();
        t.EventBufferer = b, t.mapEvent = h, t.filterEvent = d;
        var E = function () {
            function e(e) {
                this._event = e
            }

            return Object.defineProperty(e.prototype, "event", {
                get: function () {
                    return this._event
                }, enumerable: !0, configurable: !0
            }), e.prototype.map = function (t) {
                return new e(h(this._event, t))
            }, e.prototype.filter = function (t) {
                return new e(d(this._event, t))
            }, e.prototype.on = function (e, t, n) {
                return this._event(e, t, n)
            }, e
        }();
        t.chain = p, t.stopwatch = m, t.buffer = _
    }), i(t[12], n([1, 0, 5]), function (e, t, n) {
        "use strict";
        var r, i = Object.freeze(function (e, t) {
            var n = setTimeout(e.bind(t), 0);
            return {
                dispose: function () {
                    clearTimeout(n)
                }
            }
        });
        !function (e) {
            e.None = Object.freeze({
                isCancellationRequested: !1,
                onCancellationRequested: n.default.None
            }), e.Cancelled = Object.freeze({isCancellationRequested: !0, onCancellationRequested: i})
        }(r = t.CancellationToken || (t.CancellationToken = {}));
        var o = function () {
            function e() {
                this._isCancelled = !1
            }

            return e.prototype.cancel = function () {
                this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this._emitter = void 0))
            }, Object.defineProperty(e.prototype, "isCancellationRequested", {
                get: function () {
                    return this._isCancelled
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "onCancellationRequested", {
                get: function () {
                    return this._isCancelled ? i : (this._emitter || (this._emitter = new n.Emitter), this._emitter.event)
                }, enumerable: !0, configurable: !0
            }), e
        }(), s = function () {
            function e() {
            }

            return Object.defineProperty(e.prototype, "token", {
                get: function () {
                    return this._token || (this._token = new o), this._token
                }, enumerable: !0, configurable: !0
            }), e.prototype.cancel = function () {
                this._token ? this._token.cancel() : this._token = r.Cancelled
            }, e.prototype.dispose = function () {
                this.cancel()
            }, e
        }();
        t.CancellationTokenSource = s
    }), i(t[10], n([1, 0, 3]), function (e, t, n) {
        "use strict";
        function r(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        }

        function i(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, r)
        }

        function o(e) {
            return e
        }

        var s = function () {
            function e() {
                this._scheme = e._empty, this._authority = e._empty, this._path = e._empty, this._query = e._empty, this._fragment = e._empty, this._formatted = null, this._fsPath = null
            }

            return e.isUri = function (t) {
                return t instanceof e || !!t && ("string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme)
            }, Object.defineProperty(e.prototype, "scheme", {
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
                        t = this._authority && this._path && "file" === this.scheme ? "//" + this._authority + this._path : e._driveLetterPath.test(this._path) ? this._path[1].toLowerCase() + this._path.substr(2) : this._path, n.isWindows && (t = t.replace(/\//g, "\\")), this._fsPath = t
                    }
                    return this._fsPath
                }, enumerable: !0, configurable: !0
            }), e.prototype.with = function (t) {
                if (!t)return this;
                var n = t.scheme, r = t.authority, i = t.path, o = t.query, s = t.fragment;
                if (void 0 === n ? n = this.scheme : null === n && (n = ""), void 0 === r ? r = this.authority : null === r && (r = ""), void 0 === i ? i = this.path : null === i && (i = ""), void 0 === o ? o = this.query : null === o && (o = ""), void 0 === s ? s = this.fragment : null === s && (s = ""), n === this.scheme && r === this.authority && i === this.path && o === this.query && s === this.fragment)return this;
                var u = new e;
                return u._scheme = n, u._authority = r, u._path = i, u._query = o, u._fragment = s, e._validate(u), u
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
            }, e.from = function (t) {
                return (new e).with(t)
            }, e._validate = function (t) {
                if (t.scheme && !e._schemePattern.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");
                if (t.path)if (t.authority) {
                    if (!e._singleSlashStart.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
                } else if (e._doubleSlashStart.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
            }, e.prototype.toString = function (t) {
                return void 0 === t && (t = !1), t ? e._asFormatted(this, !0) : (this._formatted || (this._formatted = e._asFormatted(this, !1)), this._formatted)
            }, e._asFormatted = function (t, n) {
                var s = n ? o : i, u = [], a = t.scheme, l = t.authority, c = t.path, f = t.query, h = t.fragment;
                if (a && u.push(a, ":"), (l || "file" === a) && u.push("//"), l) {
                    l = l.toLowerCase();
                    var d = l.indexOf(":");
                    d === -1 ? u.push(s(l)) : u.push(s(l.substr(0, d)), l.substr(d))
                }
                if (c) {
                    var p = e._upperCaseDrive.exec(c);
                    p && (c = p[1] ? "/" + p[2].toLowerCase() + c.substr(3) : p[2].toLowerCase() + c.substr(2));
                    for (var m = 0; ;) {
                        var d = c.indexOf(e._slash, m);
                        if (d === -1) {
                            u.push(s(c.substring(m)).replace(/[#?]/, r));
                            break
                        }
                        u.push(s(c.substring(m, d)).replace(/[#?]/, r), e._slash), m = d + 1
                    }
                }
                return f && u.push("?", s(f)), h && u.push("#", s(h)), u.join(e._empty)
            }, e.prototype.toJSON = function () {
                var e = {fsPath: this.fsPath, external: this.toString(), $mid: 1};
                return this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
            }, e.revive = function (t) {
                var n = new e;
                return n._scheme = t.scheme || e._empty, n._authority = t.authority || e._empty, n._path = t.path || e._empty, n._query = t.query || e._empty, n._fragment = t.fragment || e._empty, n._fsPath = t.fsPath, n._formatted = t.external, e._validate(n), n
            }, e
        }();
        s._empty = "", s._slash = "/", s._regexp = /^(([^:\/?#]+?):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, s._driveLetterPath = /^\/[a-zA-z]:/, s._upperCaseDrive = /^(\/)?([A-Z]:)/, s._schemePattern = /^\w[\w\d+.-]*$/, s._singleSlashStart = /^\//, s._doubleSlashStart = /^\/\//, Object.defineProperty(t, "__esModule", {value: !0}), t.default = s
    }), function () {
        var e = {};
        e["WinJS/Core/_WinJS"] = {};
        var t = function (t, n, r) {
            var i = {}, o = !1, s = n.map(function (t) {
                return "exports" === t ? (o = !0, i) : e[t]
            }), u = r.apply({}, s);
            e[t] = o ? i : u
        };
        t("WinJS/Core/_Global", [], function () {
            "use strict";
            var e = "undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : {};
            return e
        }), t("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function (e) {
            "use strict";
            function t(e) {
                return e.supportedForProcessing = !0, e
            }

            var n = !!e.Windows;
            return {
                hasWinRT: n,
                markSupportedForProcessing: t,
                _setImmediate: e.setImmediate ? e.setImmediate.bind(e) : function (t) {
                    e.setTimeout(t, 0)
                }
            }
        }), t("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function (e) {
            "use strict";
            return e.msWriteProfilerMark || function () {
                }
        }), t("WinJS/Core/_Base", ["WinJS/Core/_WinJS", "WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_WriteProfilerMark"], function (e, t, n, r) {
            "use strict";
            function i(e, t, n) {
                var r, i, o, s = Object.keys(t), u = Array.isArray(e);
                for (i = 0, o = s.length; i < o; i++) {
                    var a = s[i], l = 95 !== a.charCodeAt(0), c = t[a];
                    !c || "object" != typeof c || void 0 === c.value && "function" != typeof c.get && "function" != typeof c.set ? l ? u ? e.forEach(function (e) {
                        e[a] = c
                    }) : e[a] = c : (r = r || {}, r[a] = {
                        value: c,
                        enumerable: l,
                        configurable: !0,
                        writable: !0
                    }) : (void 0 === c.enumerable && (c.enumerable = l), n && c.setName && "function" == typeof c.setName && c.setName(n + "." + a), r = r || {}, r[a] = c)
                }
                r && (u ? e.forEach(function (e) {
                    Object.defineProperties(e, r)
                }) : Object.defineProperties(e, r))
            }

            return function () {
                function n(n, r) {
                    var i = n || {};
                    if (r) {
                        var o = r.split(".");
                        i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));
                        for (var s = 0, u = o.length; s < u; s++) {
                            var a = o[s];
                            i[a] || Object.defineProperty(i, a, {
                                value: {},
                                writable: !1,
                                enumerable: !0,
                                configurable: !0
                            }), i = i[a]
                        }
                    }
                    return i
                }

                function o(e, t, r) {
                    var o = n(e, t);
                    return r && i(o, r, t || "<ANONYMOUS>"), o
                }

                function s(e, n) {
                    return o(t, e, n)
                }

                function u(e) {
                    var t, n, i = c.uninitialized;
                    return {
                        setName: function (e) {
                            t = e
                        }, get: function () {
                            switch (i) {
                                case c.initialized:
                                    return n;
                                case c.uninitialized:
                                    i = c.working;
                                    try {
                                        r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e()
                                    } finally {
                                        r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = c.uninitialized
                                    }
                                    return e = null, i = c.initialized, n;
                                case c.working:
                                    throw"Illegal: reentrancy on initialization";
                                default:
                                    throw"Illegal"
                            }
                        }, set: function (e) {
                            switch (i) {
                                case c.working:
                                    throw"Illegal: reentrancy on initialization";
                                default:
                                    i = c.initialized, n = e
                            }
                        }, enumerable: !0, configurable: !0
                    }
                }

                function a(e, r, o) {
                    var s = [e], u = null;
                    return r && (u = n(t, r), s.push(u)), i(s, o, r || "<ANONYMOUS>"), u
                }

                var l = e;
                l.Namespace || (l.Namespace = Object.create(Object.prototype));
                var c = {uninitialized: 1, working: 2, initialized: 3};
                Object.defineProperties(l.Namespace, {
                    defineWithParent: {
                        value: o,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    },
                    define: {value: s, writable: !0, enumerable: !0, configurable: !0},
                    _lazy: {value: u, writable: !0, enumerable: !0, configurable: !0},
                    _moduleDefine: {value: a, writable: !0, enumerable: !0, configurable: !0}
                })
            }(), function () {
                function t(e, t, r) {
                    return e = e || function () {
                        }, n.markSupportedForProcessing(e), t && i(e.prototype, t), r && i(e, r), e
                }

                function r(e, r, o, s) {
                    if (e) {
                        r = r || function () {
                            };
                        var u = e.prototype;
                        return r.prototype = Object.create(u), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", {
                            value: r,
                            writable: !0,
                            configurable: !0,
                            enumerable: !0
                        }), o && i(r.prototype, o), s && i(r, s), r
                    }
                    return t(r, o, s)
                }

                function o(e) {
                    e = e || function () {
                        };
                    var t, n;
                    for (t = 1, n = arguments.length; t < n; t++)i(e.prototype, arguments[t]);
                    return e
                }

                e.Namespace.define("WinJS.Class", {define: t, derive: r, mix: o})
            }(), {Namespace: e.Namespace, Class: e.Class}
        }), t("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function (e) {
            "use strict";
            var t = e.Class.derive(Error, function (e, t) {
                this.name = e, this.message = t || e
            }, {}, {supportedForProcessing: !1});
            return e.Namespace.define("WinJS", {ErrorFromName: t}), t
        }), t("WinJS/Core/_Events", ["exports", "WinJS/Core/_Base"], function (e, t) {
            "use strict";
            function n(e) {
                var t = "_on" + e + "state";
                return {
                    get: function () {
                        var e = this[t];
                        return e && e.userHandler
                    }, set: function (n) {
                        var r = this[t];
                        n ? (r || (r = {
                            wrapper: function (e) {
                                return r.userHandler(e)
                            }, userHandler: n
                        }, Object.defineProperty(this, t, {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }), this.addEventListener(e, r.wrapper, !1)), r.userHandler = n) : r && (this.removeEventListener(e, r.wrapper, !1), this[t] = null)
                    }, enumerable: !0
                }
            }

            function r() {
                for (var e = {}, t = 0, r = arguments.length; t < r; t++) {
                    var i = arguments[t];
                    e["on" + i] = n(i)
                }
                return e
            }

            var i = t.Class.define(function (e, t, n) {
                this.detail = t, this.target = n, this.timeStamp = Date.now(), this.type = e
            }, {
                bubbles: {value: !1, writable: !1},
                cancelable: {value: !1, writable: !1},
                currentTarget: {
                    get: function () {
                        return this.target
                    }
                },
                defaultPrevented: {
                    get: function () {
                        return this._preventDefaultCalled
                    }
                },
                trusted: {value: !1, writable: !1},
                eventPhase: {value: 0, writable: !1},
                target: null,
                timeStamp: null,
                type: null,
                preventDefault: function () {
                    this._preventDefaultCalled = !0
                },
                stopImmediatePropagation: function () {
                    this._stopImmediatePropagationCalled = !0
                },
                stopPropagation: function () {
                }
            }, {supportedForProcessing: !1}), o = {
                _listeners: null, addEventListener: function (e, t, n) {
                    n = n || !1, this._listeners = this._listeners || {};
                    for (var r = this._listeners[e] = this._listeners[e] || [], i = 0, o = r.length; i < o; i++) {
                        var s = r[i];
                        if (s.useCapture === n && s.listener === t)return
                    }
                    r.push({listener: t, useCapture: n})
                }, dispatchEvent: function (e, t) {
                    var n = this._listeners && this._listeners[e];
                    if (n) {
                        var r = new i(e, t, this);
                        n = n.slice(0, n.length);
                        for (var o = 0, s = n.length; o < s && !r._stopImmediatePropagationCalled; o++)n[o].listener(r);
                        return r.defaultPrevented || !1
                    }
                    return !1
                }, removeEventListener: function (e, t, n) {
                    n = n || !1;
                    var r = this._listeners && this._listeners[e];
                    if (r)for (var i = 0, o = r.length; i < o; i++) {
                        var s = r[i];
                        if (s.listener === t && s.useCapture === n) {
                            r.splice(i, 1), 0 === r.length && delete this._listeners[e];
                            break
                        }
                    }
                }
            };
            t.Namespace._moduleDefine(e, "WinJS.Utilities", {
                _createEventProperty: n,
                createEventProperties: r,
                eventMixin: o
            })
        }), t("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function (e) {
            "use strict";
            function t(e) {
                return e
            }

            return {
                _traceAsyncOperationStarting: e.Debug && e.Debug.msTraceAsyncOperationStarting && e.Debug.msTraceAsyncOperationStarting.bind(e.Debug) || t,
                _traceAsyncOperationCompleted: e.Debug && e.Debug.msTraceAsyncOperationCompleted && e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug) || t,
                _traceAsyncCallbackStarting: e.Debug && e.Debug.msTraceAsyncCallbackStarting && e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug) || t,
                _traceAsyncCallbackCompleted: e.Debug && e.Debug.msTraceAsyncCallbackCompleted && e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug) || t
            }
        }), t("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_Base", "WinJS/Core/_ErrorFromName", "WinJS/Core/_Events", "WinJS/Core/_Trace"], function (e, t, n, r, i, o) {
            "use strict";
            function s() {
            }

            function u(e, t) {
                var n;
                n = t && "object" == typeof t && "function" == typeof t.then ? T : F, e._value = t, e._setState(n)
            }

            function a(e, t, n, r, i, o) {
                return {exception: e, error: t, promise: n, handler: o, id: r, parent: i}
            }

            function l(e, t, n, r) {
                var i = n._isException, o = n._errorId;
                return a(i ? t : null, i ? null : t, e, o, n, r)
            }

            function c(e, t, n) {
                var r = n._isException, i = n._errorId;
                return b(e, i, r), a(r ? t : null, r ? null : t, e, i, n)
            }

            function f(e, t) {
                var n = ++Y;
                return b(e, n), a(null, t, e, n)
            }

            function h(e, t) {
                var n = ++Y;
                return b(e, n, !0), a(t, null, e, n)
            }

            function d(e, t, n, r) {
                var i = o._traceAsyncOperationStarting("WinJS.Promise.done");
                y(e, {c: t, e: n, p: r, asyncOpID: i})
            }

            function p(e, t, n, r) {
                e._value = t, g(e, t, n, r), e._setState(W)
            }

            function m(t, n) {
                var r = t._value, i = t._listeners;
                if (i) {
                    t._listeners = null;
                    var s, u;
                    for (s = 0, u = Array.isArray(i) ? i.length : 1; s < u; s++) {
                        var a = 1 === u ? i : i[s], l = a.c, c = a.promise;
                        if (o._traceAsyncOperationCompleted(a.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), c) {
                            o._traceAsyncCallbackStarting(a.asyncOpID);
                            try {
                                c._setCompleteValue(l ? l(r) : r)
                            } catch (e) {
                                c._setExceptionValue(e)
                            } finally {
                                o._traceAsyncCallbackCompleted()
                            }
                            c._state !== T && c._listeners && n.push(c)
                        } else J.prototype.done.call(t, l)
                    }
                }
            }

            function _(t, n) {
                var r = t._value, i = t._listeners;
                if (i) {
                    t._listeners = null;
                    var s, u;
                    for (s = 0, u = Array.isArray(i) ? i.length : 1; s < u; s++) {
                        var a = 1 === u ? i : i[s], c = a.e, f = a.promise, h = e.Debug && (r && r.name === w ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
                        if (o._traceAsyncOperationCompleted(a.asyncOpID, h), f) {
                            var d = !1;
                            try {
                                c ? (o._traceAsyncCallbackStarting(a.asyncOpID), d = !0, c.handlesOnError || g(f, r, l, t, c), f._setCompleteValue(c(r))) : f._setChainedErrorValue(r, t)
                            } catch (e) {
                                f._setExceptionValue(e)
                            } finally {
                                d && o._traceAsyncCallbackCompleted()
                            }
                            f._state !== T && f._listeners && n.push(f)
                        } else H.prototype.done.call(t, null, c)
                    }
                }
            }

            function g(e, t, n, r, i) {
                if (P._listeners[M]) {
                    if (t instanceof Error && t.message === w)return;
                    P.dispatchEvent(M, n(e, t, r, i))
                }
            }

            function v(e, t) {
                var n = e._listeners;
                if (n) {
                    var r, i;
                    for (r = 0, i = Array.isArray(n) ? n.length : 1; r < i; r++) {
                        var o = 1 === i ? n : n[r], s = o.p;
                        if (s)try {
                            s(t)
                        } catch (e) {
                        }
                        o.c || o.e || !o.promise || o.promise._progress(t)
                    }
                }
            }

            function y(e, t) {
                var n = e._listeners;
                n ? (n = Array.isArray(n) ? n : [n], n.push(t)) : n = t, e._listeners = n
            }

            function b(e, t, n) {
                e._isException = n || !1, e._errorId = t
            }

            function E(e, t, n, r) {
                e._value = t, g(e, t, n, r), e._setState(q)
            }

            function C(e, t) {
                var n;
                n = t && "object" == typeof t && "function" == typeof t.then ? T : K, e._value = t, e._setState(n)
            }

            function S(e, t, n, r) {
                var i = new V(e), s = o._traceAsyncOperationStarting("WinJS.Promise.then");
                return y(e, {promise: i, c: t, e: n, p: r, asyncOpID: s}), i
            }

            function L(n) {
                var r;
                return new Q(function (i) {
                    n ? r = e.setTimeout(i, n) : t._setImmediate(i)
                }, function () {
                    r && e.clearTimeout(r)
                })
            }

            function A(e, t) {
                var n = function () {
                    t.cancel()
                }, r = function () {
                    e.cancel()
                };
                return e.then(n), t.then(r, r), t
            }

            e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
            var N = n.Class.mix(n.Class.define(null, {}, {supportedForProcessing: !1}), i.eventMixin), P = new N;
            P._listeners = {};
            var M = "error", w = "Canceled", D = !1, I = {
                promise: 1,
                thenPromise: 2,
                errorPromise: 4,
                exceptionPromise: 8,
                completePromise: 16
            };
            I.all = I.promise | I.thenPromise | I.errorPromise | I.exceptionPromise | I.completePromise;
            var k, U, T, x, O, R, F, K, W, q, Y = 1;
            k = {
                name: "created",
                enter: function (e) {
                    e._setState(U)
                },
                cancel: s,
                done: s,
                then: s,
                _completed: s,
                _error: s,
                _notify: s,
                _progress: s,
                _setCompleteValue: s,
                _setErrorValue: s
            }, U = {
                name: "working",
                enter: s,
                cancel: function (e) {
                    e._setState(O)
                },
                done: d,
                then: S,
                _completed: u,
                _error: p,
                _notify: s,
                _progress: v,
                _setCompleteValue: C,
                _setErrorValue: E
            }, T = {
                name: "waiting",
                enter: function (e) {
                    var t = e._value;
                    if (t instanceof V && t._state !== q && t._state !== K)y(t, {promise: e}); else {
                        var n = function (r) {
                            t._errorId ? e._chainedError(r, t) : (g(e, r, l, t, n), e._error(r))
                        };
                        n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e))
                    }
                },
                cancel: function (e) {
                    e._setState(x)
                },
                done: d,
                then: S,
                _completed: u,
                _error: p,
                _notify: s,
                _progress: v,
                _setCompleteValue: C,
                _setErrorValue: E
            }, x = {
                name: "waiting_canceled",
                enter: function (e) {
                    e._setState(R);
                    var t = e._value;
                    t.cancel && t.cancel()
                },
                cancel: s,
                done: d,
                then: S,
                _completed: u,
                _error: p,
                _notify: s,
                _progress: v,
                _setCompleteValue: C,
                _setErrorValue: E
            }, O = {
                name: "canceled",
                enter: function (e) {
                    e._setState(R), e._cancelAction()
                },
                cancel: s,
                done: d,
                then: S,
                _completed: u,
                _error: p,
                _notify: s,
                _progress: v,
                _setCompleteValue: C,
                _setErrorValue: E
            }, R = {
                name: "canceling",
                enter: function (e) {
                    var t = new Error(w);
                    t.name = t.message, e._value = t, e._setState(W)
                },
                cancel: s,
                done: s,
                then: s,
                _completed: s,
                _error: s,
                _notify: s,
                _progress: s,
                _setCompleteValue: s,
                _setErrorValue: s
            }, F = {
                name: "complete_notify",
                enter: function (e) {
                    if (e.done = J.prototype.done, e.then = J.prototype.then, e._listeners)for (var t, n = [e]; n.length;)t = n.shift(), t._state._notify(t, n);
                    e._setState(K)
                },
                cancel: s,
                done: null,
                then: null,
                _completed: s,
                _error: s,
                _notify: m,
                _progress: s,
                _setCompleteValue: s,
                _setErrorValue: s
            }, K = {
                name: "success",
                enter: function (e) {
                    e.done = J.prototype.done, e.then = J.prototype.then, e._cleanupAction()
                },
                cancel: s,
                done: null,
                then: null,
                _completed: s,
                _error: s,
                _notify: m,
                _progress: s,
                _setCompleteValue: s,
                _setErrorValue: s
            }, W = {
                name: "error_notify",
                enter: function (e) {
                    if (e.done = H.prototype.done, e.then = H.prototype.then, e._listeners)for (var t, n = [e]; n.length;)t = n.shift(), t._state._notify(t, n);
                    e._setState(q)
                },
                cancel: s,
                done: null,
                then: null,
                _completed: s,
                _error: s,
                _notify: _,
                _progress: s,
                _setCompleteValue: s,
                _setErrorValue: s
            }, q = {
                name: "error",
                enter: function (e) {
                    e.done = H.prototype.done, e.then = H.prototype.then, e._cleanupAction()
                },
                cancel: s,
                done: null,
                then: null,
                _completed: s,
                _error: s,
                _notify: _,
                _progress: s,
                _setCompleteValue: s,
                _setErrorValue: s
            };
            var B, j = n.Class.define(null, {
                _listeners: null,
                _nextState: null,
                _state: null,
                _value: null,
                cancel: function () {
                    this._state.cancel(this), this._run()
                },
                done: function (e, t, n) {
                    this._state.done(this, e, t, n)
                },
                then: function (e, t, n) {
                    return this._state.then(this, e, t, n)
                },
                _chainedError: function (e, t) {
                    var n = this._state._error(this, e, c, t);
                    return this._run(), n
                },
                _completed: function (e) {
                    var t = this._state._completed(this, e);
                    return this._run(), t
                },
                _error: function (e) {
                    var t = this._state._error(this, e, f);
                    return this._run(), t
                },
                _progress: function (e) {
                    this._state._progress(this, e)
                },
                _setState: function (e) {
                    this._nextState = e
                },
                _setCompleteValue: function (e) {
                    this._state._setCompleteValue(this, e), this._run()
                },
                _setChainedErrorValue: function (e, t) {
                    var n = this._state._setErrorValue(this, e, c, t);
                    return this._run(), n
                },
                _setExceptionValue: function (e) {
                    var t = this._state._setErrorValue(this, e, h);
                    return this._run(), t
                },
                _run: function () {
                    for (; this._nextState;)this._state = this._nextState, this._nextState = null, this._state.enter(this)
                }
            }, {supportedForProcessing: !1}), V = n.Class.derive(j, function (e) {
                D && (D === !0 || D & I.thenPromise) && (this._stack = Q._getStack()), this._creator = e, this._setState(k), this._run()
            }, {
                _creator: null, _cancelAction: function () {
                    this._creator && this._creator.cancel()
                }, _cleanupAction: function () {
                    this._creator = null
                }
            }, {supportedForProcessing: !1}), H = n.Class.define(function (e) {
                D && (D === !0 || D & I.errorPromise) && (this._stack = Q._getStack()), this._value = e, g(this, e, f)
            }, {
                cancel: function () {
                }, done: function (e, t) {
                    var n = this._value;
                    if (t)try {
                        t.handlesOnError || g(null, n, l, this, t);
                        var r = t(n);
                        return void(r && "object" == typeof r && "function" == typeof r.done && r.done())
                    } catch (e) {
                        n = e
                    }
                    n instanceof Error && n.message === w || Q._doneHandler(n)
                }, then: function (e, t) {
                    if (!t)return this;
                    var n, r = this._value;
                    try {
                        t.handlesOnError || g(null, r, l, this, t), n = new J(t(r))
                    } catch (e) {
                        n = e === r ? this : new z(e)
                    }
                    return n
                }
            }, {supportedForProcessing: !1}), z = n.Class.derive(H, function (e) {
                D && (D === !0 || D & I.exceptionPromise) && (this._stack = Q._getStack()), this._value = e, g(this, e, h)
            }, {}, {supportedForProcessing: !1}), J = n.Class.define(function (e) {
                if (D && (D === !0 || D & I.completePromise) && (this._stack = Q._getStack()), e && "object" == typeof e && "function" == typeof e.then) {
                    var t = new V(null);
                    return t._setCompleteValue(e), t
                }
                this._value = e
            }, {
                cancel: function () {
                }, done: function (e) {
                    if (e)try {
                        var t = e(this._value);
                        t && "object" == typeof t && "function" == typeof t.done && t.done()
                    } catch (e) {
                        Q._doneHandler(e)
                    }
                }, then: function (e) {
                    try {
                        var t = e ? e(this._value) : this._value;
                        return t === this._value ? this : new J(t)
                    } catch (e) {
                        return new z(e)
                    }
                }
            }, {supportedForProcessing: !1}), Q = n.Class.derive(j, function (e, t) {
                D && (D === !0 || D & I.promise) && (this._stack = Q._getStack()), this._oncancel = t, this._setState(k), this._run();
                try {
                    var n = this._completed.bind(this), r = this._error.bind(this), i = this._progress.bind(this);
                    e(n, r, i)
                } catch (e) {
                    this._setExceptionValue(e)
                }
            }, {
                _oncancel: null, _cancelAction: function () {
                    try {
                        if (!this._oncancel)throw new Error("Promise did not implement oncancel");
                        this._oncancel()
                    } catch (e) {
                        e.message, e.stack;
                        P.dispatchEvent("error", e)
                    }
                }, _cleanupAction: function () {
                    this._oncancel = null
                }
            }, {
                addEventListener: function (e, t, n) {
                    P.addEventListener(e, t, n)
                }, any: function (e) {
                    return new Q(function (t, n) {
                        var r = Object.keys(e);
                        0 === r.length && t();
                        var i = 0;
                        r.forEach(function (o) {
                            Q.as(e[o]).then(function () {
                                t({key: o, value: e[o]})
                            }, function (s) {
                                return s instanceof Error && s.name === w ? void(++i === r.length && t(Q.cancel)) : void n({
                                    key: o,
                                    value: e[o]
                                })
                            })
                        })
                    }, function () {
                        var t = Object.keys(e);
                        t.forEach(function (t) {
                            var n = Q.as(e[t]);
                            "function" == typeof n.cancel && n.cancel()
                        })
                    })
                }, as: function (e) {
                    return e && "object" == typeof e && "function" == typeof e.then ? e : new J(e)
                }, cancel: {
                    get: function () {
                        return B = B || new H(new r(w))
                    }
                }, dispatchEvent: function (e, t) {
                    return P.dispatchEvent(e, t)
                }, is: function (e) {
                    return e && "object" == typeof e && "function" == typeof e.then
                }, join: function (e) {
                    return new Q(function (t, n, r) {
                        var i = Object.keys(e), o = Array.isArray(e) ? [] : {}, s = Array.isArray(e) ? [] : {}, u = 0, a = i.length, l = function (e) {
                            if (0 === --a) {
                                var u = Object.keys(o).length;
                                if (0 === u)t(s); else {
                                    var l = 0;
                                    i.forEach(function (e) {
                                        var t = o[e];
                                        t instanceof Error && t.name === w && l++
                                    }), l === u ? t(Q.cancel) : n(o)
                                }
                            } else r({Key: e, Done: !0})
                        };
                        if (i.forEach(function (t) {
                                var n = e[t];
                                void 0 === n ? u++ : Q.then(n, function (e) {
                                    s[t] = e, l(t)
                                }, function (e) {
                                    o[t] = e, l(t)
                                })
                            }), a -= u, 0 === a)return void t(s)
                    }, function () {
                        Object.keys(e).forEach(function (t) {
                            var n = Q.as(e[t]);
                            "function" == typeof n.cancel && n.cancel()
                        })
                    })
                }, removeEventListener: function (e, t, n) {
                    P.removeEventListener(e, t, n)
                }, supportedForProcessing: !1, then: function (e, t, n, r) {
                    return Q.as(e).then(t, n, r)
                }, thenEach: function (e, t, n, r) {
                    var i = Array.isArray(e) ? [] : {};
                    return Object.keys(e).forEach(function (o) {
                        i[o] = Q.as(e[o]).then(t, n, r)
                    }), Q.join(i)
                }, timeout: function (e, t) {
                    var n = L(e);
                    return t ? A(n, t) : n
                }, wrap: function (e) {
                    return new J(e)
                }, wrapError: function (e) {
                    return new H(e)
                }, _veryExpensiveTagWithStack: {
                    get: function () {
                        return D
                    }, set: function (e) {
                        D = e
                    }
                }, _veryExpensiveTagWithStack_tag: I, _getStack: function () {
                    if (e.Debug && e.Debug.debuggerEnabled)try {
                        throw new Error
                    } catch (e) {
                        return e.stack
                    }
                }, _cancelBlocker: function (e, t) {
                    if (!Q.is(e))return Q.wrap(e);
                    var n, r, i = new Q(function (e, t) {
                        n = e, r = t
                    }, function () {
                        n = null, r = null, t && t()
                    });
                    return e.then(function (e) {
                        n && n(e)
                    }, function (e) {
                        r && r(e)
                    }), i
                }
            });
            return Object.defineProperties(Q, i.createEventProperties(M)), Q._doneHandler = function (e) {
                t._setImmediate(function () {
                    throw e
                })
            }, {PromiseStateMachine: j, Promise: Q, state_created: k}
        }), t("WinJS/Promise", ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"], function (e, t) {
            "use strict";
            return e.Namespace.define("WinJS", {Promise: t.Promise}), t.Promise
        });
        var n = e["WinJS/Core/_WinJS"];
        "undefined" == typeof exports && "function" == typeof i && i.amd ? i("vs/base/common/winjs.base.raw", n) : module.exports = n, "undefined" != typeof process && "function" == typeof process.nextTick && (e["WinJS/Core/_BaseCoreUtils"]._setImmediate = function (e) {
            return process.nextTick(e)
        })
    }(), i(t[2], n([33, 4]), function (e, t) {
        "use strict";
        function n(e) {
            var n = e.detail, i = n.id;
            return n.parent ? void(n.handler && r && delete r[i]) : (r[i] = n, void(1 === Object.keys(r).length && setTimeout(function () {
                var e = r;
                r = {}, Object.keys(e).forEach(function (n) {
                    var r = e[n];
                    r.exception ? t.onUnexpectedError(r.exception) : r.error && t.onUnexpectedError(r.error), console.log("WARNING: Promise with no error callback:" + r.id), console.log(r), r.exception && console.log(r.exception.stack)
                })
            }, 0)))
        }

        var r = {};
        return e.Promise.addEventListener("error", n), {Promise: e.Promise, TPromise: e.Promise, PPromise: e.Promise}
    }), i(t[17], n([1, 0, 4, 3, 2, 12, 9, 5]), function (e, t, n, r, i, s, u, a) {
        "use strict";
        function l(e) {
            return e && "function" == typeof e.then
        }

        function c(e) {
            return l(e) ? e : i.TPromise.as(e)
        }

        function f(e) {
            var t = new s.CancellationTokenSource;
            return new i.TPromise(function (n, r, o) {
                var s = e(t.token);
                s instanceof i.TPromise ? s.then(n, r, o) : l(s) ? s.then(n, r) : n(s)
            }, function () {
                t.cancel()
            })
        }

        function h(e, t, r) {
            var o = e.onCancellationRequested(function () {
                return t.cancel()
            });
            return r && (t = t.then(void 0, function (e) {
                if (!n.isPromiseCanceledError(e))return i.TPromise.wrapError(e)
            })), d(t, function () {
                return o.dispose()
            })
        }

        function d(e, t) {
            return new i.TPromise(function (r, i, o) {
                e.done(function (e) {
                    try {
                        t(e)
                    } catch (e) {
                        n.onUnexpectedError(e)
                    }
                    r(e)
                }, function (e) {
                    try {
                        t(e)
                    } catch (e) {
                        n.onUnexpectedError(e)
                    }
                    i(e)
                }, function (e) {
                    o(e)
                })
            }, function () {
                e.cancel()
            })
        }

        function p(e) {
            function t() {
                return e.length ? e.pop()() : null
            }

            function n(e) {
                void 0 !== e && null !== e && r.push(e);
                var o = t();
                return o ? o.then(n) : i.TPromise.as(r)
            }

            var r = [];
            return e = e.reverse(), i.TPromise.as(null).then(n)
        }

        function m(e, t) {
            void 0 === t && (t = function (e) {
                return !!e
            }), e = e.reverse().slice();
            var n = function () {
                if (0 === e.length)return i.TPromise.as(null);
                var r = e.pop(), o = r();
                return o.then(function (e) {
                    return t(e) ? i.TPromise.as(e) : n()
                })
            };
            return n()
        }

        function _(e) {
            for (var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            return new i.Promise(function (n, r) {
                return e.apply(void 0, t.concat([function (e, t) {
                    return e ? r(e) : n(t)
                }]))
            })
        }

        function g(e, t) {
            for (var n = [], r = 2; r < arguments.length; r++)n[r - 2] = arguments[r];
            return new i.Promise(function (r, i) {
                return t.call.apply(t, [e].concat(n, [function (e, t) {
                    return e ? i(e) : r(t)
                }]))
            })
        }

        t.toThenable = c, t.asWinJsPromise = f, t.wireCancellationToken = h;
        var v = function () {
            function e() {
                this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null
            }

            return e.prototype.queue = function (e) {
                var t = this;
                if (this.activePromise) {
                    if (this.queuedPromiseFactory = e, !this.queuedPromise) {
                        var n = function () {
                            t.queuedPromise = null;
                            var e = t.queue(t.queuedPromiseFactory);
                            return t.queuedPromiseFactory = null, e
                        };
                        this.queuedPromise = new i.Promise(function (e, r, i) {
                            t.activePromise.then(n, n, i).done(e)
                        }, function () {
                            t.activePromise.cancel()
                        })
                    }
                    return new i.Promise(function (e, n, r) {
                        t.queuedPromise.then(e, n, r)
                    }, function () {
                    })
                }
                return this.activePromise = e(), new i.Promise(function (e, n, r) {
                    t.activePromise.done(function (n) {
                        t.activePromise = null, e(n)
                    }, function (e) {
                        t.activePromise = null, n(e)
                    }, r)
                }, function () {
                    t.activePromise.cancel()
                })
            }, e
        }();
        t.Throttler = v;
        var y = function () {
            function e() {
                this.current = i.TPromise.as(null)
            }

            return e.prototype.queue = function (e) {
                return this.current = this.current.then(function () {
                    return e()
                })
            }, e
        }();
        t.SimpleThrottler = y;
        var b = function () {
            function e(e) {
                this.defaultDelay = e, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null
            }

            return e.prototype.trigger = function (e, t) {
                var n = this;
                return void 0 === t && (t = this.defaultDelay), this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new i.Promise(function (e) {
                    n.onSuccess = e
                }, function () {
                }).then(function () {
                    n.completionPromise = null, n.onSuccess = null;
                    var e = n.task;
                    return n.task = null, e()
                })), this.timeout = setTimeout(function () {
                    n.timeout = null, n.onSuccess(null)
                }, t), this.completionPromise
            }, e.prototype.isTriggered = function () {
                return null !== this.timeout
            }, e.prototype.cancel = function () {
                this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(), this.completionPromise = null)
            }, e.prototype.cancelTimeout = function () {
                null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null)
            }, e
        }();
        t.Delayer = b;
        var E = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.throttler = new v, n
            }

            return o(t, e), t.prototype.trigger = function (t, n) {
                var r = this;
                return e.prototype.trigger.call(this, function () {
                    return r.throttler.queue(t)
                }, n)
            }, t
        }(b);
        t.ThrottledDelayer = E;
        var C = function (e) {
            function t(t, n) {
                void 0 === n && (n = 0);
                var r = e.call(this, t) || this;
                return r.minimumPeriod = n, r.periodThrottler = new v, r
            }

            return o(t, e), t.prototype.trigger = function (t, n) {
                var r = this;
                return e.prototype.trigger.call(this, function () {
                    return r.periodThrottler.queue(function () {
                        return i.Promise.join([i.TPromise.timeout(r.minimumPeriod), t()]).then(function (e) {
                            return e[1]
                        })
                    })
                }, n)
            }, t
        }(E);
        t.PeriodThrottledDelayer = C;
        var S = function () {
            function e() {
                var e = this;
                this._value = new i.TPromise(function (t, n) {
                    e._completeCallback = t, e._errorCallback = n
                })
            }

            return Object.defineProperty(e.prototype, "value", {
                get: function () {
                    return this._value
                }, enumerable: !0, configurable: !0
            }), e.prototype.complete = function (e) {
                this._completeCallback(e)
            }, e.prototype.error = function (e) {
                this._errorCallback(e)
            }, e
        }();
        t.PromiseSource = S;
        var L = function (e) {
            function t(t) {
                var r, i, o, s = this;
                return s = e.call(this, function (e, t, n) {
                        r = e, i = t, o = n
                    }, function () {
                        i(n.canceled())
                    }) || this, t.then(r, i, o), s
            }

            return o(t, e), t
        }(i.TPromise);
        t.ShallowCancelThenPromise = L, t.always = d, t.sequence = p, t.first = m;
        var A = function () {
            function e(e) {
                this.maxDegreeOfParalellism = e, this.outstandingPromises = [], this.runningPromises = 0, this._onFinished = new a.Emitter
            }

            return Object.defineProperty(e.prototype, "onFinished", {
                get: function () {
                    return this._onFinished.event
                }, enumerable: !0, configurable: !0
            }), e.prototype.queue = function (e) {
                var t = this;
                return new i.TPromise(function (n, r, i) {
                    t.outstandingPromises.push({
                        factory: e, c: n, e: r, p: i
                    }), t.consume()
                })
            }, e.prototype.consume = function () {
                for (var e = this; this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism;) {
                    var t = this.outstandingPromises.shift();
                    this.runningPromises++;
                    var n = t.factory();
                    n.done(t.c, t.e, t.p), n.done(function () {
                        return e.consumed()
                    }, function () {
                        return e.consumed()
                    })
                }
            }, e.prototype.consumed = function () {
                this.runningPromises--, this.outstandingPromises.length > 0 ? this.consume() : this._onFinished.fire()
            }, e.prototype.dispose = function () {
                this._onFinished.dispose()
            }, e
        }();
        t.Limiter = A;
        var N = function (e) {
            function t() {
                return e.call(this, 1) || this
            }

            return o(t, e), t
        }(A);
        t.Queue = N;
        var P = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._token = -1, t
            }

            return o(t, e), t.prototype.dispose = function () {
                this.cancel(), e.prototype.dispose.call(this)
            }, t.prototype.cancel = function () {
                this._token !== -1 && (r.clearTimeout(this._token), this._token = -1)
            }, t.prototype.cancelAndSet = function (e, t) {
                var n = this;
                this.cancel(), this._token = r.setTimeout(function () {
                    n._token = -1, e()
                }, t)
            }, t.prototype.setIfNotSet = function (e, t) {
                var n = this;
                this._token === -1 && (this._token = r.setTimeout(function () {
                    n._token = -1, e()
                }, t))
            }, t
        }(u.Disposable);
        t.TimeoutTimer = P;
        var M = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._token = -1, t
            }

            return o(t, e), t.prototype.dispose = function () {
                this.cancel(), e.prototype.dispose.call(this)
            }, t.prototype.cancel = function () {
                this._token !== -1 && (r.clearInterval(this._token), this._token = -1)
            }, t.prototype.cancelAndSet = function (e, t) {
                this.cancel(), this._token = r.setInterval(function () {
                    e()
                }, t)
            }, t
        }(u.Disposable);
        t.IntervalTimer = M;
        var w = function () {
            function e(e, t) {
                this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this)
            }

            return e.prototype.dispose = function () {
                this.cancel(), this.runner = null
            }, e.prototype.cancel = function () {
                this.isScheduled() && (r.clearTimeout(this.timeoutToken), this.timeoutToken = -1)
            }, e.prototype.setRunner = function (e) {
                this.runner = e
            }, e.prototype.schedule = function (e) {
                void 0 === e && (e = this.timeout), this.cancel(), this.timeoutToken = r.setTimeout(this.timeoutHandler, e)
            }, e.prototype.isScheduled = function () {
                return this.timeoutToken !== -1
            }, e.prototype.onTimeout = function () {
                this.timeoutToken = -1, this.runner && this.runner()
            }, e
        }();
        t.RunOnceScheduler = w, t.nfcall = _, t.ninvoke = g
    }), i(t[31], n([1, 0, 4, 9, 2, 17, 3]), function (e, t, n, r, i, s, u) {
        "use strict";
        function a(e) {
            u.isWeb && (f || (f = !0, console.warn("Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/Microsoft/monaco-editor#faq")), console.warn(e.message))
        }

        function l(e) {
            return new p(e)
        }

        var c = "$initialize", f = !1;
        t.logOnceWebWorkerWarning = a;
        var h = function () {
            function e(e) {
                this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null)
            }

            return e.prototype.setWorkerId = function (e) {
                this._workerId = e
            }, e.prototype.sendMessage = function (e, t) {
                var n = String(++this._lastSentReq), r = {c: null, e: null}, o = new i.TPromise(function (e, t, n) {
                    r.c = e, r.e = t
                }, function () {
                });
                return this._pendingReplies[n] = r, this._send({
                    vsWorker: this._workerId,
                    req: n,
                    method: e,
                    args: t
                }), o
            }, e.prototype.handleMessage = function (e) {
                var t;
                try {
                    t = JSON.parse(e)
                } catch (e) {
                }
                t.vsWorker && (this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t))
            }, e.prototype._handleMessage = function (e) {
                var t = this;
                if (e.seq) {
                    var r = e;
                    if (!this._pendingReplies[r.seq])return void console.warn("Got reply to unknown seq");
                    var i = this._pendingReplies[r.seq];
                    if (delete this._pendingReplies[r.seq], r.err) {
                        var o = r.err;
                        return r.err.$isError && (o = new Error, o.name = r.err.name, o.message = r.err.message, o.stack = r.err.stack), void i.e(o)
                    }
                    return void i.c(r.res)
                }
                var s = e, u = s.req, a = this._handler.handleMessage(s.method, s.args);
                a.then(function (e) {
                    t._send({vsWorker: t._workerId, seq: u, res: e, err: void 0})
                }, function (e) {
                    t._send({vsWorker: t._workerId, seq: u, res: void 0, err: n.transformErrorForSerialization(e)})
                })
            }, e.prototype._send = function (e) {
                var t = JSON.stringify(e);
                this._handler.sendMessage(t)
            }, e
        }(), d = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                r._lastRequestTimestamp = -1;
                var o = null, s = null;
                r._worker = r._register(t.create("vs/base/common/worker/simpleWorker", function (e) {
                    r._protocol.handleMessage(e)
                }, function (e) {
                    s(e)
                })), r._protocol = new h({
                    sendMessage: function (e) {
                        r._worker.postMessage(e)
                    }, handleMessage: function (e, t) {
                        return i.TPromise.as(null)
                    }
                }), r._protocol.setWorkerId(r._worker.getId());
                var u = null, a = self.require;
                "function" == typeof a.getConfig ? u = a.getConfig() : "undefined" != typeof self.requirejs && (u = self.requirejs.s.contexts._.config), r._lazyProxy = new i.TPromise(function (e, t, n) {
                    o = e, s = t
                }, function () {
                }), r._onModuleLoaded = r._protocol.sendMessage(c, [r._worker.getId(), n, u]), r._onModuleLoaded.then(function (e) {
                    for (var t = {}, n = 0; n < e.length; n++)t[e[n]] = f(e[n], l);
                    o(t)
                }, function (e) {
                    s(e), r._onError("Worker failed to load " + n, e)
                });
                var l = function (e, t) {
                    return r._request(e, t)
                }, f = function (e, t) {
                    return function () {
                        var n = Array.prototype.slice.call(arguments, 0);
                        return t(e, n)
                    }
                };
                return r
            }

            return o(t, e), t.prototype.getProxyObject = function () {
                return new s.ShallowCancelThenPromise(this._lazyProxy)
            }, t.prototype.getLastRequestTimestamp = function () {
                return this._lastRequestTimestamp
            }, t.prototype._request = function (e, t) {
                var n = this;
                return new i.TPromise(function (r, i, o) {
                    n._onModuleLoaded.then(function () {
                        n._lastRequestTimestamp = Date.now(), n._protocol.sendMessage(e, t).then(r, i)
                    }, i)
                }, function () {
                })
            }, t.prototype._onError = function (e, t) {
                console.error(e), console.info(t)
            }, t
        }(r.Disposable);
        t.SimpleWorkerClient = d;
        var p = function () {
            function t(e) {
                var t = this;
                this._protocol = new h({
                    sendMessage: function (t) {
                        e(t)
                    }, handleMessage: function (e, n) {
                        return t._handleMessage(e, n)
                    }
                })
            }

            return t.prototype.onmessage = function (e) {
                this._protocol.handleMessage(e)
            }, t.prototype._handleMessage = function (e, t) {
                if (e === c)return this.initialize(t[0], t[1], t[2]);
                if (!this._requestHandler || "function" != typeof this._requestHandler[e])return i.TPromise.wrapError(new Error("Missing requestHandler or method: " + e));
                try {
                    return i.TPromise.as(this._requestHandler[e].apply(this._requestHandler, t))
                } catch (e) {
                    return i.TPromise.wrapError(e)
                }
            }, t.prototype.initialize = function (t, n, r) {
                var o = this;
                if (this._protocol.setWorkerId(t), r) {
                    "undefined" != typeof r.baseUrl && delete r.baseUrl, "undefined" != typeof r.paths && "undefined" != typeof r.paths.vs && delete r.paths.vs;
                    var s = r["vs/nls"];
                    s && s.pseudo && e(["vs/nls"], function (e) {
                        e.setPseudoTranslation(s.pseudo)
                    }), r.catchError = !0, self.require.config(r)
                }
                var u, a, l = new i.TPromise(function (e, t, n) {
                    u = e, a = t
                });
                return self.require([n], function () {
                    for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                    var n = e[0];
                    o._requestHandler = n.create();
                    var r = [];
                    for (var i in o._requestHandler)"function" == typeof o._requestHandler[i] && r.push(i);
                    u(r)
                }, a), l
            }, t
        }();
        t.SimpleWorkerServer = p, t.create = l
    }), i(t[7], n([1, 0]), function (e, t) {
        "use strict";
        var n = function () {
            function e(e, t) {
                this.lineNumber = e, this.column = t
            }

            return e.prototype.equals = function (t) {
                return e.equals(this, t)
            }, e.equals = function (e, t) {
                return !e && !t || !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column
            }, e.prototype.isBefore = function (t) {
                return e.isBefore(this, t)
            }, e.isBefore = function (e, t) {
                return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column < t.column
            }, e.prototype.isBeforeOrEqual = function (t) {
                return e.isBeforeOrEqual(this, t)
            }, e.isBeforeOrEqual = function (e, t) {
                return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column <= t.column
            }, e.compare = function (e, t) {
                var n = 0 | e.lineNumber, r = 0 | t.lineNumber;
                if (n === r) {
                    var i = 0 | e.column, o = 0 | t.column;
                    return i - o
                }
                return n - r
            }, e.prototype.clone = function () {
                return new e(this.lineNumber, this.column)
            }, e.prototype.toString = function () {
                return "(" + this.lineNumber + "," + this.column + ")"
            }, e.lift = function (t) {
                return new e(t.lineNumber, t.column)
            }, e.isIPosition = function (e) {
                return e && "number" == typeof e.lineNumber && "number" == typeof e.column
            }, e
        }();
        t.Position = n
    }), i(t[6], n([1, 0, 7]), function (e, t, n) {
        "use strict";
        var r = function () {
            function e(e, t, n, r) {
                e > n || e === n && t > r ? (this.startLineNumber = n, this.startColumn = r, this.endLineNumber = e, this.endColumn = t) : (this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r)
            }

            return e.prototype.isEmpty = function () {
                return e.isEmpty(this)
            }, e.isEmpty = function (e) {
                return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn
            }, e.prototype.containsPosition = function (t) {
                return e.containsPosition(this, t)
            }, e.containsPosition = function (e, t) {
                return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && (!(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn))
            }, e.prototype.containsRange = function (t) {
                return e.containsRange(this, t)
            }, e.containsRange = function (e, t) {
                return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && (!(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && (!(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn)))
            }, e.prototype.plusRange = function (t) {
                return e.plusRange(this, t)
            }, e.plusRange = function (t, n) {
                var r, i, o, s;
                return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, s = t.endColumn), new e(r, i, o, s)
            }, e.prototype.intersectRanges = function (t) {
                return e.intersectRanges(this, t)
            }, e.intersectRanges = function (t, n) {
                var r = t.startLineNumber, i = t.startColumn, o = t.endLineNumber, s = t.endColumn, u = n.startLineNumber, a = n.startColumn, l = n.endLineNumber, c = n.endColumn;
                return r < u ? (r = u, i = a) : r === u && (i = Math.max(i, a)), o > l ? (o = l, s = c) : o === l && (s = Math.min(s, c)), r > o ? null : r === o && i > s ? null : new e(r, i, o, s)
            }, e.prototype.equalsRange = function (t) {
                return e.equalsRange(this, t)
            }, e.equalsRange = function (e, t) {
                return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn
            }, e.prototype.getEndPosition = function () {
                return new n.Position(this.endLineNumber, this.endColumn)
            }, e.prototype.getStartPosition = function () {
                return new n.Position(this.startLineNumber, this.startColumn)
            }, e.prototype.cloneRange = function () {
                return new e(this.startLineNumber, this.startColumn, this.endLineNumber, this.endColumn)
            }, e.prototype.toString = function () {
                return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"
            }, e.prototype.setEndPosition = function (t, n) {
                return new e(this.startLineNumber, this.startColumn, t, n)
            }, e.prototype.setStartPosition = function (t, n) {
                return new e(t, n, this.endLineNumber, this.endColumn)
            }, e.prototype.collapseToStart = function () {
                return e.collapseToStart(this)
            }, e.collapseToStart = function (t) {
                return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn)
            }, e.lift = function (t) {
                return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null
            }, e.isIRange = function (e) {
                return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn
            }, e.areIntersectingOrTouching = function (e, t) {
                return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn)
            }, e.compareRangesUsingStarts = function (e, t) {
                var n = 0 | e.startLineNumber, r = 0 | t.startLineNumber;
                if (n === r) {
                    var i = 0 | e.startColumn, o = 0 | t.startColumn;
                    if (i === o) {
                        var s = 0 | e.endLineNumber, u = 0 | t.endLineNumber;
                        if (s === u) {
                            var a = 0 | e.endColumn, l = 0 | t.endColumn;
                            return a - l
                        }
                        return s - u
                    }
                    return i - o
                }
                return n - r
            }, e.compareRangesUsingEnds = function (e, t) {
                return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber
            }, e.spansMultipleLines = function (e) {
                return e.endLineNumber > e.startLineNumber
            }, e
        }();
        t.Range = r
    }), i(t[20], n([1, 0, 6]), function (e, t, n) {
        "use strict";
        var r;
        !function (e) {
            e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL"
        }(r = t.SelectionDirection || (t.SelectionDirection = {}));
        var i = function (e) {
            function t(t, n, r, i) {
                var o = e.call(this, t, n, r, i) || this;
                return o.selectionStartLineNumber = t, o.selectionStartColumn = n, o.positionLineNumber = r, o.positionColumn = i, o
            }

            return o(t, e), t.prototype.clone = function () {
                return new t(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn)
            }, t.prototype.toString = function () {
                return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]"
            }, t.prototype.equalsSelection = function (e) {
                return t.selectionsEqual(this, e)
            }, t.selectionsEqual = function (e, t) {
                return e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn
            }, t.prototype.getDirection = function () {
                return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? r.LTR : r.RTL
            }, t.prototype.setEndPosition = function (e, n) {
                return this.getDirection() === r.LTR ? new t(this.startLineNumber, this.startColumn, e, n) : new t(e, n, this.startLineNumber, this.startColumn)
            }, t.prototype.setStartPosition = function (e, n) {
                return this.getDirection() === r.LTR ? new t(e, n, this.endLineNumber, this.endColumn) : new t(this.endLineNumber, this.endColumn, e, n)
            }, t.liftSelection = function (e) {
                return new t(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn)
            }, t.selectionsArrEqual = function (e, t) {
                if (e && !t || !e && t)return !1;
                if (!e && !t)return !0;
                if (e.length !== t.length)return !1;
                for (var n = 0, r = e.length; n < r; n++)if (!this.selectionsEqual(e[n], t[n]))return !1;
                return !0
            }, t.isISelection = function (e) {
                return e && "number" == typeof e.selectionStartLineNumber && "number" == typeof e.selectionStartColumn && "number" == typeof e.positionLineNumber && "number" == typeof e.positionColumn
            }, t.createWithDirection = function (e, n, i, o, s) {
                return s === r.LTR ? new t(e, n, i, o) : new t(i, o, e, n)
            }, t
        }(n.Range);
        t.Selection = i
    }), i(t[21], n([1, 0]), function (e, t) {
        "use strict";
        var n = function () {
            function e(e, t, n) {
                this.offset = 0 | e, this.type = t, this.language = n
            }

            return e.prototype.toString = function () {
                return "(" + this.offset + ", " + this.type + ")"
            }, e
        }();
        t.Token = n;
        var r = function () {
            function e(e, t) {
                this.tokens = e, this.endState = t
            }

            return e
        }();
        t.TokenizationResult = r;
        var i = function () {
            function e(e, t) {
                this.tokens = e, this.endState = t
            }

            return e
        }();
        t.TokenizationResult2 = i
    }), i(t[8], n([1, 0]), function (e, t) {
        "use strict";
        function n(e) {
            return e < 0 ? 0 : e > 255 ? 255 : 0 | e
        }

        function r(e) {
            return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e
        }

        function i(e) {
            for (var t = e.length, n = new Uint32Array(t), i = 0; i < t; i++)n[i] = r(e[i]);
            return n
        }

        var o = function () {
            function e(e, t, n) {
                for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++)r[i] = n;
                this._data = r, this._rows = e, this._cols = t
            }

            return e.prototype.get = function (e, t) {
                return this._data[e * this._cols + t]
            }, e.prototype.set = function (e, t, n) {
                this._data[e * this._cols + t] = n
            }, e
        }();
        t.Uint8Matrix = o;
        var s;
        !function (e) {
            e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32"
        }(s = t.Constants || (t.Constants = {})), t.toUint8 = n, t.toUint32 = r, t.toUint32Array = i
    }), i(t[23], n([1, 0, 8]), function (e, t, n) {
        "use strict";
        var r = function () {
            function e(t) {
                var r = n.toUint8(t);
                this._defaultValue = r, this._asciiMap = e._createAsciiMap(r), this._map = new Map
            }

            return e._createAsciiMap = function (e) {
                for (var t = new Uint8Array(256), n = 0; n < 256; n++)t[n] = e;
                return t
            }, e.prototype.set = function (e, t) {
                var r = n.toUint8(t);
                e >= 0 && e < 256 ? this._asciiMap[e] = r : this._map.set(e, r)
            }, e.prototype.get = function (e) {
                return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue
            }, e
        }();
        t.CharacterClassifier = r;
        var i;
        !function (e) {
            e[e.False = 0] = "False", e[e.True = 1] = "True"
        }(i || (i = {}));
        var o = function () {
            function e() {
                this._actual = new r(0)
            }

            return e.prototype.add = function (e) {
                this._actual.set(e, 1)
            }, e.prototype.has = function (e) {
                return 1 === this._actual.get(e)
            }, e
        }();
        t.CharacterSet = o
    }), i(t[24], n([1, 0, 11, 15]), function (e, t, n, r) {
        "use strict";
        function i(e, t, r) {
            var i = new n.LcsDiff(e, t, r);
            return i.ComputeDiff()
        }

        function s(e) {
            if (e.length <= 1)return e;
            var t, n, r, i, o, s, u = [e[0]], l = u[0];
            for (t = 1, n = e.length; t < n; t++)s = e[t], r = s.originalStart - (l.originalStart + l.originalLength), i = s.modifiedStart - (l.modifiedStart + l.modifiedLength), o = Math.min(r, i), o < a ? (l.originalLength = s.originalStart + s.originalLength - l.originalStart, l.modifiedLength = s.modifiedStart + s.modifiedLength - l.modifiedStart) : (u.push(s), l = s);
            return u
        }

        var u = 5e3, a = 3, l = function () {
            function e(e, t, n) {
                this.buffer = e, this.startMarkers = t, this.endMarkers = n
            }

            return e.prototype.equals = function (t) {
                if (!(t instanceof e))return !1;
                var n = t;
                if (this.getLength() !== n.getLength())return !1;
                for (var r = 0, i = this.getLength(); r < i; r++) {
                    var o = this.getElementHash(r), s = n.getElementHash(r);
                    if (o !== s)return !1
                }
                return !0
            }, e.prototype.getLength = function () {
                return this.startMarkers.length
            }, e.prototype.getElementHash = function (e) {
                return this.buffer.substring(this.startMarkers[e].offset, this.endMarkers[e].offset)
            }, e.prototype.getStartLineNumber = function (e) {
                return e === this.startMarkers.length ? this.startMarkers[e - 1].lineNumber + 1 : this.startMarkers[e].lineNumber
            }, e.prototype.getStartColumn = function (e) {
                return this.startMarkers[e].column
            }, e.prototype.getEndLineNumber = function (e) {
                return this.endMarkers[e].lineNumber
            }, e.prototype.getEndColumn = function (e) {
                return this.endMarkers[e].column
            }, e
        }(), c = function (e) {
            function t(n, r) {
                var i, o, s, u, a, l = this, c = "", f = [], h = [];
                for (s = 0, i = 0, o = n.length; i < o; i++)c += n[i], u = 1, a = n[i].length + 1, r && (u = t._getFirstNonBlankColumn(n[i], 1), a = t._getLastNonBlankColumn(n[i], 1)), f.push({
                    offset: s + u - 1,
                    lineNumber: i + 1,
                    column: u
                }), h.push({offset: s + a - 1, lineNumber: i + 1, column: a}), s += n[i].length;
                return l = e.call(this, c, f, h) || this
            }

            return o(t, e), t._getFirstNonBlankColumn = function (e, t) {
                var n = r.firstNonWhitespaceIndex(e);
                return n === -1 ? t : n + 1
            }, t._getLastNonBlankColumn = function (e, t) {
                var n = r.lastNonWhitespaceIndex(e);
                return n === -1 ? t : n + 2
            }, t.prototype.getCharSequence = function (e, t) {
                var n, r, i, o, s = [], u = [];
                for (n = e; n <= t; n++)for (i = this.startMarkers[n], o = this.endMarkers[n], r = i.offset; r < o.offset; r++)s.push({
                    offset: r,
                    lineNumber: i.lineNumber,
                    column: i.column + (r - i.offset)
                }), u.push({offset: r + 1, lineNumber: i.lineNumber, column: i.column + (r - i.offset) + 1});
                return new l(this.buffer, s, u)
            }, t
        }(l), f = function () {
            function e(e, t, n) {
                0 === e.originalLength ? (this.originalStartLineNumber = 0, this.originalStartColumn = 0, this.originalEndLineNumber = 0, this.originalEndColumn = 0) : (this.originalStartLineNumber = t.getStartLineNumber(e.originalStart), this.originalStartColumn = t.getStartColumn(e.originalStart), this.originalEndLineNumber = t.getEndLineNumber(e.originalStart + e.originalLength - 1), this.originalEndColumn = t.getEndColumn(e.originalStart + e.originalLength - 1)), 0 === e.modifiedLength ? (this.modifiedStartLineNumber = 0, this.modifiedStartColumn = 0, this.modifiedEndLineNumber = 0, this.modifiedEndColumn = 0) : (this.modifiedStartLineNumber = n.getStartLineNumber(e.modifiedStart), this.modifiedStartColumn = n.getStartColumn(e.modifiedStart), this.modifiedEndLineNumber = n.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1), this.modifiedEndColumn = n.getEndColumn(e.modifiedStart + e.modifiedLength - 1))
            }

            return e
        }(), h = function () {
            function e(e, t, n, r, o) {
                if (0 === e.originalLength ? (this.originalStartLineNumber = t.getStartLineNumber(e.originalStart) - 1, this.originalEndLineNumber = 0) : (this.originalStartLineNumber = t.getStartLineNumber(e.originalStart), this.originalEndLineNumber = t.getEndLineNumber(e.originalStart + e.originalLength - 1)), 0 === e.modifiedLength ? (this.modifiedStartLineNumber = n.getStartLineNumber(e.modifiedStart) - 1, this.modifiedEndLineNumber = 0) : (this.modifiedStartLineNumber = n.getStartLineNumber(e.modifiedStart), this.modifiedEndLineNumber = n.getEndLineNumber(e.modifiedStart + e.modifiedLength - 1)), 0 !== e.originalLength && 0 !== e.modifiedLength && r()) {
                    var u = t.getCharSequence(e.originalStart, e.originalStart + e.originalLength - 1), a = n.getCharSequence(e.modifiedStart, e.modifiedStart + e.modifiedLength - 1), l = i(u, a, r);
                    o && (l = s(l)), this.charChanges = [];
                    for (var c = 0, h = l.length; c < h; c++)this.charChanges.push(new f(l[c], u, a))
                }
            }

            return e
        }(), d = function () {
            function e(e, t, n) {
                this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.maximumRunTimeMs = u, this.original = new c(e, this.shouldIgnoreTrimWhitespace), this.modified = new c(t, this.shouldIgnoreTrimWhitespace), n.shouldConsiderTrimWhitespaceInEmptyCase && this.shouldIgnoreTrimWhitespace && this.original.equals(this.modified) && (this.shouldIgnoreTrimWhitespace = !1, this.original = new c(e, this.shouldIgnoreTrimWhitespace), this.modified = new c(t, this.shouldIgnoreTrimWhitespace))
            }

            return e.prototype.computeDiff = function () {
                this.computationStartTime = (new Date).getTime();
                for (var e = i(this.original, this.modified, this._continueProcessingPredicate.bind(this)), t = [], n = 0, r = e.length; n < r; n++)t.push(new h(e[n], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldPostProcessCharChanges));
                return t
            }, e.prototype._continueProcessingPredicate = function () {
                if (0 === this.maximumRunTimeMs)return !0;
                var e = (new Date).getTime();
                return e - this.computationStartTime < this.maximumRunTimeMs
            }, e
        }();
        t.DiffComputer = d
    }), i(t[25], n([1, 0]), function (e, t) {
        "use strict";
        function n(e) {
            void 0 === e && (e = "");
            for (var n = t.USUAL_WORD_SEPARATORS, r = "(-?\\d*\\.\\d\\w*)|([^", i = 0; i < n.length; i++)e.indexOf(n[i]) >= 0 || (r += "\\" + n[i]);
            return r += "\\s]+)", new RegExp(r, "g")
        }

        function r(e) {
            var n = t.DEFAULT_WORD_REGEXP;
            if (e && e instanceof RegExp)if (e.global)n = e; else {
                var r = "g";
                e.ignoreCase && (r += "i"), e.multiline && (r += "m"), n = new RegExp(e.source, r)
            }
            return n.lastIndex = 0, n
        }

        function i(e, t, n, r) {
            if (t.test(" "))return o(e, t, n, r);
            var i = e - 1 - r, s = n.lastIndexOf(" ", i - 1) + 1, u = n.indexOf(" ", i);
            u === -1 && (u = n.length), t.lastIndex = s;
            for (var a; a = t.exec(n);)if (a.index <= i && t.lastIndex >= i)return {
                word: a[0],
                startColumn: r + 1 + a.index,
                endColumn: r + 1 + t.lastIndex
            };
            return null
        }

        function o(e, t, n, r) {
            var i = e - 1 - r;
            t.lastIndex = 0;
            for (var o; o = t.exec(n);) {
                if (o.index > i)return null;
                if (t.lastIndex >= i)return {word: o[0], startColumn: r + 1 + o.index, endColumn: r + 1 + t.lastIndex}
            }
            return null
        }

        function s(e, t, n, r) {
            var o = i(e, t, n, r);
            return t.lastIndex = 0, o
        }

        t.USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?", t.DEFAULT_WORD_REGEXP = n(), t.ensureValidWordDefinition = r, t.getWordAtText = s
    }), i(t[26], n([1, 0, 23, 8]), function (e, t, n, r) {
        "use strict";
        function i() {
            return null === c && (c = new l([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])), c
        }

        function o() {
            if (null === f) {
                f = new n.CharacterClassifier(0);
                for (var e = " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…", t = 0; t < e.length; t++)f.set(e.charCodeAt(t), 1);
                for (var r = ".,;", t = 0; t < r.length; t++)f.set(r.charCodeAt(t), 2)
            }
            return f
        }

        function s(e) {
            return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? h.computeLinks(e) : []
        }

        var u;
        !function (e) {
            e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept"
        }(u || (u = {}));
        var a, l = function () {
            function e(e) {
                for (var t = 0, n = 0, i = 0, o = e.length; i < o; i++) {
                    var s = e[i], u = s[0], a = s[1], l = s[2];
                    a > t && (t = a), u > n && (n = u), l > n && (n = l)
                }
                t++, n++;
                for (var c = new r.Uint8Matrix(n, t, 0), i = 0, o = e.length; i < o; i++) {
                    var f = e[i], u = f[0], a = f[1], l = f[2];
                    c.set(u, a, l)
                }
                this._states = c, this._maxCharCode = t
            }

            return e.prototype.nextState = function (e, t) {
                return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t)
            }, e
        }(), c = null;
        !function (e) {
            e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn"
        }(a || (a = {}));
        var f = null, h = function () {
            function e() {
            }

            return e._createLink = function (e, t, n, r, i) {
                var o = i - 1;
                do {
                    var s = t.charCodeAt(o), u = e.get(s);
                    if (2 !== u)break;
                    o--
                } while (o > r);
                return {
                    range: {startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2},
                    url: t.substring(r, o + 1)
                }
            }, e.computeLinks = function (t) {
                for (var n = i(), r = o(), s = [], u = 1, a = t.getLineCount(); u <= a; u++) {
                    for (var l = t.getLineContent(u), c = l.length, f = 0, h = 0, d = 0, p = 1, m = !1, _ = !1, g = !1; f < c;) {
                        var v = !1, y = l.charCodeAt(f);
                        if (13 === p) {
                            var b = void 0;
                            switch (y) {
                                case 40:
                                    m = !0, b = 0;
                                    break;
                                case 41:
                                    b = m ? 0 : 1;
                                    break;
                                case 91:
                                    _ = !0, b = 0;
                                    break;
                                case 93:
                                    b = _ ? 0 : 1;
                                    break;
                                case 123:
                                    g = !0, b = 0;
                                    break;
                                case 125:
                                    b = g ? 0 : 1;
                                    break;
                                case 39:
                                    b = 34 === d || 96 === d ? 0 : 1;
                                    break;
                                case 34:
                                    b = 39 === d || 96 === d ? 0 : 1;
                                    break;
                                case 96:
                                    b = 39 === d || 34 === d ? 0 : 1;
                                    break;
                                default:
                                    b = r.get(y)
                            }
                            1 === b && (s.push(e._createLink(r, l, u, h, f)), v = !0)
                        } else if (12 === p) {
                            var b = r.get(y);
                            1 === b ? v = !0 : p = 13
                        } else p = n.nextState(p, y), 0 === p && (v = !0);
                        v && (p = 1, m = !1, _ = !1, g = !1, h = f + 1, d = y), f++
                    }
                    13 === p && s.push(e._createLink(r, l, u, h, c))
                }
                return s
            }, e
        }();
        t.computeLinks = s
    }), i(t[27], n([1, 0]), function (e, t) {
        "use strict";
        var n = function () {
            function e() {
                this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]]
            }

            return e.prototype.navigateValueSet = function (e, t, n, r, i) {
                if (e && t) {
                    var o = this.doNavigateValueSet(t, i);
                    if (o)return {range: e, value: o}
                }
                if (n && r) {
                    var o = this.doNavigateValueSet(r, i);
                    if (o)return {range: n, value: o}
                }
                return null
            }, e.prototype.doNavigateValueSet = function (e, t) {
                var n = this.numberReplace(e, t);
                return null !== n ? n : this.textReplace(e, t)
            }, e.prototype.numberReplace = function (e, t) {
                var n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)), r = Number(e), i = parseFloat(e);
                return isNaN(r) || isNaN(i) || r !== i ? null : 0 !== r || t ? (r = Math.floor(r * n), r += t ? n : -n, String(r / n)) : null
            }, e.prototype.textReplace = function (e, t) {
                return this.valueSetsReplace(this._defaultValueSet, e, t)
            }, e.prototype.valueSetsReplace = function (e, t, n) {
                for (var r = null, i = 0, o = e.length; null === r && i < o; i++)r = this.valueSetReplace(e[i], t, n);
                return r
            }, e.prototype.valueSetReplace = function (e, t, n) {
                var r = e.indexOf(t);
                return r >= 0 ? (r += n ? 1 : -1, r < 0 ? r = e.length - 1 : r %= e.length, e[r]) : null
            }, e
        }();
        n.INSTANCE = new n, t.BasicInplaceReplace = n
    }), i(t[28], n([1, 0, 5, 18, 7, 6, 20, 2, 12, 21, 10]), function (e, t, n, r, i, o, s, u, a, l, c) {
        "use strict";
        function f() {
            return {
                editor: void 0,
                languages: void 0,
                CancellationTokenSource: a.CancellationTokenSource,
                Emitter: n.Emitter,
                KeyCode: p,
                KeyMod: d,
                Keybinding: r.Keybinding,
                Position: i.Position,
                Range: o.Range,
                Selection: s.Selection,
                SelectionDirection: s.SelectionDirection,
                Severity: h,
                Promise: u.TPromise,
                Uri: c.default,
                Token: l.Token
            }
        }

        var h;
        !function (e) {
            e[e.Ignore = 0] = "Ignore", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error"
        }(h = t.Severity || (t.Severity = {}));
        var d = function () {
            function e() {
            }

            return e.chord = function (e, t) {
                return r.KeyChord(e, t)
            }, e
        }();
        d.CtrlCmd = 2048, d.Shift = 1024, d.Alt = 512, d.WinCtrl = 256, t.KeyMod = d;
        var p;
        !function (e) {
            e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7",e[e.NUMPAD_8 = 101] = "NUMPAD_8",e[e.NUMPAD_9 = 102] = "NUMPAD_9",e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY",e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD",e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR",e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT",e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL",e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE",e[e.MAX_VALUE = 109] = "MAX_VALUE"
        }(p = t.KeyCode || (t.KeyCode = {})), t.createMonacoBaseAPI = f
    }), i(t[29], n([1, 0, 8]), function (e, t, n) {
        "use strict";
        var r = function () {
            function e(e, t) {
                this.index = e, this.remainder = t
            }

            return e
        }();
        t.PrefixSumIndexOfResult = r;
        var i = function () {
            function e(e) {
                this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = -1
            }

            return e.prototype.getCount = function () {
                return this.values.length
            }, e.prototype.insertValues = function (e, t) {
                e = n.toUint32(e);
                var r = this.values, i = this.prefixSum, o = t.length;
                0 !== o && (this.values = new Uint32Array(r.length + o), this.values.set(r.subarray(0, e), 0), this.values.set(r.subarray(e), e + o), this.values.set(t, e), e - 1 < this.prefixSumValidIndex && (this.prefixSumValidIndex = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex + 1)))
            }, e.prototype.changeValue = function (e, t) {
                e = n.toUint32(e), t = n.toUint32(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex && (this.prefixSumValidIndex = e - 1))
            }, e.prototype.removeValues = function (e, t) {
                e = n.toUint32(e), t = n.toUint32(t);
                var r = this.values, i = this.prefixSum;
                if (!(e >= r.length)) {
                    var o = r.length - e;
                    t >= o && (t = o), 0 !== t && (this.values = new Uint32Array(r.length - t), this.values.set(r.subarray(0, e), 0), this.values.set(r.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex && (this.prefixSumValidIndex = e - 1), this.prefixSumValidIndex >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex + 1)))
                }
            }, e.prototype.getTotalValue = function () {
                return 0 === this.values.length ? 0 : this.getAccumulatedValue(this.values.length - 1)
            }, e.prototype.getAccumulatedValue = function (e) {
                if (e < 0)return 0;
                if (e = n.toUint32(e), e <= this.prefixSumValidIndex)return this.prefixSum[e];
                var t = this.prefixSumValidIndex + 1;
                0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
                for (var r = t; r <= e; r++)this.prefixSum[r] = this.prefixSum[r - 1] + this.values[r];
                return this.prefixSumValidIndex = Math.max(this.prefixSumValidIndex, e), this.prefixSum[e]
            }, e.prototype.getIndexOf = function (e) {
                e = Math.floor(e);
                for (var t, n, i, o = 0, s = this.values.length - 1; o <= s;)if (t = o + (s - o) / 2 | 0, n = this.getAccumulatedValue(t), i = n - this.values[t], e < i)s = t - 1; else {
                    if (!(e >= n))break;
                    o = t + 1
                }
                return new r(t, e - i)
            }, e
        }();
        t.PrefixSumComputer = i
    }), i(t[30], n([1, 0, 29]), function (e, t, n) {
        "use strict";
        var r = function () {
            function e(e, t, n, r) {
                this._uri = e, this._lines = t, this._eol = n, this._versionId = r
            }

            return e.prototype.dispose = function () {
                this._lines.length = 0;
            }, Object.defineProperty(e.prototype, "version", {
                get: function () {
                    return this._versionId
                }, enumerable: !0, configurable: !0
            }), e.prototype.getText = function () {
                return this._lines.join(this._eol)
            }, e.prototype.onEvents = function (e) {
                for (var t = null, n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    i.eol && (t = i.eol)
                }
                t && t !== this._eol && (this._eol = t, this._lineStarts = null);
                for (var o = -1, n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    this._acceptDeleteRange(i.range), this._acceptInsertText({
                        lineNumber: i.range.startLineNumber,
                        column: i.range.startColumn
                    }, i.text), o = Math.max(o, i.versionId)
                }
                o !== -1 && (this._versionId = o)
            }, e.prototype._ensureLineStarts = function () {
                if (!this._lineStarts) {
                    for (var e = this._eol.length, t = this._lines.length, r = new Uint32Array(t), i = 0; i < t; i++)r[i] = this._lines[i].length + e;
                    this._lineStarts = new n.PrefixSumComputer(r)
                }
            }, e.prototype._setLineText = function (e, t) {
                this._lines[e] = t, this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length)
            }, e.prototype._acceptDeleteRange = function (e) {
                if (e.startLineNumber === e.endLineNumber) {
                    if (e.startColumn === e.endColumn)return;
                    return void this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1))
                }
                this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber)
            }, e.prototype._acceptInsertText = function (e, t) {
                if (0 !== t.length) {
                    var n = t.split(/\r\n|\r|\n/);
                    if (1 === n.length)return void this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
                    n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
                    for (var r = new Uint32Array(n.length - 1), i = 1; i < n.length; i++)this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
                    this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r)
                }
            }, e
        }();
        t.MirrorModel2 = r
    }), i(t[32], n([1, 0, 10, 2, 6, 24, 11, 7, 30, 26, 27, 25, 28]), function (e, t, n, r, i, s, u, a, l, c, f, h, d) {
        "use strict";
        function p() {
            return new g
        }

        var m = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), Object.defineProperty(t.prototype, "uri", {
                get: function () {
                    return this._uri
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "version", {
                get: function () {
                    return this._versionId
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "eol", {
                get: function () {
                    return this._eol
                }, enumerable: !0, configurable: !0
            }), t.prototype.getValue = function () {
                return this.getText()
            }, t.prototype.getLinesContent = function () {
                return this._lines.slice(0)
            }, t.prototype.getLineCount = function () {
                return this._lines.length
            }, t.prototype.getLineContent = function (e) {
                return this._lines[e - 1]
            }, t.prototype.getWordAtPosition = function (e, t) {
                var n = h.getWordAtText(e.column, h.ensureValidWordDefinition(t), this._lines[e.lineNumber - 1], 0);
                return n ? new i.Range(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null
            }, t.prototype.getWordUntilPosition = function (e, t) {
                var n = this.getWordAtPosition(e, t);
                return n ? {
                    word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1),
                    startColumn: n.startColumn,
                    endColumn: e.column
                } : {word: "", startColumn: e.column, endColumn: e.column}
            }, t.prototype._getAllWords = function (e) {
                var t = this, n = [];
                return this._lines.forEach(function (r) {
                    t._wordenize(r, e).forEach(function (e) {
                        n.push(r.substring(e.start, e.end))
                    })
                }), n
            }, t.prototype.getAllUniqueWords = function (e, t) {
                var n = !1, r = Object.create(null);
                return this._getAllWords(e).filter(function (e) {
                    return t && !n && t === e ? (n = !0, !1) : !r[e] && (r[e] = !0, !0)
                })
            }, t.prototype._wordenize = function (e, t) {
                var n, r = [];
                for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length;)r.push({
                    start: n.index,
                    end: n.index + n[0].length
                });
                return r
            }, t.prototype.getValueInRange = function (e) {
                if (e = this._validateRange(e), e.startLineNumber === e.endLineNumber)return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
                var t = this._eol, n = e.startLineNumber - 1, r = e.endLineNumber - 1, i = [];
                i.push(this._lines[n].substring(e.startColumn - 1));
                for (var o = n + 1; o < r; o++)i.push(this._lines[o]);
                return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t)
            }, t.prototype.offsetAt = function (e) {
                return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getAccumulatedValue(e.lineNumber - 2) + (e.column - 1)
            }, t.prototype.positionAt = function (e) {
                e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
                var t = this._lineStarts.getIndexOf(e), n = this._lines[t.index].length;
                return {lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n)}
            }, t.prototype._validateRange = function (e) {
                var t = this._validatePosition({
                    lineNumber: e.startLineNumber,
                    column: e.startColumn
                }), n = this._validatePosition({lineNumber: e.endLineNumber, column: e.endColumn});
                return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? {
                    startLineNumber: t.lineNumber,
                    startColumn: t.column,
                    endLineNumber: n.lineNumber,
                    endColumn: n.column
                } : e
            }, t.prototype._validatePosition = function (e) {
                if (!a.Position.isIPosition(e))throw new Error("bad position");
                var t = e.lineNumber, n = e.column, r = !1;
                if (t < 1)t = 1, n = 1, r = !0; else if (t > this._lines.length)t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0; else {
                    var i = this._lines[t - 1].length + 1;
                    n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0)
                }
                return r ? {lineNumber: t, column: n} : e
            }, t
        }(l.MirrorModel2), _ = function () {
            function e() {
                this._foreignModule = null
            }

            return e.prototype.computeDiff = function (e, t, n) {
                var i = this._getModel(e), o = this._getModel(t);
                if (!i || !o)return null;
                var u = i.getLinesContent(), a = o.getLinesContent(), l = new s.DiffComputer(u, a, {
                    shouldPostProcessCharChanges: !0,
                    shouldIgnoreTrimWhitespace: n,
                    shouldConsiderTrimWhitespaceInEmptyCase: !0
                });
                return r.TPromise.as(l.computeDiff())
            }, e.prototype.computeDirtyDiff = function (e, t, n) {
                var i = this._getModel(e), o = this._getModel(t);
                if (!i || !o)return null;
                var u = i.getLinesContent(), a = o.getLinesContent(), l = new s.DiffComputer(u, a, {
                    shouldPostProcessCharChanges: !1,
                    shouldIgnoreTrimWhitespace: n,
                    shouldConsiderTrimWhitespaceInEmptyCase: !1
                });
                return r.TPromise.as(l.computeDiff())
            }, e.prototype.computeMoreMinimalEdits = function (t, n, o) {
                var s = this._getModel(t);
                if (!s)return r.TPromise.as(n);
                for (var a = [], l = 0, c = n; l < c.length; l++) {
                    var f = c[l], h = f.range, d = f.text, p = s.getValueInRange(h);
                    if (d = d.replace(/\r\n|\n|\r/g, s.eol), p !== d)if (Math.max(d.length, p.length) > e._diffLimit)a.push({
                        range: h,
                        text: d
                    }); else for (var m = u.stringDiff(p, d), _ = s.offsetAt(i.Range.lift(h).getStartPosition()), g = 0, v = m; g < v.length; g++) {
                        var y = v[g], b = s.positionAt(_ + y.originalStart), E = s.positionAt(_ + y.originalStart + y.originalLength), C = {
                            text: d.substr(y.modifiedStart, y.modifiedLength),
                            range: {
                                startLineNumber: b.lineNumber,
                                startColumn: b.column,
                                endLineNumber: E.lineNumber,
                                endColumn: E.column
                            }
                        };
                        s.getValueInRange(C.range) !== C.text && a.push(C)
                    }
                }
                return r.TPromise.as(a)
            }, e.prototype.computeLinks = function (e) {
                var t = this._getModel(e);
                return t ? r.TPromise.as(c.computeLinks(t)) : null
            }, e.prototype.textualSuggest = function (e, t, n, i) {
                var o = this._getModel(e);
                if (o) {
                    for (var s = [], u = new RegExp(n, i), a = o.getWordUntilPosition(t, u).word, l = 0, c = o.getAllUniqueWords(u); l < c.length; l++) {
                        var f = c[l];
                        f !== a && isNaN(Number(f)) && s.push({
                            type: "text",
                            label: f,
                            insertText: f,
                            noAutoAccept: !0,
                            overwriteBefore: a.length
                        })
                    }
                    return r.TPromise.as({suggestions: s})
                }
            }, e.prototype.navigateValueSet = function (e, t, n, i, o) {
                var s = this._getModel(e);
                if (!s)return null;
                var u = new RegExp(i, o);
                t.startColumn === t.endColumn && (t = {
                    startLineNumber: t.startLineNumber,
                    startColumn: t.startColumn,
                    endLineNumber: t.endLineNumber,
                    endColumn: t.endColumn + 1
                });
                var a = s.getValueInRange(t), l = s.getWordAtPosition({
                    lineNumber: t.startLineNumber,
                    column: t.startColumn
                }, u), c = null;
                null !== l && (c = s.getValueInRange(l));
                var h = f.BasicInplaceReplace.INSTANCE.navigateValueSet(t, a, l, c, n);
                return r.TPromise.as(h)
            }, e.prototype.loadForeignModule = function (e, t) {
                var n = this;
                return new r.TPromise(function (r, i) {
                    self.require([e], function (e) {
                        var i = {
                            getMirrorModels: function () {
                                return n._getModels()
                            }
                        };
                        n._foreignModule = e.create(i, t);
                        var o = [];
                        for (var s in n._foreignModule)"function" == typeof n._foreignModule[s] && o.push(s);
                        r(o)
                    }, i)
                })
            }, e.prototype.fmr = function (e, t) {
                if (!this._foreignModule || "function" != typeof this._foreignModule[e])return r.TPromise.wrapError(new Error("Missing requestHandler or method: " + e));
                try {
                    return r.TPromise.as(this._foreignModule[e].apply(this._foreignModule, t))
                } catch (e) {
                    return r.TPromise.wrapError(e)
                }
            }, e
        }();
        _._diffLimit = 1e4, t.BaseEditorSimpleWorker = _;
        var g = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t._models = Object.create(null), t
            }

            return o(t, e), t.prototype.dispose = function () {
                this._models = Object.create(null)
            }, t.prototype._getModel = function (e) {
                return this._models[e]
            }, t.prototype._getModels = function () {
                var e = this, t = [];
                return Object.keys(this._models).forEach(function (n) {
                    return t.push(e._models[n])
                }), t
            }, t.prototype.acceptNewModel = function (e) {
                this._models[e.url] = new m(n.default.parse(e.url), e.value.lines, e.value.EOL, e.versionId)
            }, t.prototype.acceptModelChanged = function (e, t) {
                if (this._models[e]) {
                    var n = this._models[e];
                    n.onEvents(t)
                }
            }, t.prototype.acceptRemovedModel = function (e) {
                this._models[e] && delete this._models[e]
            }, t
        }(_);
        t.EditorSimpleWorkerImpl = g, t.create = p;
        var v = self, y = "function" == typeof v.importScripts;
        y && (v.monaco = d.createMonacoBaseAPI())
    }), function () {
        "use strict";
        var e = self.MonacoEnvironment, t = e && e.baseUrl ? e.baseUrl : "../../../";
        "function" == typeof self.define && self.define.amd || importScripts(t + "vs/loader.js"), require.config({
            baseUrl: t,
            catchError: !0
        });
        var n = function (e) {
            require([e], function (e) {
                setTimeout(function () {
                    var t = e.create(function (e) {
                        self.postMessage(e)
                    }, null);
                    for (self.onmessage = function (e) {
                        return t.onmessage(e.data)
                    }; i.length > 0;)self.onmessage(i.shift())
                }, 0)
            })
        }, r = !0, i = [];
        self.onmessage = function (e) {
            return r ? (r = !1, void n(e.data)) : void i.push(e)
        }
    }()
}).call(this);
//# sourceMappingURL=../../../../min-maps/vs/base/worker/workerMain.js.map