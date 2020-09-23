<template>
  <div class="stats">
    <div class="statCard target">
      <p>Target</p>
      <h3>Ksh 5000</h3>
      <img src="@/assets/images/target.svg" alt class="icon" />
    </div>
    <div class="statCard current">
      <p>Current</p>
      <h3>Ksh 300</h3>
      <img src="@/assets/images/tag.svg" alt class="icon" />
    </div>
    <div class="statCard left">
      <p>Left</p>
      <h3>3 Months</h3>
      <img src="@/assets/images/clock.svg" alt class="icon" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.stats {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  padding: 10px;
  padding-top: 15px;
}
.statCard {
  position: relative;
  text-align: left;
}
.statCard p {
  font-size: 17px;
  padding: 5px;
  border-radius: 8px 8px 0px 0px;
  text-align: center;
  color: white;
}
.statCard h3 {
  font-size: 17px;
  padding: 5px;
  border-radius: 0px 0px 8px 8px;
  text-align: center;
  color: white;
}
.target p {
  background: #1eb985;
}
.target h3 {
  background: #1eb98588;
}
.current p {
  background: #d900ff;
}
.current h3 {
  background: #d900ff8c;
}
.left p {
  background: #ffa319;
}
.left h3 {
  background: #ffa31980;
}
.icon {
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translate(-30%, -30%) scale(0.8);
  box-shadow: 0px 0px 5px black;
  border-radius: 50%;
}
</style>
