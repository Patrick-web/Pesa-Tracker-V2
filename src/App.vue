<template>
  <div id="app">
    <SideNav />
    <transition
      name="slideLeft"
      enter-active-class="animated slideInRight extraFast"
      leave-active-class="animated slideOutLeft extraFast"
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
import "boxicons";
import SideNav from "@/components/SideNav";
export default {
  components: {
    SideNav
  }
};
</script>
<style>
@import url("./assets/css/theme.css");
@import url("./assets/css/animate.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
