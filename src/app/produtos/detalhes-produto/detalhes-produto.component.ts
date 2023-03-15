import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {

  produto: IProduto | undefined;
  quantidade = 1;


  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService
  ){}

  ngOnInit():void{
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho");
  }
}
