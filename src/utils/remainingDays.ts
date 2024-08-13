function remainingDays(date: Date | string | undefined) {
  if (!date) return 0;
  const today = new Date();
  const differenceInTime = new Date(date).getTime() - today.getTime();
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
}

export default remainingDays;
