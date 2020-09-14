<template>
  <div class="statementCard card">
    <div class="cardTitle">{{cardTitle}}</div>
    <slot name="cardBody" />
    <slot name="progressBar" />

    <div class="showMore" primary circle>
      <p>{{buttonText}}</p>
      <img src="@/assets/images/expand.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardTitle: String,
    buttonText: String
  }
};
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
.showMore {
  max-width: 210px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 12px;
  background: rgb(25, 91, 255);
  border-radius: 20px;
}
.showMore img {
  width: 13%;
}
</style>