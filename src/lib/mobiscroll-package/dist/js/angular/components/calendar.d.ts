import { EventEmitter } from '@angular/core';
import { CalendarBase } from '../../core/components/calendar/calendar';
import { ICalendarViewHost } from '../../core/shared/calendar-view/calendar-view';
import { MbscInstanceService } from '../shared/instance.service';
/**
 * The Calendar component.
 *
 * Usage:
 *
 * ```
 * <mbsc-calendar></mbsc-calendar>
 * ```
 */
export declare class MbscCalendar extends CalendarBase implements ICalendarViewHost {
    _hours: number[];
    vCal: any;
    onCancel: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    _instanceService: MbscInstanceService;
    protected _ctor(): void;
    protected _mounted(): void;
}
