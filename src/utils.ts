export const quadraticFunction =
  (s1: number, s2: number, a: number) => (x: number) =>
    a * (x - s1) * (x - s2);

export const pieceNormalizeFunction =
  (l: number, r: number, increase: boolean = true) =>
  (x: number) => {
    if (increase) {
      if (x <= l) {
        return 0;
      } else if (x < r) {
        return (x - l) / (r - l);
      } else {
        return 1;
      }
    } else {
      if (x <= l) {
        return 1;
      } else if (x < r) {
        return (x - r) / (l - r);
      } else {
        return 0;
      }
    }
  };
