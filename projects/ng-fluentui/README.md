# @pb4/ng-fluentui

**Angular wrapper library for [@fluentui/web-components](https://www.npmjs.com/package/@fluentui/web-components) v2.6.1**

This package allows you to use the Fluent UI Web Components in Angular (v20.1) **without** needing to configure `CUSTOM_ELEMENTS_SCHEMA`.

All Fluent UI Web Components have been registered as **standalone Angular components**, enabling seamless usage in Angular applications. These components act as simple wrappers around the original web components—they do not modify behavior or styles.

## Features

You can use Fluent UI Web Components in your Angular project according to their documentation.
All this library does, is making sure you do not need to use the `CUSTOM_ELEMENTS_SCHEMA`.

## Installation

You'll need to install the official `@fluentui/web-components` package first in your Angular project:

```
npm install @fluentui/web-components@^2.6.1
```

Then you can also add this package in the following way:
```
npm install @pb4/ng-fluentui@latest
```

## 🚀 Usage

Follow the official documentation regarding how to use and configure the Fluent UI Web Components:

You need to configure the fluent-ui web components according to the official documentation:
[Use Fluent UI Web Components with Angular](https://learn.microsoft.com/en-us/fluent-ui/web-components/integrations/angular)

However, you don't need to use `schemas: [ CUSTOM_ELEMENTS_SCHEMA ]` in your components.

In stead, you can import the standalone component as provided in this library `@pb4/ng-fluentui`

For example:
```ts
import { Component } from '@angular/core';
import { FluentTreeView, FluentTreeItem } from '@pb4/ng-fluentui';

@Component({
  selector: 'app-page-component',
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

To make the Angular components behave like the web components, you need to register them.
You can for example do this, by adding the following code to your `main.ts` file:
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

## What's the value of this library?

By not using `schemas: [ CUSTOM_ELEMENTS_SCHEMA ]` in your component, you will get error messages if you use element names that are not recognized.
So it helps to spot errors earlier on.

I don't know if I will actively maintain this library, so if you need this solution for a different version of Angular, you could choose to copy the source code.


## What did I create

A very simple wrapper library that makes sure Angular can know the element names of the Fluent UI Web components, as are available in version 2.6.1.

I did not create the Fluent UI Web Components themselves. And this library does not distribute them either.
