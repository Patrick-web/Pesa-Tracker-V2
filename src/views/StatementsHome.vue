<template>
  <div class="StatementsHome page">
    <Header page="Statements" />
    <StatementCard />
    <DatePicker v-on:selected="getStatementForSelectedDate" />
    <vs-button @click="showDatePicker" style="width:50px;height:50px;" id="fab" success circle>
      <img width="90%" src="@/assets/images/calendar.svg" alt />
    </vs-button>
  </div>
</template>

<script>
import Header from "@/components/Header";
import StatementCard from "@/components/StatementCard";
import DatePicker from "@/components/DatePicker";

export default {
  methods: {
    showDatePicker() {
      document.querySelector(".datePicker").style.top = "0%";
    },
    getStatementForSelectedDate(date) {
      console.log(date);
    }
  },
  components: {
    Header,
    StatementCard,
    DatePicker
  }
};
</script>

<style>
</style>