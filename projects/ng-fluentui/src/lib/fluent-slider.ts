import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentSlider,
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentSlider() // SliderOptions
    );

@Component({
    selector: 'fluent-slider',
    template: `<ng-content/>`
})
export class FluentSlider {
}
