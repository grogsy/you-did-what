export const parseDate = date => {
  //   const fromPgTimestamp = Date(date.replace(" ", "T"));

  const fromPgTimestamp = new Date(date.replace(" ", "T")).toLocaleString();
  return fromPgTimestamp;
  //   console.log(fromPgTimestamp);
  //   const month = "" + (fromPgTimestamp.getMonth() + 1);
  //   //   console.log(month);
  //   const day = "" + fromPgTimestamp.getDate();
  //   //   console.log(day);
  //   //   return fromPgTimestamp;
  //   return month;
};
