class Utils {
    constructor() {
    }
      
    bigIntToDecMilliSecs = ( _value ) => { return bigIntToDecMilliSecs(_value); };
    bigIntToDecString = ( _value ) => { return bigIntToDecString(_value); };
    bigIntToHexString = ( _value ) => { return bigIntToString(_value); };
    bigIntToString = ( _value, _base ) => { return bigIntToString(_value, _base); };
    dumpArrayList = (_prefix, _arr) => { dumpArrayList = (_prefix, _arr) };
    getLocation = (  ) => { return getLocation( ); };
}

const bigIntToDecMilliSecs = ( _value ) => { return bigIntToDecString(_value) + "000"; };
const bigIntToDecString = ( _value ) => { return bigIntToString(_value, 10); };
const bigIntToHexString = ( _value ) => { return bigIntToString(_value, 16); };
const bigIntToString = ( _value, _base ) => { return BigInt(_value).toString(_base); };

const getLocation = () => {
  let location = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return location;
}

const dumpArrayList = (_prefix, _arr) => {
    spCoinLogger.logFunctionHeader("dumpList = async(" + _prefix + ", _arr)");
    let maxCount = _arr.length;
//   spCoinLogger.logDetail("JS => DUMPING " + maxCount + " RECORDS");
    for(idx = 0; idx < maxCount; idx++) {
        let element = _arr[idx];
       spCoinLogger.log(_prefix + idx + ": " + element );
      }
    spCoinLogger.logExitFunction();
}

module.exports = {
    Utils,
    bigIntToDecMilliSecs,
    bigIntToDecString,
    bigIntToHexString,
    bigIntToString,
    dumpArrayList,
    getLocation
}