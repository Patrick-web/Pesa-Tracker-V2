<template>
  <div style="padding-top:0px" class="statement page">
    <Header style="position:relative;margin-bottom:10px" :page="$route.params.selected" />
    <div @click="hideSwitcher" class="hideSwitcher"></div>

    <SectionSwitcher />
    <SectionDivider sectionName="Paid" />
    <TableView />
    <br />
    <br />
    <SectionDivider sectionName="Sent" />
    <TableView />
    <br />
    <br />
    <SectionDivider sectionName="Received" />
    <TableView />
    <br />
    <br />
    <SectionDivider sectionName="Withdraw" />
    <TableView />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import TableView from "@/components/TableView.vue";
import SectionDivider from "@/components/SectionDivider.vue";
import SectionSwitcher from "@/components/SectionSwitcher.vue";
export default {
  data() {
    return {};
  },
  methods: {
    hideSwitcher() {
      document.querySelector(".statement").classList.remove("showSwitcher");
    }
  },
  components: {
    Header,
    TableView,
    SectionDivider,
    SectionSwitcher
  }
};
</script>

<style lang="scss">
.statement {
  margin-top: 0px;
  /* background: yellow; */
}
.hideSwitcher {
  position: fixed;
  top: 55%;
  right: 0%;
  transform: translateY(-50%) translateX(50%);
  background: rgba(0, 0, 0, 0.349);
  height: 0vh;
  width: 0vh;
  z-index: 1;
  clip-path: circle(50% at 50% 50%);
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.showSwitcher {
  .hideSwitcher {
    height: 100vh;
    width: 200vw;
  }
}
</style>
