export type TCArrayValue<T> = CArrayBase<T> | Array<T>;

export abstract class CArrayBase<T, U = T> implements RelativeIndexable<U> {
  protected _length: number = 0;

  public get length() {
    return this._length;
  }

  public *[Symbol.iterator]() {
    for (let i = 0; i < this._length; ++i) {
      yield this.at(i);
    }
  }

  public abstract at(index: number): U | undefined;
  public abstract slice(start: number, end?: number): TCArrayValue<U>;

  public toArray(): U[] {
    const result = new Array(this._length);

    for (let i = 0; i < this._length; ++i) {
      result[i] = this.at(i);
    }

    return result;
  }
}
