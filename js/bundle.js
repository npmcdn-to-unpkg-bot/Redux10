/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/index.js */1);


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _redux = __webpack_require__(/*! redux */ 12);
	
	var _App = __webpack_require__(/*! ./App */ 28);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reducers = __webpack_require__(/*! ./reducers */ 47);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*jshint esversion:6 */
	var store = (0, _redux.createStore)(_reducers2.default);
	//For debugging in chrome with redux tools.
	//let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_App2.default, null)
	), document.getElementById('container'));

/***/ },
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/*!************************************!*\
  !*** ./~/react-redux/lib/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;
	
	var _Provider = __webpack_require__(/*! ./components/Provider */ 5);
	
	var _Provider2 = _interopRequireDefault(_Provider);
	
	var _connect = __webpack_require__(/*! ./components/connect */ 9);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 5 */
/*!**************************************************!*\
  !*** ./~/react-redux/lib/components/Provider.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = undefined;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _storeShape = __webpack_require__(/*! ../utils/storeShape */ 7);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;
	
	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  Provider.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react.Children.only(children);
	  };
	
	  return Provider;
	}(_react.Component);
	
	exports["default"] = Provider;
	
	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}
	
	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 6 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    } else {
	        return cachedSetTimeout.call(null, fun, 0);
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        clearTimeout(marker);
	    } else {
	        cachedClearTimeout.call(null, marker);
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/*!***********************************************!*\
  !*** ./~/react-redux/lib/utils/storeShape.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 8 */
/*!********************************************!*\
  !*** ./~/react-redux/lib/utils/warning.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 9 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/components/connect.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports["default"] = connect;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _storeShape = __webpack_require__(/*! ../utils/storeShape */ 7);
	
	var _storeShape2 = _interopRequireDefault(_storeShape);
	
	var _shallowEqual = __webpack_require__(/*! ../utils/shallowEqual */ 10);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _wrapActionCreators = __webpack_require__(/*! ../utils/wrapActionCreators */ 11);
	
	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);
	
	var _warning = __webpack_require__(/*! ../utils/warning */ 8);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _hoistNonReactStatics = __webpack_require__(/*! hoist-non-react-statics */ 26);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(/*! invariant */ 27);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;
	
	  var mapDispatch = undefined;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }
	
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	
	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }
	
	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }
	
	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	        _this.version = version;
	        _this.store = props.store || context.store;
	
	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));
	
	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }
	
	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }
	
	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };
	
	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';
	
	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };
	
	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }
	
	        var dispatch = store.dispatch;
	
	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };
	
	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';
	
	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;
	
	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }
	
	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };
	
	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }
	
	        this.mergedProps = nextMergedProps;
	        return true;
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };
	
	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }
	
	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }
	
	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged;
	        var hasStoreStateChanged = this.hasStoreStateChanged;
	        var haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated;
	        var statePropsPrecalculationError = this.statePropsPrecalculationError;
	        var renderedElement = this.renderedElement;
	
	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	
	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }
	
	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }
	
	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }
	
	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }
	
	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }
	
	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }
	
	        return this.renderedElement;
	      };
	
	      return Connect;
	    }(_react.Component);
	
	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }
	
	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 10 */
/*!*************************************************!*\
  !*** ./~/react-redux/lib/utils/shallowEqual.js ***!
  \*************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 11 */
/*!*******************************************************!*\
  !*** ./~/react-redux/lib/utils/wrapActionCreators.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = wrapActionCreators;
	
	var _redux = __webpack_require__(/*! redux */ 12);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 12 */
/*!******************************!*\
  !*** ./~/redux/lib/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 13);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _combineReducers = __webpack_require__(/*! ./combineReducers */ 21);
	
	var _combineReducers2 = _interopRequireDefault(_combineReducers);
	
	var _bindActionCreators = __webpack_require__(/*! ./bindActionCreators */ 23);
	
	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);
	
	var _applyMiddleware = __webpack_require__(/*! ./applyMiddleware */ 24);
	
	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);
	
	var _compose = __webpack_require__(/*! ./compose */ 25);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 22);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}
	
	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}
	
	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 13 */
/*!************************************!*\
  !*** ./~/redux/lib/createStore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(/*! symbol-observable */ 19);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  var _ref2;
	
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, initialState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2["default"]] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
	}

