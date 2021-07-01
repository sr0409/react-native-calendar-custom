'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var React = require('react');
var reactNative = require('react-native');
var isBetween = require('dayjs/plugin/isBetween');
var calendarize = require('calendarize');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var isBetween__default = /*#__PURE__*/_interopDefaultLegacy(isBetween);
var calendarize__default = /*#__PURE__*/_interopDefaultLegacy(calendarize);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var Color;
(function (Color) {
    Color["primary"] = "rgb(66, 133, 244)";
    Color["red"] = "#C80B22";
    Color["yellow"] = "#F8E71C";
    Color["green"] = "#4AC001";
    Color["orange"] = "#E26245";
    Color["pink"] = "#5934C7";
})(Color || (Color = {}));

var MIN_HEIGHT = 1200;
var OVERLAP_OFFSET = reactNative.Platform.OS === 'web' ? 20 : 8;
var OVERLAP_PADDING = reactNative.Platform.OS === 'web' ? 3 : 0;
var commonStyles = reactNative.StyleSheet.create({
    eventCell: {
        backgroundColor: Color.primary,
        zIndex: 100,
        start: 3,
        end: 3,
        borderRadius: 3,
        padding: 4,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
        minWidth: '33%',
    },
});
var u = reactNative.StyleSheet.create({
    flex: {
        flexDirection: 'row',
    },
    'flex-row': {
        flexDirection: 'row',
    },
    'flex-row-reverse': {
        flexDirection: 'row-reverse',
    },
    'flex-column': {
        flexDirection: 'column',
    },
    'flex-1': {
        flex: 1,
    },
    'justify-between': {
        justifyContent: 'space-between',
    },
    'justify-center': {
        justifyContent: 'center',
    },
    'items-center': {
        alignItems: 'center',
    },
    'self-center': {
        alignSelf: 'center',
    },
    'border-l': {
        borderLeftWidth: 1,
    },
    'border-t': {
        borderTopWidth: 1,
    },
    'border-b': {
        borderBottomWidth: 1,
    },
    'border-r': {
        borderRightWidth: 1,
    },
    'border-gray-100': {
        borderColor: '#eee',
    },
    'border-gray-200': {
        borderColor: '#ddd',
    },
    'mt-2': {
        marginTop: 2,
    },
    'mt-4': {
        marginTop: 4,
    },
    'mt-6': {
        marginTop: 6,
    },
    'mb-6': {
        marginBottom: 6,
    },
    'p-8': {
        padding: 8,
    },
    'pt-2': {
        paddingTop: 2,
    },
    'py-2': {
        paddingVertical: 2,
    },
    'px-6': {
        paddingHorizontal: 6,
    },
    'pb-6': {
        paddingBottom: 6,
    },
    'text-gray-800': {
        color: '#444',
    },
    'text-gray-300': {
        color: '#888',
    },
    'text-2xl': {
        fontSize: 22,
    },
    'text-center': {
        textAlign: 'center',
    },
    'text-white': {
        color: '#fff',
    },
    'text-primary': {
        color: Color.primary,
    },
    'text-xs': {
        fontSize: 10,
    },
    'text-sm': {
        fontSize: 12,
    },
    rounded: {
        borderRadius: 3,
    },
    'rounded-full': {
        borderRadius: 9999,
    },
    'z-0': {
        zIndex: 0,
    },
    'z-10': {
        zIndex: 10,
    },
    'z-20': {
        zIndex: 20,
    },
    'bg-primary': {
        backgroundColor: Color.primary,
    },
    'bg-white': {
        backgroundColor: '#fff',
    },
    'w-36': {
        width: 36,
    },
    'w-50': {
        width: 50,
    },
    'h-36': {
        height: 36,
    },
    'overflow-hidden': {
        overflow: 'hidden',
    },
    absolute: {
        position: 'absolute',
    },
});
var eventTitleStyle = [u['text-white'], u['text-sm']];
var dateCellStyle = [u['border-l'], u['border-b'], u['border-gray-100'], u['bg-white']];
var guideTextStyle = [u['text-gray-300'], u['text-xs'], u['text-center']];

