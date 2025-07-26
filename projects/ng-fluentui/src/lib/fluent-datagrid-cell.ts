import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentDataGridCell
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDataGridCell()
    );

@Component({
    selector: 'fluent-data-grid-cell',
    template: `<ng-content/>`
})
export class FluentDataGridCell {
}
