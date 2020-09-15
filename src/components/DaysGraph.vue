<template>
  <div class="daysGraph" v-if="selectedMonth">
    <div class="selectedMonth">
      <div class="bar"></div>
      <div class="monthName">June</div>
    </div>
    <div class="daysWrapper">
      <div class="barsWrapper round">
        <div class="bar day-bar"></div>
      </div>
      <div class="barNamesWrapper round">
        <div class="day-name">5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>