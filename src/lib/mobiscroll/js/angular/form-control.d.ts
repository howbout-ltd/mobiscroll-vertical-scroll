import { EventEmitter } from '@angular/core';
export declare function FormControl<T extends {
    new (...args: any[]): any;
}>(constructor: T): {
    new (...args: any[]): {
        [x: string]: any;
        value: any;
        valueChange: EventEmitter<any>;
        registerOnChange(fn: any): void;
        registerOnTouched(fn: any): void;
        setDisabledState(disabled: boolean): void;
        writeValue(val: any): void;
    };
} & T;
