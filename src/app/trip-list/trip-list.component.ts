import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  trips: Trip[];
  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips()
  {
    this.tripService.getTripsList().subscribe(data =>
    {
      this.trips = data;
    });
  }

  updateTrip(id: number)
  {
    this.router.navigate(['update-trip',id]);
  }

  goToTripsList()
  {
    this.router.navigate(['/trips'])
  }

  goToCreateList()
  {
    this.router.navigate(['/create-trip'])
  }
  goToStationList()
  {
    this.router.navigate(['/stations'])
  }
  deleteTrip(id: number)
  {
    this.tripService.deleteTrip(id).subscribe(data =>{
      console.log(data);
      this.getTrips();
    })
  }
}
