<template>
  <div class="statementCard card">
    <div class="cardTitle">{{cardTitle}}</div>
    <slot name="cardBody" />
    <slot name="progressBar" />

    <div class="showMore" primary circle>
      <div class="bt">
        <span>{{buttonText}}</span>
        <img src="@/assets/images/expand.svg" alt />
      </div>
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

<style lang="scss" scoped>
.statementCard {
  margin: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-bottom: 5px;
  border-radius: 20px;
  overflow: hidden;
}
.cardTitle {
  background: #2196f3;
  color: rgb(255, 255, 255);
  padding-bottom: 5px;
  padding-top: 5px;
  font-weight: 500;
}
.showMore {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  .bt {
    background: #1e88e5;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 30px;
    padding-right: 8px;
    padding-left: 8px;
    span {
      color: white;
      margin-right: 5px;
    }
    img {
      width: 20px;
      margin: auto;
    }
  }
}
</style>