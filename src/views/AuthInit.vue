<template>
  <div class="auth page">
    <img src="@/assets/images/user-lock.svg" alt />
    <p style="font-size:1.1rem;color:white">Create Pin Number</p>
    <router-link style="position:fixed" id="goToHome" to="/CashFlow"></router-link>
    <p style="font-size:1.1rem;color:white;font-weight:800">{{ pin.join("") }}</p>
    <div class="keypad">
      <div class="keys">
        <vs-button @click="addToPin(key)" v-for="key in keys" :key="key" class="key">{{ key }}</vs-button>
      </div>
      <div class="grid3">
        <div></div>
        <vs-button class="key">0</vs-button>
        <vs-button @click="popFromPin" class="key">
          <img class="backspaceIcon" src="@/assets/images/backspace.svg" alt />
        </vs-button>
      </div>
    </div>

    <transition
      name="slideLeft"
      enter-active-class="animated slideInUp faster"
      leave-active-class="animated slideOutDown faster"
    >
      <vs-button
        v-if="pin.length == 4"
        style="font-size:1.2rem;width:230px"
        success
        circle
        @click="savePin"
      >
        <box-icon color="white" type="solid" name="save"></box-icon>Save
      </vs-button>
    </transition>
  </div>
</template>

<script>
import "boxicons";
export default {
  methods: {
    addToPin(num) {
      if (this.pin.length < 4) {
        if (document.querySelector(".circle")) {
          const currentCircle = document.querySelector(".circle");
          currentCircle.className = "filled";
          currentCircle.classList.add("animated", "heartBeat", "fast");
        }
        this.pin.push(num);
        console.log(this.pin);
      }
    },
    savePin() {
      this.$vs.notification({
        icon: "<i class='bx bx-select-multiple' ></i>",
        color: "success",
        position: "top-center",
        title: "Success",
        text: `Pin has been Set`
      });
      localStorage.setItem("gapi.googleapis.com", `${this.pin.join("")}`);
      setTimeout(() => {
        document.querySelector("#goToHome").click();
      }, 800);
    },
    popFromPin() {
      this.pin.pop();
      if (document.querySelector(".filled")) {
        const circles = document.querySelectorAll(".filled");
        circles[circles.length - 1].className = "circle";
        console.log(this.pin.join(""));
      }
    }
  },
  data() {
    return {
      defaultPin: "5626",
      entries: ["regular", "regular", "regular", , "regular"],
      pin: [],
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>

<style>
.auth {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.grid3 {
  margin-top: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-right: -30px;
}
label {
  font-size: 1.2em !important;
  margin-left: -5px;
}
input {
  font-size: 1.2em !important;
}
.input-field input {
  width: 100%;
}
.input-field {
}

.keys {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 10px;
  column-gap: 30px;
  margin: auto;
}
.key {
  color: white;
  border-radius: 5px;
  font-size: 1rem !important;
  width: 50px;
  padding: 5px;
}
.indicators {
  display: flex;
}
.circle {
  margin: 5px;
  width: 10px;
  height: 10px;
  border: 2px white solid;
  border-radius: 50%;
}
.filled {
  margin: 5px;
  width: 10px;
  height: 10px;
  border: 2px white solid;
  border-radius: 50%;
  background: white;
}
.backspaceIcon {
  width: 90%;
}
</style>
