import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentListbox
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentListbox()
    );

@Component({
    selector: 'fluent-listbox',
    template: `<ng-content/>`
})
export class FluentListbox {
}
