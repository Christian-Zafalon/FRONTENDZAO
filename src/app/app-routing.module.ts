import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './pages/produtos/produtos-form/produtos-form.component';
import { ProdutosListComponent } from './pages/produtos/produtos-list/produtos-list.component';

const routes: Routes = [
  { path: '', component: ProdutosListComponent},
  { path: 'form', component: ProdutosFormComponent},
  { path: 'form/:id', component: ProdutosFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
