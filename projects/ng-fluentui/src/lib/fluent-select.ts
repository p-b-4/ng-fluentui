import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentSelect
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentSelect() // SelectOptions
    );

@Component({
    selector: 'fluent-select',
    template: `<ng-content/>`
})
export class FluentSelect {
}