/***/ },
/* 14 */
/*!***********************************!*\
  !*** ./~/lodash/isPlainObject.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(/*! ./_getPrototype */ 15),
	    isHostObject = __webpack_require__(/*! ./_isHostObject */ 17),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 18);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 15 */
/*!***********************************!*\
  !*** ./~/lodash/_getPrototype.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 16);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);
	
	module.exports = getPrototype;


/***/ },
/* 16 */
/*!******************************!*\
  !*** ./~/lodash/_overArg.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 17 */
/*!***********************************!*\
  !*** ./~/lodash/_isHostObject.js ***!
  \***********************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 18 */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 19 */
/*!**************************************!*\
  !*** ./~/symbol-observable/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';
	
	module.exports = __webpack_require__(/*! ./ponyfill */ 20)(global || window || this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/*!*****************************************!*\
  !*** ./~/symbol-observable/ponyfill.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function symbolObservablePonyfill(root) {
		var result;
		var Symbol = root.Symbol;
	
		if (typeof Symbol === 'function') {
			if (Symbol.observable) {
				result = Symbol.observable;
			} else {
				result = Symbol('observable');
				Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};


/***/ },
/* 21 */
/*!****************************************!*\
  !*** ./~/redux/lib/combineReducers.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports["default"] = combineReducers;
	
	var _createStore = __webpack_require__(/*! ./createStore */ 13);
	
	var _isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ 14);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _warning = __webpack_require__(/*! ./utils/warning */ 22);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);
	
	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }
	
	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 22 */
/*!**************************************!*\
  !*** ./~/redux/lib/utils/warning.js ***!
  \**************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 23 */
/*!*******************************************!*\
  !*** ./~/redux/lib/bindActionCreators.js ***!
  \*******************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 24 */
/*!****************************************!*\
  !*** ./~/redux/lib/applyMiddleware.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports["default"] = applyMiddleware;
	
	var _compose = __webpack_require__(/*! ./compose */ 25);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 25 */
/*!********************************!*\
  !*** ./~/redux/lib/compose.js ***!
  \********************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  } else {
	    var _ret = function () {
	      var last = funcs[funcs.length - 1];
	      var rest = funcs.slice(0, -1);
	      return {
	        v: function v() {
	          return rest.reduceRight(function (composed, f) {
	            return f(composed);
	          }, last.apply(undefined, arguments));
	        }
	      };
	    }();
	
	    if (typeof _ret === "object") return _ret.v;
	  }
	}

/***/ },
/* 26 */
/*!********************************************!*\
  !*** ./~/hoist-non-react-statics/index.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 27 */
/*!********************************!*\
  !*** ./~/invariant/browser.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 6)))

/***/ },
/* 28 */
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _root = __webpack_require__(/*! ./components/root */ 29);
	
	var _root2 = _interopRequireDefault(_root);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_root2.default, null);
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	exports.default = App;

/***/ },
/* 29 */
/*!********************************!*\
  !*** ./src/components/root.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _steps = __webpack_require__(/*! ../actions/steps */ 30);
	
	var actions = _interopRequireWildcard(_steps);
	
	var _navmenu = __webpack_require__(/*! ./navmenu */ 31);
	
	var _navmenu2 = _interopRequireDefault(_navmenu);
	
	var _stephead = __webpack_require__(/*! ./stephead */ 34);
	
	var _stephead2 = _interopRequireDefault(_stephead);
	
	var _stepbody = __webpack_require__(/*! ./stepbody */ 35);
	
	var _stepbody2 = _interopRequireDefault(_stepbody);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var Root = function (_Component) {
	  _inherits(Root, _Component);
	
	  function Root(props) {
	    _classCallCheck(this, Root);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Root).call(this, props));
	  }
	
	  _createClass(Root, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Redux, the basics in 10 steps'
	          ),
	          _react2.default.createElement(_navmenu2.default, null),
	          _react2.default.createElement(_stephead2.default, null)
	        ),
	        _react2.default.createElement(_stepbody2.default, null)
	      );
	    }
	  }]);
	
	  return Root;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return { step: state.step };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Root);

