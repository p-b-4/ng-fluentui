import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentDataGridRow
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDataGridRow()
    );

@Component({
    selector: 'fluent-data-grid-row',
    template: `<ng-content/>`
})
export class FluentDataGridRow {
}
