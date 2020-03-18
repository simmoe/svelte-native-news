require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.ts": "./app.ts",
	"./font-awesome.css": "./font-awesome.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./App.svelte":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/svelte/internal/index.mjs");
/* harmony import */ var _Users_simo018_Desktop_svelte_native_news_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/svelte-loader-hot/lib/svelte3/hot-api.js");
/* harmony import */ var _Users_simo018_Desktop_svelte_native_news_node_modules_svelte_loader_hot_node_modules_svelte_hmr_runtime_svelte_native_proxy_adapter_native_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/svelte-loader-hot/node_modules/svelte-hmr/runtime/svelte-native/proxy-adapter-native.js");
/* app/App.svelte generated by Svelte v3.19.1 */


function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-whvmwt-style";
	style.textContent = "page.svelte-whvmwt{padding:24}.article.svelte-whvmwt{min-height:100;padding:24;margin:24}";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (10:12) {:else}
function create_else_block(ctx) {
	let activityIndicator;
	let activityIndicator_busy_value;

	return {
		c() {
			activityIndicator = document.createElementNS("http://www.w3.org/2000/xmlns", "activityIndicator");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(activityIndicator, "busy", activityIndicator_busy_value = true);
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, activityIndicator, anchor);
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(activityIndicator);
		}
	};
}

// (5:12) {#each articles as article}
function create_each_block(ctx) {
	let stackLayout;
	let label;
	let label_text_value;

	return {
		c() {
			stackLayout = document.createElementNS("http://www.w3.org/2000/xmlns", "stackLayout");
			label = document.createElementNS("http://www.w3.org/2000/xmlns", "label");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "class", "h2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "text", label_text_value = /*article*/ ctx[2].title);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(stackLayout, "class", "article svelte-whvmwt");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, stackLayout, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(stackLayout, label);
		},
		p(ctx, dirty) {
			if (dirty & /*articles*/ 1 && label_text_value !== (label_text_value = /*article*/ ctx[2].title)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(label, "text", label_text_value);
			}
		},
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(stackLayout);
		}
	};
}

