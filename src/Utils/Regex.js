const typeRegexps = {
  paidReg: {
    amount: /Ksh(.*)\.\d{2}\s*paid/,
    recipient: /paid\s*to\s*(\w*)\s*(\w*)(.*) on/,
  },
  sentReg: {
    amount: /Ksh(.*)\.\d{2}\s*sent/,
    recipient: /sent\s*to\s*(\w*)\s*(\w*)(.*) on/,
  },
  receiveReg: {
    amount: /(received\s*Ksh)(.*)\sfrom/,
    recipient: /(from)\s*(\w*)\s*(\w*)\s*(\d*)/,
  },
  agentWithdrawReg: {
    amount: /Ksh(.*)\.\d{2}\s*from/i,
    recipient: /-\s(.*)New/,
  },
  buyReg: {
    amount: /bought\s*Ksh.*airtime/,
  },
  mshwariDepositReg: {
    recipient: /transferred\s*(to)\s*M-shwari/i,
    amount: /Ksh(.*)\.\d{2}\s*transferred/i,
  },
  mshwariWithdrawReg: {
    recipient: /transferred\s*(from)\s*M-shwari/i,
    amount: /Ksh(.*)\.\d{2}\s*transferred/i,
  },
};
function regExpCleaner(string) {
  let dirt = [
    /\.\d\d/g,
    /Ksh/g,
    /\.00/g,
    /paid/g,
    /M-pesa/gi,
    /\./,
    /Give/,
    /cash/,
    /transferred/g,
    /balance/g,
    /is /g,
    /transaction/gi,
    /cost/g,
    /, \d/g,
    /bought/g,
    /to /g,
    /of/g,
    / on/g,
    /airtime/g,
    /from/g,
    /for/g,
    /07.*/,
    /,/,
    /received/g,
    /sent/g,
    /-/,
    /New/,
    /M-shwari/gi,
  ];
  let cleanString = string[0];
  dirt.forEach((replacer) => {
    cleanString = cleanString.replace(replacer, "");
  });
  return cleanString;
}

module.exports = {
  typeRegexps,
  regExpCleaner,
};
