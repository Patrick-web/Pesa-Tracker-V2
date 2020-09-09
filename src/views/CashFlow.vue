<template>
  <div class="cashFlow page">
    <FlowCard :cashIn="'400'" :day="'Today'" :cashOut="'600'" :savings="'0'" />
    <DatePicker v-on:selected="displaySelectedDate" />
    <vs-button @click="showDatePicker" style="width:50px;height:50px;" id="fab" primary circle>
      <img width="90%" src="@/assets/images/calendar.svg" alt />
    </vs-button>
  </div>
</template>

<script>
import "boxicons";
import FlowCard from "@/components/FlowCard.vue";
import DatePicker from "@/components/DatePicker.vue";
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
    DatePicker
  }
};
</script>

<style>
#fab {
  position: fixed;
  bottom: 10px;
  right: 5px;
  z-index: 2;
}
</style>