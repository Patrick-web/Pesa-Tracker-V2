<template>
  <div class="header">
    <img id="backArrow" src="@/assets/images/arrow.svg" alt="" />
    <p id="headerName">Cash Flow</p>
    <img id="menuToggle" src="@/assets/images/menu-toggle.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  background: #152a4d;
  height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  /* padding: 10px; */
}
#backArrow {
  width: 50px;
}
#menuToggle {
  justify-self: right;
  margin-right: 10px;
  width: 35px;
}
.header img {
  align-self: center;
  justify-self: center;
}
.header p {
  align-self: center;
  justify-self: center;
  font-size: 1.8em;
  font-weight: 700;
}
</style>
