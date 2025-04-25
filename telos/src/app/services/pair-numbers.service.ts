import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PairNumbersService {
  public data: [{ x: number; y: number; description: string }] | undefined;

  constructor() {}

  public addPair(x: number, y: number, description: string): boolean {
    if (x == 0 || y == 0) {
      return false;
    }
    //make sure x and y are not undefined and do not appear in data
    if (this.data) {
      const pair = this.data.find((pair) => pair.x === x && pair.y === y);
      if (!pair) {
        this.data.push({ x, y, description });
        return true;
      } else {
        return false;
      }
    } else {
      this.data = [{ x, y, description }];
      return true;
    }
  }
}
