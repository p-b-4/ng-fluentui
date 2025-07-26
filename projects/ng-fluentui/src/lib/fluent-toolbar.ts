import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentToolbar
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentToolbar()
    );

@Component({
    selector: 'fluent-toolbar',
    template: `<ng-content/>`
})
export class FluentToolbar {
}