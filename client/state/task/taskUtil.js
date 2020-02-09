const TZ_LOCALE = "default";
const TIME_OPTS = {
  month: "2-digit",
  day: "2-digit",
  year: "numeric"
  // minute: "numeric",
  // hour: "numeric"
};
const ABBR_TIME_OPTS = {
  weekday: "long",
  month: "short",
  day: "2-digit",
  year: "numeric",
  hour: "numeric",
  minute: "numeric"
};
const PAGINATE_SIZE = 5;

export const parseDate = (date, long = false) => {
  if (long) {
    return new Date(date).toLocaleString(TZ_LOCALE, ABBR_TIME_OPTS);
  }
  return new Date(date.replace(" ", "T")).toLocaleString(TZ_LOCALE, TIME_OPTS);

  //   const fromPgTimestamp = Date(date.replace(" ", "T"));
  //   console.log(fromPgTimestamp);
  //   const month = "" + (fromPgTimestamp.getMonth() + 1);
  //   //   console.log(month);
  //   const day = "" + fromPgTimestamp.getDate();
  //   //   console.log(day);
  //   //   return fromPgTimestamp;
  //   return month;
};

export const giveDateFields = task => {
  task.posted = parseDate(task.createdAt);
  task.posted_long = parseDate(task.createdAt, true);
  if (task.status === "Completed") {
    task.completedAt = parseDate(task.updatedAt);
    task.completedAt_long = parseDate(task.updatedAt, true);
  }

  return task;
};

export const paginateTasks = tasks => {
  let pages = [];
  for (let i = 0; i < tasks.length; i += PAGINATE_SIZE) {
    pages.push(tasks.slice(i, i + PAGINATE_SIZE));
  }

  return pages;
};
