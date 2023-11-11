class StrNumber {
  readonly joined: string;
  constructor(private num: number) {
    this.num = num;
    this.joined = this.join(this.numb());
  }

  private join(list: string[]) {
    let useArray = [];
    const digits = [];
    for (let item of list) {
      useArray.unshift(item);
      if (useArray.length === 3) {
        digits.unshift(useArray.join(""));
        useArray = [];
      }
    }
    if (useArray.length !== 0) digits.unshift(useArray.join(""));
    return digits.join(",");
  }

  private numb() {
    const numArray = [];
    for (let item of new String(this.num)) numArray.push(item);
    return numArray.reverse();
  }
}

export default function strFormat(value: number) {
  return new StrNumber(value).joined;
}
