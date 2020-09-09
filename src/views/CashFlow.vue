<template>
  <div class="about page">
    <FlowCard :cashIn="'400'" :day="'Today'" :cashOut="'600'" :savings="'0'" />
    <DatePicker />
  </div>
</template>

<script>
import "boxicons";
import FlowCard from "@/components/FlowCard.vue";
import DatePicker from "@/components/DatePicker.vue";
export default {
  components: {
    FlowCard,
    DatePicker
  }
};
</script>
