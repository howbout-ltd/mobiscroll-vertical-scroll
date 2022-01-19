import { TemplateRef } from '@angular/core';
import { WheelItemBase } from '../../core/shared/wheel/wheel-item';
/** @hidden */
export declare class MbscWheelItem extends WheelItemBase {
    active: boolean;
    angle3d: number;
    data: any;
    disabled: boolean;
    height: number;
    is3d: boolean;
    isGroup: boolean;
    index: number;
    itemTemplate: TemplateRef<any>;
    multiple: boolean;
    offset: number;
    rows: number;
    scroll3d: boolean;
    selected: boolean;
    text: string;
    onClick: (args: any) => void;
    checkmark: boolean;
    protected _render(s: any, state: any): void;
}
