import { EventEmitter } from '@angular/core';
import { DatetimeBase } from '../../core/components/datetime/datetime';
import { MbscScroller } from './scroller';
export declare class MbscDateBase extends DatetimeBase {
    vScroller: MbscScroller;
    onCancel: EventEmitter<any>;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
}
export declare class MbscDate extends MbscDateBase {
}
export declare class MbscDatetime extends MbscDateBase {
    protected _preset: string;
}
export declare class MbscTime extends MbscDateBase {
    protected _preset: string;
}
