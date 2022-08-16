import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColaboradoresViewComponent } from './components/colaboradores/colaboradores-view/colaboradores-view.component';
import { MenuComponent } from './views/menu/menu.component';


const routes: Routes = [
  {path: '', component: MenuComponent},
  
  {path: 'colaboradores', component:ColaboradoresViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
