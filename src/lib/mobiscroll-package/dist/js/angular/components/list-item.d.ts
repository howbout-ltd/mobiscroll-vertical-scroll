import { EventEmitter } from '@angular/core';
import { ListItemBase } from '../../core/components/list/list-item';
export declare class MbscListItem extends ListItemBase {
    actionable: boolean;
    data: any;
    drag: boolean;
    onHoverIn: EventEmitter<any>;
    onHoverOut: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDragModeOff: EventEmitter<any>;
    onDragModeOn: EventEmitter<any>;
    onDragMove: EventEmitter<any>;
    onDragStart: EventEmitter<any>;
}
