export const convertDateAndTimeToUtc = (
  dateString: string,
  timeString: string = "00:00:00Z"
) => {
  let toParse;
  if (timeString.length < 1) toParse = `${dateString}T00:00Z`;
  else toParse = `${dateString}T${timeString}`;
  const dateObject: Date = new Date(toParse); // Append 'T00:00:00Z' to ensure it's treated as UTC
  return dateObject.getTime().toString();
};

export const convertDateToUtc = (dateString: string) =>
  new Date(dateString).getTime().toString();
