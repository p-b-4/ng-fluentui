import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentBreadcrumbItem
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentBreadcrumbItem() // BreadcrumbItemOptions
    );

@Component({
    selector: 'fluent-breadcrumb-item',
    template: `<ng-content/>`
})
export class FluentBreadcrumbItem {
}