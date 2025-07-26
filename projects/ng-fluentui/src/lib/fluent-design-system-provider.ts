import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentDesignSystemProvider
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentDesignSystemProvider()
    );

@Component({
    selector: 'fluent-design-system-provider',
    template: `<ng-content/>`
})
export class FluentDesignSystemProvider {
}
