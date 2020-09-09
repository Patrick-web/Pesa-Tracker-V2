<template>
  <div class="datePicker">
    <div class="hidePicker" @click="hidePicker"></div>
    <div class="pickerContent">
      <vs-button
        style="font-size:1.2rem;font-weight:700;width:100px;margin:auto;margin-top:-20px"
        success
        circle
      >Done</vs-button>
      <div class="pickerCard">
        <div class="pickerCardHead">Select Year</div>
        <div @click="pickYear($event)" class="pickerCardBody grid4">
          <p v-for="year in years" :key="year" class="pickOption">{{year}}</p>
        </div>
      </div>
      <transition
        name="slideLeft"
        enter-active-class="animated fadeInUp faster"
        leave-active-class="animated fadeOutDown faster"
      >
        <div v-if="pickedYear" class="pickerCard">
          <div class="pickerCardHead">Select Month</div>
          <div @click="pickMonth($event)" class="pickerCardBody flexWrap">
            <p v-for="month in months" :key="month" class="pickOption">{{month}}</p>
          </div>
        </div>
      </transition>
      <transition
        name="slideLeft"
        enter-active-class="animated fadeInUp faster"
        leave-active-class="animated fadeOutDown faster"
      >
        <div v-if="pickedMonth" class="pickerCard">
          <div class="pickerCardHead">Select Day</div>
          <div @click="pickDay($event)" class="pickerCardBody grid5">
            <p v-for="day in 31 " :key="day" class="pickOption">{{day}}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hidePicker() {
      document.querySelector(".datePicker").style.top = "100%";
    },
    pickYear(e) {
      const elem = e.target;
      if (elem.classList.contains("pickOption")) {
        if (elem.classList.contains("picked")) {
          elem.classList.remove("picked");
          this.pickedYear = null;
          this.pickedMonth = null;
          this.pickedDay = null;
        } else {
          this.pickedYear = elem.textContent;
          const parent = e.currentTarget;
          if (parent.querySelector(".picked")) {
            parent.querySelector(".picked").classList.remove("picked");
          }
          elem.classList.add("picked");
        }
      }
    },
    pickMonth(e) {
      const elem = e.target;
      if (elem.classList.contains("pickOption")) {
        if (elem.classList.contains("picked")) {
          elem.classList.remove("picked");
          this.pickedMonth = null;
          this.pickedDay = null;
        } else {
          this.pickedMonth = elem.textContent;
          const parent = e.currentTarget;
          if (parent.querySelector(".picked")) {
            parent.querySelector(".picked").classList.remove("picked");
          }
          elem.classList.add("picked");
        }
      }
    },
    pickDay(e) {
      const elem = e.target;
      if (elem.classList.contains("pickOption")) {
        if (elem.classList.contains("picked")) {
          elem.classList.remove("picked");
          this.pickedDay = null;
        } else {
          this.pickedDay = elem.textContent;
          const parent = e.currentTarget;
          if (parent.querySelector(".picked")) {
            parent.querySelector(".picked").classList.remove("picked");
          }
          elem.classList.add("picked");
        }
      }
    }
  },
  data() {
    return {
      pickedYear: null,
      pickedMonth: null,
      pickedDay: null,
      years: ["2018", "2019", "2020"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  }
};
</script>

<style>
.grid4 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
}
.grid5 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 6px 10px;
}
.grid5 .pickOption {
  padding: 2px;
  padding-top: 4px;
}
.flexWrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.flexWrap .pickOption {
  margin: 3px;
}
.datePicker {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0%;
  transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.pickerContent {
  border-top: 2px solid rgb(0, 197, 0);
  background: #021737;
  height: 75%;
  position: absolute;
  width: 100%;
  bottom: 0;
}
.hidePicker {
  top: 0;
  height: 25%;
  width: 100%;
  background: rgba(0, 0, 0, 0.486);
}
.pickerCard {
  margin: 10px;
  background: #00529583;
  border-radius: 20px 20px 10px 10px;
  margin-bottom: 20px;
}
.pickerCardHead {
  background: #00a8ff;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 5px 0px 5px 5px;
  border-radius: 20px;
}
.pickerCardBody {
  padding: 10px;
}
.pickOption {
  border: 2px solid #0668b8;
  border-radius: 20px;
  padding: 5px;
  padding-top: 8px;
}
.picked {
  background: #0668b8;
}
</style>