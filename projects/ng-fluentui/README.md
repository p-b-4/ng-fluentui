# @pb4/ng-fluentui

**Angular wrapper library for [@fluentui/web-components](https://www.npmjs.com/package/@fluentui/web-components) v2.6.1**

This package allows you to use Fluent UI Web Components in Angular without needing to configure `CUSTOM_ELEMENTS_SCHEMA`.

Template validation remains enabled, which can help catch template errors early in development.

## Installation

1. Install the npm package:
```bash
npm install @pb4/ng-fluentui@latest
```

2. Register Fluent UI components in your `main.ts` file (before bootstrapApplication):

```ts
import {
  provideFluentDesignSystem,
  allComponents
} from "@fluentui/web-components";

provideFluentDesignSystem()
  .register(
    allComponents
  );
```

Instead of using allComponents, you can register only the Fluent UI Web Components you need.
For alternative configuration options, see the official documentation:
[Use Fluent UI Web Components with Angular](https://learn.microsoft.com/en-us/fluent-ui/web-components/integrations/angular)

## Prerequisites

This package requires an Angular project.

This library is expected to work with Angular v18 LTS through v20.1. Only minimal compatibility checks (e.g. basic rendering) have been done, since the package does not modify component behavior.

## 🚀 Usage

Here's how to use fluent-tree-view and fluent-tree-item via this wrapper (no need for CUSTOM_ELEMENTS_SCHEMA):

```ts
import { Component } from '@angular/core';
import { FluentTreeView, FluentTreeItem } from '@pb4/ng-fluentui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FluentTreeView, FluentTreeItem],
  template: `
<fluent-tree-view>
  Root
  <fluent-tree-item>
    Fruit
    <fluent-tree-item>Pear</fluent-tree-item>
    <fluent-tree-item>Mango</fluent-tree-item>
    <fluent-tree-item>Guava</fluent-tree-item>
    <fluent-tree-item>Pomegranate</fluent-tree-item>
  </fluent-tree-item>
  <fluent-tree-item>
    Guitars
    <fluent-tree-item>Fender</fluent-tree-item>
    <fluent-tree-item>Gibson</fluent-tree-item>
    <fluent-tree-item>Teisco</fluent-tree-item>
    <fluent-tree-item>Martin</fluent-tree-item>
  </fluent-tree-item>
  <fluent-tree-item>Earth</fluent-tree-item>
</fluent-tree-view>
  `,
})
export class PageComponent {}
```

If you're not registering allComponents, then your `main.ts` file should include just web components you use:
```ts
import {
  provideFluentDesignSystem,
  fluentTreeView,
  fluentTreeItem
} from "@fluentui/web-components";

provideFluentDesignSystem()
  .register(
    fluentTreeView(), fluentTreeItem()
  );
```

## What this package is (and isn't)
This is a wrapper for [@fluentui/web-components](https://www.npmjs.com/package/@fluentui/web-components).
It does not change or extend the original web components.

Microsoft maintains the actual web components. This wrapper library is not maintained by Microsoft.
Regular updates are not guaranteed, but the source code is available.

It simply exposes the Fluent UI Web Components as Angular standalone components, for a better developer experience.