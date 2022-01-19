import { ITimeSlot, TimegridBase } from '../../core/components/timegrid/timegrid';
export declare class MbscTimeBox {
    disabled: boolean;
    selected: boolean;
    timeSlot: ITimeSlot;
    theme: string;
    onClick: (v: ITimeSlot) => void;
    onKeyDown: (event: any) => void;
}
export declare class MbscTimegrid extends TimegridBase {
    protected _mounted(): void;
}
