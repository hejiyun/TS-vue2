<template>
  <div id="nav">
    <p>hello world!!!</p>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <router-view/>
  </div>
</template>
<script lang="ts">
interface TheObj {
  name: string;
  subject: number;
  point?: any[];
  [x: string]: any;
}
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'app'
})
export default class extends Vue {
  private Num: number = 0;
  private item: TheObj = {
    name: '213213',
    subject: 13
  };
  private created() {
    this.Num = 12;
    this.item.name = '12323';
    this.item.point = [123, '21313', '233'];
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
