import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FluentSkeleton } from 'ng-fluentui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FluentSkeleton],
  template: `<fluent-skeleton>test</fluent-skeleton><router-outlet />`
})
export class App {
  protected readonly title = signal('ng-fluentui-app');
}
