import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  region : any;
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getRegion();
  }
    getRegion(){
      this.rest.getRegion(this.route.snapshot.params['region']).subscribe((data: {}) => {
      console.log(data);
      this.region = data; 
    });
  }
}
