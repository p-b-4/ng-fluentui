import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentFlipper
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentFlipper() // FlipperOptions
    );

@Component({
    selector: 'fluent-flipper',
    template: `<ng-content/>`
})
export class FluentFlipper {
}
