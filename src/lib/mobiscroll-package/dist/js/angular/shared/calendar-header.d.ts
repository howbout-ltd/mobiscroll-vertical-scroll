import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CalendarViewBase, ICalendarViewHost } from '../../core/shared/calendar-view/calendar-view';
import { MbscInstanceService } from './instance.service';
export declare class CalendarSubscriber implements OnDestroy {
    protected changeDetector: ChangeDetectorRef;
    _hostInst: ICalendarViewHost;
    _cssClass: string;
    readonly cssClass: string;
    inst: CalendarViewBase;
    instanceService: MbscInstanceService;
    calendar: ICalendarViewHost;
    private changeHandler;
    private readyHandler;
    constructor(instanceService: MbscInstanceService, changeDetector: ChangeDetectorRef);
    ngOnDestroy(): void;
    protected setupServices(serv: MbscInstanceService): void;
    protected cleanupService(): void;
}
export declare class MbscCalendarPrev extends CalendarSubscriber {
}
export declare class MbscCalendarNext extends CalendarSubscriber {
}
export declare class MbscCalendarToday extends CalendarSubscriber {
}
export declare class MbscCalendarNav extends CalendarSubscriber {
}
