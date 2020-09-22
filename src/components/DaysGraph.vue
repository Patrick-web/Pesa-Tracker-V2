<template>
  <div class="daysGraph">
    <img id="backToMonths" @click="backToMonths" src="@/assets/images/arrow-back.svg" alt />
    <div class="selectedMonth">
      <div class="selectedBar"></div>
      <p class="selectedMonthName">June</p>
      <div class="totalDeposit">
        <hr />
        <p>Total Deposit</p>
        <h3>5000</h3>
      </div>
    </div>
    <div class="daysWrapper">
      <div class="barsWrapper">
        <div class="bar day-bar">
          <div class="day-name">1</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">2</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">3</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">4</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">5</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">6</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">7</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">8</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">9</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">10</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">11</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">12</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">13</div>
        </div>
        <div class="bar day-bar">
          <div class="day-name">14</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backToMonths() {
      document.querySelector(".graphsWrapper").classList.remove("scrollToDays");
    }
  }
};
</script>

<style scoped>
.daysGraph {
  height: 50%;
  width: 100%;
  display: flex;
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
}
.daysWrapper {
  width: 77%;
  overflow-x: scroll;
  padding-top: 80px;
  display: grid;
  margin-left: 10px;
}
.barsWrapper {
  width: auto;
  height: 97%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
}
.day-bar {
  height: 100%;
  min-width: 20px;
  margin-left: 5px;
  margin-right: 5px;
  background: #0062ff;
  bottom: 0;
  border-radius: 20px;
  position: relative;
}
.day-name {
  width: 100%;
  background: #0062ff;
  box-shadow: 0px -2px 5px rgba(2, 10, 95, 0.664);
  border-radius: 10px;
  padding: 5px;
  position: absolute;
  bottom: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.selectedMonth {
  height: 100%;
  position: relative;
  padding-top: 9px;
}
.selectedMonthName {
  width: 45px;
  border-radius: 10px;
  background: #15ca7f;
  margin: auto;
  margin-left: 15px;
  margin-top: 2px;
  padding: 4px 5px 4px 5px;
  font-weight: 700;
}
.selectedBar {
  height: 90%;
  width: 50px;
  background: #15ca7f;
  border-radius: 10px;
  margin-left: 12px;
}
.totalDeposit {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(97%);
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
p {
  width: 350px;
  margin-left: 5px;
}
hr {
  background: white;
  /* display: inline; */
}
h3 {
  margin-left: 5px;
}
#backToMonths {
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
