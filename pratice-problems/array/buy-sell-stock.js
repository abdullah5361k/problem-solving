const maxProfit = (price) => {
  const maxP = 0;
  const buy = price[0];

  for (let i = 0; i < price.length; i++) {
    const profit = price[i] - buy;
    if (profit < 0) buy = price[i];
    maxP = Math.max(maxP, profit);
  }
};
