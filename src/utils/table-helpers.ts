import { Order } from '../components/Table';
import { IBook } from '../store/types';

export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = <Key extends keyof any>(
  order: Order,
  orderBy: Key,
): ((a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = <T>(array: readonly T[], comparator: (a: T, b: T) => number) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const generateRandomDate = () =>
  new Date(+new Date() - Math.floor(Math.random() * 10000000000));

export const compareDates = (
  items: IBook[] | undefined,
  startTime: moment.Moment | null,
  endTime: moment.Moment | null,
): IBook[] | undefined => {
  const filtered = items?.filter((item) => {
    const milisecondsItemDate = new Date(item.timestamp).getTime();
    const milisecondsStartTime = startTime ? new Date(startTime.format()).getTime() : null;
    const milisecondsEndTime = endTime ? new Date(endTime.format()).getTime() : null;
    if (milisecondsStartTime && milisecondsEndTime) {
      return milisecondsStartTime < milisecondsItemDate && milisecondsItemDate < milisecondsEndTime;
    }
    return;
  });
  return filtered;
};

export const filterByCategory = (
  collection: any[] | undefined,
  category: keyof Omit<IBook, 'abbrev' | 'chapters'> | '',
  value: string,
): IBook[] | undefined => {
  const filtered = collection?.filter((item) => {
    return item[category].startsWith(value);
  });

  return filtered;
};
