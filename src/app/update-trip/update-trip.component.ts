import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  id: number;
  trip: Trip = new Trip();
  constructor(private tripService: TripService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tripService.getTripById(this.id).subscribe(data =>{
        this.trip = data;
      }, error => console.log(error));
  }
  onSubmit():void {
    this.tripService.updateTrip(this.id, this.trip).subscribe( data =>{
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

}
