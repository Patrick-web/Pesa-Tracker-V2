<template>
  <div class="statementCard card">
    <div class="cardTitle">June</div>
    <div class="cardBody">
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
    <vs-button id="showMore" primary circle>
      <p>Show Full Statement</p>
      <img width="90%" src="@/assets/images/expand.svg" alt />
    </vs-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.statementCard {
  margin: 10px;
  padding: 0px;
  padding-bottom: 8px;
  border-radius: 20px;
  overflow: hidden;
}
.cardTitle {
  background: rgb(25, 91, 255);
  padding-bottom: 5px;
  padding-top: 5px;
  font-weight: 800;
}
#showMore {
  width: 220px;
}
#showMore p {
  margin-top: -5px;
}
</style>