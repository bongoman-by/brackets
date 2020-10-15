module.exports = function check(str, bracketsConfig) {

    let condition = true, arr = [str.trim()];

    while (condition) {
        bracketsConfig.forEach((couple) => {
            arr.push(arr[arr.length - 1].replace(`${couple[0]}${couple[1]}`, ''));
        });
      
          if (arr[arr.length - 1].length === 0) {
        return true;
    } 

        if (arr[arr.length - 1] === arr[arr.length - 1 - bracketsConfig.length]) {
            condition = false;
        } 
    }

    return false;
};
