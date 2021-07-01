import { EventCellStyle, EventRenderer, ICalendarEvent } from '../interfaces';
interface CalendarEventProps<T> {
    event: ICalendarEvent<T>;
    onPressEvent?: (event: ICalendarEvent<T>) => void;
    eventCellStyle?: EventCellStyle<T>;
    renderEvent?: EventRenderer<T>;
}
declare function _CalendarEventForMonthView<T>({ event, onPressEvent, eventCellStyle, renderEvent, }: CalendarEventProps<T>): JSX.Element;
export declare const CalendarEventForMonthView: typeof _CalendarEventForMonthView;
export {};
