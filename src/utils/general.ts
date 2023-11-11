export function case_itL(string: string) {
  if (typeof string !== "string") throw new Error("Invalid value...");
  return string.toLowerCase().trim();
}
