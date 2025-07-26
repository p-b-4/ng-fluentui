import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentSearch
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentSearch() // SearchOptions
    );

@Component({
    selector: 'fluent-search',
    template: `<ng-content/>`
})
export class FluentSearch {
}
