import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentRadioGroup
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentRadioGroup()
    );

@Component({
    selector: 'fluent-radio-group',
    template: `<ng-content/>`
})
export class FluentRadioGroup {
}
