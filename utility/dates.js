export function formatDate(date) {
  return `${date.getDate()}${getOrdinalSuffix(
    date.getDate()
  )} of ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
}

function getOrdinalSuffix(n) {
  const remainder = n % 100;
  let ordinalSuffix = "th";
  if (remainder >= 11 && remainder <= 13) {
    ordinalSuffix = "th";
  } else {
    switch (n % 10) {
      case 1:
        ordinalSuffix = "st";
        break;
      case 2:
        ordinalSuffix = "nd";
        break;
      case 3:
        ordinalSuffix = "rd";
        break;
    }
  }
  return ordinalSuffix;
}
