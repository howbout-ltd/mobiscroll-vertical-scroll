import { MbscCalendarSystem } from '../core/commons';
export interface MbscLocale {
    setText?: string;
    cancelText?: string;
    closeText?: string;
    clearText?: string;
    rtl?: boolean;
    selectedText?: string;
    selectedPluralText?: string;
    calendarSystem?: MbscCalendarSystem;
    dateFormat?: string;
    dateFormatLong?: string;
    dateWheelFormat?: string;
    dayNames?: string[];
    dayNamesShort?: string[];
    dayNamesMin?: string[];
    daySuffix?: string;
    monthNames?: string[];
    monthNamesShort?: string[];
    monthSuffix?: string;
    timeFormat?: string;
    timeWheels?: string;
    yearSuffix?: string;
    nowText?: string;
    pmText?: string;
    amText?: string;
    todayText?: string;
    firstDay?: number;
    dateText?: string;
    timeText?: string;
    allDayText?: string;
    noEventsText?: string;
    eventText?: string;
    eventsText?: string;
    moreEventsText?: string;
    moreEventsPluralText?: string;
    nextMonthText?: string;
    nextYearText?: string;
    prevMonthText?: string;
    prevYearText?: string;
    rangeStartLabel?: string;
    rangeEndLabel?: string;
    rangeStartHelp?: string;
    rangeEndHelp?: string;
    filterEmptyText?: string;
    filterPlaceholderText?: string;
}
