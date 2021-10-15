export function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
}
export function formatDateMonth(date: string) {
  let [year, month] = date.split("-");
  let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
  return new Date(currentDate).toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });
}
