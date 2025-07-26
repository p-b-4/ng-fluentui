import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTreeItem
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTreeItem() // TreeItemOptions
    );

@Component({
    selector: 'fluent-tree-item',
    template: `<ng-content/>`
})
export class FluentTreeItem {
}
