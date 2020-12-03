import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IPlace} from '../../interfaces/place.interface';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceComponent {

  @Input() public place: IPlace;

  public getBedsTitle(count: number): string {
    return count === 1
      ? ' . 1 bed'
      : ` . ${count} beds`;
  }

}
