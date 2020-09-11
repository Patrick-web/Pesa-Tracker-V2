<template>
  <div class="savingsHome page">
    <Header page="Savings" />
    <StatementCard />
    <StatementCard />
    <StatementCard />
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