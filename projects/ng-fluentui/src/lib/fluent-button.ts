import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentButton
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentButton()
    );

@Component({
    selector: 'fluent-button',
    template: `<ng-content/>`
})
export class FluentButton {
}