function create_fragment(ctx) {
	let page;
	let actionBar;
	let scrollView;
	let stackLayout;
	let each_value = /*articles*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let each_1_else = null;

	if (!each_value.length) {
		each_1_else = create_else_block(ctx);
	}

	return {
		c() {
			page = document.createElementNS("http://www.w3.org/2000/xmlns", "page");
			actionBar = document.createElementNS("http://www.w3.org/2000/xmlns", "actionBar");
			scrollView = document.createElementNS("http://www.w3.org/2000/xmlns", "scrollView");
			stackLayout = document.createElementNS("http://www.w3.org/2000/xmlns", "stackLayout");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			if (each_1_else) {
				each_1_else.c();
			}

			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(actionBar, "title", "News App");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(stackLayout, "class", "books");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(page, "class", "svelte-whvmwt");
		},
		m(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, page, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(page, actionBar);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(page, scrollView);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(scrollView, stackLayout);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(stackLayout, null);
			}

			if (each_1_else) {
				each_1_else.m(stackLayout, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*articles*/ 1) {
				each_value = /*articles*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(stackLayout, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (each_value.length) {
				if (each_1_else) {
					each_1_else.d(1);
					each_1_else = null;
				}
			} else if (!each_1_else) {
				each_1_else = create_else_block(ctx);
				each_1_else.c();
				each_1_else.m(stackLayout, null);
			}
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(page);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["destroy_each"])(each_blocks, detaching);
			if (each_1_else) each_1_else.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let articles = [{ title: "hi" }];

	const getArticles = async () => {
		var url = "http://newsapi.org/v2/top-headlines?" + "country=us&" + "apiKey=ed87ebff01bb4f5998eed5fb8a0aba89";
		var req = new Request(url);
		const res = await fetch(req);
		const json = await res.json();
		console.log(json.articles[0]);
		$$invalidate(0, articles = [articles, ...json.articles]);

		console.log(articles.length).catch(error => {
			console.error("Error:", error);
		});
	};

	getArticles();
	return [articles];
}

class App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponent"] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-whvmwt-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], {});
	}
}
 
/* harmony default export */ __webpack_exports__["default"] = (App
  = module && module.hot
    ? _Users_simo018_Desktop_svelte_native_news_node_modules_svelte_loader_hot_lib_svelte3_hot_api_js__WEBPACK_IMPORTED_MODULE_1__["applyHmr"]({
        m: module,
        id: "\"app/App.svelte\"",
        hotOptions: {"native":true},
        Component: App,
        ProxyAdapter: _Users_simo018_Desktop_svelte_native_news_node_modules_svelte_loader_hot_node_modules_svelte_hmr_runtime_svelte_native_proxy_adapter_native_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        compileData: {"vars":[{"name":"articles","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":true,"referenced":true,"writable":true,"referenced_from_script":true},{"name":"getArticles","export_name":null,"injected":false,"module":false,"mutated":false,"reassigned":false,"referenced":false,"writable":false,"referenced_from_script":true}]}
      })
    : App);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.css"));
global.registerModule("nativescript-theme-core/css/core.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.css"));
global.registerModule("./font-awesome.css", () => __webpack_require__("./font-awesome.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme. \nThe imported CSS rules must precede all other types of rules.\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.css'"},{"type":"import","import":"'./font-awesome.css'"}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/svelte-native/index.js");
/* harmony import */ var svelte_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svelte_native__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./App.svelte");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        /*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/


Object(svelte_native__WEBPACK_IMPORTED_MODULE_0__["svelteNative"])(_App_svelte__WEBPACK_IMPORTED_MODULE_1__["default"], {});
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.ts" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./font-awesome.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":" https://fontawesome.com/icons?d=gallery&m=free "},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-regular-400\""},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Free\", \"fa-solid-900\""},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"\"Font Awesome 5 Brands\", \"fa-brands-400\""},{"type":"declaration","property":"font-weight","value":"400"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./font-awesome.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./font-awesome.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vQXBwLnN2ZWx0ZSIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9mb250LWF3ZXNvbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEhDZnlDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEdBSEEsR0FBTyxJQUFDLEtBQUs7Ozs7Ozs7O3NGQUFiLEdBQU8sSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7K0JBSHZDLEdBQVE7OztnQ0FBYixNQUFJOzs7Ozs7aUJBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQVE7OzsrQkFBYixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7OztrQkFBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRmQsUUFBUSxNQUFLLEtBQUssRUFBQyxJQUFJOztPQUVyQixXQUFXO01BQ1QsR0FBRyxHQUFHLHNDQUFzQyxHQUN0QyxhQUFhLEdBQ2IseUNBQXlDO01BQy9DLEdBQUcsT0FBTyxPQUFPLENBQUMsR0FBRztRQUNuQixHQUFHLFNBQVMsS0FBSyxDQUFDLEdBQUc7UUFDckIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJO0VBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2tCQUMzQixRQUFRLElBQUksUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFROztFQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQzFCLEtBQUssQ0FBRSxLQUFLO0dBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSzs7OztDQUlyQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJYLG1IQUFxRSxtQkFBTyxDQUFDLHNEQUFzQztBQUNuSCxvRUFBb0UsbUJBQU8sQ0FBQyxzREFBc0M7QUFDbEgsa0RBQWtELG1CQUFPLENBQUMsb0JBQW9CLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLGdqQkFBZ2pCLEVBQUUsbUVBQW1FLEVBQUUsZ0RBQWdELHdCO0FBQ3R6QixJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7RUFJRTtBQUVGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0RUFBZ0I7QUFDN0MsT0FBTyxHQUFHLE1BQU8sY0FBYyxDQUFDO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdEIsZ0VBQWtCLGtDQUFrQyxVQUFVLDhFQUE4RSxFQUFFLG9EQUFvRCxvR0FBb0csRUFBRSw0REFBNEQsRUFBRSxFQUFFLG9EQUFvRCxrR0FBa0csRUFBRSw0REFBNEQsRUFBRSxFQUFFLG9EQUFvRCxxR0FBcUcsRUFBRSw0REFBNEQsRUFBRSx3QjtBQUN6eEIsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsNENBQTRDO0FBQ3ZFLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9mb250LWF3ZXNvbWUuY3NzXCI6IFwiLi9mb250LWF3ZXNvbWUuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiPHN2ZWx0ZTpvcHRpb25zIG5hbWVzcGFjZT1cInhtbG5zXCIvPjxwYWdlPlxuICAgIDxhY3Rpb25CYXIgdGl0bGU9XCJOZXdzIEFwcFwiIC8+XG4gICAgPHNjcm9sbFZpZXc+XG4gICAgICAgIDxzdGFja0xheW91dCBjbGFzcz0nYm9va3MnPlxuICAgICAgICAgICAgeyNlYWNoIGFydGljbGVzIGFzIGFydGljbGV9XG4gICAgICAgICAgICAgICAgPCEtLSBjb250ZW50IGhlcmUgLS0+XG4gICAgICAgICAgICAgICAgPHN0YWNrTGF5b3V0IGNsYXNzPSdhcnRpY2xlJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSdoMicgdGV4dD0ne2FydGljbGUudGl0bGV9JyAvPlxuICAgICAgICAgICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgPGFjdGl2aXR5SW5kaWNhdG9yIGJ1c3k9e3RydWV9IC8+XG4gICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgPC9zY3JvbGxWaWV3PlxuPC9wYWdlPlxuXG48c2NyaXB0PlxuXG5sZXQgYXJ0aWNsZXMgPSBbe3RpdGxlOidoaSd9XVxuXG5jb25zdCBnZXRBcnRpY2xlcyA9IGFzeW5jICgpID0+IHtcbiAgICB2YXIgdXJsID0gJ2h0dHA6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzPycgK1xuICAgICAgICAgICAgICAnY291bnRyeT11cyYnICtcbiAgICAgICAgICAgICAgJ2FwaUtleT1lZDg3ZWJmZjAxYmI0ZjU5OThlZWQ1ZmI4YTBhYmE4OSc7XG4gICAgdmFyIHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocmVxKVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc29sZS5sb2coanNvbi5hcnRpY2xlc1swXSlcbiAgICBhcnRpY2xlcyA9IFthcnRpY2xlcywgLi4uanNvbi5hcnRpY2xlc11cbiAgICBjb25zb2xlLmxvZyhhcnRpY2xlcy5sZW5ndGgpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfSkgICAgICAgXG59XG5cbmdldEFydGljbGVzKClcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgcGFnZXtcbiAgICAgICAgcGFkZGluZzoyNDsgICBcbiAgICB9XG4gICAgLmFydGljbGV7XG4gICAgICAgIG1pbi1oZWlnaHQ6MTAwO1xuICAgICAgICBwYWRkaW5nOjI0O1xuICAgICAgICBtYXJnaW46MjQ7XG4gICAgfVxuPC9zdHlsZT5cbiIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCIuL2ZvbnQtYXdlc29tZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIi4vZm9udC1hd2Vzb21lLmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS4gXFxuVGhlIGltcG9ydGVkIENTUyBydWxlcyBtdXN0IHByZWNlZGUgYWxsIG90aGVyIHR5cGVzIG9mIHJ1bGVzLlxcblwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5jc3MnXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInLi9mb250LWF3ZXNvbWUuY3NzJ1wifV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCIvKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cblxuaW1wb3J0IHsgc3ZlbHRlTmF0aXZlIH0gZnJvbSBcInN2ZWx0ZS1uYXRpdmVcIjtcbmltcG9ydCBBcHAgZnJvbSAgXCIuL0FwcC5zdmVsdGVcIjtcbnN2ZWx0ZU5hdGl2ZShBcHAsIHt9KTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiY29tbWVudFwiLFwiY29tbWVudFwiOlwiIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2ljb25zP2Q9Z2FsbGVyeSZtPWZyZWUgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIlxcXCJGb250IEF3ZXNvbWUgNSBGcmVlXFxcIiwgXFxcImZhLXJlZ3VsYXItNDAwXFxcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnQgQXdlc29tZSA1IEZyZWVcXFwiLCBcXFwiZmEtc29saWQtOTAwXFxcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiOTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiXFxcIkZvbnQgQXdlc29tZSA1IEJyYW5kc1xcXCIsIFxcXCJmYS1icmFuZHMtNDAwXFxcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2ZvbnQtYXdlc29tZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2ZvbnQtYXdlc29tZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==