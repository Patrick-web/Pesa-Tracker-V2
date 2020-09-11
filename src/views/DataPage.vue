<template>
  <div class="dataPage page">
    <Header :page="currentPage" />
    <vs-button id="fab-center" success circle>
      <p>Show Summary</p>
      <img width="90%" src="@/assets/images/summary.svg" alt />
    </vs-button>

    <DataCard />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DataCard from "@/components/DataCard.vue";
export default {
  data() {
    return {
      currentPage: "Today"
    };
  },
  components: {
    Header,
    DataCard
  }
};
</script>

<style>
#fab-center {
  width: 200px;
  padding-top: 0px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex !important;
  padding: 0px;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
}
#fab-center img {
  width: 70px;
  margin-top: -23px;
  margin-right: -27px;
}
#fab-center p {
  margin-top: -23px;
  margin-left: -5px;
}
</style>