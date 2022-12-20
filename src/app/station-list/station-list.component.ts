import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Station } from '../station';
import { StationService } from '../station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

  stations: Station[];

  constructor(private stationService: StationService, private router:Router) { }

  ngOnInit(): void {
    this.getStations();
  }

  private getStations(){
    this.stationService.getStationsList().subscribe(data => {
      this.stations = data;
    });
  }

  goToStationList()
  {
    this.router.navigate(['/stations'])
  }
  goToTripsList()
  {
    this.router.navigate(['/trips'])
  }

  goToCreateList()
  {
    this.router.navigate(['/create-trip'])
  }

}
//test
