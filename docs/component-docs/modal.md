# Modal

If you want to display some content on demand in a very subtle way, the Vue Material Dashboard Pro Modal is the perfect choice for this. We created custom modal component and you can easily use it like this:

```js
import {Modal} from '@/components'
```

### Local Usage

```js
components: {
  Modal
}
```

### Global Usage

```js
Vue.component(Modal)
```

<script>
module.exports = {
  data () {
    return {
      classicModal: false,
      noticeModal: false,
      smallAlertModal: false
    }
  },
  methods: {
    classicModalHide: function(){
      this.classicModal = false
    },
    noticeModalHide: function(){
      this.noticeModal = false
    },
    smallAlertModalHide: function(){
      this.smallAlertModal = false
    }
  }
}
</script>

## Clasic Modal

::: demo
```html
<template>
  <md-button class="md-primary md-round classic-modal" @click="classicModal = true">Classic Modal</md-button>
  <modal v-if="classicModal" @close="classicModalHide">
    <template slot="header">
      <h4 class="modal-title">Modal Title</h4>
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="classicModalHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    </template>

    <template slot="footer">
      <md-button class="md-simple">Nice Button</md-button>
      <md-button class="md-danger md-simple" @click="classicModalHide">Close</md-button>
    </template>
  </modal>
</template>

```
:::

### Modal Slots
| Name | Description |
|---------- |-------- |
|  header  | Default card header |
|  body  | Default card body |
|  footer  | Content for card footer |
