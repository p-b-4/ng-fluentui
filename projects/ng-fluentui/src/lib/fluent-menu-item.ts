import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentMenuItem
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentMenuItem() // MenuItemOptions
    );

@Component({
    selector: 'fluent-menu-item',
    template: `<ng-content/>`
})
export class FluentMenuItem {
}
