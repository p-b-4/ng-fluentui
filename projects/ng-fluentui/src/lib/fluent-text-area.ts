import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTextArea
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTextArea()
    );

@Component({
    selector: 'fluent-text-area',
    template: `<ng-content/>`
})
export class FluentTextArea {
}
