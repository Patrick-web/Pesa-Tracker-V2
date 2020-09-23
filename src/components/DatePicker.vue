<template>
  <div class="datePicker">
    <div class="pickerContent">
      <vs-button
        style="font-size:1.2rem;font-weight:700;width:100px;margin:auto;margin-top:-20px"
        success
        circle
        @click="getSelected"
      >Done</vs-button>
      <div class="pickerCard">
        <div class="pickerCardHead">Select Year</div>
        <div @click="pickYear($event)" class="pickerCardBody grid5">
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
          <div @click="pickMonth($event)" class="pickerCardBody grid6">
            <div v-for="(month,index) in months" :key="month" class="pickOption">
              {{month}}
              <span style="display:none" id="monthNo">{{index + 1}}</span>
            </div>
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
          <div @click="pickDay($event)" class="pickerCardBody grid7">
            <p v-for="day in 31 " :key="day" class="pickOption">{{day}}</p>
          </div>
        </div>
      </transition>
    </div>
    <div class="hidePicker" v-on:click="clearOptions" @click="hidePicker"></div>
  </div>
</template>

<script>
export default {
  methods: {
    getSelected() {
      if (
        this.pickedYear &&
        this.pickedMonth == null &&
        this.pickedDay == null
      ) {
        this.selected.type = "Year";
        this.selected.value = `${this.pickedYear}`;
      } else if (this.pickedMonth && this.pickedDay == null) {
        this.selected.type = "Month";
        this.selected.value = `${this.pickedMonth}/${this.pickedYear}`;
      } else if (this.pickedDay) {
        this.selected.type = "Day";
        this.selected.value = `${this.pickedDay}/${this.pickedMonth}/${this.pickedYear}`;
      } else {
        this.selected.type = "None";
      }
      if (this.selected.type !== "None") {
        this.$emit("selected", this.selected);
      }
      this.hidePicker();
    },
    hidePicker() {
      document.querySelector(".datePicker").style.top = "100%";
    },
    clearOptions() {
      this.pickedYear = null;
      this.pickedMonth = null;
      this.pickedDay = null;
      const selected = document.querySelectorAll(".picked");
      selected.forEach(option => {
        option.classList.remove("picked");
      });
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
          this.pickedMonth = elem.querySelector("#monthNo").textContent;
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
      selected: {
        type: null,
        value: null
      },
      pickedYear: null,
      pickedMonth: null,
      pickedDay: null,
      years: ["2018", "2019", "2020"],
      months: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ]
    };
  }
};
</script>

<style>
.grid5 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
}
.grid7 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 6px 10px;
}
.grid6 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 6px 10px;
}
.datePicker {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 100%;
  transition: 0.2s ease-in-out;
  z-index: 3;
}
.pickerContent {
  border-top: 3px solid rgb(40, 255, 40);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #021737;
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: height 0.2s ease;
}
.hidePicker {
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.486);
}
.pickerCard {
  margin: 10px;
  background: #00529583;
  border-radius: 20px 20px 10px 10px;
  margin-bottom: 10px;
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
  padding-bottom: 5px;
  padding-top: 5px;
}
.pickOption {
  border: 2px solid #0668b8;
  border-radius: 20px;
  padding: 4px;
  font-size: 11px;
}
.picked {
  background: #0668b8;
}
</style>