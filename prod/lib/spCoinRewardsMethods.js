const { bigIntToDateTimeString,
  bigIntToDecString,
  bigIntToHexString,
  bigIntToString,
  getLocation
} = require("./utils/dateTime");
const { SpCoinLogger } = require("./utils/logging");
const { SpCoinSerialize } = require("./utils/serialize");


let spCoinLogger;
let spCoinSerialize;

class SpCoinRewardsMethods {

  constructor(_spCoinContractDeployed) {
    this.spCoinContractDeployed = _spCoinContractDeployed;
    spCoinLogger = new SpCoinLogger(_spCoinContractDeployed)
    spCoinSerialize = new SpCoinSerialize(_spCoinContractDeployed);
    this.setSigner(_spCoinContractDeployed.signer);
  }

  setSigner(_signer) {
    this.signer = _signer;
  }

  updateAccountStakingRewards = async(accountKey) => {
    spCoinLogger.logFunctionHeader("updateAccountStakingRewards(accountKey)");
    console.log("=================================================================================================");
    console.log("SpCoinRewardsMethods:updateAccountStakingRewards");
    let stakingRewards = await this.spCoinContractDeployed.connect(this.signer).updateAccountStakingRewards(accountKey);
    console.log("stakingRewards = ", bigIntToDecString(stakingRewards));
    // console.log("*************************************************************************************************");
    // let rewardsRec = spCoinSerialize.deserializedSPRewards(stakingRewards);
    // console.log(spCoinLogger.logJSON(rewardsRec));
    console.log("=================================================================================================");
    
    spCoinLogger.logExitFunction();
    return stakingRewards;
  }

};

/////////////////////// EXPORT MODULE FUNCTIONS ///////////////////////

module.exports = {
  SpCoinRewardsMethods
};
