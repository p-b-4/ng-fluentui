import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentBadge
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentBadge()
    );

@Component({
    selector: 'fluent-badge',
    template: `<ng-content/>`
})
export class FluentBadge {
}