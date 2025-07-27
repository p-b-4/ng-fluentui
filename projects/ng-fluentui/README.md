# @pb4/ng-fluentui

**Angular wrapper library for [@fluentui/web-components](https://www.npmjs.com/package/@fluentui/web-components) v2.6.1**

This package allows you to use Fluent UI Web Components in Angular without needing to configure `CUSTOM_ELEMENTS_SCHEMA`.

Using this library may help spot errors in component templates earlier in development. You do not need to disable template validation for unknown elements.

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

Works with Angular v18 LTS to v20.1 latest.

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

If you're not registering allComponents, then your main.ts should include just the ones you use:
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

This wrapper simply exposes the Fluint UI Web Components as Angular standalone components, for a better developer experience.