var typedMemo = React__default['default'].memo;
var DAY_MINUTES = 1440;
function getDatesInMonth(date, locale) {
    if (date === void 0) { date = new Date(); }
    if (locale === void 0) { locale = 'en'; }
    var subject = dayjs__default['default'](date);
    var days = Array(subject.daysInMonth() - 1)
        .fill(0)
        .map(function (_, i) {
            return subject.date(i + 1).locale(locale);
        });
    return days;
}
function getDatesInWeek(date, weekStartsOn, locale) {
    if (date === void 0) { date = new Date(); }
    if (weekStartsOn === void 0) { weekStartsOn = 0; }
    if (locale === void 0) { locale = 'en'; }
    var subject = dayjs__default['default'](date);
    var subjectDOW = subject.day();
    var days = Array(7)
        .fill(0)
        .map(function (_, i) {
            return subject.add(i - (subjectDOW < weekStartsOn ? 7 + subjectDOW : subjectDOW) + weekStartsOn, 'day').locale(locale);
        });
    return days;
}
function getDatesInNextThreeDays(date, locale) {
    if (date === void 0) { date = new Date(); }
    if (locale === void 0) { locale = 'en'; }
    var subject = dayjs__default['default'](date).locale(locale);
    var days = Array(3)
        .fill(0)
        .map(function (_, i) {
            return subject.add(i, 'day');
        });
    return days;
}
function getDatesInNextOneDay(date, locale) {
    if (date === void 0) { date = new Date(); }
    if (locale === void 0) { locale = 'en'; }
    var subject = dayjs__default['default'](date).locale(locale);
    var days = Array(1)
        .fill(0)
        .map(function (_, i) {
            return subject.add(i, 'day');
        });
    return days;
}
var hours = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
];
function formatHour(hour, ampm) {
    if (ampm === void 0) { ampm = false; }
    if (ampm) {
        if (hour === 0) {
            return '';
        }
        if (hour === 12) {
            return "12 PM";
        }
        if (hour > 12) {
            return hour - 12 + " PM";
        }
        return hour + " AM";
    }
    return hour + ":00";
}
function formatHourEvents(hour, minute, ampm) {
    if (ampm === void 0) { ampm = false; }
    console.log(hour, minute, ampm)
    if (ampm) {
        if (hour == 0) {
            return `12:${minute}AM`;
        }
        if (hour == 12) {
            return `12:${minute}PM`;
        }
        if (hour > 12) {
            return `${hour - 12}:${minute}PM`;
        }
        return `${hour}:${minute}AM`;
    }
    return `${hour}:00`;
}
function isToday(date) {
    var today = dayjs__default['default']();
    return today.isSame(date, 'day');
}
function getRelativeTopInDay(date) {
    return (100 * (date.hour() * 60 + date.minute())) / DAY_MINUTES;
}
function modeToNum(mode, current) {
    if (mode === 'month') {
        if (!current) {
            throw new Error('You must specify current date if mode is month');
        }
        return current.daysInMonth() - current.date() + 1;
    }
    switch (mode) {
        case '3days':
            return 3;
        case 'week':
            return 7;
        case 'day':
            return 1;
        case 'custom':
            return 7;
        default:
            throw new Error('undefined mode');
    }
}
function formatStartEnd(start, end) {
    return (`${formatHourEvents(dayjs__default['default'](start).format('HH'), dayjs__default['default'](start).format('mm'), true)}-${formatHourEvents(dayjs__default['default'](end).format('HH'), dayjs__default['default'](end).format('mm'), true)}`)
}
function isAllDayEvent(start, end) {
    var _start = dayjs__default['default'](start);
    var _end = dayjs__default['default'](end);
    return _start.hour() === 0 && _start.minute() === 0 && _end.hour() === 0 && _end.minute() === 0;
}
function getCountOfEventsAtEvent(event, eventList) {
    dayjs__default['default'].extend(isBetween__default['default']);
    return eventList.filter(function (e) {
        return dayjs__default['default'](event.start).isBetween(e.start, e.end, 'minute', '[)') ||
            dayjs__default['default'](e.start).isBetween(event.start, event.end, 'minute', '[)');
    }).length;
}
function getOrderOfEvent(event, eventList) {
    dayjs__default['default'].extend(isBetween__default['default']);
    var events = eventList
        .filter(function (e) {
            return dayjs__default['default'](event.start).isBetween(e.start, e.end, 'minute', '[)') ||
                dayjs__default['default'](e.start).isBetween(event.start, event.end, 'minute', '[)');
        })
        .sort(function (a, b) {
            if (dayjs__default['default'](a.start).isSame(b.start)) {
                return dayjs__default['default'](a.start).diff(a.end) < dayjs__default['default'](b.start).diff(b.end) ? -1 : 1;
            }
            else {
                return dayjs__default['default'](a.start).isBefore(b.start) ? -1 : 1;
            }
        });
    return events.indexOf(event);
}
function getColorForEventPosition(eventPosition) {
    switch (eventPosition % 5) {
        case 0:
            return Color.primary;
        case 1:
            return Color.orange;
        case 2:
            return Color.green;
        case 3:
            return Color.red;
        case 4:
            return Color.pink;
        default:
            return Color.primary;
    }
}
function getStyleForOverlappingEvent(eventCount, eventPosition, overlapOffset) {
    var overlapStyle = {};
    if (eventCount > 1) {
        var offset = overlapOffset;
        var start = eventPosition * offset;
        var zIndex = 100 + eventPosition;
        overlapStyle = {
            start: start + OVERLAP_PADDING,
            end: OVERLAP_PADDING,
            backgroundColor: getColorForEventPosition(eventPosition),
            zIndex: zIndex,
        };
    }
    return overlapStyle;
}
function getDatesInNextCustomDays(date, weekStartsOn, weekEndsOn, locale) {
    if (date === void 0) { date = new Date(); }
    if (weekStartsOn === void 0) { weekStartsOn = 0; }
    if (weekEndsOn === void 0) { weekEndsOn = 6; }
    if (locale === void 0) { locale = 'en'; }
    var subject = dayjs__default['default'](date);
    var subjectDOW = subject.day();
    var days = Array(weekDaysCount(weekStartsOn, weekEndsOn))
        .fill(0)
        .map(function (_, i) {
            return subject.add(i - subjectDOW + weekStartsOn, 'day').locale(locale);
        });
    return days;
}
function weekDaysCount(weekStartsOn, weekEndsOn) {
    if (weekEndsOn < weekStartsOn) {
        var daysCount = 1;
        var i = weekStartsOn;
        while (i !== weekEndsOn) {
            ++i;
            ++daysCount;
            if (i > 6) {
                i = 0;
            }
            if (daysCount > 7) {
                break;
            }
        }
        return daysCount;
    }
    if (weekEndsOn > weekStartsOn) {
        return weekEndsOn - weekStartsOn + 1;
    }
    return 1;
}

