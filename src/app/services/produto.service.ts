import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  api = 'https://localhost:44346/api/Produtos'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  // Metodo Retorna a lista de usuarios

  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.api)
  }

  // Metodo Cadastrar usuario
  postProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.api, produto, this.httpOptions)
  }

  // Metodo Exclui usuario
  deleteProduto(id: number): Observable<Produto> {
    return this.httpClient.delete<Produto>(`${this.api}/${id}`)
  }

  // Metodo Edita usuario
  updateProduto(id: string, produto:Produto):Observable<Produto>  {
    return this.httpClient.put<Produto>(`${this.api}/${id}`, produto, this.httpOptions);
  }

  // Metodo para trazer um unico usuario
  getProduto(id: string):Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(`${this.api}/${id}`)
  }
}
