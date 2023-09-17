function printDate() {
  const date = new Date();
  // DATE
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // TIME
  let hours = date.getHours();
  // MAKE 12H
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = date.getMinutes();
  const amPM = hours >= 12 ? "PM" : "AM";
  // FORMAT
  const todaysDate = [month, day, year].join(".");
  const todaysTime = [hours, minutes].join(":");
  const todays12hTime = [todaysTime, amPM].join(" ");
  const fullDate = [todaysDate, todaysTime, amPM].join(" ");
  return {
    todaysDate,
    todaysTime,
    todays12hTime,
    fullDate,
  };
}

const { todaysDate, todaysTime, todays12hTime, fullDate } = printDate();

// console.log(year); // 👉️ 2023
// console.log(month); // 👉️ 7
// console.log(day); // 👉️ 25
// console.log(hours);
// console.log(minutes);
// console.log(todaysDate);
// console.log(todaysTime);
console.log(`Your flight departs on`, todaysDate, `at`, todays12hTime);
