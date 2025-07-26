import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTreeView
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTreeView()
    );

@Component({
    selector: 'fluent-tree-view',
    template: `<ng-content/>`
})
export class FluentTreeView {
}