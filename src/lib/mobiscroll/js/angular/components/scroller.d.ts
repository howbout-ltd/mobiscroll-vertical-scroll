import { EventEmitter, TemplateRef } from '@angular/core';
import { DisplayType, MbscPopupButton } from '../../core/components/popup/popup';
import { IWheelMoveArgs, MbscScrollerWheel, ScrollerBase } from '../../core/components/scroller/scroller';
import { MbscInput } from './input';
import { MbscPopup } from './popup';
/**
 * The Scroller component.
 *
 * Usage:
 *
 * ```
 * <mbsc-scroller></mbsc-scroller>
 * ```
 */
export declare class MbscScroller extends ScrollerBase {
    vInput: MbscInput;
    vPopup: MbscPopup;
    element: any;
    writeValue: (elm: HTMLElement, text: string, value: any) => boolean;
    value: any;
    circular: boolean | boolean[];
    displayStyle: DisplayType;
    formatValue: (values: any[]) => string;
    getValue: (values: any[]) => any;
    maxWheelWidth: number | number[];
    minWheelWidth: number | number[];
    inContentTemplate: any;
    itemHeight: number;
    itemTemplate: TemplateRef<any>;
    onWheelMove: (args: IWheelMoveArgs) => any;
    parseValue: (valueStr: string) => any[];
    preContentTemplate: any;
    preContentData: any;
    rows: number;
    selectMultiple: boolean;
    selectOnScroll: boolean;
    shouldValidate: (s: any, prevS: any) => boolean;
    showOnClick: boolean;
    showOnFocus: boolean;
    validate: (args: any) => any;
    valueEquality: (v1: any, v2: any) => boolean;
    valueMap: any;
    wheels: MbscScrollerWheel[][];
    wheelWidth: number | number[];
    disabled: boolean;
    dropdown: boolean;
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
    activeElm: HTMLElement | string;
    anchor: any;
    animation: 'pop' | 'slide-up' | 'slide-down' | boolean;
    buttons: Array<MbscPopupButton | string>;
    cancelText: string;
    closeOnEsc: boolean;
    closeOnOverlayClick: boolean;
    closeText: string;
    context: any;
    display: DisplayType;
    focusOnClose: boolean;
    focusTrap: boolean;
    headerText: string;
    height: number | string;
    maxHeight: number | string;
    maxWidth: number | string;
    setText: string;
    showArrow: boolean;
    showOverlay: boolean;
    width: number | string;
    clearText: string;
    onCancel: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    onTempChange: EventEmitter<any>;
    onResize: EventEmitter<any>;
}
