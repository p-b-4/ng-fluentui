import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentSliderLabel
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentSliderLabel()
    );

@Component({
    selector: 'fluent-slider-label',
    template: `<ng-content/>`
})
export class FluentSliderLabel {
}