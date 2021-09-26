import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Data } from '../../interfaces/data.interface';
import { StoreService } from 'src/app/stores/services/store.service';
import { ProductService } from 'src/app/products/services/product.service';
import { MatSort } from '@angular/material/sort';


export interface UsersData {
  name: string;
  id?: number;
  test?: string
}
// ELEMENT_DATA: Data[] 

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit, AfterViewInit  {
  data: Data[]
  flag:boolean=true
  
  pageSize: number = 5;
  isExpansive: boolean;
  pageSizeOptions: Array<number> = [5, 10, 20];

  displayedColumns: string[] = ['image', 'title','descrip','action'];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<any> | null;
  
  

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  

  constructor(public dialog: MatDialog,
    private _storeService: StoreService,
    private _productService: ProductService,
    private cd: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    
  }
  ngOnInit(): void {
   this.getData();
  }
  getData(){
    console.log("hola",this.table,this.paginator)
    this.dataSource = new MatTableDataSource();
   this._productService.getProducts().subscribe(response => {
      console.log(response);
      this.data = response;
      this.dataSource.data=this.data
      console.log("data",this.dataSource)
      this.dataSource.paginator = this.paginator;
      console.log("data",this.dataSource)
      this.dataSource.sort = this.sort;
      this.flag=true
      this.cd.detectChanges()
      console.log("hola",this.table,this.paginator)
    }, error => {
      console.error("tuve un Error" + error)
      
    })
  }

  openDialog(action,obj) {
    obj.action = action;
    obj.type="product"
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
     this.getData()
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.data.push({
      id:d.getTime(),
      name:row_obj.name
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource.data = this.dataSource.data.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
