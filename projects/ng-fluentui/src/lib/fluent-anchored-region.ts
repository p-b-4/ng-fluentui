import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentAnchoredRegion
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentAnchoredRegion()
    );

@Component({
    selector: 'fluent-anchored-region',
    template: `<ng-content/>`
})
export class FluentAnchoredRegion {
}