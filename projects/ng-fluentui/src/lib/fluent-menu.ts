import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentMenu
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentMenu()
    );

@Component({
    selector: 'fluent-menu',
    template: `<ng-content/>`
})
export class FluentMenu {
}
