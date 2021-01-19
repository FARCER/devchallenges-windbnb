import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements ControlValueAccessor {

  public currentValue: number = 0;

  public decrease(): void {
    const newValue = this.currentValue - 1 >= 0
      ? this.currentValue - 1
      : this.currentValue;

    this.writeValue(newValue);
  }

  public increase(): void {
    this.writeValue(++this.currentValue);
  }

  private onChange = (value: number) => {
  };
  private onTouched = () => {
  };

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(value: number): void {
    this.currentValue = value;
    this.onChange(this.currentValue);
  }

}