function useNow(enabled) {
    var _a = React__default['default'].useState(dayjs__default['default']()), now = _a[0], setNow = _a[1];
    React__default['default'].useEffect(function () {
        if (!enabled) {
            return function () { };
        }
        var pid = setInterval(function () { return setNow(dayjs__default['default']()); }, 60 * 1000);
        return function () { return clearInterval(pid); };
    }, [enabled]);
    return {
        now: now,
    };
}

var SWIPE_THRESHOLD = 50;
function usePanResponder(_a) {
    var onSwipeHorizontal = _a.onSwipeHorizontal;
    var _b = React__default['default'].useState(false), panHandled = _b[0], setPanHandled = _b[1];
    var panResponder = React__default['default'].useMemo(function () {
        return reactNative.PanResponder.create({
            onMoveShouldSetPanResponder: function (_, _a) {
                var dx = _a.dx, dy = _a.dy;
                return dx > 2 || dx < -2 || dy > 2 || dy < -2;
            },
            onPanResponderMove: function (_, _a) {
                var dy = _a.dy, dx = _a.dx;
                if (dy < -1 * SWIPE_THRESHOLD || SWIPE_THRESHOLD < dy || panHandled) {
                    return;
                }
                if (dx < -1 * SWIPE_THRESHOLD) {
                    onSwipeHorizontal && onSwipeHorizontal('LEFT');
                    setPanHandled(true);
                    return;
                }
                if (dx > SWIPE_THRESHOLD) {
                    onSwipeHorizontal && onSwipeHorizontal('RIGHT');
                    setPanHandled(true);
                    return;
                }
            },
            onPanResponderEnd: function () {
                setPanHandled(false);
            },
        });
    }, [panHandled, onSwipeHorizontal]);
    return panResponder;
}

