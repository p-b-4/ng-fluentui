import { AfterViewInit, Component, signal } from '@angular/core';
import {
  FluentAccordion, FluentAccordionItem, FluentAnchor, FluentAnchoredRegion, FluentBadge,
  FluentBreadcrumb, FluentBreadcrumbItem, FluentButton, FluentCalendar, FluentCard, FluentCheckbox,
  FluentCombobox, FluentDataGrid, FluentDivider, FluentHorizontalScroll, FluentListbox, FluentMenu,
  FluentMenuItem, FluentNumberField, FluentOption, FluentProgress, FluentProgressRing, FluentRadio, FluentRadioGroup, FluentSearch, FluentSelect, FluentSkeleton, FluentSlider, FluentSliderLabel, FluentSwitch, FluentTab, FluentTabPanel,
  FluentTabs, FluentTextArea, FluentTextField, FluentToolbar, FluentTooltip, FluentTreeItem, FluentTreeView
} from 'ng-fluentui';

@Component({
  selector: 'app-root',
  imports: [
    FluentTabs, FluentTab, FluentTabPanel,
    FluentProgress, FluentProgressRing,
    FluentAccordion, FluentAccordionItem,
    FluentBreadcrumb, FluentBreadcrumbItem,
    FluentMenu, FluentMenuItem, FluentNumberField,
    FluentCard, FluentCheckbox, FluentCombobox,
    FluentRadioGroup, FluentRadio,
    FluentOption, FluentDataGrid,
    FluentAnchor, FluentBadge, FluentDivider,
    FluentButton, FluentAnchoredRegion,
    FluentHorizontalScroll, FluentListbox,
    FluentTreeView, FluentTreeItem,
    FluentSkeleton, FluentSelect, FluentSearch,
    FluentSlider, FluentSliderLabel, FluentSwitch,
    FluentTextField, FluentTextArea, FluentTooltip,
    FluentToolbar, FluentCalendar
  ],
  template: `
<fluent-breadcrumb>
  <fluent-breadcrumb-item href="#">Home</fluent-breadcrumb-item>
  <fluent-breadcrumb-item href="#">Next Level Down</fluent-breadcrumb-item>
  <fluent-breadcrumb-item>Current Location</fluent-breadcrumb-item>
</fluent-breadcrumb>
<fluent-divider/>
<fluent-tabs activeid="entrees">
  <fluent-tab id="accordion">accordion</fluent-tab>
  <fluent-tab id="loading">loading</fluent-tab>
  <fluent-tab id="visuals">Other visuals</fluent-tab>
  <fluent-tab id="controls">Form controls</fluent-tab>
  <fluent-tab id="grid">Data grid</fluent-tab>
  <fluent-tab id="anchorregions">anchored region</fluent-tab>
  <fluent-tab id="horizontalscroll">Horizontal scroll</fluent-tab>
  <fluent-tab id="treeview">tree view</fluent-tab>
  <fluent-tab id="calendar">calendar</fluent-tab>

  <fluent-tab-panel id="accordionPanel">
    <fluent-accordion style="max-width: 350px;">
      <fluent-accordion-item>
        <span slot="heading">Item 1</span>
        <div class="panel">
          Panel one content
        </div>
      </fluent-accordion-item>
      <fluent-accordion-item>
        <span slot="heading">Item 2</span>
        <div class="panel">
          Panel 2 content
        </div>
      </fluent-accordion-item>
      <fluent-accordion-item>
        <span slot="heading">Item 3</span>
        <div class="panel">
          Panel 3 content
        </div>
      </fluent-accordion-item>
    </fluent-accordion>
    <h4>Single-expand</h4>
    <fluent-accordion expand-mode="single">
      <fluent-accordion-item>
        <span slot="heading">Item 1</span>
        <div class="panel">
          Panel one content
        </div>
      </fluent-accordion-item>
      <fluent-accordion-item>
        <span slot="heading">Item 2</span>
        <div class="panel">
          Panel 2 content
        </div>
      </fluent-accordion-item>
      <fluent-accordion-item>
        <span slot="heading">Item 3</span>
        <div class="panel">
          Panel 3 content
        </div>
      </fluent-accordion-item>
      <fluent-accordion-item>
        <span slot="heading">Item 4</span>
        <div class="panel">
          Panel 4 content
        </div>
      </fluent-accordion-item>
    </fluent-accordion>
  </fluent-tab-panel>

  <fluent-tab-panel id="loadingPanel">
    <fluent-progress-ring></fluent-progress-ring>
    <fluent-divider/>
    <fluent-progress value="42"></fluent-progress>
  </fluent-tab-panel>
  <fluent-tab-panel id="visualsPanel">
    <fluent-card>
      <fluent-menu>
        <fluent-menu-item>Undo</fluent-menu-item>
        <fluent-menu-item>Redo</fluent-menu-item>
        <fluent-divider></fluent-divider>
        <fluent-menu-item role="menuitemcheckbox">Extensions</fluent-menu-item>
        <fluent-menu-item role="menuitemcheckbox">Add ons</fluent-menu-item>
        <fluent-divider></fluent-divider>
        <fluent-menu-item role="menuitemradio">Start</fluent-menu-item>
        <fluent-menu-item role="menuitemradio">End</fluent-menu-item>
      </fluent-menu>
      <fluent-skeleton>
        skeleton content
      </fluent-skeleton>
      <h3>anchor</h3>
      <fluent-anchor appearance="accent">Anchor</fluent-anchor>
      <h3>badge</h3>
      <fluent-badge appearance="accent">New</fluent-badge>
      <h3>tooltip</h3>
      <fluent-tooltip id="tooltip" anchor="anchor-default">
        Helpful text here
      </fluent-tooltip>
      <fluent-button appearance="accent" id="anchor-default" style="margin: 12px;" aria-describedby="tooltip">
        Hover me
      </fluent-button>
    </fluent-card>
  </fluent-tab-panel>
  
  <fluent-tab-panel id="controlsPanel">
    <h3>Number field</h3>  
    <fluent-number-field value="0">Number: </fluent-number-field>
    <h3>Radio buttons</h3>  
    <fluent-radio-group orientation="vertical">
      <fluent-radio>18-24</fluent-radio>
      <fluent-radio>25-33</fluent-radio>
      <fluent-radio>34-44</fluent-radio>
      <fluent-radio>45+</fluent-radio>
    </fluent-radio-group>
    <h3>checkboxes</h3>
    <fluent-checkbox>Did you check this?</fluent-checkbox><br />
    <fluent-checkbox checked disabled>Is this disabled?</fluent-checkbox><br />
    <fluent-checkbox checked>Checked by default?</fluent-checkbox>
    <br/>
    <h3>Default combobox</h3>
    <fluent-combobox placeholder="Select a graphics card">
      <fluent-option value="1">GTX 1060</fluent-option>
      <fluent-option value="2">GTX 1070</fluent-option>
      <fluent-option value="3">GTX 1080</fluent-option>
      <fluent-option value="4" disabled>GTX 1090</fluent-option>
    </fluent-combobox>

    <h3>Combobox with autocomplete</h3>
    <fluent-combobox autocomplete="both" placeholder="Select a graphics card">
      <fluent-option value="1">GTX 1060</fluent-option>
      <fluent-option value="2">GTX 1070</fluent-option>
      <fluent-option value="3">GTX 1080</fluent-option>
      <fluent-option value="4" disabled>GTX 1090</fluent-option>
    </fluent-combobox>

    <h3>Disabled combobox</h3>
    <fluent-combobox disabled placeholder="Select an option">
      <fluent-option value="1">Option 1</fluent-option>
      <fluent-option value="2">Option 2</fluent-option>
      <fluent-option value="3">Option 3</fluent-option>
    </fluent-combobox>

    <h3>Listbox</h3>
    <fluent-listbox aria-labelledby="lb_label">
      <fluent-option value="fn">Foxtrot November</fluent-option>
      <fluent-option value="gs">Golf Sierra</fluent-option>
      <fluent-option selected value="j">Juliet</fluent-option>
      <fluent-option value="kr">Kilo Romeo</fluent-option>
      <fluent-option value="l">Lima</fluent-option>
      <fluent-option value="m">Mike</fluent-option>
      <fluent-option disabled value="x">X-ray</fluent-option>
    </fluent-listbox>

    <h3>Select</h3>
    <fluent-select title="Select a section">
      <fluent-option value="1">Beginning</fluent-option>
      <fluent-option value="2">Middle</fluent-option>
      <fluent-option value="3">End</fluent-option>
    </fluent-select>

    <h3>Search</h3>
    <fluent-search appearance="outline" placeholder="Search field">Search</fluent-search>
    <h3>text</h3>
    <fluent-text-field appearance="outline" placeholder="user@email.com">Email</fluent-text-field>
    <h3>textarea</h3>
    <fluent-text-area placeholder="Describe your experience">How was your stay?</fluent-text-area>

    <h3>toolbar with controls</h3>
    <fluent-toolbar>
      <fluent-radio-group>
        <fluent-radio>Filter</fluent-radio>
        <fluent-radio>
          <fluent-search appearance="outline" placeholder="Search"/>
        </fluent-radio>
      </fluent-radio-group>
    </fluent-toolbar>

    <h3>Slider</h3>
    <fluent-slider min="0" max="100" value="25" step="5" style="max-width: 300px;" title="Set the temperature">
      <fluent-slider-label position="0">
        0&#8451;
      </fluent-slider-label>
      <fluent-slider-label position="25">
        25&#8451;
      </fluent-slider-label>
      <fluent-slider-label position="50">
        50&#8451;
      </fluent-slider-label>
      <fluent-slider-label position="75">
        75&#8451;
      </fluent-slider-label>
      <fluent-slider-label position="100">
        100&#8451;
      </fluent-slider-label>
    </fluent-slider>

    <h3>Switch</h3>
    <fluent-switch>
      <span slot="checked-message">On</span>
      <span slot="unchecked-message">Off</span>
      <label for="cap-switch">Captions:</label>
    </fluent-switch>
  </fluent-tab-panel>

  <fluent-tab-panel id="gridPanel">
    <fluent-data-grid id="defaultGrid" style="max-height: 30em; overflow-y: auto;" #defaultGrid/>
  </fluent-tab-panel>

  <fluent-tab-panel id="anchorregionsPanel">
    <fluent-button appearance="outline" id="anchor-toggle-positions" style="margin-left: 100px; margin-top: 100px">Anchor</fluent-button>

    <fluent-anchored-region id="toggle-positions-region" anchor="anchor-toggle-positions" vertical-positioning-mode="locktodefault" vertical-default-position="top" horizontal-positioning-mode="locktodefault" horizontal-default-position="right">
      <div id="toggle-positions" style="height: 2em; width: 3em; background: #360; padding: 0.3em;"></div>
    </fluent-anchored-region>
    <div style="margin-top: 3em; display: flex; flex-direction: row">
      <fluent-button id="toggle-positions-horizontal" style="margin-left: 10px;" (click)="togglePositionsHorizontal()">toggle horizontal</fluent-button>
      <fluent-button id="toggle-positions-vertical" (click)="togglePositionsVertical()">toggle vertical</fluent-button>
    </div>
  </fluent-tab-panel>

  <fluent-tab-panel id="horizontalscrollPanel">
    <fluent-horizontal-scroll>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
        Click the flipper at the right side in the browser to scroll right
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
      </fluent-card>
      <fluent-card>
        <fluent-combobox disabled placeholder="Select an option">
          <fluent-option value="1">Option 1</fluent-option>
          <fluent-option value="2">Option 2</fluent-option>
          <fluent-option value="3">Option 3</fluent-option>
        </fluent-combobox>
        Click the flipper at the left side in the browser to scroll left
      </fluent-card>
    </fluent-horizontal-scroll>
  </fluent-tab-panel>

  <fluent-tab-panel id="treeviewPanel">
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
  </fluent-tab-panel>

  <fluent-tab-panel id="calendarPanel">
      <fluent-calendar />
  </fluent-tab-panel>
</fluent-tabs>
  `
})
export class App implements AfterViewInit {
  protected readonly title = signal('ng-fluentui-app');

