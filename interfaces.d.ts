import { ReactElement } from 'react';
import { RecursiveArray, ViewStyle } from 'react-native';
interface ICalendarEventBase<T> {
    start: Date;
    end: Date;
    title: string;
    children?: ReactElement | null;
    eventRenderer?: (event: ICalendarEvent<T>, touchableOpacityProps: CalendarTouchableOpacityProps) => ReactElement | null;
}
export declare type CalendarTouchableOpacityProps = {
    delayPressIn: number;
    key: string;
    style: RecursiveArray<ViewStyle | undefined> | ViewStyle;
    onPress: () => void;
    disabled: boolean;
};
export declare type ICalendarEvent<T = any> = ICalendarEventBase<T> & T;
export declare type Mode = '3days' | 'week' | 'day' | 'custom' | 'month';
export declare type EventCellStyle<T> = ViewStyle | ((event: ICalendarEvent<T>) => ViewStyle);
export declare type WeekNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export declare type HasDateRange = [Date, Date];
export declare type DateRangeHandler = ([start, end]: HasDateRange) => void;
export declare type HorizontalDirection = 'RIGHT' | 'LEFT';
export declare type EventRenderer<T> = (event: ICalendarEvent<T>, touchableOpacityProps: CalendarTouchableOpacityProps) => JSX.Element;
export declare type DayJSConvertedEvent<T = any> = ICalendarEvent<T>;
export declare type Event<T = any> = ICalendarEvent<T>;
export {};