function useCalendarTouchableOpacityProps(_a) {
    var event = _a.event, eventCellStyle = _a.eventCellStyle, _b = _a.injectedStyles, injectedStyles = _b === void 0 ? [] : _b, onPressEvent = _a.onPressEvent;
    var getEventStyle = React__default['default'].useMemo(function () { return (typeof eventCellStyle === 'function' ? eventCellStyle : function () { return eventCellStyle; }); }, [eventCellStyle]);
    var plainJsEvent = React__default['default'].useMemo(function () { return (__assign(__assign({}, event), { start: dayjs__default['default'](event.start).toDate(), end: dayjs__default['default'](event.end).toDate() })); }, [event]);
    var _onPress = React__default['default'].useCallback(function () {
        onPressEvent && onPressEvent(plainJsEvent);
    }, [onPressEvent, plainJsEvent]);
    var touchableOpacityProps = {
        delayPressIn: 20,
        key: event.start.toString(),
        style: __spreadArrays([commonStyles.eventCell], injectedStyles, [getEventStyle(plainJsEvent)]),
        onPress: _onPress,
        disabled: !onPressEvent,
    };
    return touchableOpacityProps;
}

var eventTimeStyle = [u['text-white'], u['text-xs']];
function DefaultCalendarEventRenderer(_a) {
    var touchableOpacityProps = _a.touchableOpacityProps, event = _a.event, _b = _a.showTime, showTime = _b === void 0 ? true : _b;
    return (React__namespace.createElement(reactNative.TouchableOpacity, __assign({}, touchableOpacityProps), dayjs__default['default'](event.end).diff(event.start, 'minute') < 32 && showTime ? (React__namespace.createElement(reactNative.Text, { style: eventTitleStyle },
        event.title,
        ",",
        React__namespace.createElement(reactNative.Text, { style: eventTimeStyle }, dayjs__default['default'](event.start).format('HH:mm')))) : (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement(reactNative.Text, { style: eventTitleStyle }, event.title),
        showTime && React__namespace.createElement(reactNative.Text, { style: eventTimeStyle }, formatStartEnd(event.start, event.end)),
        event.children && event.children))));
}

var getEventCellPositionStyle = function (start, end) {
    var relativeHeight = 100 * (1 / DAY_MINUTES) * dayjs__default['default'](end).diff(start, 'minute');
    var relativeTop = getRelativeTopInDay(dayjs__default['default'](start));
    return {
        height: relativeHeight + "%",
        top: relativeTop + "%",
    };
};
function _CalendarEvent(_a) {
    var event = _a.event, onPressEvent = _a.onPressEvent, eventCellStyle = _a.eventCellStyle, showTime = _a.showTime, _b = _a.eventCount, eventCount = _b === void 0 ? 1 : _b, _c = _a.eventOrder, eventOrder = _c === void 0 ? 0 : _c, _d = _a.overlapOffset, overlapOffset = _d === void 0 ? OVERLAP_OFFSET : _d, renderEvent = _a.renderEvent;
    var touchableOpacityProps = useCalendarTouchableOpacityProps({
        event: event,
        eventCellStyle: eventCellStyle,
        onPressEvent: onPressEvent,
        injectedStyles: [
            getEventCellPositionStyle(event.start, event.end),
            getStyleForOverlappingEvent(eventCount, eventOrder, overlapOffset),
            u['absolute'],
        ],
    });
    if (renderEvent) {
        return renderEvent(event, touchableOpacityProps);
    }
    return (React__namespace.createElement(DefaultCalendarEventRenderer, { event: event, showTime: showTime, touchableOpacityProps: touchableOpacityProps }));
}
var CalendarEvent = typedMemo(_CalendarEvent);

