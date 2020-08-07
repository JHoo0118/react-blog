export default function (datetime: any) {
  const printMonthByEnglish = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];

  let current = Date.now();
  let previous = Date.parse(datetime);
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;

  let format = new Date(datetime),
    year = format.getFullYear(),
    month = parseInt("" + (format.getMonth() + 1)),
    day = "" + format.getDate();

  if (day.length < 2) day = "0" + day;

  let elapsed = current - previous;
  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + "초 전";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + "분 전";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + "시간 전";
  } else if (elapsed < msPerMonth) {
    let result = Math.round(elapsed / msPerDay);
    if (result < 7) return result + "일 전";
    else {
      return printMonthByEnglish[month] + " " + day + "." + year;
    }
  } else {
    return printMonthByEnglish[month] + " " + day + "." + year;
  }
}
