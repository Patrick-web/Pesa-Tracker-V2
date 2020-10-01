<template>
  <div class="dataCard" v-if="subTotal">
    <div class="flex-between">
      <div class="cardAmount">{{subTotal}}</div>
      <div class="transType">{{type}}</div>
    </div>
    <p class="recipient">{{recipient}}</p>
    <div class="cardBody">
      <div
        style="position:relative"
        v-for="record in topThreeRecords"
        :key="record.time"
        class="cardItem"
      >
        <p>{{record.amount}}</p>
        <p class="transDate">{{record.date}}</p>
        <hr style="position:absolute;bottom:0;transform:translateY(100%)" />
      </div>
    </div>
    <vs-button v-if="allRecords.length > 3" id="showMore" primary circle>
      <p>Show All</p>
      <img width="90%" src="@/assets/images/expand.svg" alt />
    </vs-button>
  </div>
</template>

<script>
export default {
  props: {
    subTotal: Number,
    type: String,
    recipient: String,
    topThreeRecords: Array,
    allRecords: Array
  }
};
</script>

<style>
.dataCard {
  background: #044174;
  margin: 10px;
  padding: 10px 2px 5px 2px;
  border-radius: 10px;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
}
.cardAmount {
  font-size: 1.4rem;
  font-weight: 900;
}
.transType {
  font-size: 1.1rem;
  font-weight: 800;
}
.recipient {
  text-align: left;
  padding-left: 10px;
  font-weight: 500;
  font-size: 0.9rem;
}
.transDate {
  font-weight: 300;
  font-size: 0.9rem;
}
#showMore {
  min-width: 120px;
  padding-top: 0px;
  height: 30px;
  font-size: 1rem;
  font-weight: 700;
  display: flex !important;
  padding: 0px;
  margin: auto;
  margin-top: 5px;
}
#showMore img {
  width: 25px;
  margin-top: -5.5px;
  margin-right: -27px;
}
#showMore p {
  margin-top: -7px;
  margin-left: -20px;
  margin-right: 18px;
}
</style>