import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentBreadcrumb
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentBreadcrumb()
    );

@Component({
    selector: 'fluent-breadcrumb',
    template: `<ng-content/>`
})
export class FluentBreadcrumb {
}
