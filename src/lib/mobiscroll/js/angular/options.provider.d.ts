import { OnChanges, SimpleChanges } from '@angular/core';
import { MbscOptions } from '../core/commons';
import { MbscOptionsService } from './options.service';
export declare class MbscOptionsProviderComponent implements OnChanges {
    private _opt;
    options: MbscOptions;
    constructor(_opt: MbscOptionsService);
    ngOnChanges(changes: SimpleChanges): void;
}
