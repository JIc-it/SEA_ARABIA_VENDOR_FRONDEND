
import moment from "moment";
export function formatDate(date) {
  const created_at_str = date;
  const created_at_date = new Date(created_at_str);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formatted_date = created_at_date.toLocaleDateString("en-US", options);

  return formatted_date;
}

export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{5,}$/;

export const formatDates = (value, format = 'DD MMM YYYY', res = '') => {
  const d = moment(value).format(format)
  if (d !== 'Invalid date') {
    return d
  } else {
    return res
  }
}

export const removeBaseUrlFromPath = (originalString) => {
  var modifiedString = originalString.replace(
    "http://api.seaarabia.jicitsolution.com/",
    ""
  );
  return modifiedString;
};