  ngAfterViewInit(): void {
    let defaultGridElement = document.getElementById('defaultGrid') as unknown as { rowsData: unknown[] };

    defaultGridElement.rowsData = newDataSet(10);

    function newDataSet(rowCount: number): object[] {
      const newRows: object[] = [];
      for (let i = 0; i <= rowCount; i++) {
        newRows.push(newDataRow(`${i + 1}`));
      }
      return newRows;
    }

    function newDataRow(id: string): object {
      return {
        rowId: `rowid-${id}`,
        item1: `value 1-${id}`,
        item2: `value 2-${id}`,
        item3: `value 3-${id}`,
        item4: `value 4-${id}`,
      };
    }
  }

  togglePositionsHorizontal() {
    const region: HTMLElement | null = document.getElementById("toggle-positions-region");
    if (region === null) {
      return;
    }
    const currentPosition: string | null = region.getAttribute("horizontal-default-position");
    if (currentPosition === "left") {
      region.setAttribute("horizontal-default-position", "right");
    } else {
      region.setAttribute("horizontal-default-position", "left");
    }
  }

  togglePositionsVertical() {
    const region: HTMLElement | null = document.getElementById("toggle-positions-region");
    if (region === null) {
      return;
    }
    const currentPosition: string | null = region.getAttribute("vertical-default-position");
    if (currentPosition === "top") {
      region.setAttribute("vertical-default-position", "bottom");
    } else {
      region.setAttribute("vertical-default-position", "top");
    }
  }
}