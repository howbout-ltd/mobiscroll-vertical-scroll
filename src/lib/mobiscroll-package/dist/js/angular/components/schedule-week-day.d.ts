import { TemplateRef } from '@angular/core';
import { MbscCalendarEvent } from '../../core/components/eventcalendar/eventcalendar';
import { WeekDayBase } from '../../core/components/eventcalendar/scheduler/week-day';
export declare class MbscWeekDay extends WeekDayBase {
    day: string;
    dayNames: string[];
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    events: MbscCalendarEvent[];
    isToday: boolean;
    largeNames: boolean;
    resource: number | string;
    rtl: boolean;
    selectable: boolean;
    selected: boolean;
    theme: string;
    timestamp: string;
    onClick: any;
}