/***/ },
/* 30 */
/*!******************************!*\
  !*** ./src/actions/steps.js ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.doChangeStep = doChangeStep;
	var CHANGE_STEP = exports.CHANGE_STEP = 'CHANGE_STEP';
	
	function doChangeStep(val) {
	    return {
	        type: CHANGE_STEP,
	        cargo: val
	    };
	}

/***/ },
/* 31 */
/*!***********************************!*\
  !*** ./src/components/navmenu.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _steps = __webpack_require__(/*! ../actions/steps */ 30);
	
	var actions = _interopRequireWildcard(_steps);
	
	var _navmenunormal = __webpack_require__(/*! ./navmenunormal */ 32);
	
	var _navmenunormal2 = _interopRequireDefault(_navmenunormal);
	
	var _navmenucurrent = __webpack_require__(/*! ./navmenucurrent */ 33);
	
	var _navmenucurrent2 = _interopRequireDefault(_navmenucurrent);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var NavMenu = function (_Component) {
	  _inherits(NavMenu, _Component);
	
	  function NavMenu(props) {
	    _classCallCheck(this, NavMenu);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavMenu).call(this, props));
	
	    _this.getMenu = function () {
	      return _this._getMenu();
	    };
	    _this.stripPrefix = function (a, b) {
	      return _this._stripPrefix(a, b);
	    };
	    _this.handleMenuClick = function (e) {
	      return _this._handleMenuClick(e);
	    };
	
	    return _this;
	  }
	
	  _createClass(NavMenu, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'btn-group', role: 'group', 'aria-label': '...' },
	        this.getMenu()
	      );
	    }
	  }, {
	    key: '_stripPrefix',
	    value: function _stripPrefix(a, b) {
	      return a.substring(b.length, a.length);
	    }
	  }, {
	    key: '_handleMenuClick',
	    value: function _handleMenuClick(e) {
	      e.preventDefault();
	      var a = this.stripPrefix(e.target.id, this.props.step.anchorPrefix) * 1;
	      this.props.doChangeStep(a);
	    }
	  }, {
	    key: '_getMenu',
	    value: function _getMenu() {
	      var i = 0;
	      var l = this.props.step.stepLimit;
	      var rows = [];
	
	      for (i = 0; i < l; i++) {
	        switch (i) {
	          case this.props.step.currentStep:
	            rows.push(_react2.default.createElement(_navmenucurrent2.default, { key: i, stepno: i }));
	            break;
	          default:
	            rows.push(_react2.default.createElement(_navmenunormal2.default, { key: i, stepno: i, handleClick: this.handleMenuClick, prefix: this.props.step.anchorPrefix }));
	        }
	      }
	
	      return _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	          'tbody',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            rows
	          )
	        )
	      );
	    }
	  }]);
	
	  return NavMenu;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return { step: state.step };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(NavMenu);

/***/ },
/* 32 */
/*!*****************************************!*\
  !*** ./src/components/navmenunormal.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavMenuNormal = function NavMenuNormal(props) {
	  return _react2.default.createElement(
	    "td",
	    null,
	    _react2.default.createElement(
	      "a",
	      { href: "javascript:void(0)" },
	      _react2.default.createElement(
	        "button",
	        { type: "button", className: "btn btn-default",
	          onClick: props.handleClick,
	          id: props.prefix + props.stepno },
	        props.stepno
	      )
	    )
	  );
	};
	
	exports.default = NavMenuNormal;

/***/ },
/* 33 */
/*!******************************************!*\
  !*** ./src/components/navmenucurrent.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavMenuCurrent = function NavMenuCurrent(props) {
	  return _react2.default.createElement(
	    "td",
	    null,
	    _react2.default.createElement(
	      "a",
	      { href: "javascript:void(0)" },
	      _react2.default.createElement(
	        "button",
	        { type: "button", className: "btn btn-primary",
	          onClick: props.handleClick,
	          id: props.prefix + props.stepno },
	        props.stepno
	      )
	    )
	  );
	};
	
	exports.default = NavMenuCurrent;

/***/ },
/* 34 */
/*!************************************!*\
  !*** ./src/components/stephead.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _steps = __webpack_require__(/*! ../actions/steps */ 30);
	
	var actions = _interopRequireWildcard(_steps);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var StepHead = function (_Component) {
	  _inherits(StepHead, _Component);
	
	  function StepHead(props) {
	    _classCallCheck(this, StepHead);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StepHead).call(this, props));
	
	    _this.getStep = function () {
	      return _this._getStep();
	    };
	    return _this;
	  }
	
	  _createClass(StepHead, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h4',
	          null,
	          'Step ',
	          this.props.step.currentStep,
	          ': ',
	          this.getStep()
	        )
	      );
	    }
	  }, {
	    key: '_getStep',
	    value: function _getStep() {
	      switch (this.props.step.currentStep) {
	        case 1:
	          return 'The One direction of flow';
	        case 2:
	          return 'Libraries used and code location';
	        case 3:
	          return 'The 3 Principles of Redux';
	        case 4:
	          return 'React Component';
	        case 5:
	          return 'Action/ Action Creator';
	        case 6:
	          return 'The Reducer';
	        case 7:
	          return 'The Store';
	        case 8:
	          return 'Middleware';
	        case 9:
	          return 'All';
	        case 10:
	          return 'Further Reading';
	        default:
	          return 'Postage Stamp Overview';
	      }
	    }
	  }]);
	
	  return StepHead;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return { step: state.step };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(StepHead);

