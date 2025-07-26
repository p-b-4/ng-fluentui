import { Component } from '@angular/core';

import {
  provideFluentDesignSystem,
  fluentAccordionItem
} from "@fluentui/web-components";

provideFluentDesignSystem()
  .register(
    fluentAccordionItem() // AccordionItemOptions
  );

@Component({
  selector: 'fluent-accordion-item',
  template: `<ng-content/>`
})
export class FluentAccordionItem {
}