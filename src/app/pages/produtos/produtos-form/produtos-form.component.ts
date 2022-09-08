import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  produtosForm: FormGroup;
  produtos: Array<Produto> = []
  nome = "";
  preco = '';
  estoque= '';
  produtoId: any = '';

  constructor(private fb: FormBuilder, private produtoService: ProdutoService, private actRoute: ActivatedRoute, private router: Router) {
    this.produtosForm = this.fb.group({
      id: 0,
      nome: '',
      preco: '',
      estoque: '',
    })
  }

  ngOnInit(): void {
    this.getProdutos();
    this.actRoute.paramMap.subscribe(params => {
      this.produtoId = params.get('id');
      console.log(this.produtoId)
      if (this.produtoId !== null) {
        this.produtoService.getProduto(this.produtoId).subscribe(result => {
          this.produtosForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            preco: result[0].preco,
            estoque: result[0].estoque,
          })
        })
      }
    })
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response;
    })
  }

  createProduto() {
    this.produtosForm.get('id')?.patchValue(this.produtos.length + 1);
    this.produtoService.postProduto(this.produtosForm.value).subscribe(result => {
      console.log(`Produto ${this.nome}  cadastrado com sucesso! `),
        this.getProdutos();
    }, (err) => {
      console.log(err)
    }, () => {
      this.getProdutos();
    })
  }

    updateProduto() {
    this.produtoService.updateProduto(this.produtoId, this.produtosForm.value).subscribe(result => {
      console.log("Usuario atualizado", result);
    }, (err) => {

    }, () => {
      this.router.navigate(['/'])
    })
  }

  actionButton() {
    if (this.produtoId !== null) {
      this.updateProduto()
    } else {
      this.createProduto()
    }
  }
}