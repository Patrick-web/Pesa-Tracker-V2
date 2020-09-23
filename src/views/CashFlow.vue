<template>
  <div class="cashFlow page">
    <Header hideBackArrow="true" page="Cash Flow" />
    <FlowCard :cashIn="'400'" :day="'Today'" :cashOut="'600'" :savings="'0'" />
    <FlowCard :cashIn="'400'" :day="'Today'" :cashOut="'600'" :savings="'0'" />
    <DatePicker v-on:selected="displaySelectedDate" />
    <vs-button @click="showDatePicker" style="width:50px;height:50px;" id="fab" success circle>
      <img width="90%" src="@/assets/images/calendar.svg" alt />
    </vs-button>
  </div>
</template>

<script>
import "boxicons";
import FlowCard from "@/components/FlowCard.vue";
import DatePicker from "@/components/DatePicker.vue";
import Header from "@/components/Header";

export default {
  methods: {
    showDatePicker() {
      document.querySelector(".datePicker").style.top = "0%";
    },
    displaySelectedDate(date) {
      console.log(date);
    }
  },
  components: {
    FlowCard,
    DatePicker,
    Header
  }
};
</script>

<style>
#fab {
  position: fixed;
  bottom: 65px;
  right: 5px;
  z-index: 2;
}
</style>