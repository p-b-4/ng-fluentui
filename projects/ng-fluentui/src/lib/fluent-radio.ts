import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentRadio
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentRadio() // RadioOptions
    );

@Component({
    selector: 'fluent-radio',
    template: `<ng-content/>`
})
export class FluentRadio {
}
