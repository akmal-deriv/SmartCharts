webpackHotUpdatesmartcharts("main",{

/***/ "./app/connection/StreamManager.ts":
/*!*****************************************!*\
  !*** ./app/connection/StreamManager.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stream */ "./app/connection/Stream.ts");
/* harmony import */ var _tickUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickUtils */ "./app/connection/tickUtils.ts");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var StreamManager = /*#__PURE__*/function () {
  // last_tick_timestamp = new Date().getTime();
  function StreamManager(connection) {
    _classCallCheck(this, StreamManager);

    this.MAX_CACHE_TICKS = 5000;
    this._connection = void 0;
    this._streams = {};
    this._streamIds = {};
    this._tickHistoryCache = {};
    this._tickHistoryPromises = {};
    this._beingForgotten = {};
    this._connection = connection;

    for (var _i = 0, _arr = ['tick', 'ohlc']; _i < _arr.length; _i++) {
      var msgType = _arr[_i];

      this._connection.on(msgType, this._onTick.bind(this));
    }

    this._connection.onClosed(this._onConnectionClosed.bind(this));
  }

  _createClass(StreamManager, [{
    key: "_onTick",
    value: function _onTick(data) {
      // console.log('');
      // console.warn('ON TICK: ');
      // console.log(this.last_tick_timestamp);
      var key = this._getKey(data.echo_req); // const current_tick_timestamp = new Date().getTime();


      if (this._streams[key] && this._tickHistoryCache[key]) {
        var _data$data$msg_type;

        // console.error(current_tick_timestamp - this.last_tick_timestamp);
        this._streamIds[key] = (_data$data$msg_type = data[data.msg_type]) === null || _data$data$msg_type === void 0 ? void 0 : _data$data$msg_type.id;

        this._cacheTick(key, data);

        this._streams[key].emitTick(data); // if (current_tick_timestamp - this.last_tick_timestamp < 2 * 1000) {
        //     this._streamIds[key] = data[data.msg_type]?.id;
        //     this._cacheTick(key, data);
        //     this._streams[key].emitTick(data);
        // }
        // else {
        //     console.error('BWOKEN');
        //     // this._mainStore.chart.refreshChart();
        // }
        // this.last_tick_timestamp = current_tick_timestamp;

      } else if (this._beingForgotten[key] === undefined) {
        var _data$data$msg_type2;

        // There could be the possibility a stream could still enter even though
        // it is no longer in used. This is because we can't know the stream ID
        // from the initial response; we have to wait for the next tick to retrieve it.
        // In such scenario we need to forget these "orphaned" streams:
        this._streamIds[key] = (_data$data$msg_type2 = data[data.msg_type]) === null || _data$data$msg_type2 === void 0 ? void 0 : _data$data$msg_type2.id;

        this._forgetStream(key);
      }
    }
  }, {
    key: "_onConnectionClosed",
    value: function _onConnectionClosed() {
      // StreamManager simply discards all streams upon disconnection;
      // It is not its responsibility to reestablish the streams upon reconnection.
      this._streamIds = {}; // set it to blank so that forget requests do not get called

      for (var _i2 = 0, _Object$keys = Object.keys(this._streams); _i2 < _Object$keys.length; _i2++) {
        var key = _Object$keys[_i2];

        if (this._streams[key].subscriberCount !== 0) {
          this._forgetStream(key);
        }
      }
    }
  }, {
    key: "_onReceiveTickHistory",
    value: function _onReceiveTickHistory(data) {
      var key = this._getKey(data.echo_req);

      var cache = StreamManager.cloneTickHistoryResponse(data);

      if (cache) {
        this._tickHistoryCache[key] = cache;
      }

      delete this._tickHistoryPromises[key];
    }
  }, {
    key: "_cacheTick",
    value: function _cacheTick(key, response) {
      if ('ohlc' in response) {
        var _ref = response,
            ohlc = _ref.ohlc;
        var candles = this._tickHistoryCache[key].candles;
        var close = ohlc.close,
            epoch = ohlc.open_time,
            high = ohlc.high,
            low = ohlc.low,
            open = ohlc.open;
        var candle = {
          close: close,
          high: high,
          low: low,
          open: open,
          epoch: epoch
        };
        var lastCandle = candles[candles.length - 1];

        if (lastCandle && candle.epoch && +lastCandle.epoch === +candle.epoch) {
          candles[candles.length - 1] = candle;
        } else {
          candles.push(candle);

          if (candles.length > this.MAX_CACHE_TICKS) {
            candles.shift();
          }
        }
      } else if ('tick' in response) {
        var tick = response.tick;
        var history = this._tickHistoryCache[key].history;
        var _ref2 = history,
            prices = _ref2.prices,
            times = _ref2.times;
        var _ref3 = tick,
            price = _ref3.quote,
            time = _ref3.epoch;
        prices.push(price);
        times.push(time);

        if (prices.length > this.MAX_CACHE_TICKS) {
          prices.shift();
          times.shift();
        }
      }
    }
  }, {
    key: "_forgetStream",
    value: function _forgetStream(key) {
      var _this = this;

      var stream = this._streams[key];

      if (stream) {
        // Note that destroying a stream also removes all subscribed events
        stream.destroy();
        delete this._streams[key];
      }

      if (this._streamIds[key]) {
        var id = this._streamIds[key];
        this._beingForgotten[key] = true;

        this._connection.send({
          forget: id
        }).then(function () {
          delete _this._beingForgotten[key];
          delete _this._streamIds[key];
        });
      }

      if (this._tickHistoryCache[key]) {
        delete this._tickHistoryCache[key];
      }
    }
  }, {
    key: "_createNewStream",
    value: function _createNewStream(request) {
      var _this2 = this;

      var key = this._getKey(request);

      var stream = new _Stream__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this._streams[key] = stream;

      var subscribePromise = this._connection.send(request);

      this._tickHistoryPromises[key] = subscribePromise;
      subscribePromise.then(function (response) {
        _this2._onReceiveTickHistory(response);

        if (response.error) {
          _this2._forgetStream(key);
        }
      })["catch"](function () {
        _this2._forgetStream(key);
      });
      stream.onNoSubscriber(function () {
        return _this2._forgetStream(key);
      });
      return stream;
    }
  }, {
    key: "subscribe",
    value: function () {
      var _subscribe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, callback) {
        var request, key, stream, tickHistoryResponse, responseStart, _history$times, patchRequest, _ref4, history, candles, patch;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = req;
                key = this._getKey(request);
                stream = this._streams[key];

                if (!stream) {
                  stream = this._createNewStream(request);
                }

                tickHistoryResponse = this._tickHistoryCache[key];

                if (tickHistoryResponse) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return this._tickHistoryPromises[key];

              case 8:
                tickHistoryResponse = _context.sent;

              case 9:
                responseStart = tickHistoryResponse.echo_req.start;

                if (!(responseStart && request.start && responseStart > request.start)) {
                  _context.next = 19;
                  break;
                }

                // request needs more data
                patchRequest = _objectSpread({}, request);
                delete patchRequest.subscribe;
                _ref4 = tickHistoryResponse, history = _ref4.history, candles = _ref4.candles;
                patchRequest.end = String(history && ((_history$times = history.times) === null || _history$times === void 0 ? void 0 : _history$times[0]) ? +history.times[0] : candles[0].epoch || '');
                _context.next = 17;
                return this._connection.send(patchRequest);

              case 17:
                patch = _context.sent;
                tickHistoryResponse = Object(_tickUtils__WEBPACK_IMPORTED_MODULE_1__["mergeTickHistory"])(tickHistoryResponse, patch);

              case 19:
                if (tickHistoryResponse.error) {
                  callback(tickHistoryResponse);
                } else {
                  // If cache data is available, send a copy otherwise we risk
                  // mutating the cache outside of StreamManager
                  callback(StreamManager.cloneTickHistoryResponse(tickHistoryResponse));
                }

                stream.onStream(callback);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function subscribe(_x, _x2) {
        return _subscribe.apply(this, arguments);
      }

      return subscribe;
    }()
  }, {
    key: "forget",
    value: function forget(request, callback) {
      var key = this._getKey(request);

      var stream = this._streams[key];

      if (stream) {
        stream.offStream(callback);
      }
    }
  }, {
    key: "_getKey",
    value: function _getKey(_ref5) {
      var symbol = _ref5.ticks_history,
          granularity = _ref5.granularity;
      return "".concat(symbol, "-").concat(granularity || 0);
    }
  }], [{
    key: "cloneTickHistoryResponse",
    value: function cloneTickHistoryResponse(_ref6) {
      var history = _ref6.history,
          candles = _ref6.candles,
          others = _objectWithoutProperties(_ref6, ["history", "candles"]);

      var clone = null;

      if (history) {
        var _ref7 = history,
            prices = _ref7.prices,
            times = _ref7.times;
        clone = _objectSpread(_objectSpread({}, others), {}, {
          history: {
            prices: prices.slice(0),
            times: times.slice(0)
          }
        });
      } else if (candles) {
        clone = _objectSpread(_objectSpread({}, others), {}, {
          candles: candles.slice(0)
        });
      }

      return clone;
    }
  }]);

  return StreamManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (StreamManager);

/***/ })

})
//# sourceMappingURL=main.05d471.hot-update.js.map