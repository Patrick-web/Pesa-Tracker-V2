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
  },
  data() {
    return {
      slideX: 0,
      slideY: 0
    };
  },
  mounted() {
    const app = document.body;
    app.addEventListener("pointermove", e => {
      this.slideX = e.movementX;
      this.slideY = e.movementY;
      if (this.slideX < -9 && this.slideY == 0) {
        document.body.classList.add("showNav");
      }
      if (
        this.slideX > 9 &&
        this.slideY == 0 &&
        document.body.classList.contains("showNav")
      ) {
        document.body.classList.remove("showNav");
      }
    });
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
  color: #c8ddfd;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
}
</style>
