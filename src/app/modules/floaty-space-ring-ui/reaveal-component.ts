import { AfterViewInit, Component, ElementRef, OnDestroy } from "@angular/core";
import { Coordinate } from "./fsr-button/coordinate";
import { FsrMouseTrackerComponent } from "./fsr-mouse-tracker/fsr-mouse-tracker.component";

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'fsr-reveal',
    template: ''
})
export abstract class RevealComponent implements AfterViewInit, OnDestroy {
    public borderGradient: any = {};
    public backgroundGradient: any = {};
    protected pointerPosition: Coordinate = { x: null, y: null };
    protected gradientPosition: Coordinate = { x: 0, y: 0 };
    private animationFrame: number = null;
    public abstract fixed: boolean;

    constructor(public el: ElementRef<HTMLElement>) { }

    ngAfterViewInit(): void {
        this.updatePositioning();
        this.animate();
    }

    ngOnDestroy(): void {
        if (this.animationFrame) {
            window.cancelAnimationFrame(this.animationFrame);
        }
    }

    protected animate = () => {
        this.updatePositioning();
        this.animationFrame = window.requestAnimationFrame(this.animate);
    }

    protected updatePositioning = (): void => {
        if (FsrMouseTrackerComponent.pointerPosition.x !== this.pointerPosition.x || FsrMouseTrackerComponent.pointerPosition.y !== this.pointerPosition.y) {
            this.pointerPosition = FsrMouseTrackerComponent.pointerPosition;
            this.gradientPosition = {
                x: FsrMouseTrackerComponent.pointerPosition.x - this.el.nativeElement.offsetLeft,
                y: FsrMouseTrackerComponent.pointerPosition.y - this.el.nativeElement.offsetTop - (this.fixed ? FsrMouseTrackerComponent.scrollPosition : 0)
            };
            this.updateStyles();
        }
    }

    protected abstract updateStyles(): void;
}