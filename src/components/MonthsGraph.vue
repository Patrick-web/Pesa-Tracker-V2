<template>
  <div class="monthsGraph">
    <div class="barsWrapper">
      <div @click="goToDays(month)" v-for="month in data" :key="month.month" class="monthBar">
        <div class="monthName">{{ month.month }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToDays() {
      document.querySelector(".graphsWrapper").classList.add("scrollToDays");
    }
  },
  components: {},
  data() {
    return {
      selectedMonth: null,
      data: [
        {
          totalDeposit: 5000,
          month: "Jan",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Feb",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Mar",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "April",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "May",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "June",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "July",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Aug",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Sep",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Oct",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Nov",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        },
        {
          totalDeposit: 5000,
          month: "Dec",
          deposits: [
            {
              day: "1",
              deposit: 100
            },
            {
              day: "5",
              deposit: 1000
            },
            {
              day: "3",
              deposit: 350
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.monthsGraph {
  max-width: 100%;
  height: 50%;
  position: relative;
  overflow-x: scroll;
  display: grid;
}
.barsWrapper {
  position: relative;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: auto;
}
.increasePadding {
  padding-left: 350px;
}
.monthBar {
  background: rgb(0, 89, 255);
  height: 80%;
  min-width: 40px;
  width: 50px;
  position: relative;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: 5px;
  justify-self: center;
  align-self: flex-end;
}
.monthName {
  position: absolute;
  bottom: 0%;
  width: 100%;
  background: #065dce;
  border-radius: 10px;
  padding: 3px;
  box-shadow: 0px -2px 5px rgba(2, 10, 95, 0.5);
  font-size: 14px;
}
</style>
