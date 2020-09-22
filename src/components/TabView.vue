<template>
  <div class="tabView">
    <div class="switchers">
      <div class="indicator"></div>
      <div v-if="tabs.length == 1" class="indicator-fullWidth"></div>
      <div class="switchersWrapper">
        <div
          @click="switchTab(index)"
          v-for="(tab, index) in tabs"
          :key="tab.name"
          class="switcher"
        >{{ tab.name }}</div>
      </div>
    </div>
    <div class="tabs">
      <div class="tabsWrapper">
        <div v-for="tab in tabs" :key="tab.name" class="tab">
          <div v-for="item in tab.items" :key="item.id" class="tab-item">
            <p>{{ item.param1 }}</p>
            <p>{{ item.param2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    switchTab(index) {
      const tabsWrapper = document.querySelector(".tabsWrapper");
      const tabIndicator = document.querySelector(".indicator");
      switch (index) {
        case 0:
          tabsWrapper.style.transform = "translateX(0%)";
          tabIndicator.style.left = "0%";
          break;
        case 1:
          tabsWrapper.style.transform = "translateX(-50%)";
          tabIndicator.style.left = "50%";
          break;

        default:
          break;
      }
    }
  },
  props: {
    tabs: Array
  }
};
</script>

<style>
.tabView {
  margin: 10px;
}
.switchers {
  background: #18458a;
  border-radius: 20px;
  position: relative;
  height: 40px;
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
  font-size: 17px;
}
.switchersWrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.indicator {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  border-radius: 20px;
  background: rgb(25, 91, 255);
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.indicator-fullWidth {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background: rgb(25, 91, 255);
}
.switcher {
  padding: 10px;
}
.tabs {
  width: 100%;
  background: #18468abb;
  overflow: hidden;
  border-radius: 10px;
  padding: 5px;
  display: grid;
}
.tabsWrapper {
  width: 200%;
  display: flex;
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.tab {
  width: 50%;
  padding: 5px;
}
.tab-item {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid rgb(159, 191, 250);
}
</style>
