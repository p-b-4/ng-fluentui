import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentTabPanel
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentTabPanel()
    );
@Component({
    selector: 'fluent-tab-panel',
    template: `<ng-content/>`
})
export class FluentTabPanel {
}
