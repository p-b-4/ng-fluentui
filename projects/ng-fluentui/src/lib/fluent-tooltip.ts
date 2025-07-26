import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTooltip
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTooltip()
    );

@Component({
    selector: 'fluent-tooltip',
    template: `<ng-content/>`
})
export class FluentTooltip {
}