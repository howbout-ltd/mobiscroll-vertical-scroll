import { OnChanges } from '@angular/core';
export declare class MbscYearView implements OnChanges {
    active: number;
    activeMonth: number;
    getDate: (y: number, m: number, d: number) => Date;
    getMonth: (d: Date) => number;
    getYear: (d: Date) => number;
    max: number;
    min: number;
    monthNames: string[];
    monthNamesShort: string[];
    rtl: boolean;
    theme: string;
    year: number;
    onMonthClick: (args: any) => void;
    _rows: any;
    _selectedYear: number;
    _selectedMonth: number;
    _activeYear: number;
    _activeMonth: number;
    ngOnChanges(): void;
    getKey(index: number, item: any): any;
}
