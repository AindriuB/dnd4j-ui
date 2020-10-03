import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';
import { ApiService} from '../api-service.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['name', 'type', 'category', 'weight', 'cost'];
  dataSource;
  
  constructor(private apiService: ApiService) {
  
  }

  ngOnInit(): void {
    this.apiService.getItems().subscribe(items => {
      console.log(items);
      this.dataSource = new MatTableDataSource(items);
      this.dataSource.sort = this.sort;
    });
    
  }

}

