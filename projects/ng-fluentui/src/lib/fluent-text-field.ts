import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTextField
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTextField() // SearchOptions
    );

@Component({
    selector: 'fluent-text-field',
    template: `<ng-content/>`
})
export class FluentTextField {
}
