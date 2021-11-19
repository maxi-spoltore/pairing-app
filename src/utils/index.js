const shuffleArr = arr => {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }
  return arr;
}

const hasMatchedPosition = (prevArr, sortedArr) => {
  return prevArr.some(el => prevArr.indexOf(el) === sortedArr.indexOf(el))
}

export const sortMembers = members => {
  const sortedMembers = shuffleArr([...members]);
  if (hasMatchedPosition(members, sortedMembers)) return sortMembers(members)
  return sortedMembers
}

export const validateObj = (obj = {}) =>
	!!(obj && obj.constructor === Object && Object.keys(obj).length);

export const validateArr = (arr = []) => !!(arr instanceof Array && arr.length);