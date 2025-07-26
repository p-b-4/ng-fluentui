import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentCheckbox
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentCheckbox() // CheckboxOptions
    );

@Component({
    selector: 'fluent-checkbox',
    template: `<ng-content/>`
})
export class FluentCheckbox {
}
