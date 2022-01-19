import { OnChanges } from '@angular/core';
export declare class MbscMultiYearView implements OnChanges {
    active: number;
    activeMonth: number;
    firstYear: number;
    getDate: (y: number, m: number, d: number) => Date;
    getYear: (d: Date) => number;
    max: number;
    min: number;
    rtl: boolean;
    theme: string;
    yearSuffix: string;
    onYearClick: (args: any) => void;
    _rows: any;
    _selectedYear: number;
    _activeYear: number;
    ngOnChanges(): void;
    getKey(index: number, item: any): any;
}
