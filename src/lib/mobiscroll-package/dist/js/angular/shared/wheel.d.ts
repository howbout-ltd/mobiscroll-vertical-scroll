import { TemplateRef } from '@angular/core';
import { DisplayType } from '../../core/components/popup/popup';
import { WheelBase } from '../../core/shared/wheel/wheel';
/** @hidden */
export declare class MbscWheel extends WheelBase {
    activeIndex: number;
    disabled: any[];
    display: DisplayType;
    itemHeight: number;
    itemTemplate: TemplateRef<any>;
    maxIndex: number;
    maxWheelWidth: number | number[];
    minIndex: number;
    minWheelWidth: number | number[];
    multiple: boolean;
    rows: number;
    scroll3d: boolean;
    selectedIndex: number;
    selectedValues: any[];
    selectOnScroll: boolean;
    touchUi: boolean;
    wheel: any;
    wheelWidth: number | number[];
    onGestureEnd: (args: any) => void;
    onGestureStart: (args: any) => void;
    onIndexChange: (args: any) => void;
    onActiveChange: (args: any) => void;
    onSet: () => void;
    _getItemKey(index: number, item: {
        key: number;
    }): number;
}
