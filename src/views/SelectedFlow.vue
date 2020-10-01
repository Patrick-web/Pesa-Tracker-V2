<template>
  <div class="dataPage page">
    <Header :page="$route.params.flowName" />
    <vs-button id="fab-center" success circle>
      <p>Show Summary</p>
      <img width="90%" src="@/assets/images/summary.svg" alt />
    </vs-button>

    <DataCard
      v-for="card in flowRender.data"
      :key="card.recipient"
      :subTotal="card.subTotal"
      :type="card.type"
      :recipient="card.recipient"
      :topThreeRecords="card.topThreeRecords"
      :allRecords="card.allRecords"
    />
    <!-- <div class="center">
      <button @click="showDetailsModal = !showDetailsModal">active</button>
      <vs-dialog blur v-model="showDetailsModal">
        <div class="grid2">
          <h3>ID</h3>
          <p>OLISD55W4Pi</p>
        </div>
        <div class="grid2">
          <h3>Date</h3>
          <p>15 June 2020</p>
        </div>
        <div class="grid2">
          <h3>Time</h3>
          <p>1:00 pm</p>
        </div>
        <div class="grid2">
          <h3>Recipient</h3>
          <p>Safaricom lls limited access Kenya</p>
        </div>
        <vs-button style="margin:auto" @click="showMsgModal = !showMsgModal">Show Message</vs-button>
      </vs-dialog>
      <vs-dialog blur v-model="showMsgModal">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
          consequatur quam porro excepturi sed hic vero corporis veniam,
          similique sapiente provident nobis officia mollitia libero
          necessitatibus et non fugit optio.
        </p>
      </vs-dialog>
    </div>-->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DataCard from "@/components/DataCard.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: "Today",
      showDetailsModal: false,
      showMsgModal: false
    };
  },
  computed: mapGetters(["flowRender"]),
  components: {
    Header,
    DataCard
  }
};
</script>

<style lang="scss">
#fab-center {
  width: 200px;
  padding-top: 0px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex !important;
  padding: 0px;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
#fab-center img {
  width: 70px;
  margin-top: -23px;
  margin-right: -27px;
}
#fab-center p {
  margin-top: -23px;
  margin-left: -5px;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 2fr;
  h3 {
    text-align: left;
  }
  p {
    text-align: left;
  }
  margin-bottom: 10px;
  margin-top: 10px;
}
.vs-dialog__content {
  margin-bottom: 0 !important;
  background: #003764;
  border: 2px solid #003764;
}
.vs-dialog__close {
  background: #1b496e;
  color: white;
}
.vs-icon-close:before {
  background: white !important;
}
.vs-icon-close::after {
  background: white !important;
}
</style>