/***/ },
/* 35 */
/*!************************************!*\
  !*** ./src/components/stepbody.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 4);
	
	var _steps = __webpack_require__(/*! ../actions/steps */ 30);
	
	var actions = _interopRequireWildcard(_steps);
	
	var _step = __webpack_require__(/*! ./step0 */ 36);
	
	var _step2 = _interopRequireDefault(_step);
	
	var _step3 = __webpack_require__(/*! ./step1 */ 37);
	
	var _step4 = _interopRequireDefault(_step3);
	
	var _step5 = __webpack_require__(/*! ./step2 */ 38);
	
	var _step6 = _interopRequireDefault(_step5);
	
	var _step7 = __webpack_require__(/*! ./step3 */ 39);
	
	var _step8 = _interopRequireDefault(_step7);
	
	var _step9 = __webpack_require__(/*! ./step4 */ 40);
	
	var _step10 = _interopRequireDefault(_step9);
	
	var _step11 = __webpack_require__(/*! ./step5 */ 41);
	
	var _step12 = _interopRequireDefault(_step11);
	
	var _step13 = __webpack_require__(/*! ./step6 */ 42);
	
	var _step14 = _interopRequireDefault(_step13);
	
	var _step15 = __webpack_require__(/*! ./step7 */ 43);
	
	var _step16 = _interopRequireDefault(_step15);
	
	var _step17 = __webpack_require__(/*! ./step8 */ 44);
	
	var _step18 = _interopRequireDefault(_step17);
	
	var _step19 = __webpack_require__(/*! ./step9 */ 45);
	
	var _step20 = _interopRequireDefault(_step19);
	
	var _step21 = __webpack_require__(/*! ./step10 */ 46);
	
	var _step22 = _interopRequireDefault(_step21);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*jshint esversion:6 */
	
	
	var StepBody = function (_Component) {
	  _inherits(StepBody, _Component);
	
	  function StepBody(props) {
	    _classCallCheck(this, StepBody);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StepBody).call(this, props));
	
	    _this.getStep = function () {
	      return _this._getStep();
	    };
	    return _this;
	  }
	
	  _createClass(StepBody, [{
	    key: 'render',
	    value: function render() {
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.getStep()
	      );
	    }
	  }, {
	    key: '_getStep',
	    value: function _getStep() {
	      switch (this.props.step.currentStep) {
	        case 1:
	          return _react2.default.createElement(_step4.default, null);
	        case 2:
	          return _react2.default.createElement(_step6.default, null);
	        case 3:
	          return _react2.default.createElement(_step8.default, null);
	        case 4:
	          return _react2.default.createElement(_step10.default, null);
	        case 5:
	          return _react2.default.createElement(_step12.default, null);
	        case 6:
	          return _react2.default.createElement(_step14.default, null);
	        case 7:
	          return _react2.default.createElement(_step16.default, null);
	        case 8:
	          return _react2.default.createElement(_step18.default, null);
	        case 9:
	          return _react2.default.createElement(_step20.default, null);
	        case 10:
	          return _react2.default.createElement(_step22.default, null);
	        default:
	          return _react2.default.createElement(_step2.default, null);
	      }
	    }
	  }]);
	
	  return StepBody;
	}(_react.Component);
	
	function mapStateToProps(state) {
	  return { step: state.step };
	}
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(StepBody);

