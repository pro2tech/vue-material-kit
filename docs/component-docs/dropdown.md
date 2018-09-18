# Dropdown

To use the custom dropdown you don't need to import the custom made component because it's global registered, so you can use it like this:


### As List Item

:::demo
```html
<template>
  <div class="md-list">
    <li class="md-list-item">
      <a href="javascript:void(0)" class="md-list-item-router md-list-item-container md-button-clean dropdown">
        <div class="md-list-item-content">
          <drop-down direction="down">
            <md-button slot="title" class="md-button md-button-link md-simple dropdown-toggle" data-toggle="dropdown">
              <i class="material-icons">apps</i>
              <p>Components</p>
            </md-button>
            <ul class="dropdown-menu dropdown-with-icons">
              <li>
                <a href="javascript:void(0)">
                  <i class="material-icons">layers</i>
                  <p>All Components</p>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i class="material-icons">content_paste</i>
                  <p>Documentation</p>
                </a>
              </li>
            </ul>
          </drop-down>
        </div>
      </a>
    </li>
  </div>

  <props-table component-name="drop-down"></props-table>
</template>
```
:::

> Note: Drop-down uses a click outside directive internally. You will get a warning if the directive is not imported. You can find the declaration of this directive in **src/globalDirectives.js**


### Dropdown Slots
| Name | Description |
|---------- |-------- |
|  title  | Content for dropdown title |
