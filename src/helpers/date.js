export const numberToStringDefault = (number) => {
  const date = new Date(number);
  const mounth =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  return `${date.getFullYear()}-${mounth}-${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }`;
};

export const dateDefaultToView = (data) => {
  return new Date(data).toLocaleDateString();
};

export const dateRequestToView = (data) => {
  return data.split(" ")[0];
};
