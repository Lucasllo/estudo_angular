import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const produtoId = Number(params.get('produtoId'));

    this.product = products.find(p=>p.id === produtoId);
  
  }

  adicionarNoCarrinho(produto:Product){
    this.cartService.adicionar(produto);
    window.alert("Produto adicionado no carrinho")
  }

}
