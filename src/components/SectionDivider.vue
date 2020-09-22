<template>
  <div :id="'current' + sectionName" class="sectionDivider">
    <hr />
    <p class="sectionName">{{sectionName}}</p>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    sectionName: String
  }
};
</script>

<style scoped>
.sectionDivider {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.sectionName {
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 10px 4px 10px;
  font-weight: 600;
}
hr {
  background: white;
}
</style>