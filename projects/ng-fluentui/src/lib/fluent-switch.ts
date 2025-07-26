import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentSwitch
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentSwitch() // SwitchOptions
    );

@Component({
    selector: 'fluent-switch',
    template: `<ng-content/>`
})
export class FluentSwitch {
}