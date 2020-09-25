<template>
  <div v-if="$route.name!='Auth'" class="tabBar currentIsFlow">
    <router-link replace :to="{name:'cashflow'}">
      <div @click="switchTab('currentIsFlow')" class="tabBt flow">
        <img src="@/assets/images/cash-register.svg" alt />
        <p>CashFlow</p>
      </div>
    </router-link>
    <router-link replace :to="{name:'statements'}">
      <div @click="switchTab('currentIsStatements')" class="tabBt statement">
        <img style="width:18px;" src="@/assets/images/receipt.svg" alt />
        <p style="margin-top:-1px;padding-top:2px;padding-bottom:2px">Statements</p>
      </div>
    </router-link>
    <router-link replace :to="{name:'savingshome'}">
      <div @click="switchTab('currentIsSavings')" class="tabBt save">
        <img src="@/assets/images/piggy-bank.svg" alt />
        <p>Savings</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: "currentIsFlow"
    };
  },
  methods: {
    switchTab(tab) {
      const tabBar = document.querySelector(".tabBar");
      if (tabBar) {
        tabBar.classList.replace(this.current, tab);
        this.current = tab;
      }
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === "cashflow") {
        this.switchTab("currentIsFlow");
      }
      if (to.name === "statements") {
        this.switchTab("currentIsStatements");
      }
      if (to.name === "savingshome") {
        this.switchTab("currentIsSavings");
      }
    }
  }
};
</script>

<style lang="scss">
.tabBar {
  position: fixed;
  padding-top: 5px;
  bottom: 0;
  left: 0%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.493);
  background: #1565c0;
  // background: #073884;
  z-index: 5;
  img {
    width: 21%;
    transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .tabBt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin-top: 5px;
      transition: 0.2s ease;
      font-size: 12px;
    }
  }
}
.currentIsFlow {
  .flow {
    p {
      transform: scale(0);
    }
    img {
      flex: 2;
      transform: scale(1.3) translateY(30%);
    }
  }
}
.currentIsStatements {
  .statement {
    p {
      transform: scale(0);
    }
    img {
      flex: 2;
      transform: scale(1.2) translateY(20%);
    }
  }
}
.currentIsSavings {
  .save {
    p {
      transform: scale(0);
    }
    img {
      flex: 2;
      transform: scale(1.5) translateY(25%);
    }
  }
}
</style>