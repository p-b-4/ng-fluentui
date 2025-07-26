import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentDialog
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDialog()
    );

@Component({
    selector: 'fluent-dialog',
    template: `<ng-content/>`
})
export class FluentDialog {
}
