import { format } from "date-fns";

function formatDate(date: Date) {
  const currentYear = new Date().getFullYear();
  const dateYear = date.getFullYear();

  const formattedDate = format(
    date,
    dateYear > currentYear ? "MMM d, yyyy" : "MMM d",
  );

  return formattedDate;
}

export default formatDate;