dayjs__default['default'].extend(isBetween__default['default']);
var styles = reactNative.StyleSheet.create({
    nowIndicator: {
        position: 'absolute',
        zIndex: 10000,
        backgroundColor: 'red',
        height: 2,
        width: '100%',
    },
});
var _HourGuideColumn = function (_a) {
    var cellHeight = _a.cellHeight, hour = _a.hour, ampm = _a.ampm;
    return (React__namespace.createElement(reactNative.View, { style: { height: cellHeight } },
        React__namespace.createElement(reactNative.Text, { style: guideTextStyle }, formatHour(hour, ampm))));
};
var HourGuideColumn = React__namespace.memo(_HourGuideColumn, function () { return true; });
var HourCell = function (_a) {
    var cellHeight = _a.cellHeight, onPress = _a.onPress, date = _a.date, hour = _a.hour;
    return (React__namespace.createElement(reactNative.TouchableWithoutFeedback, { onPress: function () { return onPress(date.hour(hour).minute(0)); } },
        React__namespace.createElement(reactNative.View, { style: [dateCellStyle, { height: cellHeight }] })));
};
function _CalendarBody(_a) {
    var containerHeight = _a.containerHeight, cellHeight = _a.cellHeight, dateRange = _a.dateRange, _b = _a.style, style = _b === void 0 ? {} : _b, onPressCell = _a.onPressCell, events = _a.events, onPressEvent = _a.onPressEvent, eventCellStyle = _a.eventCellStyle, ampm = _a.ampm, showTime = _a.showTime, scrollOffsetMinutes = _a.scrollOffsetMinutes, onSwipeHorizontal = _a.onSwipeHorizontal, hideNowIndicator = _a.hideNowIndicator, overlapOffset = _a.overlapOffset, isRTL = _a.isRTL, renderEvent = _a.renderEvent;
    var scrollView = React__namespace.useRef(null);
    var now = useNow(!hideNowIndicator).now;
    React__namespace.useEffect(function () {
        if (scrollView.current && scrollOffsetMinutes && reactNative.Platform.OS !== 'ios') {
            setTimeout(function () {
                if (scrollView && scrollView.current) {
                    scrollView.current.scrollTo({
                        y: (cellHeight * scrollOffsetMinutes) / 60,
                        animated: false,
                    });
                }
            }, reactNative.Platform.OS === 'web' ? 0 : 10);
        }
    }, [scrollView, scrollOffsetMinutes, cellHeight]);
    var panResponder = usePanResponder({
        onSwipeHorizontal: onSwipeHorizontal,
    });
    var _onPressCell = React__namespace.useCallback(function (date) {
        onPressCell && onPressCell(date.toDate());
    }, [onPressCell]);
    var _renderMappedEvent = function (event) { return (React__namespace.createElement(CalendarEvent, { key: "" + event.start + event.title, event: event, onPressEvent: onPressEvent, eventCellStyle: eventCellStyle, showTime: showTime, eventCount: getCountOfEventsAtEvent(event, events), eventOrder: getOrderOfEvent(event, events), overlapOffset: overlapOffset, renderEvent: renderEvent })); };
    return (React__namespace.createElement(reactNative.ScrollView, __assign({ style: [
                {
                    height: containerHeight - cellHeight * 3,
                },
                style,
            ], ref: scrollView, scrollEventThrottle: 32 }, (reactNative.Platform.OS !== 'web' ? panResponder.panHandlers : {}), { showsVerticalScrollIndicator: false, nestedScrollEnabled: true, contentOffset: reactNative.Platform.OS === 'ios' ? { x: 0, y: scrollOffsetMinutes } : { x: 0, y: 0 } }),
        React__namespace.createElement(reactNative.View, __assign({ style: [u['flex-1'], isRTL ? u['flex-row-reverse'] : u['flex-row']] }, (reactNative.Platform.OS === 'web' ? panResponder.panHandlers : {})),
            React__namespace.createElement(reactNative.View, { style: [u['bg-white'], u['z-20'], u['w-50']] }, hours.map(function (hour) { return (React__namespace.createElement(HourGuideColumn, { key: hour, cellHeight: cellHeight, hour: hour, ampm: ampm })); })),
            dateRange.map(function (date) { return (React__namespace.createElement(reactNative.View, { style: [u['flex-1'], u['overflow-hidden']], key: date.toString() },
                hours.map(function (hour) { return (React__namespace.createElement(HourCell, { key: hour, cellHeight: cellHeight, date: date, hour: hour, onPress: _onPressCell })); }),
                events
                    .filter(function (_a) {
                        var start = _a.start;
                        return dayjs__default['default'](start).isBetween(date.startOf('day'), date.endOf('day'), null, '[)');
                    })
                    .map(_renderMappedEvent),
                events
                    .filter(function (_a) {
                        var start = _a.start, end = _a.end;
                        return dayjs__default['default'](start).isBefore(date.startOf('day')) &&
                            dayjs__default['default'](end).isBetween(date.startOf('day'), date.endOf('day'), null, '[)');
                    })
                    .map(function (event) { return (__assign(__assign({}, event), { start: dayjs__default['default'](event.end).startOf('day') })); })
                    .map(_renderMappedEvent),
                events
                    .filter(function (_a) {
                        var start = _a.start, end = _a.end;
                        return dayjs__default['default'](start).isBefore(date.startOf('day')) &&
                            dayjs__default['default'](end).isAfter(date.endOf('day'));
                    })
                    .map(function (event) { return (__assign(__assign({}, event), { start: dayjs__default['default'](event.end).startOf('day'), end: dayjs__default['default'](event.end).endOf('day') })); })
                    .map(_renderMappedEvent),
                isToday(date) && !hideNowIndicator && (React__namespace.createElement(reactNative.View, { style: [styles.nowIndicator, { top: getRelativeTopInDay(now) + "%" }] })))); }))));
}
var CalendarBody = typedMemo(_CalendarBody);

