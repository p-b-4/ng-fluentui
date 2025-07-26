import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentNumberField
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentNumberField() // NumberFieldOptions
    );

@Component({
    selector: 'fluent-number-field',
    template: `<ng-content/>`
})
export class FluentNumberField {
}
