<template>
  <div class="flowCard card">
    <p class="cardTitle">{{day}}</p>
    <hr />
    <div class="cardBody">
      <div class="cardItem">
        <p>Cash Out</p>
        <h5>{{cashOut}} Ksh</h5>
      </div>
      <hr />
      <div class="cardItem">
        <p>Cash In</p>
        <h5>{{cashIn}} Ksh</h5>
      </div>
      <hr />
      <div class="cardItem">
        <p>Savings</p>
        <h5>{{savings}} Ksh</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    day: String,
    cashIn: String,
    cashOut: String,
    savings: String
  }
};
</script>

<style lang="scss">
.flowCard {
  background: #044174;
  margin: 20px 10px 20px 10px;
  padding: 5px 2px 10px 2px;
  border-radius: 20px;
}
.cardTitle {
  font-size: 1.7em;
  font-weight: 500;
  margin-bottom: 5px;
  color: #c8ddfd;
}
.cardBody {
  margin-top: 5px;
}
.cardItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  p,
  h5 {
    color: #c8ddfd;
  }
}
hr {
  background: rgba(255, 255, 255, 0.63);
  width: 95%;
  margin: auto;
  height: 1px;
  border: none;
}
</style>
