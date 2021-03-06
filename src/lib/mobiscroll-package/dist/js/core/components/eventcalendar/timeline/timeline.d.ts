import { MbscResource, MbscSlotData } from '../eventcalendar';
import { ISTOptions, ISTState, STBase } from '../shared/schedule-timeline-base';
export interface ITimelineOptions extends ISTOptions {
    type: 'week' | 'day' | 'month';
    renderSlot?(args: MbscSlotData): any;
}
export interface ITimelineState extends ISTState {
    scrollDay?: Date;
}
/** @hidden */
export declare class TimelineBase extends STBase<ITimelineOptions, ITimelineState> {
    _isTimeline: boolean;
    private _daySticky;
    _onScroll: () => void;
    _onParentClick(resource: MbscResource): void;
    protected _render(s: ITimelineOptions, state: ITimelineState): void;
}
