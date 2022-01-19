import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Directive, DoCheck, ElementRef, EventEmitter, Injector, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IModule } from '../core/base';
import { MbscOptionsService } from './options.service';
export { Directive };
/** @hidden */
export declare class Base<PropsType, StateType> implements AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit {
    protected _cdr: ChangeDetectorRef;
    protected _elr: ElementRef;
    protected _zone: NgZone;
    protected _sanitizer: DomSanitizer;
    protected _injector: Injector;
    protected _vcf: ViewContainerRef;
    protected _ctrl: NgControl;
    protected _optp: MbscOptionsService<PropsType>;
    /** @hidden */
    state: any;
    /** @hidden */
    props: any;
    class: any;
    context: any;
    locale: any;
    modules: IModule[];
    options: any;
    responsive: {
        [key: string]: PropsType;
    };
    rtl: boolean;
    theme: string;
    themeVariant: 'light' | 'dark' | 'auto';
    touchUi: boolean | 'auto';
    onDestroy: EventEmitter<any>;
    onInit: EventEmitter<any>;
    _el: any;
    _onFormChange: (value: any) => any;
    _onFormTouch: (ev?: any) => any;
    value: any;
    protected _opt: PropsType;
    private _doCheck;
    private _ctxChange;
    /** @hidden */
    constructor(_cdr: ChangeDetectorRef, _elr: ElementRef, _zone: NgZone, _sanitizer: DomSanitizer, _injector: Injector, _vcf: ViewContainerRef, _ctrl: NgControl, _optp: MbscOptionsService<PropsType>, _globals: any);
    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    /** @hidden */
    ngAfterViewChecked(): void;
    /** @hidden */
    ngOnInit(): void;
    /** @hidden */
    ngAfterViewInit(): void;
    /** @hidden */
    ngOnDestroy(): void;
    /** @hidden */
    _getKey(index: number): number;
    protected forceUpdate(): void;
    protected setState(newState: any): void;
    protected _emit(name: string, args: any): void;
    protected _safeHtml(html: string): SafeHtml;
    protected _ctor(): void;
    protected _init(): void;
    protected __init(): void;
    protected _mounted(): void;
    protected _updated(): void;
    protected _destroy(): void;
    protected __destroy(): void;
    protected _willUpdate(): void;
}
