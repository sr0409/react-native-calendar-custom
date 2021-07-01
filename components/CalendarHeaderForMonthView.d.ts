import { ViewStyle } from 'react-native';
import { WeekNum } from '../interfaces';
interface CalendarHeaderProps {
    weekStartsOn: WeekNum;
    isRTL: boolean;
    locale: string;
    style?: ViewStyle;
}
declare function _CalendarHeaderForMonthView({ locale, isRTL, weekStartsOn, style, }: CalendarHeaderProps): JSX.Element;
export declare const CalendarHeaderForMonthView: typeof _CalendarHeaderForMonthView;
export {};
