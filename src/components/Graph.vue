<template>
  <div class="graphArea">
    <div class="graphsWrapper">
      <MonthsGraph />
    </div>
  </div>
</template>

<script>
import DaysGraph from "@/components/DaysGraph";
import MonthsGraph from "@/components/MonthsGraph.vue";
export default {
  methods: {
    selectMonth(e, month) {
      console.log(e.target);
      this.selectedMonth = month;
      const barNamesWrapper = document.querySelector(".barNamesWrapper");
      const barsWrapper = document.querySelector(".barsWrapper");
      barNamesWrapper.classList.add("flex-between");
      barsWrapper.classList.add("flex-between");
    }
  },
  components: {
    DaysGraph,
    MonthsGraph
  },
  data() {
    return {
      selectedMonth: null,
      data: [
        {
          totalDeposit: 5000,
          month: "June",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "July",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Aug",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.graphArea {
  width: 100vw;
  overflow: hidden;
  margin: auto;
  margin-top: 10px;
  height: 350px;
  margin-bottom: 50px;
  position: relative;
  background: orange;
}
.graphsWrapper {
  width: 200%;
  height: 100%;
  background: palevioletred;
}
</style>