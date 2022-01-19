import { ElementRef, TemplateRef } from '@angular/core';
import { MbscCalendarEvent, MbscNewEventData, MbscResource } from '../../core/components/eventcalendar/eventcalendar';
import { SchedulerBase } from '../../core/components/eventcalendar/scheduler/scheduler';
import { IDailyEvents } from '../../core/components/eventcalendar/shared/schedule-timeline-base';
import { DateType, ITimezonePlugin } from '../../core/util/datetime';
export declare class MbscScheduler extends SchedulerBase {
    vScrollCont: ElementRef;
    vGridCont: ElementRef;
    vHeaderCont: ElementRef;
    vAllDayCont: ElementRef;
    vTimeCont: ElementRef;
    allDayText: string;
    clickToCreate: boolean | 'single' | 'double';
    colorsMap: {
        [key: number]: MbscCalendarEvent[];
    };
    dataTimezone: string;
    dateFormat: string;
    dateFormatLong: string;
    dayNamesMin: string[];
    dayNamesShort: string[];
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    events: MbscCalendarEvent[];
    displayTimezone: string;
    dragTimeStep: number;
    dragToCreate: boolean;
    dragToMove: boolean;
    dragToResize: boolean;
    endDay: number;
    endTime: string;
    eventMap: {
        [key: number]: MbscCalendarEvent[];
    };
    eventContentTemplate: TemplateRef<any>;
    eventOrder: (event1: MbscCalendarEvent, event2: MbscCalendarEvent) => number;
    eventTemplate: TemplateRef<any>;
    exclusiveEndDates: boolean;
    extendDefaultEvent: (args: MbscNewEventData) => MbscCalendarEvent;
    externalDrop: boolean;
    firstDay: number;
    getDay: (d: Date) => number;
    getDate: (y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number) => number;
    getMonth: (d: Date) => number;
    getYear: (d: Date) => number;
    groupBy: 'date' | 'resource';
    height: number;
    invalidateEvent: 'start-end' | 'strict';
    invalidsMap: {
        [key: number]: MbscCalendarEvent[];
    };
    maxDate: number;
    minDate: number;
    newEventText: string;
    refDate: DateType;
    resources: MbscResource[] | null | undefined;
    resourceTemplate: TemplateRef<any>;
    scroll: number;
    selected: number;
    showAllDay: boolean;
    showDays: boolean;
    showEventTooltip: boolean;
    size: number;
    startDay: number;
    startTime: string;
    timeCellStep: number;
    timeFormat: string;
    timeLabelStep: number;
    timezonePlugin: ITimezonePlugin;
    type: 'week' | 'day';
    width: number;
    onCellClick: (args: any) => void;
    onCellDoubleClick: (args: any) => void;
    onCellRightClick: (args: any) => void;
    onEventClick: (args: any) => void;
    onEventDoubleClick: (args: any) => void;
    onEventRightClick: (args: any) => void;
    onEventHoverIn: (args: any) => void;
    onEventHoverOut: (args: any) => void;
    onEventDelete: (args: any) => void;
    onEventDragEnd: (args: any) => void;
    onWeekDayClick: (args: any) => void;
    _defId: string;
    _getCellDate(timestamp: number, ms: number): Date;
    _getDayKey(index: number, day: any): number;
    _getEventKey(index: number, data: any): any;
    _getDragKey(dayEvents: IDailyEvents): string;
    protected _mounted(): void;
}