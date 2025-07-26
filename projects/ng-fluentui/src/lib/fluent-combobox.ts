import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentCombobox
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentCombobox() // ComboboxOptions
    );

@Component({
    selector: 'fluent-combobox',
    template: `<ng-content/>`
})
export class FluentCombobox {
}
