const DateTimeConvert = (dateTimeString: string) => {
  const dateTime: Date = new Date(dateTimeString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const formattedDateTime: string = dateTime.toLocaleString("en-US", options);
  return formattedDateTime;
};

export default DateTimeConvert;
