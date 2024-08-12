import { format } from "date-fns";

function formatDate(date: Date, fullFormat: boolean = false) {
  const currentYear = new Date().getFullYear();
  const dateYear = date.getFullYear();

  const formattedDate = format(
    date,
    fullFormat
      ? "d MMMM yyyy"
      : dateYear > currentYear
        ? "MMM d, yyyy"
        : "MMM d",
  );

  return formattedDate;
}

export default formatDate;
