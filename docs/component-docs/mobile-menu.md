# Mobile Menu

We build a component named `<mobile-menu></mobile-menu>` and assures you that on smaller devices like phone, tablet and so on you will have the items from the `.md-toolbar-section-start` present on your collapsible menu. This component is located in `src/layout/MainNavbar.vue`. The component have only one attribute called `nav-mobile-section-start`.


Now in case you have items inside the `.md-toolbar-section-start` you can activate the component by simply set the value of the attribute `nav-mobile-section-start` to `true` and put the items that you want like in the below example, by default this attibute have the value set to `false`:

::: demo
```html
<md-toolbar class="md-primary">
<div class="md-toolbar-row">
  <div class="md-toolbar-section-start">
    <h3 class="md-title">Menu</h3>
    <md-list>
      <md-list-item href="javascript:void(0)">
        <p>Link</p>
      </md-list-item>

      <md-list-item href="javascript:void(0)">
        <p>Link</p>
      </md-list-item>
    </md-list>
  </div>
  <div class="md-toolbar-section-end">
    <md-button class="md-just-icon md-simple md-white md-toolbar-toggle">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </md-button>

    <div class="md-collapse">

    </div>
  </div>
</div>
</md-toolbar>
```
:::

<br/>

Inside your component `<mobile-menu></mobile-menu>` you will have the following items:

```html
<mobile-menu nav-mobile-section-start="true">
  <md-list-item href="javascript:void(0)">
    <p>Link</p>
  </md-list-item>

  <md-list-item href="javascript:void(0)">
    <p>Link</p>
  </md-list-item>
</mobile-menu>
```
