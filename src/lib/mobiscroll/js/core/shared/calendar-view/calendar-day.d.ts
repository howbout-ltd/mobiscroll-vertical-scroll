import { BaseComponent, IBaseProps } from '../../base';
import { ITimezonePlugin } from '../../util/datetime';
import { ICalendarLabelData, MbscCalendarMarked } from './calendar-view';
import { ILabelDragData, ILabelDragDataSet, MbscCalendarEvent, MbscCalendarEventData, MbscResource } from './calendar-view.types';
/** @hidden */
export interface ICalendarDayProps extends IBaseProps {
    active?: boolean;
    colors?: any;
    clickToCreate?: boolean | 'double' | 'single';
    date: number;
    day?: string;
    dayWidths?: number[];
    dayIndex?: number;
    disabled?: boolean;
    display?: boolean;
    dataTimezone?: string;
    displayTimezone?: string;
    dragToCreate?: boolean;
    dragToMove?: boolean;
    dragToResize?: boolean;
    exclusiveEndDates?: boolean;
    firstDay?: number;
    hasMarks?: boolean;
    hoverEnd?: number;
    hoverStart?: number;
    isActiveMonth?: boolean;
    isPicker?: boolean;
    labels?: ICalendarLabelData;
    dragData?: ILabelDragData;
    marks?: MbscCalendarMarked[];
    month?: string;
    monthShort?: string;
    outer?: boolean;
    rangeEnd?: number;
    rangeStart?: number;
    resourcesMap?: {
        [key: number]: MbscResource;
    };
    rtl?: boolean;
    selected?: boolean;
    showEventTooltip?: boolean;
    text?: string | number;
    theme?: string;
    timeFormat?: string;
    timezonePlugin?: ITimezonePlugin;
    type?: 'day' | 'month' | 'year';
    eventText?: string;
    eventsText?: string;
    todayText?: string;
    dayTemplate?(args: MbscCalendarDayData): any;
    dayContentTemplate?(args: MbscCalendarDayData): any;
    onDayClick?(args: any, inst: any): void;
    onDayDoubleClick?(args: any, inst: any): void;
    onDayRightClick?(args: any, inst: any): void;
    onHoverIn?(args: any, inst: any): void;
    onHoverOut?(args: any, inst: any): void;
    onLabelClick?(args: any, inst: any): void;
    onLabelDoubleClick?(args: any, inst: any): void;
    onLabelHoverIn?(args: any, inst: any): void;
    onLabelHoverOut?(args: any, inst: any): void;
    onLabelRightClick?(args: any, inst: any): void;
    onLabelDelete?(args: any, inst: any): void;
    onLabelUpdateStart?(args: any): void;
    onLabelUpdateMove?(args: any): void;
    onLabelUpdateEnd?(args: any): void;
    onLabelUpdateModeOn?(args: any): void;
    onLabelUpdateModeOff?(args: any): void;
    renderDay?(args: MbscCalendarDayData): any;
    renderDayContent?(args: MbscCalendarDayData): any;
    renderLabel?(event: MbscCalendarEventData): any;
    renderLabelContent?(event: MbscCalendarEventData): any;
}
/** @hidden */
export interface ICalendarDayState {
    hasFocus?: boolean;
    hasHover?: boolean;
    dragShadow?: any;
}
export interface MbscCalendarDayData {
    date: Date;
    events?: MbscCalendarEvent[];
    selected?: boolean;
    resource?: number | string;
}
/** @hidden */
export declare class CalendarDayBase extends BaseComponent<ICalendarDayProps, ICalendarDayState> {
    _ariaLabel: string;
    _cssClass: string;
    _data: MbscCalendarDayData;
    _cellStyles: any;
    _circleStyles: any;
    _todayClass: string;
    _draggedLabel: ILabelDragDataSet | undefined;
    _draggedLabelOrig: ILabelDragDataSet | undefined;
    /** Contains the width of the label container element
     * It is used in determining the width of the labels in percentage
     * relative to this element. It is queried on the fly bc. at mounting time the width differs
     * from the later actual value.
     */
    private _labelContWidth;
    private _unlisten;
    _onClick: (ev: any) => void;
    _onRightClick: (ev: any) => void;
    _onLabelClick: (args: any) => void;
    _onLabelDoubleClick: (args: any) => void;
    _onLabelRightClick: (args: any) => void;
    _onLabelHoverIn: (args: any) => void;
    _onLabelHoverOut: (args: any) => void;
    /**
     * Returns the width of a label
     * @param {number} labelWidth Width of the label in percent - how many day widths does it expand (for 3 day event it is 300%)
     */
    _width: (labelWidth: number) => string;
    protected _mounted(): void;
    protected _render(s: ICalendarDayProps, state: ICalendarDayState): void;
    protected _destroy(): void;
    private _cellClick;
    private _labelClick;
}
