import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTab
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTab()
    );

@Component({
    selector: 'fluent-tab',
    template: `<ng-content/>`
})
export class FluentTab {
}
