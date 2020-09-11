<template>
  <div class="dataCard">
    <div class="flex-between">
      <div class="cardAmount">Ksh 2000</div>
      <div class="transType">Paid</div>
    </div>
    <p class="recipient">Franklin Jones Mpesa Agent Limft Limired</p>
    <div class="cardBody">
      <div class="cardItem">
        <p>Ksh 5415</p>
        <p class="transDate">10 June 2020</p>
      </div>
      <hr />
      <div class="cardItem">
        <p>Ksh 4655</p>
        <p class="transDate">11 June 2020</p>
      </div>
      <hr />
      <div class="cardItem">
        <p>Ksh 5454</p>
        <p class="transDate">12 June 2020</p>
      </div>
    </div>
    <vs-button id="showMore" primary circle>
      <p>Show All</p>
      <img width="90%" src="@/assets/images/expand.svg" alt />
    </vs-button>
  </div>
</template>

<script>
export default {};
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
  font-weight: 300;
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