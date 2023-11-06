const l = [1, "two", 3, "four", 5, "six"];
filter_list = (l) => {
  return l.filter((e) => typeof e === "number" && Number.isInteger(e));
};

console.log(filter_list(l));
