/*
  Webpack version 4.44.1
  Annotated bundle generated with two modules:
  - one concat
*/

/******/  (function(modules) { // webpackBootstrap
            /*
              This function is what bootstraps an application inside of a
              webpack IIFE (immediatley invoked function expression). It creates
              a scope for all of our modules to live in, and our code to be executed
              in.
            */

            /*
              The `modules` argument is an associative array(POJO) containing modules
              used at runtime.  In this case that's our index.js and utils.js files.
              {
                './src/index.js': function(module, __webpack_exports__, __webpack_require__) { ... },
                './src/utils.js': function(module, __webpack_exports__, __webpack_require__) { ... }
              }
            */
/******/    // install a JSONP callback for chunk loading
/******/    function webpackJsonpCallback(data) {
            /*
              This function is generated when the import
              function is used to import a file at runtime. It's
              a sequence of instructions for exposing a dynamic
              import to the parent scope.

              //////////// FIND LINE IN WEBPACK SOURCE WHERE THIS HAPPENS
                - it'd be good to know exactly what conditions generate this function,
                  as well as point to where this file is created so users can see  more
                  conditionally generated functions

              If a bundle doesn't have a dynamic import, like
              we do on line 3 of index.js, it won't include this function
              and will jump straight to installedModules

              Dynamic imports add another request to the app, but contribute
              to the performance of the initial page load because less code is
              being loaded
            */

            /*
              `data` is an array containing two indexes:
              - 0 is an array of chunk ids
              - 1 is an associative array(POJO) containing modules in this import
                Here's an example of how this object is structured:
                {
                  '<path to a module>: function(module, __webpack_exports__, __webpack_require__) {
                  }
                }

                So in our case, it's
                {
                  './src/todo.js': function(module, __webpack_exports__, __webpack_require__) {...}
                }


/******/      var chunkIds = data[0];
              /*
                Establishes a reference to an array containing chunk ids. In
                this instance the referenced value is [0]
              */

/******/      var moreModules = data[1];
              /*
                Establishes a reference to an object containing modules.

                ///////// FIGURE OUT WHEN MORE MODULES HAS MORE THAN ONE MODULE
                {
                  './src/todos.js': function(module, __webpack_exports__, __webpack_require__) {...}
                }
              */
/******/
/******/
/******/      // add "moreModules" to the modules object,
/******/      // then flag all "chunkIds" as loaded and fire callback
/******/      var moduleId, chunkId, i = 0, resolves = [];
/******/      for(;i < chunkIds.length; i++) {
/******/        chunkId = chunkIds[i];

/******/        if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
                  /* Check for property of chunkId and if it's truthy */
/******/          resolves.push(installedChunks[chunkId][0]);
                  /* pushes a Promise constructor's resolve callback into the `resolves` array */
/******/        }
/******/        installedChunks[chunkId] = 0;
                /*
                  mutates installedChunks object and sets the chunkId to 0. If this function is called again,
                  it won't try to load the same module twice since now the `installedChunks[chunkId]` condition
                  will fail.
                */
/******/      }
/******/      for(moduleId in moreModules) {
                /* iterate over moreModules and if the moduleId exists in it, add its value to `modules`
/******/        if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/          modules[moduleId] = moreModules[moduleId];
/******/        }
/******/      }
/******/      if(parentJsonpFunction) parentJsonpFunction(data);
              /*
                At runtime, parentJsonpFunction is set to oldJsonpFunction, which is simply [].push
                bound to the jsonpArray reference. What that means is if this function exists, push
                data into the jsonpArray.
              */
/******/
/******/      while(resolves.length) {
/******/        resolves.shift()();
                /*
                  `resolves` queue members are shifted and then called
                */
/******/      }
/******/
/******/    };
            /* End of webpackJsonpCallback */
