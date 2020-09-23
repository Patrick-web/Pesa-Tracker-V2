<template>
  <div class="sideNav animated faster">
    <div @click="hideSideNav" class="hideNav"></div>
    <div class="logoArea">
      <img id="logo" src="@/assets/images/logo.svg" alt />
      <h1>Pesa Tracker</h1>
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
export default {
  data: () => ({
    active: "home",
    activeSidebar: true
  }),
  methods: {
    hideSideNav() {
      document.body.classList.remove("showNav");
    }
  }
};
</script>
<style lang="scss" scoped>
.showNav .sideNav {
  transform: translateX(0%);
}
.showNav .hideNav {
  opacity: 1 !important;
  pointer-events: all !important;
}
.sideNav {
  position: fixed;
  z-index: 8;
  right: 0;
  background: #002a68;
  width: 70vw;
  height: 100vh;
  transform: translateX(100%);
  transition: 0.2s ease;
  .logoArea {
    background-image: url("../assets/images/gradient.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 4px 5px rgba(1, 0, 58, 0.308);
    #logo {
      width: 35%;
    }
    h1 {
      font-size: 30px;
      color: white;
    }
  }
  .hideNav {
    position: absolute;
    background: rgba(0, 0, 0, 0.37);
    width: 30vw;
    height: 100vh;
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
    transition: 0.1s ease;
  }
}
</style>
