import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Colaboradores } from 'src/app/Models/Colaboradores/colaborador.model';
import { ColaboradorServiceService } from 'src/app/Services/Colaborador/colaborador-service.service';

@Component({
  selector: 'app-colaboradores-add',
  templateUrl: './colaboradores-add.component.html',
  styleUrls: ['./colaboradores-add.component.css']
})
export class ColaboradoresAddComponent implements OnInit {

  colaboradores: Colaboradores = {
    nome: '',
    email: '',
    nascimento: new Date(),
    funcao: '',
    logradouro: '',
    numero: '',
    complemento: '',
    cep: '',
    bairro: '',
    cidade: '',
    telefone: '',
    celular: '',
    uf: ''
  };

  constructor(private service: ColaboradorServiceService,
     private router: Router,
     @Inject(MAT_DIALOG_DATA) public data: Colaboradores,
    private dialogRef: MatDialogRef<ColaboradoresAddComponent>
     ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.colaboradores).subscribe((): void => {
      this.router.navigate(['colaboradores'])
      this.service.mensagem('Colaborador criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })

    this.dialogRef.close()
  }


}
