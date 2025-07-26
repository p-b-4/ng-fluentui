import { Component } from '@angular/core';

import {
  provideFluentDesignSystem,
  fluentAccordion
} from "@fluentui/web-components";

provideFluentDesignSystem()
  .register(
    fluentAccordion()
  );

@Component({
  selector: 'fluent-accordion',
  template: `<ng-content/>`
})
export class FluentAccordion {
}
