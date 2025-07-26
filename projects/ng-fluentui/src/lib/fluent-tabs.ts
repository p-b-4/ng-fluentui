import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTabs
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTabs()
    );

@Component({
    selector: 'fluent-tabs',
    template: `<ng-content/>`
})
export class FluentTabs {
}