/***/ },
/* 36 */
/*!*********************************!*\
  !*** ./src/components/step0.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	
	var StepZero = function StepZero(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' Component is subscribed to Store to receive updates'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          'Plain JavaScript Object. ',
	          _react2.default.createElement('br', null),
	          ' Has minimum 2 name value pairs, 1st must be type.'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' A pure function. ',
	          _react2.default.createElement('br', null),
	          ' Takes in state + action. Returns new state'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          'JavaScript Object',
	          _react2.default.createElement('br', null),
	          ' Holds state'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' Component is updated'
	        )
	      )
	    )
	  );
	};
	
	exports.default = StepZero;

/***/ },
/* 37 */
/*!*********************************!*\
  !*** ./src/components/step1.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	
	var StepOne = function StepOne(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          'Event'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          'Dispatch action'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          'New State'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          'State update'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      )
	    )
	  );
	};
	
	exports.default = StepOne;

/***/ },
/* 38 */
/*!*********************************!*\
  !*** ./src/components/step2.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	
	var StepTwo = function StepTwo(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' location: src/components/root.js,navmenu.js,stephead.js,stepbody.js ',
	          _react2.default.createElement('br', null),
	          ' library: react, react-redux'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          'location: src/actions/steps.js ',
	          _react2.default.createElement('br', null),
	          ' library: N/A as it is a plain JavaScript Object'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' location: src/reducers/index.js ',
	          _react2.default.createElement('br', null),
	          ' library: redux'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' location: src/index.js ',
	          _react2.default.createElement('br', null),
	          ' library: react, react-dom, redux, react-redux'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' location: src/components/root.js,navmenu.js,stephead.js,stepbody.js ',
	          _react2.default.createElement('br', null),
	          ' library: react, react-redux'
	        )
	      )
	    )
	  );
	};
	
	exports.default = StepTwo;

/***/ },
/* 39 */
/*!*********************************!*\
  !*** ./src/components/step3.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	
	var StepThree = function StepThree(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          '2nd Principle of Redux: State is read-only',
	          _react2.default.createElement('br', null),
	          'Dispatch an action for change. Example: type:\'INCREMENT\', cargo: 1'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' 3rd Principle of Redux: Changes are made with pure functions',
	          _react2.default.createElement('br', null),
	          'State of the app is written as a pure function called the Reducer, which returns an object (data).'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' 1st Principle of Redux: Single source of truth',
	          _react2.default.createElement('br', null),
	          'Everything that changes in your application including data and UI state is contained in a single object'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      )
	    )
	  );
	};
	
	exports.default = StepThree;

/***/ },
/* 40 */
/*!*********************************!*\
  !*** ./src/components/step4.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	var stFont30 = { fontSize: '30px' };
	var stAlignTop = { verticalAlign: 'top' };
	
	var StepFour = function StepFour(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { style: stAlignTop },
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          _react2.default.createElement(
	            'table',
	            null,
	            _react2.default.createElement(
	              'tbody',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'Example React.js Component.'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'location: src/components/root.js'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'libraries: react, react-redux'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'At the beginning of the component file will be the import of the libraries.'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'pre',
	                    null,
	                    'import React, { Component } from \'react\';\nimport { connect } from \'react-redux\';\nimport * as actions from \'../actions/steps\';'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'Please note there are several different ways to include libraries, this can be import or require.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null)
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'Then there is the component, of which there are several ways to declare the component.'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'pre',
	                    null,
	                    'class Root extends Component {\n\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <div>\n        <div>\n          <h1>Redux, the basics in 10 steps</h1>\n          <NavMenu />\n          <StepHead />\n        </div>\n        <StepBody />\n      </div>\n    );\n  }\n}'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'Below the component is where the connection between the React.js Component and the Redux store happens.'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'pre',
	                    null,
	                    'function mapStateToProps(state){\n  return { step: state.step };\n}\n\nexport default connect(mapStateToProps, actions)(Root); '
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'The connect function binds React Component to Redux, the state is the data into the component via props and the action is change out of the component. The example below breaks down what is happening.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null)
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'table',
	                    null,
	                    _react2.default.createElement(
	                      'tbody',
	                      null,
	                      _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'text-center' },
	                            'IN'
	                          )
	                        ),
	                        _react2.default.createElement('td', null)
	                      ),
	                      _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'text-center' },
	                            'State'
	                          )
	                        ),
	                        _react2.default.createElement('td', null)
	                      ),
	                      _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'text-center' },
	                            _react2.default.createElement('i', { style: stFont30, className: 'fa fa-long-arrow-down' })
	                          )
	                        ),
	                        _react2.default.createElement('td', null)
	                      ),
	                      _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          'connect( '
	                        ),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          ' mapStateToProps,'
	                        ),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          '  mapDispatchToProps )'
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'text-center' },
	                            _react2.default.createElement('i', { style: stFont30, className: 'fa fa-long-arrow-down' })
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'text-center' },
	                            'Action'
	                          )
	                        )
	                      ),
	                      _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement('td', null),
	                        _react2.default.createElement(
	                          'td',
	                          null,
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'text-center' },
	                            'OUT'
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = StepFour;

/***/ },
/* 41 */
/*!*********************************!*\
  !*** ./src/components/step5.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	var stFont30 = { fontSize: '30px' };
	var stAlignTop = { verticalAlign: 'top' };
	
	var StepFive = function StepFive(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { style: stAlignTop },
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          _react2.default.createElement(
	            'table',
	            null,
	            _react2.default.createElement(
	              'tbody',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'Example Action'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'location: src/actions/steps.js'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'In Redux there is Action and Action Creator.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  'Action is the JavaScript object.',
	                  _react2.default.createElement('br', null),
	                  'Action Creator is the wrapper function that returns the Action.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  'This allows the Action Creator to be called from the Event fired on the React Component. An example of this is an OnClick event, where an user clicks a button and an action is dispatched.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  'Dispatch is a method of the Store. (store.dispatch). However in the react-redux library the wiring of store.dispatch is handled for you in the connect function in the react component.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  'This is why the Action Creator is passed into mapDispatchToProps. The Action Creator returns the Action which is dispatched to the Reducer.'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'pre',
	                    null,
	                    'export const CHANGE_STEP = \'CHANGE_STEP\';\n\nexport function doChangeStep(val) {\n    return {\n        type: CHANGE_STEP,\n        cargo: val\n    };\n}'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'In the above example, doChangeStep is the Action Creator and the returned object is the Action.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  'There can be many actions, 1 for each event on the React Component',
	                  _react2.default.createElement('br', null)
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'pre',
	                    null,
	                    '//ACTION\nreturn {\n    type: CHANGE_STEP,\n    cargo: val\n};'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'Note the construct of the Action. It is a plain JavaScript object consisting of 2 name value pairs. The first name is always type. This is defacto. The second name can change to whatever you like, though some Redux courses recomend payload.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  'The value of type is always a string. This can be within single quotes \'\' or as a constant (CHANGE_STEP). The convention of the string is that it is always in uppercase.'
	                )
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = StepFive;

/***/ },
/* 42 */
/*!*********************************!*\
  !*** ./src/components/step6.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	var stFont30 = { fontSize: '30px' };
	var stAlignTop = { verticalAlign: 'top' };
	var stTopMarge = { verticalAlign: 'top', padding: '5px 10px 5px 10px' };
	
	var StepSix = function StepSix(props) {
	    return _react2.default.createElement(
	        'table',
	        null,
	        _react2.default.createElement(
	            'tbody',
	            null,
	            _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    { style: stAlignTop },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'text-center alert alert-success', style: stMarg },
	                        'React'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'text-center' },
	                        _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	                        'Action'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'text-center' },
	                        _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	                        'Reducer'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'text-center' },
	                        _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'td',
	                    { style: stTopMarge },
	                    _react2.default.createElement(
	                        'table',
	                        null,
	                        _react2.default.createElement(
	                            'tbody',
	                            null,
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    'Example Reducer'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    'location: src/reducers/index.js'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    'library: redux'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement('br', null),
	                                    'The Reducer is a function that receives state and action then returns the new state. Basically it takes the state, the action to be made to the state and then returns the new changed state. ',
	                                    _react2.default.createElement('br', null),
	                                    _react2.default.createElement('br', null),
	                                    'Redux is an implementation of the Flux methodology. Where Redux differs from other Flux libraries is it only has 1 store. The other libraries have many stores. What Redux does differently is it has 1 store but can have many reducers. (Think of it 1 pie, many slices of pie. Where each slice is a Reducer and the pie is the store.). Each reducer function executes actions on a particular part of state. If your app is small you are likely to only have 1 reducer, but as it grows in scale or complexity you are likely to have many reducers.'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement(
	                                        'pre',
	                                        null,
	                                        'import { combineReducers } from \'redux\';\nimport steps from \'./reducer_steps\';\n\nconst rootReducer = combineReducers({\n  step: steps\n});\n\nexport default rootReducer;'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    'Note in the example above the Reducer is called step and contained in the reducer_steps.js file. The rootReducer combines 1 or more reducers together to act as 1. However when passed through to state as props, the step reducer will be accessed as props.step.'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement(
	                                        'pre',
	                                        null,
	                                        '//reducer_steps.js\nimport {\n    CHANGE_STEP\n} from \'../actions/steps\';\n\n\nconst INITIAL_STATE = {\n    currentStep: 0,\n    stepLimit: 11,\n    anchorPrefix: \'atat_\'\n};\n\nexport default function(state = INITIAL_STATE, action) {\n    if (typeof state === undefined) {\n        return INITIAL_STATE;\n    }\n\n    switch (action.type) {\n        case CHANGE_STEP:\n            return Object.assign({}, state, {\n                currentStep: action.cargo\n            });\n        default:\n            return state;\n    }\n    return state;\n}'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'tr',
	                                null,
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    'In the example above the Reducer imports the action type constant, CHANGE_STEP. It then defines the initial state. This is a plain javascript object with name value pairs. The initial state can be set or, alternatively a previous state can be set. This is will be either from local storage or from a database/datastore on the server.',
	                                    _react2.default.createElement('br', null),
	                                    'The default function is simply a switch statement. It receives the action and the payload changes.',
	                                    _react2.default.createElement('br', null),
	                                    _react2.default.createElement('br', null),
	                                    'Notice the return from the switch statement is either the current state - if no action defined or a new state. The new state is an object assign - a new object with the change made to the state.',
	                                    _react2.default.createElement('br', null),
	                                    'This allows the state to be stored as an array of states allowing for the actiona and state to be stored.',
	                                    _react2.default.createElement('br', null),
	                                    'This facilitates having front end debugging capabilities as each action and state can be stored and sent back to the server.'
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        )
	    );
	};
	
	exports.default = StepSix;

/***/ },
/* 43 */
/*!*********************************!*\
  !*** ./src/components/step7.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	var stFont30 = { fontSize: '30px' };
	var stAlignTop = { verticalAlign: 'top' };
	var stTopMarge = { verticalAlign: 'top', padding: '5px 10px 5px 10px' };
	
	var StepSeven = function StepSeven(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { style: stAlignTop },
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTopMarge },
	          _react2.default.createElement(
	            'table',
	            null,
	            _react2.default.createElement(
	              'tbody',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'Example Store'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'location: src/index.js'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'library: react, react-dom, react-redux, redux'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'The Store is at the parent level where the ReactDOM element is assigned the the HTML. The Store is a property of the Provider from react-redux library. This automatically connects React and Redux. What you are not seeing is the Store, the state being connected to the app. What is also hidden is that the React component subscribes to the store to receive new updates. When an event is fired from the component and an action is dispatched to the reducer. The reducer then makes the change and updates the Store with the new state. The store then publishes the new states to all the subscribed components. So the short version is the Store acts as a publish and subscribe system. Notice in the above example that the reducer is a parameter of the createStore function.'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'pre',
	                    null,
	                    'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport { Provider } from \'react-redux\';\nimport { createStore } from \'redux\';\n\nimport App from \'./App\';\nimport reducer from \'./reducers\';\n\nlet store = createStore(reducer);\n//For debugging in chrome with redux tools.\n//let store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById(\'container\')\n);'
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = StepSeven;

/***/ },
/* 44 */
/*!*********************************!*\
  !*** ./src/components/step8.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	var stFont30 = { fontSize: '30px' };
	var stAlignTop = { verticalAlign: 'top' };
	var stTopMarge = { verticalAlign: 'top', padding: '5px 10px 5px 10px' };
	
	var StepEight = function StepEight(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { style: stAlignTop },
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-warning', style: stMarg },
	            'Middleware'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTopMarge },
	          _react2.default.createElement(
	            'table',
	            null,
	            _react2.default.createElement(
	              'tbody',
	              null,
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  'One more thing: Middleware'
	                )
	              ),
	              _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement('br', null),
	                  'Middleware is an advanced part of Redux not covered in these basic steps.',
	                  _react2.default.createElement('br', null),
	                  'What Middleware is, it is the ability to intercept Actions before they reach the Reducer.',
	                  _react2.default.createElement('br', null),
	                  'By interecpting the actions Middleware has the ability to stop mulitple clicks from being actioned, request information from the server via Asynchronous calls. Think of Middleware as the ability to act as a gateway, either ignoring an action altogether or perfrom some other action. A basic Middleware would be to fetch new data from the server. the action would fired, be stopped by the Middleware, and then once the reposnse is received sent on to the reducer. As Middleware is beyond this quick intro to Redux there are lots of other resources on it to research.',
	                  _react2.default.createElement('br', null),
	                  _react2.default.createElement('br', null),
	                  'If you are familiar with Express.js Middleware then you grasp how Redux Middleware works.'
	                )
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = StepEight;

/***/ },
/* 45 */
/*!*********************************!*\
  !*** ./src/components/step9.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	
	var StepNine = function StepNine(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement('td', null),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { className: 'text-right' },
	          'Event'
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement('td', null),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          '2nd Principle of Redux: State is read-only',
	          _react2.default.createElement('br', null),
	          'Dispatch an action for change. Example: type:\'INCREMENT\', cargo: 1'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { className: 'text-right' },
	          'Dispatch action'
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement('td', null),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' 3rd Principle of Redux: Changes are made with pure functions',
	          _react2.default.createElement('br', null),
	          'State of the app is written as a pure function called the Reducer, which returns an object (data).'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { className: 'text-right' },
	          'New State'
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement('td', null),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          { style: stTd },
	          ' 1st Principle of Redux: Single source of truth',
	          _react2.default.createElement('br', null),
	          'Everything that changes in your application including data and UI state is contained in a single object'
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          { className: 'text-right' },
	          'State update'
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        ),
	        _react2.default.createElement('td', null)
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement('td', null),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        ),
	        _react2.default.createElement('td', null)
	      )
	    )
	  );
	};
	
	exports.default = StepNine;

/***/ },
/* 46 */
/*!**********************************!*\
  !*** ./src/components/step10.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stFont = { fontSize: '60px' };
	var stMarg = { marginBottom: '0px' };
	var stTd = { padding: '5px 10px 5px 10px' };
	
	var StepTen = function StepTen(props) {
	  return _react2.default.createElement(
	    'table',
	    null,
	    _react2.default.createElement(
	      'tbody',
	      null,
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Reducer'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-right' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Store'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-up' })
	          )
	        ),
	        _react2.default.createElement('td', null),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-down' })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tr',
	        null,
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-info', role: 'alert', style: stMarg },
	            'Action'
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center' },
	            _react2.default.createElement('i', { style: stFont, className: 'fa fa-long-arrow-left' })
	          )
	        ),
	        _react2.default.createElement(
	          'td',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'text-center alert alert-success', style: stMarg },
	            'React'
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = StepTen;

/***/ },
/* 47 */
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 12);
	
	var _reducer_steps = __webpack_require__(/*! ./reducer_steps */ 48);
	
	var _reducer_steps2 = _interopRequireDefault(_reducer_steps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import drivemenu from './reducer_drivemenu';
	
	
	var rootReducer = (0, _redux.combineReducers)({
	  step: _reducer_steps2.default
	});
	
	exports.default = rootReducer;

/***/ },
/* 48 */
/*!***************************************!*\
  !*** ./src/reducers/reducer_steps.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /*jshint esversion:6 */
	
	
	exports.default = function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	    var action = arguments[1];
	
	    if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) === undefined) {
	        return INITIAL_STATE;
	    }
	
	    switch (action.type) {
	        case _steps.CHANGE_STEP:
	            return Object.assign({}, state, {
	                currentStep: action.cargo
	            });
	        default:
	            return state;
	    }
	    return state;
	};
	
	var _steps = __webpack_require__(/*! ../actions/steps */ 30);
	
	var INITIAL_STATE = {
	    currentStep: 0,
	    stepLimit: 11,
	    anchorPrefix: 'atat_'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map