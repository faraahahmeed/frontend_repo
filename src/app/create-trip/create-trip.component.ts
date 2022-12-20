import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  trip: Trip = new Trip();
  constructor(private tripService: TripService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTrip()
  {
    this.tripService.createTrip(this.trip).subscribe(data =>{
      console.log(data);
      this.goToTripsList();
    },
    error => console.log(error));
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
  onSubmit(){
    console.log(this.trip)
    this.saveTrip();
  }
}
