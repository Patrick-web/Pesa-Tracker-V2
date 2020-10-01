<template>
  <div class="cashFlow page">
    <Header hideBackArrow="true" page="Cash Flow" />
    <router-link :to="{name:'selectedFlow', params:{flowName:'Today'}}">
      <FlowCard
        day="Today"
        :cashIn="summaries.todayData.cashIn"
        :cashOut="summaries.todayData.cashOut"
        :savings="'0'"
        targetFlow="todayData"
      />
    </router-link>
    <router-link :to="{name:'selectedFlow', params:{flowName:'Yesterday'}}">
      <FlowCard
        day="Yesterday"
        :cashIn="summaries.yesterdayData.cashIn"
        :cashOut="summaries.yesterdayData.cashOut"
        :savings="'0'"
        targetFlow="yesterdayData"
      />
    </router-link>
    <router-link :to="{name:'selectedFlow', params:{flowName:'This Week'}}">
      <FlowCard
        day="This Week"
        :cashIn="summaries.thisWeekData.cashIn"
        :cashOut="summaries.thisWeekData.cashOut"
        :savings="'0'"
        targetFlow="thisWeekData"
      />
    </router-link>
    <router-link :to="{name:'selectedFlow', params:{flowName:'Last Week'}}">
      <FlowCard
        day="Last Week"
        :cashIn="summaries.lastWeekData.cashIn"
        :cashOut="summaries.lastWeekData.cashOut"
        :savings="'0'"
        targetFlow="lastWeekData"
      />
    </router-link>
    <router-link :to="{name:'selectedFlow', params:{flowName:'This Month'}}">
      <FlowCard
        day="This Month"
        :cashIn="summaries.thisMonthData.cashIn"
        :cashOut="summaries.thisMonthData.cashOut"
        :savings="'0'"
        targetFlow="thisMonthData"
      />
    </router-link>
    <router-link :to="{name:'selectedFlow', params:{flowName:'Last Month'}}">
      <FlowCard
        day="Last Month"
        :cashIn="summaries.lastMonthData.cashIn"
        :cashOut="summaries.lastMonthData.cashOut"
        :savings="'0'"
        targetFlow="lastMonthData"
      />
    </router-link>
    <DatePicker v-on:selected="searchByDate" />
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters(["summaries"]),
  methods: {
    ...mapActions(["fetchAllMpesaMessages", "extractSpecificMonthData"]),
    renderFlow(target) {
      alert(target);
    },
    showDatePicker() {
      document.querySelector(".page").classList.add("showDatePicker");
    },
    searchByDate(date) {
      this.extractSpecificMonthData(date);
    }
  },
  mounted() {
    this.fetchAllMpesaMessages();
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