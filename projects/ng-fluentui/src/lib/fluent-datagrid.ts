import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentDataGrid
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDataGrid()
    );

@Component({
    selector: 'fluent-data-grid',
    template: `<ng-content/>`
})
export class FluentDataGrid {
}
