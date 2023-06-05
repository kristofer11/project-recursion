function fibs(num) {
    const arr = [0, 1]
    if (num < 0) {
      return 'You must enter a whole number';
    }
    if (num === 0) {
      return [0];
    }
    if (num === 1) {
      return [0, 1]
    }
    if (num === 2) {
      return arr
    }
  
    for (let i = 0; i < num; i++){
      arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
  
    return arr;
  }
  
  console.log(fibs(7)); //returns [0, 1, 1, 2, 3, 5, 8, 13, 21]

  const fibsRec = (num, arr = [0, 1]) => {
    if (num < 0) {
        return 'YOu must enter a whole number'
    }
    if (num === 0) {
        return 'You must enter a whole number'
    }   
    if (num === 1) {
        return [0]
    }
    if (num === 2) {
        return arr
    }

    if (arr.length < num) {
        arr.push(arr[arr.length-1] + arr[arr.length-2])
        return fibsRec(num, arr)
    }

    return arr
  }

  console.table(fibsRec(17)); //returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
