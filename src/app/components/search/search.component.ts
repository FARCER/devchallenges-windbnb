import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IGuests } from '../places/interfaces/guests.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  public isOpen: boolean = false;

  public guests: IGuests = {
    total: 0,
    adults: 0,
    children: 0
  };

  public open(): void {
    this.isOpen = true;
  }

  public close(): void {
    this.isOpen = false;
  }

  public onsSubmit(): void {
    console.log(this.guests);
  }
}
