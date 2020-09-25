<template>
  <div class="header">
    <img v-if="!hideBackArrow" @click="popRoute" id="backArrow" src="@/assets/images/arrow.svg" alt />
    <p v-if="hideBackArrow" id="filler"></p>
    <p id="headerName">{{page}}</p>
    <img id="menuToggle" @click="showSideNav" src="@/assets/images/menu-toggle.svg" alt />
  </div>
</template>

<script>
export default {
  methods: {
    showSideNav() {
      document.body.classList.add("showNav");
    },
    popRoute() {
      this.$router.back();
    }
  },
  props: {
    page: String,
    hideBackArrow: String
  }
};
</script>

<style>
.header {
  background: #2962ff;
  /* background: #152a4d; */
  height: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  position: fixed;
  top: 0;
  box-shadow: 2px 0px 20px black;
  z-index: 5;
  /* padding: 10px; */
}
#backArrow {
  justify-self: left;
  margin-left: 10px;
}
#filler {
  justify-self: left;
  margin-left: 10px;
}
#menuToggle {
  justify-self: right;
  margin-right: 10px;
  width: 25px;
}
.header img {
  align-self: center;
  justify-self: center;
}
.header p {
  align-self: center;
  justify-self: center;
  font-size: 1.3em;
  font-weight: 700;
  color: white;
}
</style>
