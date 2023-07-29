const { SpCoinLogger, LOG_MODE } = require("./lib/utils/logging");
const { SpCoinERC20Methods } = require("./lib/spCoinTransferMethods");
const { SpCoinDeleteMethods } = require("./lib/spCoinDeleteMethods");
const { SpCoinAddMethods } = require("./lib/spCoinAddMethods");
const { SpCoinReadMethods } = require("./lib/SpCoinReadMethods");
const { SpCoinRewardsMethods } = require("./lib/spCoinRewardsMethods");
const { SpCoinStakingMethods } = require("./lib/spCoinStakingMethods");
const { DateTime } = require("./lib/utils/dateTime");
const { Utils } = require("./lib/utils/utils");
// const { second, minute, hour, day, week, year, month , millennium } = require("./lib/spCoinStakingMethods"); 
spCoinConnectMethods = async (spCoinContractDeployed) => {
  spCoinAddMethods = new SpCoinAddMethods(spCoinContractDeployed);
  spCoinDeleteMethods = new SpCoinDeleteMethods(spCoinContractDeployed);
  spCoinERC20Methods = new SpCoinERC20Methods(spCoinContractDeployed);
  spCoinLogger = new SpCoinLogger(spCoinContractDeployed);
  spCoinReadMethods = new SpCoinReadMethods(spCoinContractDeployed);
  spCoinRewardsMethods = new SpCoinRewardsMethods(spCoinContractDeployed);
  spCoinStakingMethods = new SpCoinStakingMethods(spCoinContractDeployed);
  dateTime = new DateTime();
  utils = new Utils();
  let currDateInSeconds = dateTime.dateInSeconds();
  console.log("ZZZZ currDateInSeconds = ", currDateInSeconds);
}
