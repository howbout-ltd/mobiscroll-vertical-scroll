import { TimeIndicatorBase } from '../../core/components/eventcalendar/scheduler/time-indicator';
import { ITimezonePlugin } from '../../core/util/datetime';
export declare class MbscTimeIndicator extends TimeIndicatorBase {
    cssClass: string;
    displayedTime: number;
    displayedDays: number;
    displayTimezone: string;
    firstDay: Date;
    orientation: 'x' | 'y';
    rtl: boolean;
    scheduleType: 'week' | 'day';
    showDayIndicator: boolean;
    startTime: number;
    theme: string;
    timeFormat: string;
    timezonePlugin: ITimezonePlugin;
}