/******/
/******/
/******/    // The module cache
/******/    var installedModules = {};
/******/
/******/    // object to store loaded and loading chunks
/******/    // undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/    // Promise = chunk loading, 0 = chunk loaded
/******/    var installedChunks = {
/******/      "main": 0
/******/    };
/******/
/******/
/******/
/******/    // script path function
/******/    function jsonpScriptSrc(chunkId) {
/******/      return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/    }
/******/
/******/    // The require function
/******/    function __webpack_require__(moduleId) {
/******/
/******/      // Check if module is in cache
/******/      if(installedModules[moduleId]) {
/******/        return installedModules[moduleId].exports;
/******/      }
/******/      // Create a new module (and put it into the cache)
/******/      var module = installedModules[moduleId] = {
/******/        i: moduleId,
/******/        l: false,
/******/        exports: {}
/******/      };
/******/
/******/      // Execute the module function
/******/      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/      // Flag the module as loaded
/******/      module.l = true;
/******/
/******/      // Return the exports of the module
/******/      return module.exports;
/******/    }
/******/
/******/    // This file contains only the entry chunk.
/******/    // The chunk loading function for additional chunks
/******/    __webpack_require__.e = function requireEnsure(chunkId) {
/******/      var promises = [];
/******/
/******/
/******/      // JSONP chunk loading for javascript
/******/
/******/      var installedChunkData = installedChunks[chunkId];
/******/      if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/        // a Promise means "currently loading".
/******/        if(installedChunkData) {
/******/          promises.push(installedChunkData[2]);
/******/        } else {
/******/          // setup Promise in chunk cache
/******/          var promise = new Promise(function(resolve, reject) {
/******/            installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/          });
/******/          promises.push(installedChunkData[2] = promise);
/******/
/******/          // start chunk loading
/******/          var script = document.createElement('script');
/******/          var onScriptComplete;
/******/
/******/          script.charset = 'utf-8';
/******/          script.timeout = 120;
/******/          if (__webpack_require__.nc) {
/******/            script.setAttribute("nonce", __webpack_require__.nc);
/******/          }
/******/          script.src = jsonpScriptSrc(chunkId);
/******/
/******/          // create error before stack unwound to get useful stacktrace later
/******/          var error = new Error();
/******/          onScriptComplete = function (event) {
/******/            // avoid mem leaks in IE.
/******/            script.onerror = script.onload = null;
/******/            clearTimeout(timeout);
/******/            var chunk = installedChunks[chunkId];
/******/            if(chunk !== 0) {
/******/              if(chunk) {
/******/                var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/                var realSrc = event && event.target && event.target.src;
/******/                error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/                error.name = 'ChunkLoadError';
/******/                error.type = errorType;
/******/                error.request = realSrc;
/******/                chunk[1](error);
/******/              }
/******/              installedChunks[chunkId] = undefined;
/******/            }
/******/          };
/******/          var timeout = setTimeout(function(){
/******/            onScriptComplete({ type: 'timeout', target: script });
/******/          }, 120000);
/******/          script.onerror = script.onload = onScriptComplete;
/******/          document.head.appendChild(script);
/******/        }
/******/      }
/******/      return Promise.all(promises);
/******/    };
/******/
/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;
            /* Self-explanatory */

/******/
/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;
/******/
/******/    // define getter function for harmony exports
/******/    __webpack_require__.d = function(exports, name, getter) {
/******/      if(!__webpack_require__.o(exports, name)) {
/******/        Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/      }
/******/    };
/******/
/******/    // define __esModule on exports
/******/    __webpack_require__.r = function(exports) {
/******/      if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/      }
/******/      Object.defineProperty(exports, '__esModule', { value: true });
/******/    };
/******/
/******/    // create a fake namespace object
/******/    // mode & 1: value is a module id, require it
/******/    // mode & 2: merge all properties of value into the ns
/******/    // mode & 4: return value when already ns object
/******/    // mode & 8|1: behave like require
/******/    __webpack_require__.t = function(value, mode) {
/******/      if(mode & 1) value = __webpack_require__(value);
/******/      if(mode & 8) return value;
/******/      if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/      var ns = Object.create(null);
/******/      __webpack_require__.r(ns);
/******/      Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/      if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/      return ns;
/******/    };
/******/
/******/    // getDefaultExport function for compatibility with non-harmony modules
/******/    __webpack_require__.n = function(module) {
/******/      var getter = module && module.__esModule ?
/******/        function getDefault() { return module['default']; } :
/******/        function getModuleExports() { return module; };
/******/      __webpack_require__.d(getter, 'a', getter);
/******/      return getter;
/******/    };
/******/
/******/    // Object.prototype.hasOwnProperty.call
/******/    __webpack_require__.o() = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /*
              A wrapper function for hasOwnProperty. This is used in
              `__webpack_require__.d` because <>???????>

            */
