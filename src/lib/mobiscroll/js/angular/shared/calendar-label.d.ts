import { TemplateRef } from '@angular/core';
import { MbscResource } from '../../core/components/eventcalendar/eventcalendar';
import { CalendarLabelBase } from '../../core/shared/calendar-view/calendar-label';
import { ITimezonePlugin } from '../../core/util/datetime';
/** @hidden */
export declare class MbscCalendarLabel extends CalendarLabelBase {
    contentTemplate: TemplateRef<any>;
    count: string;
    dataTimezone: string;
    date: number;
    displayTimezone: string;
    drag: boolean;
    hidden: boolean;
    firstDay: number;
    event: any;
    editMode: boolean;
    exclusiveEndDates: boolean;
    inactive: boolean;
    isActiveMonth: boolean;
    resize: boolean;
    hideLabel: boolean;
    id: any;
    isPicker: boolean;
    isUpdate: boolean;
    lastDay: Date;
    more: string;
    resourcesMap?: {
        [key: number]: MbscResource;
    };
    showEventTooltip: boolean;
    showText: boolean;
    template: TemplateRef<any>;
    timeFormat: string;
    timezonePlugin: ITimezonePlugin;
    onClick: (args: any) => void;
    onDoubleClick: (args: any) => void;
    onRightClick: (args: any) => void;
    onHoverIn: (args: any) => void;
    onHoverOut: (args: any) => void;
    onDelete: (args: any) => void;
    onDragStart: (args: any) => void;
    onDragMove: (args: any) => void;
    onDragEnd: (args: any) => void;
    onDragModeOn: (args: any) => void;
    onDragModeOff: (args: any) => void;
}
