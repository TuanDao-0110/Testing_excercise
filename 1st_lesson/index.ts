type realNumber = {
  number: number;
};
type Operator = "+" | "-" | "/" | "*";
const opertionNumber = ({ number: number1 }: realNumber, operator: Operator, { number: number2 }: realNumber): number => {
  return 4;
};

opertionNumber({ number: 4 }, "*", { number: 6 });
