<template>
  <div class="tableView">
    <div class="columnHeads">
      <div v-for="column in columnHeads" :key="column" class="columnHead">{{column}}</div>
    </div>
    <div class="tbody">
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <!-- <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>
      <div class="tr">
        <p>22/08/2020</p>
        <p>Ksh 5000</p>
        <p>Safricom Company limited Airtime</p>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columnHeads: ["Date", "Amount", "Recipient"]
    };
  }
};
</script>

<style>
.tableView {
  margin: 10px;
}
.columnHeads {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  background: #0062ff;
}
.columnHead {
  padding: 5px;
  justify-self: center;
  align-self: center;
  font-weight: 600;
  font-size: 18px;
}
.tbody {
  width: 100%;
}
.tr {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  padding-top: 5px;
  padding-bottom: 5px;
}
.tr:nth-child(even) {
  background: #0f4699;
}
.tr:nth-child(odd) {
  background: #022c6a;
}
.tr p {
  display: grid;
  justify-self: center;
  align-items: center;
  font-size: 10px;
}
</style>