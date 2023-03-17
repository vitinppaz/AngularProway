import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos.component';
import { NaoEncontradaComponent } from '../nao-encontrada/nao-encontrada.component';


const routes: Routes = [
  {path: '', component: ProdutosComponent},
  { path: 'produtos', loadChildren: () => import('./produtos.module').then(m => m.ProdutosModule) },
  {path: "id", component: DetalhesProdutoComponent},
  {path: "", redirectTo:"produtos", pathMatch:"full"},
  { path: 'carrinho', loadChildren: () => import('../carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  {path: "**", component: NaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
