import { BaseComponent, IBaseProps } from '../../../base';
import { DateType, ITimezonePlugin } from '../../../util/datetime';
import { MbscCalendarEvent, MbscCalendarEventData, MbscNewEventData, MbscResource, MbscSlot } from '../eventcalendar';
export declare const DEF_ID = "mbsc-def";
export interface ISTOptions extends IBaseProps {
    allDayText?: string;
    clickToCreate?: boolean | 'single' | 'double';
    colorsMap?: {
        [key: number]: MbscCalendarEvent[];
    };
    dayNames?: string[];
    dayNamesMin?: string[];
    dayNamesShort?: string[];
    dataTimezone?: string;
    dateFormat?: string;
    dateFormatLong?: string;
    displayTimezone?: string;
    dragTimeStep?: number;
    dragToCreate?: boolean;
    dragToMove?: boolean;
    dragToResize?: boolean;
    endDay: number;
    endTime?: string;
    eventMap?: {
        [key: string]: MbscCalendarEvent[];
    };
    eventOrder?: (event1: MbscCalendarEvent, event2: MbscCalendarEvent) => number;
    exclusiveEndDates?: boolean;
    extendDefaultEvent?: (args: MbscNewEventData) => MbscCalendarEvent;
    externalDrop?: boolean;
    firstDay?: number;
    getDay?: (d: Date) => number;
    getDate?: (y: number, m: number, d: number, h?: number, i?: number, s?: number, u?: number) => Date;
    getMonth?: (d: Date) => number;
    getYear?: (d: Date) => number;
    groupBy?: 'date' | 'resource';
    height?: number;
    invalidateEvent?: 'start-end' | 'strict';
    invalidsMap?: {
        [key: number]: MbscCalendarEvent[];
    };
    eventList?: boolean;
    maxDate: number;
    minDate: number;
    monthNames?: string[];
    monthNamesShort?: string[];
    nextIcon?: string;
    nextIconRtl?: string;
    downIcon?: string;
    newEventText?: string;
    refDate?: DateType;
    resources?: MbscResource[] | null | undefined;
    rowHeight?: 'variable' | 'equal';
    scroll: number;
    selected: number;
    showAllDay?: boolean;
    showDays?: boolean;
    showEventTooltip?: boolean;
    size?: number;
    slots?: MbscSlot[] | null | undefined;
    startDay: number;
    startTime?: string;
    timeCellStep: number;
    timeFormat?: string;
    timeLabelStep: number;
    timezonePlugin?: ITimezonePlugin;
    type: 'week' | 'day' | 'month';
    width?: number;
    onCellClick(args: any): void;
    onCellDoubleClick(args: any): void;
    onCellRightClick(args: any): void;
    onEventClick(args: any): void;
    onEventDoubleClick(args: any): void;
    onEventRightClick(args: any): void;
    onEventDelete(args: any): void;
    onEventHoverIn(args: any): void;
    onEventHoverOut(args: any): void;
    onEventDragEnd(args: any): boolean;
    renderEventContent?(event: MbscCalendarEventData): any;
    renderEvent?(event: MbscCalendarEventData): any;
    renderResource?(resource: MbscResource): any;
    renderResourceHeader?(): any;
}
export interface ISTState {
    cellHeight?: number;
    cellWidth?: number;
    dayNameWidth?: number;
    dragData?: IDragData;
    eventHeight?: number;
    hasScrollX?: boolean;
    hasScrollY?: boolean;
    isTouchDrag?: boolean;
}
export interface IDailyColors {
    allDay?: MbscCalendarEventData;
    colors: MbscCalendarEventData[];
}
export interface IDailyEventData {
    event: MbscCalendarEventData;
    showText?: boolean;
}
export interface IDailyEvents {
    allDay: IDailyEventData[];
    day: number;
    events: {
        [key: number]: IDailyEventData[];
    };
    key: string;
    lastDay: number;
    resource: number | string;
    timestamp: number;
}
export interface IDailyInvalids {
    allDay?: MbscCalendarEventData;
    invalids: MbscCalendarEventData[];
}
export interface IEventPosData {
    cssClass?: string;
    start?: string;
    startDate: Date;
    end?: string;
    endDate: Date;
    position?: {
        height?: string;
        left?: string;
        right?: string;
        top?: string;
        width?: string;
    };
}
export interface IDragData {
    /**
     * The dates of the event which is dragged.
     * We need to display the event boxes in case of touch drag, when we enter drag mode,
     * and continue to display during drag, but invisible, otherwise, if we loose the
     * element on which the touch started, the touch events will stop firing.
     */
    originDates?: {
        [key: string]: MbscCalendarEventData;
    };
    /** The dates of the dragged event. */
    draggedDates?: {
        [key: string]: MbscCalendarEventData;
    };
    /** The dragged event, displayed during dr??ag. */
    draggedEvent?: MbscCalendarEventData;
    resource?: number | string;
    slot?: number | string;
}
interface IWeekDayData {
    date?: string;
    dateKey: string;
    dateObj: Date;
    day: number;
    last?: boolean;
    month: string;
    timestamp: number;
}
/** @hidden */
export declare function getResourceMap(eventsMap: {
    [key: string]: MbscCalendarEvent[];
}, resources: MbscResource[], slots: MbscSlot[], hasResources: boolean, hasSlots: boolean): {};
/** @hidden */
export declare function getCellDate(timestamp: number, ms: number): Date;
/** @hidden */
export declare class STBase<PropType extends ISTOptions, StateType extends ISTState> extends BaseComponent<PropType, StateType> {
    _colors: {
        [key: string]: {
            [key: string]: {
                [key: string]: IDailyColors;
            };
        };
    };
    _dayNames: string[];
    /** Number of displayed days */
    _days: number;
    _dayRefs: Array<{
        day?: HTMLElement;
        month?: HTMLElement;
        monthDays?: number;
        monthIndex: number;
    }>;
    _displayTime: boolean;
    _events: IDailyEvents[][];
    _firstDay: Date;
    _invalids: {
        [key: string]: {
            [key: string]: {
                [key: string]: IDailyInvalids;
            };
        };
    };
    _lastDay: Date;
    _endCellStyle: {
        height?: string;
        width?: string;
    } | undefined;
    /** Displayed end time as milliseconds since midnight */
    _endTime: number;
    _eventHeight: number;
    /** Number of event rows for a resource, used for row height calculation */
    _eventRows: {
        [key: number]: number;
    };
    _groupByResource: boolean;
    _hasHierarchy: boolean;
    _hasSlots: boolean;
    _hasSticky: boolean;
    _headerClass: string;
    _isMulti: boolean;
    _isSingleResource: boolean;
    _isTimeline: boolean;
    _selectedDay: number;
    _setRowHeight: boolean;
    _showTimeIndicator: boolean;
    _startCellStyle: {
        height?: string;
        width?: string;
    } | undefined;
    _stepCell: number;
    _stepLabel: number;
    /** Displayed start time as milliseconds since midnight */
    _startTime: number;
    /** Contains the resources flatten out into one level */
    _resources: MbscResource[];
    _slots: MbscSlot[];
    /** Displayed time as milliseconds */
    _time: number;
    /** Array containing the hours to display */
    _times: number[];
    _timesBetween: number[];
    /** Array containing the week days to display */
    _weekDays: IWeekDayData[];
    _hierarchyChange: boolean;
    protected _gridCont: HTMLElement | null;
    protected _headerCont: HTMLElement | null;
    protected _resCont: HTMLElement | null;
    protected _scrollCont: HTMLElement | null;
    protected _shouldAnimateScroll: boolean | undefined;
    protected _shouldCheckSize: boolean;
    protected _shouldScroll: boolean;
    private _allDayTop;
    private _colHeight;
    private _colWidth;
    private _gridContBottom;
    private _gridContLeft;
    private _gridContRight;
    private _gridContTop;
    private _gridLeft;
    private _gridRight;
    private _gridTop;
    private _onCalendar;
    private _resWidth;
    private _scrollTimer;
    private _scrollX;
    private _scrollY;
    private _tempAllDay;
    private _tempEnd;
    private _tempEvent;
    private _tempStart;
    private _tempResource;
    private _tempSlot;
    private _rowTops;
    private _touchTimer;
    private _unlisten;
    private _unsubscribe;
    _isToday(d: number): boolean;
    _formatTime(v: number): string;
    _onScroll: () => void;
    _onEventDragModeOn: (args: any) => void;
    _onEventDragModeOff: () => void;
    _calcGridDimensions: () => void;
    _onEventDragStart: (args: any) => void;
    _onEventDragMove: (args: any) => void;
    _onEventDragEnd: (args: any) => void;
    _onExternalDrag: (args: any) => void;
    protected _getEventPos(event: MbscCalendarEventData, day: Date): IEventPosData | undefined;
    protected _getEventData(event: MbscCalendarEvent, d: number, resource?: MbscResource): MbscCalendarEventData;
    protected _getEvents(firstDay: Date, lastDay: Date, eventMap: {
        [key: string]: MbscCalendarEvent[];
    }): IDailyEvents[][];
    protected _getInvalids(firstDay: Date, lastDay: Date, invalidMap: {
        [key: string]: MbscCalendarEvent[];
    }): {
        [key: string]: {
            [key: string]: {
                [key: string]: IDailyInvalids;
            };
        };
    };
    protected _getColors(firstDay: Date, lastDay: Date, colorMap: {
        [key: string]: MbscCalendarEvent[];
    }): {
        [key: string]: {
            [key: string]: {
                [key: string]: IDailyColors;
            };
        };
    };
    protected _render(s: ISTOptions, state: ISTState): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    private _getDragDates;
    /**
     * Returns a date with the time based on the coordinates on the grid.
     * @param day We're on this day.
     * @param posX X coord - for timeline.
     * @param posY Y coord - for schedule.
     * @param dayIndex Index of the day on the timeline.
     * @param timeStep Time step in minutes.
     */
    private _getGridTime;
    private _scrollToTime;
    private _flattenResources;
}
export {};
