import utils from "../../Utils/FetchMessages";
import * as moment from "moment";
const state = {
  sessionFetchingIsDone: false,
  flowRender: {
    data: [],
    summary: null,
  },
  sent: [],
  paid: [],
  received: [],
  agentWithdraw: [],
  bought: [],
  mshwariDeposit: [],
  mshwariWithdraw: [],
  allSms: [],
  todayData: [],
  yesterdayData: [],
  thisWeekData: [],
  lastWeekData: [],
  thisMonthData: [],
  lastMonthData: [],
  specificDateData: [],
  summaries: {
    todayData: {
      cashOut: "N/A",
      cashIn: "N/A",
      savings: "N/A",
    },
    yesterdayData: {
      cashOut: "N/A",
      cashIn: "N/A",
      savings: "N/A",
    },
    thisWeekData: {
      cashOut: "N/A",
      cashIn: "N/A",
      savings: "N/A",
    },
    lastWeekData: {
      cashOut: "N/A",
      cashIn: "N/A",
      savings: "N/A",
    },
    thisMonthData: {
      cashOut: "N/A",
      cashIn: "N/A",
      savings: "N/A",
    },
    lastMonthData: {
      cashOut: "N/A",
      cashIn: "N/A",
      savings: "N/A",
    },
    specificDateData: {
      cashOut: "N/A",
      cashIn: "N/A",
      savings: "N/A",
    },
  },
};
const getters = {
  todayData: () => state.todayData,
  YesterdayData: () => state.yesterdayData,
  thisWeekData: () => state.thisWeekData,
  lastWeekData: () => state.lastWeekData,
  thisMonthData: () => state.thisMonthData,
  lastMonthData: () => state.lastMonthData,
  summaries: () => state.summaries,
  flowRender: () => state.flowRender,
};
const actions = {
  renderFlow({ commit }, targetFlow) {
    console.log(targetFlow);
    state.flowRender.data = state[`${targetFlow}`];
    state.flowRender.summary = {
      ...state.summaries[`${targetFlow}`],
    };
  },
  fetchAllMpesaMessages() {
    if (!state.sessionFetchingIsDone) {
      smsreader.filterSenders(["MPESA"]).then((msgs) => {
        console.log(msgs.length);
        msgs.forEach((msg) => {
          const msgObj = utils.extractInfo({
            fullMessage: msg.body,
            timestamp: msg.date,
          });
          if (msgObj) {
            state.allSms.unshift(msgObj);
            actions.groupByType(msgObj);
          }
        });
        console.log("Done fetching");
        actions.extractTodayData();
        actions.extractYesterdayData();
        actions.extractThisWeekData();
        actions.extractLastWeekData();
        actions.extractThisMonthData();
        actions.extractLastMonthData();
      });
      state.sessionFetchingIsDone = true;
    }
  },
  generateSummaries() {
    const fields = [
      "todayData",
      "yesterdayData",
      "thisWeekData",
      "lastWeekData",
      "thisMonthData",
      "lastMonthData",
      "specificDateData",
    ];

    fields.forEach((field) => {
      if (state[`${field}`].length > 0) {
        state.summaries[`${field}`]["cashOut"] = state[`${field}`]
          .filter(
            (msgObj) =>
              msgObj.type === "Paid" ||
              msgObj.type === "Sent" ||
              msgObj.type === "Agent Withdraw"
          )
          .map((msgObj) => msgObj.subTotal)
          .reduce((subTotal, Total) => subTotal + Total, 0);
      }
    });

    fields.forEach((field) => {
      if (state[`${field}`].length > 0) {
        state.summaries[`${field}`]["cashIn"] = state[`${field}`]
          .filter((msgObj) => msgObj.type === "Received")
          .map((msgObj) => msgObj.subTotal)
          .reduce((subTotal, Total) => subTotal + Total, 0);
      }
    });
  },

  extractTodayData() {
    const jsDate = new Date(Date.now());
    let date = `${jsDate.getMonth()}/${jsDate.getDay()}/${jsDate.getFullYear()}`;
    state.allSms.forEach((msg) => {
      if (msg.date === date) {
        console.log(msg);
        state.todayData.push(msg);
      }
    });
    console.log(state.todayData);
    const groupedData = actions.groupByRecipient(state.todayData);
    state.todayData.length = 0;
    state.todayData = groupedData;
    actions.generateSummaries();
  },
  extractYesterdayData() {
    const today = moment();
    const yesterday = today.startOf("day").subtract(24, "hours");
    state.allSms.forEach((msg) => {
      if (msg.dayOfYear === yesterday.get("dayOfYear")) {
        if (msg.dateTime.year() == today.year()) {
          state.yesterdayData.push(msg);
        }
      }
    });
    const groupedData = actions.groupByRecipient(state.yesterdayData);
    state.yesterdayData.length = 0;
    state.yesterdayData = groupedData;
    actions.generateSummaries();
  },
  extractThisWeekData() {
    const today = moment();
    const startOfWeek = today.startOf("week").get("dayOfYear");
    const endOfWeek = today.endOf("week").get("dayOfYear");
    state.allSms.forEach((msg) => {
      if (
        msg.year == new Date(Date.now()).getFullYear() &&
        msg.dayOfYear >= startOfWeek &&
        msg.dayOfYear >= endOfWeek
      ) {
        console.log(msg);
        state.thisWeekData.push(msg);
      }
    });
    const groupedData = actions.groupByRecipient(state.thisWeekData);
    state.thisWeekData.length = 0;
    state.thisWeekData = groupedData;
    actions.generateSummaries();
  },
  extractLastWeekData() {
    const today = moment();
    const startOfWeek = today.startOf("week");
    const lastDayOfPrevWeek = startOfWeek.subtract(24, "hours");
    const endOfPrevWeek = lastDayOfPrevWeek.get("dayOfYear");
    let startOfPrevWeek = lastDayOfPrevWeek.startOf("week");
    startOfPrevWeek = startOfWeek.get("dayOfYear");
    state.allSms.forEach((msg) => {
      if (msg.dayOfYear > startOfPrevWeek || msg.dayOfYear == startOfPrevWeek) {
        if (msg.dayOfYear < endOfPrevWeek || msg.dayOfYear == endOfPrevWeek) {
          if (msg.dateTime.year() == today.year()) {
            state.lastWeekData.push(msg);
          }
        }
      }
    });
    const groupedData = actions.groupByRecipient(state.lastWeekData);
    state.lastWeekData.length = 0;
    state.lastWeekData = groupedData;
    actions.generateSummaries();
  },
  extractThisMonthData() {
    const today = moment();
    const dayOfYearToday = today.get("dayOfYear");
    const startOfMonth = today.startOf("month").get("dayOfYear");
    state.allSms.forEach((msg) => {
      if (msg.dayOfYear > startOfMonth || msg.dayOfYear == startOfMonth) {
        if (msg.dayOfYear < dayOfYearToday || msg.dayOfYear == dayOfYearToday) {
          if (msg.dateTime.year() == today.year()) {
            state.thisMonthData.push(msg);
          }
        }
      }
    });
    const groupedData = actions.groupByRecipient(state.thisMonthData);
    state.thisMonthData.length = 0;
    state.thisMonthData = groupedData;
    actions.generateSummaries();
    // console.log(state.thisMonthSms);
  },
  extractLastMonthData() {
    const today = moment();
    const startOfMonth = today.startOf("month");
    const endOfLastMonth = startOfMonth.subtract(24, "hours");
    const endOfLastMonthDay = endOfLastMonth.get("dayOfYear");
    const startOfLastMonth = endOfLastMonth.startOf("month");
    const startOfLastMonthDay = startOfLastMonth
      .startOf("month")
      .get("dayOfYear");

    state.allSms.forEach((msg) => {
      if (
        msg.dayOfYear > startOfLastMonthDay ||
        msg.dayOfYear == startOfLastMonthDay
      ) {
        if (
          msg.dayOfYear < endOfLastMonthDay ||
          msg.dayOfYear == endOfLastMonthDay
        ) {
          if (msg.dateTime.year() == today.year()) {
            state.lastMonthData.push(msg);
          }
        }
      }
    });
    const groupedData = actions.groupByRecipient(state.lastMonthData);
    state.lastMonthData.length = 0;
    state.lastMonthData = groupedData;
    actions.generateSummaries();
  },
  extractSpecificMonthData({ commit }, { type, selectedDate }) {
    if (type === "Day") {
      state.allSms.forEach((msg) => {
        if (msg.date == selectedDate) {
          state.specificDateData.push(msg);
        }
      });
    } else if (type === "Month") {
      const daySpecific = moment(selectedDate);
      const startOfMonth = daySpecific.startOf("month").get("dayOfYear");
      const endOfMonth = daySpecific.endOf("month").get("dayOfYear");
      state.allSms.forEach((msg) => {
        if (msg.dayOfYear > startOfMonth || msg.dayOfYear == startOfMonth) {
          if (msg.dayOfYear < endOfMonth || msg.dayOfYear == endOfMonth) {
            if (msg.dateTime.year() == daySpecific.year()) {
              state.specificDateData.push(msg);
            }
          }
        }
      });
    }
    //else {
    //   state.allSms.forEach((msg) => {
    //     if (msg.timestamp >= timestamp) {
    //       state.specificDateData.push(msg);
    //     }
    //   });
    // }

    const groupedData = actions.groupByRecipient(state.specificDateData);
    state.specificDateData.length = 0;
    state.specificDateData = groupedData;
    actions.generateSummaries();
    console.log(state.specificDateData);
  },
  extractSpecificDayData({ day, month, year }) {
    const daySelected = new Date(`${month}/${day}/${year}`).getTime();
    state.allSms.forEach((msg) => {
      if (msg.timestamp === daySelected) {
        state.specificDaySms.push(msg);
      }
    });
  },
  groupByType(msgObject) {
    switch (msgObject.type) {
      case "Paid":
        state.paid.unshift(msgObject);
        break;
      case "Sent":
        state.sent.unshift(msgObject);
        break;
      case "Received":
        state.received.unshift(msgObject);
        break;
      case "Bought from Safaricom":
        state.bought.unshift(msgObject);
        break;
      case "Agent Withdraw":
        state.agentWithdraw.unshift(msgObject);
        break;
      case "Mshwari Deposit":
        state.mshwariDeposit.unshift(msgObject);
        break;
      case "Mshwari Withdraw":
        state.mshwariWithdraw.unshift(msgObject);
        break;

      default:
        break;
    }
  },
  groupByRecipient(toBeGrouped) {
    //Algorithm for creating recipient groups
    /*
  Idea: Begin a Loop in the toBeGrouped array;
        For each iteration in the toBeGrouped array determine if the group is existent in the grouped array
        by using another array(recipient array) and checking if the recipient of the current object in the
        loop exists in the recipients array using the array.indexOf() method
        If it doesn't exist, then create it
        If it does exist, get its index and add onto its amount only
  */

    // let grouped = []; //contains the unique groups and their amount summations
    const grouped = [];
    toBeGrouped.forEach((extractedObj) => {
      //Generating an array of recipients
      let groupedRecipients = grouped.map((group) => group.recipient);
      //Check if the recipient of the current object exists in the recipients array
      let indexInGrouped = groupedRecipients.indexOf(extractedObj.recipient);
      //If the recipient does not exist push a new recipient group into the grouped array
      if (indexInGrouped < 0) {
        const firstRecord = {
          date: extractedObj.formattedDate,
          time: extractedObj.formattedTime,
          amount: extractedObj.amount,
          fullMessage: extractedObj.fullMessage,
        };
        const recipientGroupObject = {
          recipient: extractedObj.recipient,
          type: extractedObj.type,
          subTotal: extractedObj.amount,
          topThreeRecords: [firstRecord],
          allRecords: [firstRecord],
        };
        grouped.push(recipientGroupObject);
      } else {
        //if the recipient exists then use its index from the recipients array
        //to target its object in the grouped array then perform the updates
        grouped[indexInGrouped].subTotal =
          grouped[indexInGrouped].subTotal + extractedObj.amount;
        const newRecord = {
          date: extractedObj.formattedDate,
          time: extractedObj.formattedTime,
          amount: extractedObj.amount,
          fullMessage: extractedObj.fullMessage,
        };
        grouped[indexInGrouped].allRecords.push(newRecord);
        if (grouped[indexInGrouped].topThreeRecords.length < 3) {
          grouped[indexInGrouped].topThreeRecords.push(newRecord);
        }
      }
    });
    return grouped;
  },
  quickSort(toBeSorted) {
    if (toBeSorted.length <= 1) {
      //exist and return the passed in array if it gets an empty array
      return toBeSorted;
    }
    let left = [];
    let right = [];
    let pivotValue = toBeSorted[toBeSorted.length - 1];
    let pivot = toBeSorted[toBeSorted.length - 1].amount;
    for (const item of toBeSorted.slice(0, toBeSorted.length - 1)) {
      item.amount < pivot ? left.push(item) : right.push(item);
    }
    return [...quickSort(right), pivotValue, ...quickSort(left)];
  },
};

export default {
  state,
  getters,
  actions,
};
