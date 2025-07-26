import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentAnchor
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentAnchor()
    );

@Component({
    selector: 'fluent-anchor',
    template: `<ng-content/>`
})
export class FluentAnchor {
}