import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

	Bitcoins:{};

  constructor( private service: ApiService) { }

  ngOnInit() {
  }

  getBitcoin() {
  	this.service.getBitcoin().subscribe(res => {
  		this.Bitcoins= res;
  		console.log(this.Bitcoins);
  	})

}


}

