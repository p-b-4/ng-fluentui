import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentProgressRing
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentProgressRing() // ProgressRingOptions
    );

@Component({
    selector: 'fluent-progress-ring',
    template: `<ng-content/>`
})
export class FluentProgressRing {
}
