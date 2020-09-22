<template>
  <div class="graphArea">
    <div class="graphsWrapper">
      <MonthsGraph />
      <DaysGraph />
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
  width: 95%;
  overflow: hidden;
  margin: auto;
  margin-top: 5px;
  height: 300px;
  margin-bottom: 10px;
  position: relative;
  background: rgba(0, 102, 255, 0.123);
  border-radius: 10px;
}
.graphsWrapper {
  width: 100%;
  height: 200%;
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.scrollToDays {
  transform: translateY(-50%);
}
</style>
