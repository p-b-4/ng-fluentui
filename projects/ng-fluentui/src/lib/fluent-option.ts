import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentOption
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentOption()
    );

@Component({
    selector: 'fluent-option',
    template: `<ng-content/>`
})
export class FluentOption {
}
