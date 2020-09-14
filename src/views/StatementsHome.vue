<template>
  <div class="StatementsHome page">
    <Header page="Statements" />
    <StatementCard cardTitle="June" buttonText="Show Full Statement">
      <div slot="cardBody" class="cardBody">
        <div class="cardItem">
          <p class="transDate">Total Paid</p>
          <p>Ksh 5415</p>
        </div>
        <hr />
        <div class="cardItem">
          <p class="transDate">Total Sent</p>
          <p>Ksh 4655</p>
        </div>
        <hr />
        <div class="cardItem">
          <p class="transDate">Total Received</p>
          <p>Ksh 5454</p>
        </div>
        <hr />
        <div class="cardItem">
          <p class="transDate">Total Withdrawn</p>
          <p>Ksh 5454</p>
        </div>
        <hr />
        <div class="cardItem">
          <p class="transDate">Total Deposited</p>
          <p>Ksh 5454</p>
        </div>
      </div>
    </StatementCard>
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