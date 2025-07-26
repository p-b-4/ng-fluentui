import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentSkeleton
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentSkeleton()
    );

@Component({
    selector: 'fluent-skeleton',
    template: `<ng-content/>`
})
export class FluentSkeleton {
}