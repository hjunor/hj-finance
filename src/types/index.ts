export type Category = {
  [tag: string]: {
    title: string;
    color: string;
    expense: boolean;
  };
};

export type Item = {
  date: Date;
  category: string;
  title: string;
  value: number;
};
