import { ElementRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { EventcalendarBase, MbscCalendarEvent, MbscCalendarEventData, MbscCellClickEvent, MbscCellHoverEvent, MbscEventcalendarOptions, MbscEventcalendarState, MbscEventcalendarView, MbscEventClickEvent, MbscEventCreatedEvent, MbscEventCreateEvent, MbscEventCreateFailedEvent, MbscEventDeletedEvent, MbscEventDeleteEvent, MbscEventUpdatedEvent, MbscEventUpdateEvent, MbscEventUpdateFailedEvent, MbscLabelClickEvent, MbscNewEventData, MbscPageChangeEvent, MbscPageLoadedEvent, MbscPageLoadingEvent, MbscResource, MbscSelectedDateChangeEvent, MbscSlot } from '../../core/components/eventcalendar/eventcalendar';
import { ICalendarViewHost, MbscCalendarColor, MbscCalendarLabel, MbscCalendarMarked } from '../../core/shared/calendar-view/calendar-view';
import { DateType, ITimezonePlugin } from '../../core/util/datetime';
import { MbscCalendarView } from '../shared/calendar-view';
import { MbscInstanceService } from '../shared/instance.service';
import { MbscListItem } from './list-item';
export declare class MbscEventListService {
    days: any;
}
export declare class MbscEventListDayDirective implements OnInit {
    private el;
    private els;
    timestamp: number;
    constructor(el: ElementRef, els: MbscEventListService);
    ngOnInit(): void;
}
export declare class MbscEventListItem extends MbscListItem {
    eventData: MbscCalendarEventData;
    showColor: boolean;
    template: TemplateRef<any>;
    eventContentTemplate: TemplateRef<any>;
}
/**
 * The Eventcalendar component.
 *
 * Usage:
 *
 * ```
 * <mbsc-eventcalendar></mbsc-eventcalendar>
 * ```
 */
export declare class MbscEventcalendar extends EventcalendarBase implements ICalendarViewHost {
    _hours: number[];
    _els: MbscEventListService;
    _instanceService: MbscInstanceService;
    vList: ElementRef;
    _calendarView: MbscCalendarView;
    actionableEvents: boolean;
    agendaTemplate: TemplateRef<any>;
    calendarSystem: any;
    clickToCreate: boolean | 'double' | 'single';
    colors: MbscCalendarColor[];
    data: MbscCalendarEvent[];
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    dataTimezone: string;
    displayTimezone: string;
    dragTimeStep: number;
    dragToCreate: boolean;
    dragToResize: boolean;
    dragToMove: boolean;
    eventContentTemplate: TemplateRef<any>;
    eventOrder: (event1: MbscCalendarEvent, event2: MbscCalendarEvent) => number;
    eventTemplate: TemplateRef<any>;
    exclusiveEndDates: boolean;
    extendDefaultEvent: (args: MbscNewEventData) => MbscCalendarEvent;
    externalDrop: boolean;
    groupBy: 'date' | 'resource';
    headerTemplate: TemplateRef<any>;
    height: number | string;
    invalid: any[];
    invalidateEvent: 'start-end' | 'strict';
    labelContentTemplate: TemplateRef<any>;
    labels: MbscCalendarLabel[];
    labelTemplate: TemplateRef<any>;
    marked: MbscCalendarMarked[];
    max: DateType;
    min: DateType;
    mousewheel: boolean;
    refDate: DateType;
    resources: MbscResource[] | null | undefined;
    resourceHeaderTemplate: TemplateRef<any>;
    resourceTemplate: TemplateRef<any>;
    slots: MbscSlot[] | null | undefined;
    slotTemplate: TemplateRef<any>;
    scheduleEventContentTemplate: TemplateRef<any>;
    scheduleEventTemplate: TemplateRef<any>;
    selectedDate: DateType;
    selectedDateChange: EventEmitter<DateType>;
    showControls: boolean;
    showEventTooltip: boolean;
    valid: any[];
    view: MbscEventcalendarView;
    width: number | string;
    allDayText: string;
    amText: string;
    dateFormat: string;
    dateFormatLong: string;
    dayNames: string[];
    dayNamesMin: string[];
    dayNamesShort: string[];
    eventsText: string;
    eventText: string;
    firstDay: number;
    monthNames: string[];
    monthNamesShort: string[];
    moreEventsPluralText: string;
    moreEventsText: string;
    newEventText: string;
    noEventsText: string;
    pmText: string;
    timeFormat: string;
    timezonePlugin: ITimezonePlugin;
    onCellClick: EventEmitter<MbscCellClickEvent>;
    onCellDoubleClick: EventEmitter<MbscCellClickEvent>;
    onCellRightClick: EventEmitter<MbscCellClickEvent>;
    onCellHoverIn: EventEmitter<MbscCellHoverEvent>;
    onCellHoverOut: EventEmitter<MbscCellHoverEvent>;
    onEventClick: EventEmitter<MbscEventClickEvent>;
    onEventDoubleClick: EventEmitter<MbscEventClickEvent>;
    onEventRightClick: EventEmitter<MbscEventClickEvent>;
    onEventHoverIn: EventEmitter<MbscEventClickEvent>;
    onEventHoverOut: EventEmitter<MbscEventClickEvent>;
    onEventCreate: EventEmitter<MbscEventCreateEvent>;
    onEventCreated: EventEmitter<MbscEventCreatedEvent>;
    onEventDelete: EventEmitter<MbscEventDeleteEvent>;
    onEventDeleted: EventEmitter<MbscEventDeletedEvent>;
    onEventUpdate: EventEmitter<MbscEventUpdateEvent>;
    onEventUpdated: EventEmitter<MbscEventUpdatedEvent>;
    onEventCreateFailed: EventEmitter<MbscEventCreateFailedEvent>;
    onEventUpdateFailed: EventEmitter<MbscEventUpdateFailedEvent>;
    onLabelClick: EventEmitter<MbscLabelClickEvent>;
    onPageChange: EventEmitter<MbscPageChangeEvent>;
    onPageLoaded: EventEmitter<MbscPageLoadedEvent>;
    onPageLoading: EventEmitter<MbscPageLoadingEvent>;
    onSelectedDateChange: EventEmitter<MbscSelectedDateChangeEvent>;
    protected _ctor(): void;
    protected _mounted(): void;
    protected _render(s: MbscEventcalendarOptions, state: MbscEventcalendarState): void;
    protected _updated(): void;
}
