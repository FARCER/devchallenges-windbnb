import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PlacesRequestsService} from '../../services/places-requests.service';
import {Observable} from 'rxjs';
import {IPlace} from '../../interfaces/place.interface';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlacesComponent implements OnInit {

  public places: IPlace[];

  constructor(
    private placesRequestsService: PlacesRequestsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.getPlacesFromJson();
  }

  private getPlacesFromJson(): void {
    this.placesRequestsService.getJSON().subscribe(
      (res) => {
        this.places = res;
        this.changeDetectorRef.markForCheck();
      }
    );
  }

  public getStaysCount(): string {
    return this.places.length
      ? this.places.length === 1
        ? '1 stay'
        : `${this.places.length} stays`
      : 'Sorry.';

  }
}
