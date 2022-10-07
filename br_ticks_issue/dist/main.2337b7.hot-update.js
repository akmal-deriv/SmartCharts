webpackHotUpdatesmartcharts("main",{

/***/ "./src/feed/Feed.ts":
/*!**************************!*\
  !*** ./src/feed/Feed.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var event_emitter_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! event-emitter-es6 */ "./node_modules/event-emitter-es6/index.js");
/* harmony import */ var event_emitter_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(event_emitter_es6__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _TickHistoryFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TickHistoryFormatter */ "./src/feed/TickHistoryFormatter.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscription */ "./src/feed/subscription/index.ts");
/* harmony import */ var _utils_ServerTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ServerTime */ "./src/utils/ServerTime.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Feed = /*#__PURE__*/function () {
  _createClass(Feed, [{
    key: "startEpoch",
    get: function get() {
      return this._mainStore.state.startEpoch;
    }
  }, {
    key: "endEpoch",
    get: function get() {
      return this._mainStore.state.endEpoch;
    }
  }, {
    key: "granularity",
    get: function get() {
      return this._mainStore.chart.granularity;
    }
  }, {
    key: "context",
    get: function get() {
      return this._mainStore.chart.context;
    }
  }, {
    key: "loader",
    get: function get() {
      return this._mainStore.loader;
    }
  }, {
    key: "margin",
    get: function get() {
      return this._mainStore.state.margin;
    }
  }, {
    key: "paginationLoader",
    get: function get() {
      return this._mainStore.paginationLoader;
    }
  }], [{
    key: "EVENT_MASTER_DATA_UPDATE",
    get: function get() {
      return 'EVENT_MASTER_DATA_UPDATE';
    }
  }, {
    key: "EVENT_MASTER_DATA_REINITIALIZE",
    get: function get() {
      return 'EVENT_MASTER_DATA_REASSIGN';
    }
  }, {
    key: "EVENT_COMPARISON_DATA_UPDATE",
    get: function get() {
      return 'EVENT_COMPARISON_DATA_UPDATE';
    }
  }, {
    key: "EVENT_START_PAGINATION",
    get: function get() {
      return 'EVENT_START_PAGINATION';
    }
  }, {
    key: "EVENT_ON_PAGINATION",
    get: function get() {
      return 'EVENT_ON_PAGINATION';
    }
  }]);

  function Feed(binaryApi, stx, mainStore, tradingTimes) {
    var _this = this;

    _classCallCheck(this, Feed);

    this.last_tick_timestamp = new Date().getTime();
    this._binaryApi = void 0;
    this._connectionClosedDate = void 0;
    this._emitter = void 0;
    this._mainStore = void 0;
    this._serverTime = void 0;
    this._stx = void 0;
    this._tradingTimes = void 0;
    this._activeStreams = {};
    this._isConnectionOpened = true;

    this.onRangeChanged = function (forceLoad) {
      var periodicity = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["calculateTimeUnitInterval"])(_this.granularity);
      var rangeTime = (_this.granularity || 1) * _this._stx.chart.maxTicks;
      var dtLeft = null;
      var dtRight = null;

      _this._mainStore.state.setChartIsReady(false);

      if (!_this.endEpoch) {
        if (_this.startEpoch) {
          dtLeft = _this.startEpoch ? CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(_this.startEpoch)) : undefined;
        }
      } else {
        dtLeft = CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(_this.startEpoch || _this.endEpoch - rangeTime));
        dtRight = CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(_this.endEpoch));
      }

      _this._stx.setRange({
        dtLeft: dtLeft,
        dtRight: dtRight,
        periodicity: periodicity,
        forceLoad: forceLoad
      }, function () {
        if (!_this.endEpoch && !_this.startEpoch) {
          _this._stx.home();

          delete _this._stx.layout.range;
        } else {
          _this.scaleChart();
        }

        _this._mainStore.state.saveLayout();

        _this._mainStore.state.setChartIsReady(true);
      });
    };

    this._stx = stx;
    this._binaryApi = binaryApi;
    this._mainStore = mainStore;
    this._serverTime = _utils_ServerTime__WEBPACK_IMPORTED_MODULE_5__["default"].getInstance();
    this._tradingTimes = tradingTimes;
    Object(mobx__WEBPACK_IMPORTED_MODULE_1__["reaction"])(function () {
      return mainStore.state.isConnectionOpened;
    }, this.onConnectionChanged.bind(this));
    this._emitter = new event_emitter_es6__WEBPACK_IMPORTED_MODULE_0___default.a({
      emitDelay: 0
    });
  }

  _createClass(Feed, [{
    key: "scaleChart",
    value: function scaleChart() {
      if (this.startEpoch) {
        if (this._stx.animations.liveScroll && this._stx.animations.liveScroll.running) {
          this._stx.animations.liveScroll.stop();
        }

        if (!this.endEpoch) {
          this._stx.maxMasterDataSize = 0;
          this._stx.chart.lockScroll = true;
        } else {
          this._stx.chart.isDisplayFullMode = false;
          this._stx.chart.lockScroll = false;
        }

        this._stx.setMaxTicks(this._stx.chart.dataSet.length + (Math.floor(this._stx.chart.dataSet.length / 5) || 2));

        this._stx.chart.scroll = this._stx.chart.dataSet.length;
        this._stx.chart.isScrollLocationChanged = true;
        /**
         * for tick condition with few points, in that case, if your try to zoom in
         * as the maxTicks is less than minimumZoomTicks, chart zoom out beside of
         * zoom in, as a result, we try to override the minimumZoomTicks to prevent that
         */

        if (this._stx.chart.maxTicks < this._stx.minimumZoomTicks) {
          this._stx.minimumZoomTicks = this._stx.chart.maxTicks - 1;
        }

        this._stx.draw();
      }
    } // although not used, subscribe is overridden so that unsubscribe will be called by ChartIQ
    // eslint-disable-next-line @typescript-eslint/no-empty-function

  }, {
    key: "subscribe",
    value: function subscribe() {} // Do not call explicitly! Method below is called by ChartIQ when unsubscribing symbols.

  }, {
    key: "unsubscribe",
    value: function unsubscribe(_ref) {
      var symbol = _ref.symbol,
          period = _ref.period,
          interval = _ref.interval;
      // the chart forgets the ticks_history of the main chart symbol before sending a new request in fetchInitialData function.
      if (this._stx.chart.symbol === symbol) return;
      var granularity = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["calculateGranularity"])(period, interval);

      var key = this._getKey({
        symbol: symbol,
        granularity: granularity
      });

      this._forgetStream(key);
    }
  }, {
    key: "_forgetStream",
    value: function _forgetStream(key) {
      if (this._activeStreams[key]) {
        this._activeStreams[key].forget();

        delete this._activeStreams[key];
      }
    }
  }, {
    key: "fetchInitialData",
    value: function () {
      var _fetchInitialData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee( // this might be the way to refresh the chart
      symbol, suggestedStartDate, _suggestedEndDate, params, callback) {
        var _this2 = this;

        var i, period, interval, symbolObject, granularity, key, localDate, isComparisonChart, start, end, comparisonChartSymbol, symbolName, dataCallback, tickHistoryRequest, getHistoryOnly, quotes, subscription, delay, _yield$subscription$i, new_quotes, response, _ref2, text, _response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('');

                for (i = 0; i < 10; i++) {
                  console.error('FETCH INITIAL DATA: ' + i);
                }

                this.setHasReachedEndOfData(false);
                this.paginationLoader.updateOnPagination(true);
                period = params.period, interval = params.interval, symbolObject = params.symbolObject;
                granularity = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["calculateGranularity"])(period, interval);
                key = this._getKey({
                  symbol: symbol,
                  granularity: granularity
                });
                localDate = this._serverTime.getLocalDate();
                if (suggestedStartDate > localDate) suggestedStartDate = localDate;

                if (!this.startEpoch && suggestedStartDate > this.endEpoch) {
                  suggestedStartDate = CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(this.endEpoch - 200000));
                }

                isComparisonChart = this._stx.chart.symbol !== symbol;
                start = this.startEpoch || Math.floor(suggestedStartDate / 1000 | 0);
                start = this.margin && this.startEpoch ? start - this.margin : start;
                end = this.margin && this.endEpoch ? this.endEpoch + this.margin : this.endEpoch;

                if (isComparisonChart) {
                  // Strange issue where comparison series is offset by timezone...
                  start -= suggestedStartDate.getTimezoneOffset() * 60;
                }

                comparisonChartSymbol = isComparisonChart ? symbol : undefined;
                symbolName = symbolObject.name;
                this.loader.setState('chart-data');

                if (!this._tradingTimes.isFeedUnavailable(symbol)) {
                  _context.next = 24;
                  break;
                }

                this._mainStore.notifier.notifyFeedUnavailable(symbolName);

                dataCallback = {
                  quotes: []
                };

                if (isComparisonChart) {
                  // Passing error will prevent the chart from being shown; for
                  // main chart we still want the chart to be shown, just disabled
                  dataCallback = _objectSpread({
                    error: 'StreamingNotAllowed',
                    suppressAlert: true
                  }, dataCallback);
                } else {
                  this._mainStore.chart.setChartAvailability(false);
                }

                callback(dataCallback);
                return _context.abrupt("return");

              case 24:
                tickHistoryRequest = {
                  symbol: symbol,
                  granularity: granularity,
                  start: this.endEpoch ? start : undefined,
                  count: this.endEpoch ? undefined : this._mainStore.lastDigitStats.count
                };
                getHistoryOnly = false;

                if (!end) {
                  _context.next = 31;
                  break;
                }

                // When there is end; no streaming required
                tickHistoryRequest.end = String(end);
                getHistoryOnly = true;
                _context.next = 62;
                break;

              case 31:
                if (!this._tradingTimes.isMarketOpened(symbol)) {
                  _context.next = 60;
                  break;
                }

                delay = this._tradingTimes.getDelayedMinutes(symbol);

                if (delay > 0) {
                  this._mainStore.notifier.notifyDelayedMarket(symbolName, delay);

                  subscription = new _subscription__WEBPACK_IMPORTED_MODULE_4__["DelayedSubscription"](tickHistoryRequest, this._binaryApi, this._stx, delay);
                } else {
                  subscription = new _subscription__WEBPACK_IMPORTED_MODULE_4__["RealtimeSubscription"](tickHistoryRequest, this._binaryApi, this._stx);
                }

                _context.prev = 34;

                // The chart should forget all ticks_history subscriptions when the symbol/granularity of the main chart is changed before sending the new request.
                if (!isComparisonChart) {
                  this.unsubscribeAll();
                }

                _context.next = 38;
                return subscription.initialFetch();

              case 38:
                _yield$subscription$i = _context.sent;
                new_quotes = _yield$subscription$i.quotes;
                response = _yield$subscription$i.response;
                quotes = new_quotes.filter(function (quote) {
                  return new Date("".concat(quote.Date, "Z")).getTime() / 1000 >= start;
                });

                if (!this.endEpoch) {
                  this._mainStore.lastDigitStats.updateLastDigitStats(response);
                }

                _context.next = 52;
                break;

              case 45:
                _context.prev = 45;
                _context.t0 = _context["catch"](34);
                _ref2 = _context.t0, text = _ref2.message;

                this._mainStore.notifier.notify({
                  text: text,
                  type: 'error',
                  category: 'activesymbol'
                });

                callback({
                  quotes: []
                });
                this.paginationLoader.updateOnPagination(false);
                return _context.abrupt("return");

              case 52:
                subscription.onChartData(function (tickResponse) {
                  // Append comming ticks to chart only if it belongs to selected symbol after symbol changes
                  if (isComparisonChart || symbol === _this2._stx.chart.symbol) {
                    if (_this2._stx.isDestroyed) return;

                    _this2._appendChartData(tickResponse, key, comparisonChartSymbol);
                  }
                }); // if symbol is changed before request is completed, past request needs to be forgotten:

                if (!(!isComparisonChart && this._stx.chart.symbol !== symbol)) {
                  _context.next = 57;
                  break;
                }

                callback({
                  quotes: []
                });
                subscription.forget();
                return _context.abrupt("return");

              case 57:
                this._activeStreams[key] = subscription;
                _context.next = 62;
                break;

              case 60:
                this._mainStore.notifier.notifyMarketClose(symbolName); // Although market is closed, we display the past tick history data


                getHistoryOnly = true;

              case 62:
                if (!getHistoryOnly) {
                  _context.next = 67;
                  break;
                }

                _context.next = 65;
                return this._binaryApi.getTickHistory(tickHistoryRequest);

              case 65:
                _response = _context.sent;
                quotes = _TickHistoryFormatter__WEBPACK_IMPORTED_MODULE_2__["TickHistoryFormatter"].formatHistory(_response);

              case 67:
                if (quotes) {
                  _context.next = 70;
                  break;
                }

                callback({
                  quotes: []
                });
                return _context.abrupt("return");

              case 70:
                quotes = this._trimQuotes(quotes);
                callback({
                  quotes: quotes
                });

                this._mainStore.chart.updateYaxisWidth();

                this.scaleChart();

                this._emitDataUpdate(quotes, comparisonChartSymbol, true);

                this._mainStore.state.setMaxtTick();

                this.paginationLoader.updateOnPagination(false);

              case 77:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[34, 45]]);
      }));

      function fetchInitialData(_x, _x2, _x3, _x4, _x5) {
        return _fetchInitialData.apply(this, arguments);
      }

      return fetchInitialData;
    }()
  }, {
    key: "fetchPaginationData",
    value: function () {
      var _fetchPaginationData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(symbol, suggestedStartDate, endDate, params, callback) {
        var end, start, period, interval, granularity, isMainChart;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                end = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCEpoch"])(endDate);
                start = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCEpoch"])(suggestedStartDate);
                period = params.period, interval = params.interval;
                granularity = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["calculateGranularity"])(period, interval);
                isMainChart = this._stx.chart.symbol === symbol;

                if (isMainChart) {
                  // ignore comparisons
                  this._emitter.emit(Feed.EVENT_START_PAGINATION, {
                    start: start,
                    end: end
                  });
                }

                _context2.next = 8;
                return this._getPaginationData(symbol, granularity, start, end, callback);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchPaginationData(_x6, _x7, _x8, _x9, _x10) {
        return _fetchPaginationData.apply(this, arguments);
      }

      return fetchPaginationData;
    }()
  }, {
    key: "_getPaginationData",
    value: function () {
      var _getPaginationData2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(symbol, granularity, start, end, callback) {
        var isMainChart, now, startLimit, result, firstEpoch, response, _ref3, text, newStart, paginationEnd;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                isMainChart = this._stx.chart.symbol === symbol; // TODO There is no need to get historical data before startTime

                if (!(this.startEpoch
                /* && start < this.startEpoch */
                || this.endEpoch && end > this.endEpoch)) {
                  _context3.next = 5;
                  break;
                }

                callback({
                  moreAvailable: false,
                  quotes: []
                });

                if (isMainChart) {
                  // ignore comparisons
                  this._emitter.emit(Feed.EVENT_ON_PAGINATION, {
                    start: start,
                    end: end
                  });

                  this.setHasReachedEndOfData(true);
                }

                return _context3.abrupt("return");

              case 5:
                now = this._serverTime.getEpoch(); // Tick history data only goes as far back as 3 years:

                startLimit = now - Math.ceil(2.8 * 365 * 24 * 60 * 60);
                /* == 3 Years */

                result = {
                  quotes: []
                };

                if (!(end > startLimit)) {
                  _context3.next = 38;
                  break;
                }

                _context3.prev = 9;
                _context3.next = 12;
                return this._binaryApi.getTickHistory({
                  symbol: symbol,
                  granularity: granularity,
                  start: Math.floor(Math.max(start, startLimit)),
                  end: String(end)
                });

              case 12:
                response = _context3.sent;

                if (!response.error) {
                  _context3.next = 20;
                  break;
                }

                _ref3 = response.error, text = _ref3.message;
                this.loader.hide();
                this.paginationLoader.updateOnPagination(false);

                this._mainStore.notifier.notify({
                  text: text,
                  type: 'error',
                  category: 'activesymbol'
                });

                callback({
                  error: response.error
                });
                return _context3.abrupt("return");

              case 20:
                firstEpoch = Feed.getFirstEpoch(response);

                if (!(firstEpoch === undefined || firstEpoch === end)) {
                  _context3.next = 30;
                  break;
                }

                newStart = start - (end - start);

                if (!(newStart <= startLimit)) {
                  _context3.next = 27;
                  break;
                }

                // Passed available range. Prevent anymore pagination requests:
                callback({
                  moreAvailable: false,
                  quotes: []
                });
                this.setHasReachedEndOfData(true);
                return _context3.abrupt("return");

              case 27:
                _context3.next = 29;
                return this._getPaginationData(symbol, granularity, newStart, end, callback);

              case 29:
                return _context3.abrupt("return");

              case 30:
                result.quotes = _TickHistoryFormatter__WEBPACK_IMPORTED_MODULE_2__["TickHistoryFormatter"].formatHistory(response);

                if (firstEpoch <= startLimit) {
                  callback({
                    moreAvailable: false,
                    quotes: []
                  });
                  this.setHasReachedEndOfData(true);
                }

                _context3.next = 38;
                break;

              case 34:
                _context3.prev = 34;
                _context3.t0 = _context3["catch"](9);
                console.error(_context3.t0);
                result = {
                  error: _context3.t0
                };

              case 38:
                callback(result);

                if (isMainChart) {
                  // ignore comparisons
                  // prevent overlapping by setting pagination end as firstEpoch
                  // if 'end' is greater than firstEpoch from feed
                  paginationEnd = firstEpoch && end > firstEpoch ? firstEpoch : end;

                  this._emitter.emit(Feed.EVENT_ON_PAGINATION, {
                    start: start,
                    end: paginationEnd
                  });
                }

              case 40:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[9, 34]]);
      }));

      function _getPaginationData(_x11, _x12, _x13, _x14, _x15) {
        return _getPaginationData2.apply(this, arguments);
      }

      return _getPaginationData;
    }()
  }, {
    key: "setHasReachedEndOfData",
    value: function setHasReachedEndOfData(hasReachedEndOfData) {
      this.paginationLoader.updateOnPagination(false);

      if (this._mainStore.state.hasReachedEndOfData !== hasReachedEndOfData) {
        this._mainStore.state.hasReachedEndOfData = hasReachedEndOfData;
      }
    }
  }, {
    key: "unsubscribeAll",
    value: function unsubscribeAll() {
      for (var _i = 0, _Object$keys = Object.keys(this._activeStreams); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        this._forgetStream(key);
      }
    }
  }, {
    key: "_forgetIfEndEpoch",
    value: function _forgetIfEndEpoch(key) {
      var subscription = this._activeStreams[key];
      var result = true;

      if (!subscription) {
        return;
      }

      var lastEpoch = subscription.lastStreamEpoch;

      if (this.endEpoch && lastEpoch !== undefined && this.granularity !== undefined && lastEpoch + this.granularity > this.endEpoch) {
        var _this$_stx$chart$data;

        if (this._activeStreams[key] && this.granularity === 0 && !this._mainStore.state.isStaticChart && CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(this.endEpoch)).valueOf() >= ((_this$_stx$chart$data = this._stx.chart.dataSet.slice(-1)[0]) === null || _this$_stx$chart$data === void 0 ? void 0 : _this$_stx$chart$data.DT.valueOf())) {
          result = false;
        }

        this._forgetStream(key);
      } else {
        result = false;
      }

      return result;
    }
  }, {
    key: "_appendChartData",
    value: function _appendChartData(quotes, key, comparisonChartSymbol) {
      // console.log('');
      // console.warn('HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
      // console.log(this.last_tick_timestamp);
      var current_tick_timestamp = new Date().getTime(); // THE ISSUE CAN BE FIXED HERE
      // console.log('');
      // for (let i=0; i<10; i++) {
      //     console.error('FETCH INITIAL DATA: ' + i);
      // }
      // console.error(current_tick_timestamp - this.last_tick_timestamp);
      // if (current_tick_timestamp - this.last_tick_timestamp < 2 * 1000) {
      //     console.warn('RIGHT');
      // }
      // else {
      //     console.error('BWOKEN');
      //     // this._mainStore.chart.refreshChart();
      // }
      // this.last_tick_timestamp = current_tick_timestamp;

      if (this._forgetIfEndEpoch(key) && !this._activeStreams[key]) {
        console.log('');
        console.warn('HERE 1');
        quotes = [];
        return;
      }

      if (this.endEpoch && this._stx.chart.dataSet.slice(-1)[0] && CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(this.endEpoch)).valueOf() !== this._stx.chart.dataSet.slice(-1)[0].DT.valueOf()) {
        console.log('');
        console.warn('HERE 2');

        this._stx.updateChartData([{
          DT: CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(this.endEpoch)),
          Close: null
        }], null, {
          fillGaps: true
        });

        this._stx.createDataSet();
      }

      if (comparisonChartSymbol) {
        console.log('');
        console.warn('HERE 3');

        this._stx.updateChartData(quotes, null, {
          secondarySeries: comparisonChartSymbol,
          noCreateDataSet: true
        });
      } else {
        console.log('');
        console.warn('HERE 4');
        console.error(current_tick_timestamp - this.last_tick_timestamp);

        if (current_tick_timestamp - this.last_tick_timestamp < 2 * 1000) {
          console.warn('LEFT');

          this._stx.updateChartData(quotes, null, {
            allowReplaceOHL: true
          });

          this._stx.createDataSet();
        } else {
          console.error('BWOKEN');

          this._mainStore.chart.refreshChart();
        }

        this.last_tick_timestamp = current_tick_timestamp;
      }

      console.log('');
      console.warn('HERE 5');

      this._emitDataUpdate(quotes, comparisonChartSymbol);
    }
  }, {
    key: "_emitDataUpdate",
    value: function _emitDataUpdate(quotes, comparisonChartSymbol) {
      var isChartReinitialized = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var prev = quotes[quotes.length - 2];
      var prevClose = prev !== undefined ? prev.Close : undefined;

      var dataUpdate = _objectSpread(_objectSpread({}, quotes[quotes.length - 1]), {}, {
        prevClose: prevClose
      });

      if (!comparisonChartSymbol) {
        if (isChartReinitialized) {
          this._emitter.emit(Feed.EVENT_MASTER_DATA_REINITIALIZE);

          this._mainStore.chart.setChartAvailability(true);
        } else {
          this._emitter.emit(Feed.EVENT_MASTER_DATA_UPDATE, dataUpdate);
        }
      } else {
        this._emitter.emit(Feed.EVENT_COMPARISON_DATA_UPDATE, _objectSpread({
          symbol: comparisonChartSymbol
        }, dataUpdate));
      }
    }
  }, {
    key: "onMasterDataUpdate",
    value: function onMasterDataUpdate(callback) {
      this._emitter.on(Feed.EVENT_MASTER_DATA_UPDATE, callback);
    }
  }, {
    key: "offMasterDataUpdate",
    value: function offMasterDataUpdate(callback) {
      this._emitter.off(Feed.EVENT_MASTER_DATA_UPDATE, callback);
    }
  }, {
    key: "onMasterDataReinitialize",
    value: function onMasterDataReinitialize(callback) {
      this._emitter.on(Feed.EVENT_MASTER_DATA_REINITIALIZE, callback);
    }
  }, {
    key: "offMasterDataReinitialize",
    value: function offMasterDataReinitialize(callback) {
      this._emitter.off(Feed.EVENT_MASTER_DATA_REINITIALIZE, callback);
    }
  }, {
    key: "onComparisonDataUpdate",
    value: function onComparisonDataUpdate(callback) {
      this._emitter.on(Feed.EVENT_COMPARISON_DATA_UPDATE, callback);
    }
  }, {
    key: "onPagination",
    value: function onPagination(callback) {
      this._emitter.on(Feed.EVENT_ON_PAGINATION, callback);
    }
  }, {
    key: "offPagination",
    value: function offPagination(callback) {
      this._emitter.off(Feed.EVENT_ON_PAGINATION, callback);
    }
  }, {
    key: "onStartPagination",
    value: function onStartPagination(callback) {
      this._emitter.on(Feed.EVENT_START_PAGINATION, callback);
    }
  }, {
    key: "offStartPagination",
    value: function offStartPagination(callback) {
      this._emitter.off(Feed.EVENT_START_PAGINATION, callback);
    }
  }, {
    key: "onConnectionChanged",
    value: function onConnectionChanged() {
      var isOpened = this._mainStore.state.isConnectionOpened;

      if (isOpened === undefined || isOpened === this._isConnectionOpened) {
        return;
      }

      this._isConnectionOpened = isOpened;

      if (isOpened) {
        this._onConnectionReopened();
      } else {
        this._onConnectionClosed();
      }
    }
  }, {
    key: "_onConnectionClosed",
    value: function _onConnectionClosed() {
      for (var key in this._activeStreams) {
        this._activeStreams[key].pause();
      }

      this._connectionClosedDate = new Date();
    }
  }, {
    key: "_onConnectionReopened",
    value: function _onConnectionReopened() {
      var keys = Object.keys(this._activeStreams);

      if (keys.length === 0) {
        return;
      }

      var _this$_unpackKey = this._unpackKey(keys[0]),
          granularity = _this$_unpackKey.granularity;

      var elapsedSeconds = (new Date() - this._connectionClosedDate) / 1000 | 0;
      var maxIdleSeconds = (granularity || 1) * this._stx.chart.maxTicks;

      if (elapsedSeconds >= maxIdleSeconds) {
        this._mainStore.chart.refreshChart();
      } else {
        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            this._resumeStream(key);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this._connectionClosedDate = undefined;
    }
  }, {
    key: "_resumeStream",
    value: function _resumeStream(key) {
      var _this3 = this;

      var _this$_unpackKey2 = this._unpackKey(key),
          symbol = _this$_unpackKey2.symbol;

      var comparisonChartSymbol = this._stx.chart.symbol !== symbol ? symbol : undefined;

      this._activeStreams[key].resume().then(function (params) {
        var _ref4 = params,
            quotes = _ref4.quotes;
        if (_this3._stx.isDestroyed) return;

        _this3._appendChartData(quotes, key, comparisonChartSymbol);
      });
    }
  }, {
    key: "_getKey",
    value: function _getKey(_ref5) {
      var symbol = _ref5.symbol,
          granularity = _ref5.granularity;
      return "".concat(symbol, "-").concat(granularity);
    }
  }, {
    key: "_unpackKey",
    value: function _unpackKey(key) {
      var _key$split = key.split('-'),
          _key$split2 = _slicedToArray(_key$split, 2),
          symbol = _key$split2[0],
          granularity = _key$split2[1];

      return {
        symbol: symbol,
        granularity: +granularity
      };
    }
  }, {
    key: "_trimQuotes",
    value: function _trimQuotes() {
      var _this4 = this;

      var quotes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var startTickIndex = null;
      var endTickIndex = null;
      var trimmedQuotes = quotes;
      if (!trimmedQuotes.length) return [];

      if (this.startEpoch && this.margin) {
        startTickIndex = trimmedQuotes.findIndex(function (tick) {
          return CIQ.strToDateTime(tick.Date) >= CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(_this4.startEpoch));
        });

        if (startTickIndex > -1) {
          trimmedQuotes = trimmedQuotes.slice(startTickIndex - 1);
        }
      }

      if (this.endEpoch && this.margin) {
        endTickIndex = trimmedQuotes.findIndex(function (tick) {
          return CIQ.strToDateTime(tick.Date) >= CIQ.strToDateTime(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(_this4.endEpoch));
        });

        if (endTickIndex > -1) {
          var addon = trimmedQuotes[endTickIndex].Date === Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUTCDate"])(this.endEpoch) ? 2 : 1;
          trimmedQuotes = trimmedQuotes.slice(0, endTickIndex + addon);
        }
      }

      return trimmedQuotes;
    }
  }], [{
    key: "getFirstEpoch",
    value: function getFirstEpoch(_ref6) {
      var candles = _ref6.candles,
          history = _ref6.history;

      if (candles && candles.length > 0) {
        return candles[0].epoch;
      }

      if (history && history.times && history.times.length > 0) {
        var times = history.times;
        return +times[0];
      }
    }
  }]);

  return Feed;
}();

/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ })

})
//# sourceMappingURL=main.2337b7.hot-update.js.map