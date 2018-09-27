# Inputs

<script>
module.exports = {
  data: () => ({
    initial: 'Initial Value',
    type: null
  })
}
</script>

To use the custom form group inputs you don't need to import the custom made component, you can use it like this:

::: demo
```html
<md-field>
  <label>Initial Value</label>
  <md-input v-model="initial"></md-input>
</md-field>
<md-field>
  <label>Type here!</label>
  <md-input v-model="type"></md-input>
  <span class="md-helper-text">Helper text</span>
</md-field>
<script>
  export default {
    data: () => ({
      initial: 'Initial Value',
      type: null
    })
  }
</script>
```
:::

## Colors

If you want to change the color of the inputs focus you have just to add one of the classes `has-danger`, `has-white`, `has-rose`, `has-green`, `has-warning`, `has-info` on the component parent tag like in the example below. By default the color is `purple`.

```html
  <md-field class="has-danger">
    <label>Initial Value</label>
    <md-input v-model="initial"></md-input>
  </md-field>
```

> Note: For more details about the all inputs that you can use please see the **Input & Textarea** section from [vuematerial.io](https://vuematerial.io/components/input)