function _CalendarEventForMonthView(_a) {
    var event = _a.event, onPressEvent = _a.onPressEvent, eventCellStyle = _a.eventCellStyle, renderEvent = _a.renderEvent;
    var touchableOpacityProps = useCalendarTouchableOpacityProps({
        event: event,
        eventCellStyle: eventCellStyle,
        onPressEvent: onPressEvent,
        injectedStyles: [u['mt-2']],
    });
    if (renderEvent) {
        return renderEvent(event, touchableOpacityProps);
    }
    return (React__namespace.createElement(reactNative.TouchableOpacity, __assign({}, touchableOpacityProps),
        React__namespace.createElement(reactNative.Text, { style: [u['text-white'], u['text-xs']] }, event.title)));
}
var CalendarEventForMonthView = typedMemo(_CalendarEventForMonthView);

dayjs__default['default'].extend(isBetween__default['default']);
function _CalendarBodyForMonthView(_a) {
    var containerHeight = _a.containerHeight, targetDate = _a.targetDate, _b = _a.style, style = _b === void 0 ? {} : _b, onPressCell = _a.onPressCell, events = _a.events, onPressEvent = _a.onPressEvent, eventCellStyle = _a.eventCellStyle, onSwipeHorizontal = _a.onSwipeHorizontal, hideNowIndicator = _a.hideNowIndicator, isRTL = _a.isRTL, renderEvent = _a.renderEvent, maxVisibleEventCount = _a.maxVisibleEventCount, weekStartsOn = _a.weekStartsOn;
    var now = useNow(!hideNowIndicator).now;
    var panResponder = usePanResponder({
        onSwipeHorizontal: onSwipeHorizontal,
    });
    var weeks = calendarize__default['default'](targetDate.toDate(), weekStartsOn);
    var cellHeight = containerHeight / 6 - 30;
    return (React__namespace.createElement(reactNative.View, __assign({ style: [
            {
                height: containerHeight,
            },
            u['flex-column'],
            u['flex-1'],
            style,
        ] }, panResponder.panHandlers), weeks.map(function (week, i) { return (React__namespace.createElement(reactNative.View, { key: i, style: [
            u['flex-1'],
            isRTL ? u['flex-row-reverse'] : u['flex-row'],
            { height: cellHeight },
        ] }, week
        .map(function (d) { return (d > 0 ? targetDate.date(d) : null); })
        .map(function (date, ii) { return (React__namespace.createElement(reactNative.TouchableOpacity, { onPress: function () { return date && onPressCell && onPressCell(date.toDate()); }, style: [
                    i > 0 && u['border-t'],
                    isRTL && ii > 0 && u['border-r'],
                    !isRTL && ii > 0 && u['border-l'],
                    u['border-gray-200'],
                    u['p-8'],
                    u['flex-1'],
                    u['flex-column'],
                    { height: cellHeight },
                ], key: ii },
            React__namespace.createElement(reactNative.Text, { style: [
                    { textAlign: 'center' },
                    date &&
                    date.format('YYYY-MM-DD') === now.format('YYYY-MM-DD') && {
                        color: Color.primary,
                    },
                ] }, date && date.format('D')),
            date &&
            events
                .filter(function (_a) {
                    var start = _a.start;
                    return dayjs__default['default'](start).isBetween(date.startOf('day'), date.endOf('day'), null, '[)');
                })
                .reduce(function (elements, event, index, events) { return __spreadArrays(elements, [
                    index > maxVisibleEventCount - 1 ? (React__namespace.createElement(reactNative.Text, { style: { fontSize: 11, marginTop: 2, fontWeight: 'bold' } },
                        events.length - 3,
                        " More")) : (React__namespace.createElement(CalendarEventForMonthView, { event: event, eventCellStyle: eventCellStyle, onPressEvent: onPressEvent, renderEvent: renderEvent })),
                ]); }, []))); }))); })));
}
var CalendarBodyForMonthView = typedMemo(_CalendarBodyForMonthView);

