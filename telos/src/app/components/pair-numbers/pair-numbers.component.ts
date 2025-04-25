import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PairNumbersService } from 'src/app/services/pair-numbers.service';

@Component({
  selector: 'app-pair-numbers',
  templateUrl: './pair-numbers.component.html',
  styleUrls: ['./pair-numbers.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PairNumbersComponent),
      multi: true,
    },
  ],
})
export class PairNumbersComponent {
  @Input() maxX: number = 0;
  @Input() maxY: number = 0;
  x: number = 0;
  y: number = 0;

  error: string | null = null;

  constructor(private pairNumberService: PairNumbersService) {}

  private onChange = (value: any) => {
    console.log('onChange', value);
  };
  private onTouched = () => {
    console.log('onTouched');
  };

  writeValue(value: any): void {
    if (value) {
      this.x = value.x ?? 0;
      this.y = value.y ?? 0;
    } else {
      this.x = 0;
      this.y = 0;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  validate() {
    if (this.x == 0) {
      this.error = 'X must be greater than 0';
    }
    if (this.x > this.maxX) {
      this.error = `X must be less than or equal to ${this.maxX}`;
    } else if (this.y > this.maxY) {
      this.error = `Y must be less than or equal to ${this.maxY}`;
    } else {
      this.error = null;
      this.onChange({ x: this.x, y: this.y });
    }
    this.onTouched();
  }
}
