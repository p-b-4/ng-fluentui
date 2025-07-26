import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentDivider
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDivider()
    );

@Component({
    selector: 'fluent-divider',
    template: `<ng-content/>`
})
export class FluentDivider {
}
