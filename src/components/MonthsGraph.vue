<template>
  <div class="monthsGraph">
    <div class="barsWrapper">
      <div @click="selectMonth($event,month)" v-for="month in data" :key="month.month" class="bar"></div>
    </div>
    <div class="barNamesWrapper">
      <div
        @click="selectMonth(month)"
        v-for="month in data"
        :key="month.month"
        class="monthName"
      >{{month.month}}</div>
    </div>
  </div>
</template>

<script>
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
  components: {},
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
.monthsGraph {
  width: 50%;
  height: 100%;
  position: relative;
  /* background: #0062ff; */
}
.daysGraph {
  position: absolute;
  overflow-x: scroll;
  bottom: -1%;
  right: 0;
  width: 75%;
  height: 102%;
  background: #021737;
  /* padding: 10px; */
}
.barsWrapper {
  position: relative;
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}
.bar {
  bottom: 0%;
  height: 10%;
  width: 50px;
  background: linear-gradient(180deg, #4a86e8, #021737);
  border-radius: 10px;
  transition: 0.2s;
}
.day-bar {
  width: 30px;
}
.barNamesWrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.monthName {
  width: 50px;
  background: #0062ff;
  border-radius: 10px;
  padding: 5px;
}
.day-name {
  width: 30px;
  background: #0062ff;
  border-radius: 10px;
  padding: 5px;
}
.flex-between {
  justify-content: space-between;
}
</style>