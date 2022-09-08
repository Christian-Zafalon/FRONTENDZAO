import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos: Array<Produto> = [];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response;
      console.log("deucerto")
    }, (err) => {
      console.log('ERRO AO EXECUTAR', err.status);
    })
  }

  deleteProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(response => {
      console.log('Produto Excluido')
      this.getProdutos();
    }, (err) => {
      console.log(err)
    }, () => {
      this.getProdutos();
    })
  }
  
}
