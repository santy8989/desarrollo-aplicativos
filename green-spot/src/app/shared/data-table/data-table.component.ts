import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Data } from '../../interfaces/data.interface';
import { StoreService } from 'src/app/stores/services/store.service';
import { ProductService } from 'src/app/products/services/product.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  @Input() type: string;
  data: Data[]
  flag: boolean = true

  pageSize: number = 5;
  isExpansive: boolean;
  pageSizeOptions: Array < number > = [5, 10, 20];
  isLoad:boolean=false

  displayedColumns: string[] = ['image', 'title', 'descrip', 'action'];
  dataSource: MatTableDataSource < any > | null;
  @ViewChild(MatTable, {
    static: true
  }) table: MatTable < any > ;
  @ViewChild(MatPaginator, {
    static: true
  }) paginator: MatPaginator;
  @ViewChild(MatSort, {
    static: false
  }) sort: MatSort;


  constructor(public dialog: MatDialog,
    private _storeService: StoreService,
    private _productService: ProductService,
    private cd: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.isLoad=false
    this.dataSource = new MatTableDataSource();
    if (this.type=="producto")
    {
      this._productService.getProducts().subscribe(response => {
      this.data = response;
      this.dataSource.data = this.data 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoad = true
      this.cd.detectChanges()
    }, error => {
      console.error("tuve un Error" + error)

    })
   }else{
    this._storeService.getStores().subscribe(response => {
      this.data = response;
      this.dataSource.data = this.data
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoad = true
      this.cd.detectChanges()
    }, error => {
      console.error("tuve un Error" + error)

    })

   }
  }

  openDialog(action, obj) {
    obj.action = action;
    obj.type = this.type
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("asdasd",result.event)
      if(result.event!="Cancel"){
        this.getData()
      }
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
