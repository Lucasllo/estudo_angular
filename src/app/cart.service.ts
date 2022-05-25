import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens:Product[] = [];

  constructor() { }

  adicionar(item:Product){
    this.itens.push(item);
  }

  pegarItens(){
    return this.itens;
  }

  limparItens(){
    this.itens = [];
    return this.itens;
  }
}
