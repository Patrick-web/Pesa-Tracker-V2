<template>
  <div class="savingsHome page">
    <Header hideBackArrow="true" page="Savings" />
    <router-link :to="{name:'savings', params:{savingsType:'Mshwari'}}">
      <StatementCard cardTitle="Mshwari" buttonText="Show Full Details">
        <div slot="cardBody" class="cardBody">
          <div class="cardItem">
            <p class="transDate">Balance</p>
            <p>Ksh 5415</p>
          </div>
          <hr />
          <div class="cardItem">
            <p class="transDate">Last Withdraw</p>
            <p>Ksh 4655</p>
          </div>
          <hr />
          <div class="cardItem">
            <p class="transDate">Last Deposited</p>
            <p>Ksh 5454</p>
          </div>
        </div>
      </StatementCard>
    </router-link>
    <router-link :to="{name:'savings', params:{savingsType:'Mshwari Locked'}}">
      <StatementCard cardTitle="Mshwari Locked" buttonText="Show Full Details">
        <div slot="cardBody" class="cardBody">
          <div class="cardItem">
            <p class="transDate">Balance</p>
            <p>Ksh 5415</p>
          </div>
          <hr />
          <div class="cardItem">
            <p class="transDate">Target</p>
            <p>Ksh 5454</p>
          </div>
          <hr />
          <div class="cardItem">
            <p class="transDate">Months Remaining</p>
            <p>3 Months</p>
          </div>
        </div>
      </StatementCard>
    </router-link>
    <router-link :to="{name:'savings', params:{savingsType:'KCB Mpesa'}}">
      <StatementCard cardTitle="KCB Mpesa" buttonText="Show Full Details">
        <div slot="cardBody" class="cardBody">
          <div class="cardItem">
            <p class="transDate">Balance</p>
            <p>Ksh 5415</p>
          </div>
          <hr />
          <div class="cardItem">
            <p class="transDate">Last Withdraw</p>
            <p>Ksh 4655</p>
          </div>
          <hr />
          <div class="cardItem">
            <p class="transDate">Last Deposited</p>
            <p>Ksh 5454</p>
          </div>
        </div>
      </StatementCard>
    </router-link>
    <div class="totalSavings card">
      <p>Total Savings</p>
      <h5>Ksh 15000</h5>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import StatementCard from "@/components/StatementCard.vue";
export default {
  components: {
    Header,
    StatementCard
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
</style>