function _CalendarHeader(_a) {
    var dateRange = _a.dateRange, cellHeight = _a.cellHeight, _b = _a.style, style = _b === void 0 ? {} : _b, allDayEvents = _a.allDayEvents, isRTL = _a.isRTL, onPressDateHeader = _a.onPressDateHeader;
    var _onPress = React__namespace.useCallback(function (date) {
        onPressDateHeader && onPressDateHeader(date);
    }, [onPressDateHeader]);
    return (React__namespace.createElement(reactNative.View, { style: [
                u['border-b'],
                u['border-gray-100'],
                u['bg-white'],
                isRTL ? u['flex-row-reverse'] : u['flex-row'],
                style,
            ] },
        React__namespace.createElement(reactNative.View, { style: [u['bg-white'], u['z-10'], u['w-50'], u['border-b'], u['border-gray-100']] }),
        dateRange.map(function (date) {
            var _isToday = isToday(date);
            return (React__namespace.createElement(reactNative.TouchableOpacity, { style: [u['bg-white'], u['flex-1'], u['pt-2']], onPress: function () { return _onPress(date.toDate()); }, disabled: onPressDateHeader === undefined, key: date.toString() },
                React__namespace.createElement(reactNative.View, { style: [u['justify-between'], { height: cellHeight }] },
                    React__namespace.createElement(reactNative.Text, { style: [guideTextStyle, _isToday && u['text-primary']] }, date.format('ddd')),
                    React__namespace.createElement(reactNative.View, { style: _isToday
                            ? [
                                u['h-36'],
                                u['w-36'],
                                u['bg-primary'],
                                u['pb-6'],
                                u['rounded-full'],
                                u['items-center'],
                                u['justify-center'],
                                u['self-center'],
                                u['z-20'],
                            ]
                            : [u['mb-6']] },
                        React__namespace.createElement(reactNative.Text, { style: [
                                u['text-gray-800'],
                                u['text-2xl'],
                                u['text-center'],
                                _isToday && u['text-white'],
                                reactNative.Platform.OS === 'web' && _isToday && u['mt-6'],
                            ] }, date.format('D')))),
                React__namespace.createElement(reactNative.View, { style: [dateCellStyle, { height: cellHeight }] }, allDayEvents.map(function (event) {
                    if (!dayjs__default['default'](event.start).isSame(date, 'day')) {
                        return null;
                    }
                    return (React__namespace.createElement(reactNative.View, { style: commonStyles.eventCell, key: "" + event.start + event.title },
                        React__namespace.createElement(reactNative.Text, { style: eventTitleStyle }, event.title)));
                }))));
        })));
}
var CalendarHeader = typedMemo(_CalendarHeader);

function _CalendarHeaderForMonthView(_a) {
    var locale = _a.locale, isRTL = _a.isRTL, weekStartsOn = _a.weekStartsOn, _b = _a.style, style = _b === void 0 ? {} : _b;
    var dates = getDatesInWeek(new Date(), weekStartsOn, locale);
    var todayWeekNum = dayjs__default['default']().day();
    return (React__namespace.createElement(reactNative.View, { style: [
            u['flex-1'],
            u['border-b'],
            u['border-gray-100'],
            isRTL ? u['flex-row-reverse'] : u['flex-row'],
            style,
        ] }, dates.map(function (date) { return (React__namespace.createElement(reactNative.View, { style: { flex: 1, paddingTop: 2 }, key: date.toISOString() },
        React__namespace.createElement(reactNative.View, { style: { height: 30 } },
            React__namespace.createElement(reactNative.Text, { style: [guideTextStyle, todayWeekNum === date.day() && u['text-primary']] }, date.format('ddd'))))); })));
}
var CalendarHeaderForMonthView = typedMemo(_CalendarHeaderForMonthView);

