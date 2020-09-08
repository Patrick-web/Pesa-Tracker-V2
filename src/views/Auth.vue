<template>
  <div class="auth page">
    <img src="@/assets/images/user-lock.svg" alt="" />
    <p style="font-size:1.1rem;color:white">Enter Pin</p>
    <router-link
      style="position:fixed"
      id="goToHome"
      to="/CashFlow"
    ></router-link>
    <div class="indicators">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>

    <div class="keypad">
      <div class="keys">
        <vs-button
          @click="addToPin(key)"
          v-for="key in keys"
          :key="key"
          class="key"
          >{{ key }}
        </vs-button>
      </div>
      <div class="grid3">
        <div></div>
        <vs-button class="key">0</vs-button>
        <vs-button @click="popFromPin" class="key">
          <box-icon color="white" type="solid" name="tag-x"></box-icon>
        </vs-button>
      </div>
    </div>
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
      if (this.pin.length == 4) {
        const enteredPin = this.pin.join("");
        if (enteredPin === this.defaultPin) {
          document.querySelector("#goToHome").click();
        } else {
          this.$vs.notification({
            icon: "<i class='bx bx-error' ></i>",
            color: "danger",
            position: "bottom-center",
            title: "Wrong Pin",
            text: `You entered the wrong pin. Please try again`,
          });
          setTimeout(() => {
            this.pin.length = 0;
            document.querySelectorAll(".filled").forEach((circle) => {
              circle.className = "circle";
              circle.classList.add("animated", "headShake");
            });
          }, 400);
        }
      }
    },
    popFromPin() {
      this.pin.pop();
      if (document.querySelector(".filled")) {
        const circles = document.querySelectorAll(".filled");
        circles[circles.length - 1].className = "circle";
        console.log(this.pin.join(""));
      }
    },
  },
  data() {
    return {
      defaultPin: "5626",
      entries: ["regular", "regular", "regular", , "regular"],
      pin: [],
      keys: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
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
</style>
