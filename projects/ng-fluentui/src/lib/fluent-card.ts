import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentCard
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentCard()
    );

@Component({
    selector: 'fluent-card',
    template: `<ng-content/>`
})
export class FluentCard {
}
