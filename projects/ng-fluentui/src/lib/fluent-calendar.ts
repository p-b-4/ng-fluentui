import { Component } from '@angular/core';

import {
    provideFluentDesignSystem,
    fluentCalendar
} from "@fluentui/web-components";

provideFluentDesignSystem()
    .register(
        fluentCalendar() // CalendarOptions
    );

@Component({
    selector: 'fluent-calendar',
    template: `<ng-content/>`
})
export class FluentCalendar {
}