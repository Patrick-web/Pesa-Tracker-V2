<template>
  <div class="sectionSwitcher currentPaid">
    <div class="shower" @click="showSwitcher"></div>
    <div class="wrapper">
      <img id="arrowPointer" src="@/assets/images/navigator.png" alt />
      <p @click="scroll('currentReceived')" class="received">Received</p>
      <p @click="scroll('currentPaid')" class="paid">Paid</p>
      <p @click="scroll('currentSent')" class="sent currentSection">Sent</p>
      <p @click="scroll('currentWithdraw')" class="withdraw">Withdraw</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "currentPaid"
    };
  },
  methods: {
    scroll(section) {
      const container = document.querySelector(".sectionSwitcher");
      container.classList.replace(this.current, section);
      this.current = section;
      const targetSection = document.querySelector(`#${section}`);
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setTimeout(() => {
        document.querySelector(".statement").classList.remove("showSwitcher");
      }, 200);
    },
    showSwitcher() {
      document.querySelector(".statement").classList.add("showSwitcher");
    }
  },
  mounted() {
    //TODO Implement code to automatically update the switcher on scroll
    // Array.min = array => Math.min.apply(Math, array);
    // const page = document.querySelector(".statement");
    // const paid = document.querySelector("#currentPaid");
    // const sent = document.querySelector("#currentSent");
    // const received = document.querySelector("#currentReceived");
    // const withdraw = document.querySelector("#currentWithdraw");
    // let min;
    // page.addEventListener("scroll", () => {
    //   const paidData = {
    //     section: "currentPaid",
    //     top: paid.getBoundingClientRect().top
    //   };
    //   const sentData = {
    //     section: "currentSent",
    //     top: sent.getBoundingClientRect().top
    //   };
    //   if (
    //     paidData.top < sentData.top &&
    //     paidData.top > -1 &&
    //     sentData.top > -1
    //   ) {
    //     min = paidData;
    //   } else {
    //     min = sentData;
    //   }
    //   const receivedData = {
    //     section: "currentReceived",
    //     top: received.getBoundingClientRect().top
    //   };
    //   if (receivedData.top < min.top && receivedData.top > -1) {
    //     min = receivedData;
    //   }
    //   const withdrawData = {
    //     section: "currentWithdraw",
    //     top: withdraw.getBoundingClientRect().top
    //   };
    //   if (withdrawData.top < min.top && withdrawData.top > -1) {
    //     min = withdrawData;
    //   }
    //   console.log(min);
    //   document
    //     .querySelector(".sectionSwitcher")
    //     .classList.replace(this.current, min.section);
    //   this.current = min.section;
    // });
  }
};
</script>

<style scoped lang="scss">
.sectionSwitcher {
  position: fixed;
  top: 50%;
  right: 1%;
  width: 40px;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  //   background: #02995f;
  background: linear-gradient(165deg, #02995f, rgb(2, 133, 173));
  clip-path: circle(50% at 50% 50%);
  z-index: 3;
  transition: 0.2s ease;
  .wrapper {
    width: 40px;
    height: 40px;
    position: relative;
    // transition: 0.1s ease;
    img {
      position: absolute;
      width: px;
      top: 45%;
      right: 2%;
      transform: translate(-20%, -50%);
      transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
}
.showSwitcher .sectionSwitcher {
  right: 0%;
  width: 250px;
  height: 250px;
  justify-content: center;
  transform: translateX(50%) translateY(-40%);
  .wrapper {
    width: 250px;
    height: 250px;
    position: relative;
    img {
      position: absolute;
      width: 20px;
      top: 48%;
      right: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .shower {
    display: none;
    pointer-events: none;
  }
}
.wrapper {
  p {
    padding: 5px 8px 4px 8px;
    text-align: left;
    border-radius: 20px;
    position: absolute;
    background: rgba(255, 255, 255, 0.212);
    z-index: 4;
    border: 0px solid white;
    transition: 0.1s ease;
    color: white;
  }

  .received {
    top: 50px;
    left: 13%;
  }
  .paid {
    top: 90px;
    left: 6%;
  }
  .sent {
    top: 130px;
    left: 6%;
  }
  .withdraw {
    top: 170px;
    left: 13%;
  }
}
.currentSent {
  .sent {
    background: rgb(2, 173, 164) !important;
    font-weight: 600;
    border: 2px solid white;
  }
  .wrapper img {
    transform: translate(-50%, -40%) rotate(-110deg) !important;
  }
}
.currentPaid {
  .paid {
    background: rgb(2, 173, 164) !important;
    font-weight: 600;
    border: 2px solid white;
  }
  .wrapper img {
    transform: translate(-55%, -50%) rotate(-65deg) !important;
  }
}
.currentWithdraw {
  .withdraw {
    background: rgb(2, 173, 164) !important;
    font-weight: 600;
    border: 2px solid white;
  }
  .wrapper img {
    transform: translate(-50%, -40%) rotate(-180deg) !important;
  }
}
.currentReceived {
  .received {
    background: rgb(2, 173, 164) !important;
    font-weight: 600;
    border: 2px solid white;
  }
  .wrapper img {
    transform: translate(-50%, -50%) rotate(0deg) !important;
  }
}
.shower {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
}
</style>