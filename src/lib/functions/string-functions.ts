export const toUpperCase = (str: string, type: "first" | "all" = "all") => {
  if (type === "first") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return str.toUpperCase();
};
