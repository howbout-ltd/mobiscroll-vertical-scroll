import { MbscSegmentedGroupOptions, SegmentedGroupBase } from '../../core/components/segmented/segmented-group';
import { MbscRadioService } from '../shared/radio-service';
export declare class MbscSegmentedGroup extends SegmentedGroupBase {
    _radioService: MbscRadioService;
    color: string;
    disabled: string;
    name: string;
    select: 'single' | 'multiple';
    value: any;
    protected _onValueChange(value: any): void;
    protected _ctor(): void;
    protected _render(s: MbscSegmentedGroupOptions): void;
}
