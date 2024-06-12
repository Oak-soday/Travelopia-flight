const getStatusClass = (status: string) => {
  return `status-${status.toLowerCase().replace(/\s/g, "-")}`;
};
export default getStatusClass;