/******/
/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";
            /* Need to figure out how this is altered */
/******/
/******/    // on error function for async loading
/******/    __webpack_require__.oe = function(err) { console.error(err); throw err; };
            /*
              This is unused in output generatd by this project.  Should figure out when it is used.

              It is used in a catch block
            */
/******/


            /* Utilities for dynamically importing modules */
/******/    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
            /*
              Create a global reference to jsonpArray
              Why create a global ref now?
            */
/******/    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
            /*
              array.push is bound to oldJsonpFunction
            */
/******/    jsonpArray.push = webpackJsonpCallback;
            /*
              jsonparray's prototype.push is overwritten in favor of webacpkJsonpCallback,
              the function declared at the top of the bundle.

              Why overwrite push?  It seems like this could be a new function on the prototype,
              or a completely external pure function.
            */

/******/    jsonpArray = jsonpArray.slice();
            /*
              create a copy of the jsonpArray. This reference is still active because the
              variable is declared using var.

              window.webpackJsonpArray === jsonpArray

              If it were done with let (let jsonpArray = window['webpackJsonpArray']...), it'd be
              window.webpackJsonpArray !== jsonpArray
            */
/******/    for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
            /*
              This is where webpackJsonpCallback is finally used.  Each member of the jsonpArray is
                1. passed into webpackJsonpCallback
                2. checks to see if chunkId (member data [0]) exists in installedChunks and that it's truthy
                3. pushes the installedChunk's `resolve` function into the `resolves` array
                  - This comes from __webpack_require__.e,
                    var promise = new Promise(function(resolve, reject) {
                      installedChunkData = installedChunks[chunkId] = [resolve, reject];
                    });
                  - Each time an `import()` is called, it'll run through __webpack_require__.e.
                    - __webpack_require__.e first checks to see if the installedChunks[chunkId] value is 0.
                      - if it is, it will bypass executing any logic that re-"fetches" the module's code
                4. mutates the installedChunks object and sets the chunkId to 0.
                5. adds any included modules to the `modules` object in scope (passed in as an
                   argument to the encapsulating function)
                6. pushes the data into the jsonpArray via the parentJsonpFunction ([].push bound to jsonpArray)
                   if the parentJsonpFunction exists
                7. removes each item from the `resolves` queue and calls it
            */

/******/    var parentJsonpFunction = oldJsonpFunction;
            /*
              parentJsonpFunction is set to oldJsonpFunction, which at this time is [].push. This is used
              to add loaded modules to the jsonpArray (also window.webpackJsonpArray)
            */
/******/
/******/
/******/    // Load entry module and return exports
/******/    return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/  })
/************************************************************************/
/******/  ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nconst getTodoHandlers = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./todo */ \"./src/todo.js\"));\n\n(todos => {\n  const list = document.createElement('ul');\n  const listItemsFragment = document.createDocumentFragment();\n\n  todos.forEach(todo => {\n    const li = document.createElement('li');\n\n    li.textContent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toUppercase\"])(todo);\n    li.addEventListener('click', e => {\n      getTodoHandlers().then(m => {\n        m.default.complete(e.target);\n      });\n    });\n    listItemsFragment.appendChild(li);\n  });\n  \n  list.appendChild(listItemsFragment);\n\n  document.getElementsByTagName('body')[0].appendChild(list);\n})([\n  'Create article about webpack bundles',\n  'Create article about hot module replacement'\n]);\n\n//# sourceURL=webpack:///./src/index.js?");

    /***/ }),

    /***/ "./src/utils.js":
    /*!**********************!*\
      !*** ./src/utils.js ***!
      \**********************/
    /*! exports provided: toUppercase */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toUppercase\", function() { return toUppercase; });\nconst toUppercase = string => string.toUpperCase();\n\n//# sourceURL=webpack:///./src/utils.js?");

    /***/ })

    /******/  });