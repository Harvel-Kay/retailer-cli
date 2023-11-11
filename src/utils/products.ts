import IProduct from "../interfaces/product";
import { case_itL } from "./general";

export function count(item: IProduct, items: IProduct[]) {
  let count = 0;
  items.forEach((itm) => {
    if (itm._id === item._id) count++;
  });
  return count;
}

export function isEmpty(list: any[]) {
  return list.length === 0;
}

export const filterMe = (query: string, array: IProduct[]) => {
  const filtered = array.filter(
    (item) =>
      case_itL(item.name).match(new RegExp(case_itL(query), "ig")) ||
      case_itL(item.genre.name).match(new RegExp(case_itL(query), "ig"))
  );

  return query ? filtered : array;
};

export function sortNewest(array: IProduct[]) {
  array.forEach((item) => (item.added = new Date(item.added)));
  return array.sort((a, b) => {
    if (a.added > b.added) return -1;
    if (a.added < b.added) return 1;
    return 0;
  });
}
