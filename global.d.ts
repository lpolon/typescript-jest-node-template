declare global {
  interface ReadonlyArray<T> {
    reduce<U>(
      callbackfn: (
        previousValue: U,
        currentValue: T,
        currentIndex: number,
        array: readonly T[],
      ) => U,
      initialValue: U,
    ): U;
  }

  interface Array<T> {
    reduce<U>(
      callbackfn: (
        previousValue: U,
        currentValue: T,
        currentIndex: number,
        array: readonly T[],
      ) => U,
      initialValue: U,
    ): U;
  }
}

export {};
