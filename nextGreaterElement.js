function getNextGreaterElement(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (i === arr.length - 1) {
      result.push(-1);
      break;
    }

    for (let j = i + 1; j < arr.length; j++) {
      let nextValue = arr[j];

      if (nextValue > num) {
        result.push(nextValue);
        break;
      }
    }
  }

  return result;
}

getNextGreaterElement([4, 5, 2, 25]);