function _Calendar(_a) {
    var events = _a.events, height = _a.height, _b = _a.ampm, ampm = _b === void 0 ? false : _b, date = _a.date, eventCellStyle = _a.eventCellStyle, _c = _a.locale, locale = _c === void 0 ? 'en' : _c, _d = _a.hideNowIndicator, hideNowIndicator = _d === void 0 ? false : _d, _e = _a.mode, mode = _e === void 0 ? 'week' : _e, overlapOffset = _a.overlapOffset, _f = _a.scrollOffsetMinutes, scrollOffsetMinutes = _f === void 0 ? 0 : _f, _g = _a.showTime, showTime = _g === void 0 ? true : _g, _h = _a.style, style = _h === void 0 ? {} : _h, _j = _a.swipeEnabled, swipeEnabled = _j === void 0 ? true : _j, _k = _a.weekStartsOn, weekStartsOn = _k === void 0 ? 0 : _k, _l = _a.isRTL, isRTL = _l === void 0 ? false : _l, onChangeDate = _a.onChangeDate, onPressCell = _a.onPressCell, onPressDateHeader = _a.onPressDateHeader, onPressEvent = _a.onPressEvent, renderEvent = _a.renderEvent, _m = _a.weekEndsOn, weekEndsOn = _m === void 0 ? 6 : _m, _o = _a.maxVisibleEventCount, maxVisibleEventCount = _o === void 0 ? 3 : _o;
    var _p = React__default['default'].useState(dayjs__default['default'](date)), targetDate = _p[0], setTargetDate = _p[1];
    React__default['default'].useEffect(function () {
        if (date) {
            setTargetDate(dayjs__default['default'](date));
        }
    }, [date]);
    var allDayEvents = React__default['default'].useMemo(function () { return events.filter(function (event) { return isAllDayEvent(event.start, event.end); }); }, [events]);
    var daytimeEvents = React__default['default'].useMemo(function () { return events.filter(function (event) { return !isAllDayEvent(event.start, event.end); }); }, [events]);
    var dateRange = React__default['default'].useMemo(function () {
        switch (mode) {
            case 'month':
                return getDatesInMonth(targetDate, locale);
            case 'week':
                return getDatesInWeek(targetDate, weekStartsOn, locale);
            case '3days':
                return getDatesInNextThreeDays(targetDate, locale);
            case 'day':
                return getDatesInNextOneDay(targetDate, locale);
            case 'custom':
                return getDatesInNextCustomDays(targetDate, weekStartsOn, weekEndsOn, locale);
            default:
                throw new Error('undefined mode');
        }
    }, [mode, targetDate, locale, weekEndsOn, weekStartsOn]);
    React__default['default'].useEffect(function () {
        if (onChangeDate) {
            onChangeDate([dateRange[0].toDate(), dateRange.slice(-1)[0].toDate()]);
        }
    }, [dateRange, onChangeDate]);
    var cellHeight = React__default['default'].useMemo(function () { return Math.max(height - 30, MIN_HEIGHT) / 24; }, [height]);
    var onSwipeHorizontal = React__default['default'].useCallback(function (direction) {
        if (!swipeEnabled) {
            return;
        }
        if ((direction === 'LEFT' && !isRTL) || (direction === 'RIGHT' && isRTL)) {
            setTargetDate(targetDate.add(modeToNum(mode, targetDate), 'day'));
        }
        else {
            setTargetDate(targetDate.add(modeToNum(mode, targetDate) * -1, 'day'));
        }
    }, [swipeEnabled, targetDate, mode, isRTL]);
    var commonProps = {
        cellHeight: cellHeight,
        dateRange: dateRange,
        style: style,
        isRTL: isRTL,
        mode: mode,
    };
    if (mode === 'month') {
        return (React__default['default'].createElement(React__default['default'].Fragment, null,
            React__default['default'].createElement(CalendarHeaderForMonthView, { locale: locale, isRTL: isRTL, weekStartsOn: weekStartsOn }),
            React__default['default'].createElement(CalendarBodyForMonthView, __assign({}, commonProps, { containerHeight: height, events: daytimeEvents, eventCellStyle: eventCellStyle, weekStartsOn: weekStartsOn, hideNowIndicator: hideNowIndicator, onPressCell: onPressCell, onPressEvent: onPressEvent, onSwipeHorizontal: onSwipeHorizontal, renderEvent: renderEvent, targetDate: targetDate, maxVisibleEventCount: maxVisibleEventCount }))));
    }
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(CalendarHeader, __assign({}, commonProps, { allDayEvents: allDayEvents, onPressDateHeader: onPressDateHeader })),
        React__default['default'].createElement(CalendarBody, __assign({}, commonProps, { containerHeight: height, events: daytimeEvents, eventCellStyle: eventCellStyle, hideNowIndicator: hideNowIndicator, overlapOffset: overlapOffset, scrollOffsetMinutes: scrollOffsetMinutes, ampm: ampm, showTime: showTime, onPressCell: onPressCell, onPressEvent: onPressEvent, onSwipeHorizontal: onSwipeHorizontal, renderEvent: renderEvent }))));
}
var Calendar = typedMemo(_Calendar);

exports.Calendar = Calendar;
exports.DefaultCalendarEventRenderer = DefaultCalendarEventRenderer;
exports.default = Calendar;
//# sourceMappingURL=index.js.map
