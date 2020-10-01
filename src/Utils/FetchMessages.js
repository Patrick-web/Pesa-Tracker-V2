import { typeRegexps, regExpCleaner } from "./Regex";
import * as moment from "moment";

const Groups = {
  sent: [],
  paid: [],
  received: [],
  agentWithdraw: [],
  bought: [],
  mshwariDeposit: [],
  mshwariWithdraw: [],
};

function extractInfo({ fullMessage, timestamp }) {
  //GET RECEIVED
  if (typeRegexps.receiveReg.amount.test(fullMessage)) {
    const dateTime = dateTimeBuilder(fullMessage, timestamp);
    const msgObject = {
      ...dateTime,
      fullMessage: "",
      amount: 0,
      recipient: "",
      type: "",
      formattedDate: new Date(timestamp).toDateString(),
    };
    msgObject.type = "Received";
    msgObject.fullMessage = fullMessage;
    msgObject.amount = parseInt(
      regExpCleaner(fullMessage.match(typeRegexps.receiveReg.amount))
    );
    msgObject.recipient = regExpCleaner(
      fullMessage.match(typeRegexps.receiveReg.recipient)
    );
    return msgObject;
  }
  //GET PAID
  else if (typeRegexps.paidReg.recipient.test(fullMessage)) {
    const dateTime = dateTimeBuilder(fullMessage, timestamp);
    const msgObject = {
      ...dateTime,
      fullMessage: "",
      amount: 0,
      recipient: "",
      type: "",
      formattedDate: new Date(timestamp).toDateString(),
    };
    msgObject.type = "Paid";
    msgObject.fullMessage = fullMessage;
    msgObject.amount = parseInt(
      regExpCleaner(fullMessage.match(typeRegexps.paidReg.amount))
    );
    msgObject.recipient = regExpCleaner(
      fullMessage.match(typeRegexps.paidReg.recipient)
    );
    return msgObject;
  }
  //GET SENT
  else if (typeRegexps.sentReg.recipient.test(fullMessage)) {
    const dateTime = dateTimeBuilder(fullMessage, timestamp);
    const msgObject = {
      ...dateTime,
      fullMessage: "",
      amount: 0,
      recipient: "",
      type: "",
      formattedDate: new Date(timestamp).toDateString(),
    };
    msgObject.type = "Sent";
    msgObject.fullMessage = fullMessage;
    msgObject.amount = parseInt(
      regExpCleaner(fullMessage.match(typeRegexps.sentReg.amount))
    );
    msgObject.recipient = regExpCleaner(
      fullMessage.match(typeRegexps.sentReg.recipient)
    );
    return msgObject;
  }
  //Get Bought
  else if (typeRegexps.buyReg.amount.test(fullMessage)) {
    const dateTime = dateTimeBuilder(fullMessage, timestamp);
    const msgObject = {
      ...dateTime,
      fullMessage: "",
      amount: 0,
      recipient: "",
      type: "",
      formattedDate: new Date(timestamp).toDateString(),
    };
    msgObject.type = "Bought from Safaricom";
    msgObject.fullMessage = fullMessage;
    msgObject.amount = parseInt(
      regExpCleaner(fullMessage.match(typeRegexps.buyReg.amount))
    );
    msgObject.recipient = "Safaricom";
    return msgObject;
  }
  //GET AGENT WITHDRAW
  else if (typeRegexps.agentWithdrawReg.recipient.test(fullMessage)) {
    const dateTime = dateTimeBuilder(fullMessage, timestamp);
    const msgObject = {
      ...dateTime,
      fullMessage: "",
      amount: 0,
      recipient: "",
      type: "",
      formattedDate: new Date(timestamp).toDateString(),
    };
    msgObject.type = "Agent Withdraw";
    msgObject.fullMessage = fullMessage;
    msgObject.amount = parseInt(
      regExpCleaner(fullMessage.match(typeRegexps.agentWithdrawReg.amount))
    );
    msgObject.recipient = regExpCleaner(
      fullMessage.match(typeRegexps.agentWithdrawReg.recipient)
    );
    return msgObject;
  }
  //MSHWARI DEPOSIT
  else if (typeRegexps.mshwariDepositReg.recipient.test(fullMessage)) {
    const dateTime = dateTimeBuilder(fullMessage, timestamp);
    const msgObject = {
      ...dateTime,
      fullMessage: "",
      amount: 0,
      recipient: "",
      type: "",
      formattedDate: new Date(timestamp).toDateString(),
    };
    msgObject.type = "Mshwari Deposit";
    msgObject.fullMessage = fullMessage;
    msgObject.amount = parseInt(
      regExpCleaner(fullMessage.match(typeRegexps.mshwariDepositReg.amount))
    );
    msgObject.recipient = "Mshwari";
    return msgObject;
  }
  //MSHWARI Withdraw
  else if (typeRegexps.mshwariWithdrawReg.recipient.test(fullMessage)) {
    const dateTime = dateTimeBuilder(fullMessage, timestamp);
    const msgObject = {
      ...dateTime,
      fullMessage: "",
      amount: 0,
      recipient: "",
      type: "",
      formattedDate: new Date(timestamp).toDateString(),
    };
    msgObject.type = "Mshwari Withdraw";
    msgObject.fullMessage = fullMessage;
    msgObject.amount = parseInt(
      regExpCleaner(fullMessage.match(typeRegexps.mshwariWithdrawReg.amount))
    );
    msgObject.recipient = "Mshwari";
    return msgObject;
  }
  return null;
}

function dateTimeBuilder(msg, realTimestamp) {
  const jsDate = new Date(realTimestamp);
  let date = `${jsDate.getMonth()}/${jsDate.getDay()}/${jsDate.getFullYear()}`;
  const timeReg = /\d\d?:\d{2} (PM|AM)/;
  let time = msg.match(timeReg);
  const timestamp = new Date(date).getTime();
  // time = time[0].replace(/ +/g, "");
  const dateTime = moment(`${date} ${time}`, "MM/DD/YY h:mmA");
  const dt = {
    dateTime,
    dayOfYear: dateTime.get("dayOfYear"),
    formattedTime: time,
    timestamp,
    date,
    year: jsDate.getFullYear(),
  };
  return dt;
}

export default {
  extractInfo: extractInfo,
};
