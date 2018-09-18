# Cards

We think cards are one of the best ways to organise your information. We went all out with possibilities and we recommended finding the right fit for your product.


```js
import {LoginCard} from '@/components'
```

### Local Usage

```js
components: {
  LoginCard
}
```

### Global Usage

```js
Vue.component(LoginCard)
```

<script>
module.exports = {
  data() {
   return {
     password: null,
     firstname: null,
     email: null,
     emailsSubscriptionChart: {
       data: {
         labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
         series: [
           [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

         ]
       },
       options: {
         axisX: {
           showGrid: false
         },
         low: 0,
         high: 1000,
         chartPadding: {
           top: 0,
           right: 5,
           bottom: 0,
           left: 0
         }
       },
       responsiveOptions: [
         ['screen and (max-width: 640px)', {
           seriesBarDistance: 5,
           axisX: {
             labelInterpolationFnc: function (value) {
               return value[0]
             }
           }
         }]
       ]
     }
   }
  }
}
</script>




## Login card

:::demo
```html
<template>
  <login-card header-color="green">
    <h4 slot="title" class="title">Log in</h4>
    <template slot="buttons">
      <md-button to="#facebook" class="md-just-icon md-simple md-white">
        <i class="fab fa-facebook-square"></i>
      </md-button>
      <md-button to="#twitter" class="md-just-icon md-simple md-white">
        <i class="fab fa-twitter"></i>
      </md-button>
      <md-button to="#google" class="md-just-icon md-simple md-white">
        <i class="fab fa-google-plus-g"></i>
      </md-button>
    </template>
    <p slot="description" class="description">Or Be Classical</p>
    <template slot="inputs">
      <md-field class="md-form-group">
        <md-icon>face</md-icon>
        <label>First Name...</label>
        <md-input v-model="firstname"></md-input>
      </md-field>
      <md-field class="md-form-group">
        <md-icon>email</md-icon>
        <label>Email...</label>
        <md-input v-model="email" type="email"></md-input>
      </md-field>
      <md-field class="md-form-group">
        <md-icon>lock_outline</md-icon>
        <label>Password...</label>
        <md-input v-model="password"></md-input>
      </md-field>
    </template>
    <md-button slot="footer" class="md-simple md-success md-lg">
      Lets Go
    </md-button>
  </login-card>

  <script>
    export default {
      data () {
        return {
          password: null,
          firstname: null,
          email: null
        }
      }
    }
  </script>

  <props-table component-name="login-card"></props-table>
</template>
```
:::

### LoginCard Slots
| Name | Description |
|---------- |-------- |
|  title | Default card title |
|  description | Default card description |
|  buttons | card buttons |
|  footer  | Content for card footer |
