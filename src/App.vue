<template>
  <div id="app">
    <SideNav />
    <transition
      name="slideLeft"
      enter-active-class="animated fadeInUp fast"
      leave-active-class="animated fadeOutDown extraFast"
    >
      <router-view />
    </transition>
    <TabBar />
  </div>
</template>
<script>
import "boxicons";
import SideNav from "@/components/SideNav";
import TabBar from "@/components/TabBar";
export default {
  components: {
    SideNav,
    TabBar
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

a {
  text-decoration: none;
}
</style>
