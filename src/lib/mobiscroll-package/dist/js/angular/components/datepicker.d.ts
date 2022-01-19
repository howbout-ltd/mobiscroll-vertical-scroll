import { ElementRef, EventEmitter, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import { DatepickerBase, MbscDatepickerOptions, MbscDatepickerState } from '../../core/components/datepicker/datepicker';
import { DisplayType, MbscPopupButton } from '../../core/components/popup/popup';
import { MbscInput } from './input';
import { MbscPopup } from './popup';
export declare class MbscTplDirective {
    vcr: ViewContainerRef;
    constructor(vcr: ViewContainerRef);
}
export declare class MbscDatepickerBase extends DatepickerBase {
    calendarHeaderTemplate: TemplateRef<any>;
    calendarScroll: 'horizontal' | 'vertical';
    calendarSize: number;
    calendarSystem: any;
    calendarType: 'year' | 'month' | 'week';
    colors: {};
    controls: any[];
    defaultSelection: any;
    element: any;
    endInput: any;
    firstSelectDay: number;
    invalid: any;
    inRangeInvalid: boolean;
    labels: {};
    marked: {};
    max: any;
    maxRange: number;
    maxTime: any;
    min: any;
    minRange: number;
    minTime: any;
    mode: 'date' | 'datetime' | 'time';
    modules: any[];
    moment: any;
    pages: number | 'auto';
    rangeHighlight: boolean;
    rangeEndInvalid: boolean;
    returnFormat: 'jsdate' | 'iso8601' | 'locale' | 'moment';
    showInput: boolean;
    startInput: any;
    stepHour: number;
    stepMinute: number;
    stepSecond: number;
    select: 'date' | 'range' | 'preset-range';
    selectCounter?: boolean;
    selectSize: number;
    selectMax: number;
    selectMin: number;
    selectMultiple?: boolean;
    showOuterDays: boolean;
    showRangeLabels: boolean;
    showWeekNumbers: boolean;
    tabs: boolean | 'auto';
    theme: string;
    valid: any;
    value: any;
    weeks: number;
    disabled: boolean;
    endIcon: string;
    endIconSrc: string;
    endIconSvg: string;
    error: boolean;
    errorMessage: string;
    inputStyle: 'underline' | 'outline' | 'box';
    label: string;
    labelStyle: 'floating' | 'stacked' | 'inline';
    name: string;
    placeholder: string;
    startIcon: string;
    startIconSrc: string;
    startIconSvg: string;
    tagInput: boolean;
    circular: boolean | boolean[];
    clearText: string;
    itemHeight: number;
    maxWheelWidth: number | number[];
    minWheelWidth: number | number[];
    rows: number;
    showOnClick: boolean;
    showOnFocus: boolean;
    wheelWidth: number | number[];
    anchor: any;
    anchorAlign: 'start' | 'end' | 'center';
    animation: 'pop' | 'slide-up' | 'slide-down' | boolean;
    buttons: Array<MbscPopupButton | string>;
    cancelText: string;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    closeOnScroll: boolean;
    closeText: string;
    context: any;
    display: DisplayType;
    focusOnClose: boolean;
    focusTrap: boolean;
    fullScreen: boolean;
    headerText: string;
    height: number | string;
    isOpen: boolean;
    maxHeight: number | string;
    maxWidth: number | string;
    scrollLock: boolean;
    setText: string;
    showArrow: boolean;
    showOverlay: boolean;
    width: number | string;
    amText: string;
    dateFormat: string;
    dateWheels: string;
    dayNames: string[];
    dayNamesShort: string[];
    daySuffix: string;
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    firstDay: number;
    monthNames: string[];
    monthNamesShort: string[];
    monthSuffix: string;
    moreEventsPluralText: string;
    moreEventsText: string;
    nowText: string;
    pmText: string;
    rangeEndHelp: string;
    rangeEndLabel: string;
    rangeStartHelp: string;
    rangeStartLabel: string;
    selectedPluralText: string;
    selectedText: string;
    timeFormat: string;
    timeWheels: string;
    yearSuffix: string;
    onCancel: EventEmitter<any>;
    onCellClick: EventEmitter<any>;
    onCellHoverIn: EventEmitter<any>;
    onCellHoverOut: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onLabelClick: EventEmitter<any>;
    onPageChange: EventEmitter<any>;
    onPageLoaded: EventEmitter<any>;
    onPageLoading: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    onPosition: EventEmitter<any>;
    onTempChange: EventEmitter<any>;
    onActiveDateChange: EventEmitter<any>;
}
/**
 * The Datepicker component.
 *
 * Usage:
 *
 * ```
 * <mbsc-datepicker></mbsc-datepicker>
 * ```
 */
export declare class MbscDatepicker extends MbscDatepickerBase {
    vInput: MbscInput;
    vPopup: MbscPopup;
    vWrapper: ElementRef;
    vTemplates: QueryList<MbscTplDirective>;
    private _cfr;
    private _controlsCreated;
    private _refs;
    protected _ctor(): void;
    protected _render(s: MbscDatepickerOptions, state: MbscDatepickerState): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected _onClosed(): void;
    protected _destroyControls(): void;
}
export declare class MbscDatepickerDirective extends MbscDatepickerBase {
    options: any;
    private _cfr;
    private _ref;
    protected _ctor(): void;
    protected _init(): void;
    protected _destroy(): void;
    protected _render(s: any, state: any): void;
}
