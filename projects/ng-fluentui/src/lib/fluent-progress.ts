import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentProgress,
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentProgress() // ProgressOptions
    );

@Component({
    selector: 'fluent-progress',
    template: `<ng-content/>`
})
export class FluentProgress {
}
