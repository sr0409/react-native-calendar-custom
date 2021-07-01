import { CalendarTouchableOpacityProps, ICalendarEvent } from '../interfaces';
interface DefaultCalendarEventRendererProps<T> {
    touchableOpacityProps: CalendarTouchableOpacityProps;
    event: ICalendarEvent<T>;
    showTime?: boolean;
}
export declare function DefaultCalendarEventRenderer<T>({ touchableOpacityProps, event, showTime, }: DefaultCalendarEventRendererProps<T>): JSX.Element;
export {};
