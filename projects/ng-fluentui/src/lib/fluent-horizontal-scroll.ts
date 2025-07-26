import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentHorizontalScroll
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentHorizontalScroll() // HorizontalScrollOptions
    );

@Component({
    selector: 'fluent-horizontal-scroll',
    template: `<ng-content/>`
})
export class FluentHorizontalScroll {
}
