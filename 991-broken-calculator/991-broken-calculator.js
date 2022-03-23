/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
      if(startValue >= target) {
        return startValue - target
    }
    else if(target %2 == 0) {
        return 1 + brokenCalc(startValue, target /2)
    }
    else {
        return 2 + brokenCalc(startValue, (target +1)/2)
    }
};
