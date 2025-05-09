import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService]
})
export default class ProductDetailComponent {
  id = input.required<string>()

  productDetailState = inject(ProductDetailStateService).state
  cartSatate = inject(CartStateService).state

  constructor(){
    effect(()=>{
      console.log(this.id())
      this.productDetailState.getById(this.id())
    })
  }

  addToCart(){
    this.cartSatate.add({
      product: this.productDetailState.product()!,
      quantity: 1
    })
  }

}
