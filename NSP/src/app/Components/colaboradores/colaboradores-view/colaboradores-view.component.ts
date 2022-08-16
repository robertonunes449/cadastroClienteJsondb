import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Colaboradores } from 'src/app/Models/Colaboradores/colaborador.model';
import { ColaboradorServiceService } from 'src/app/Services/Colaborador/colaborador-service.service';
import { ColaboradoresAddComponent } from '../colaboradores-add/colaboradores-add.component';

@Component({
  selector: 'app-colaboradores-view',
  templateUrl: './colaboradores-view.component.html',
  styleUrls: ['./colaboradores-view.component.css']
})
export class ColaboradoresViewComponent implements OnInit {

  colaboradores: Colaboradores[] = [];
  displayedColumns: string[] = ['id','nome', 'funcao', 'nascimento', 'celular', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private dialog: MatDialog, 
    private colaboradorService: ColaboradorServiceService,
  ) { }

  ngOnInit() {
    this.getAllColaborador()
  }

  getAllColaborador() {
    this.colaboradorService.findAll()
    .subscribe((resposta) =>{     
        console.log(resposta)
        this.colaboradores = resposta
        this.dataSource = new MatTableDataSource(resposta);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    })
  }

  
  openDialog() {
    const dialogRef = this.dialog.open(ColaboradoresAddComponent, {
      width: '60%'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('O Cadastro fechou');
        result = this.getAllColaborador();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
