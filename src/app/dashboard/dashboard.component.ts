import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';
import { Stats } from '../model/stats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stats: Stats;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getStats().subscribe(result => {
      this.stats = result;
    });
  }

}
