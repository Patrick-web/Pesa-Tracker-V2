<template>
  <div class="savingsHome page">
    <Header :page="$route.params.savingsType" />
    <TabView :tabs="tabs" />
    <img id="wave" src="@/assets/images/wave.svg" alt />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import TabView from "@/components/TabView.vue";
export default {
  data() {
    return {
      tabs: [
        {
          name: "Deposits",
          items: [
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            },
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            },
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            },
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            }
          ]
        },
        {
          name: "Withdraws",
          items: [
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            },
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            },
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            },
            {
              param1: "Ksh 300",
              param2: "15 Aug 2020"
            }
          ]
        }
      ]
    };
  },
  components: {
    Header,
    TabView
  }
};
</script>

<style>
.totalSavings {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-size: 1.1rem;
  /* padding-left: 10px; */
}
.totalSavings h5 {
  font-size: 1.1rem;
}
#wave {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(-5%);
  z-index: -1;
  /* animation-name: rise;
  animation-iteration-count: infinite;
  animation-duration: 4s;
  animation-direction: normal; */
}
@keyframes rise {
  0% {
    transform: translateX(-5%);
    top: 100%;
  }
  /* 50% {
    transform: translateX(-30%);
  } */
  100% {
    top: -10%;
    transform: translateX(-50%);
  }
}
</style>