export const sanitiseNumber = (n: number, defaultNumber = 0) => {
  if (isNaN(n)){
    return defaultNumber;
  }

  return n;
};
