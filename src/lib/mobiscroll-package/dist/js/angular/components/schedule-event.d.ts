import { EventEmitter, TemplateRef } from '@angular/core';
import { ScheduleEventBase } from '../../core/components/eventcalendar/scheduler/schedule-event';
import { ITimezonePlugin } from '../../core/util/datetime';
export declare class MbscScheduleEvent extends ScheduleEventBase {
    contentTemplate?: TemplateRef<any>;
    displayTimezone: string;
    drag: boolean;
    event: any;
    eventHeight: number;
    exclusiveEndDates: boolean;
    gridEndTime: number;
    gridStartTime: number;
    hidden: boolean;
    inactive: boolean;
    isDrag: boolean;
    isListing: boolean;
    isTimeline: boolean;
    lastDay: Date;
    resize: boolean;
    resource: number | string;
    rtl: boolean;
    slot: number | string;
    template?: TemplateRef<any>;
    theme: string;
    timestamp: number;
    timezonePlugin: ITimezonePlugin;
    onClick: EventEmitter<any>;
    onDoubleClick: EventEmitter<any>;
    onRightClick: EventEmitter<any>;
    onHoverIn: EventEmitter<any>;
    onHoverOut: EventEmitter<any>;
    onDelete: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDragModeOff: EventEmitter<any>;
    onDragModeOn: EventEmitter<any>;
    onDragMove: EventEmitter<any>;
    onDragStart: EventEmitter<any>;
}
