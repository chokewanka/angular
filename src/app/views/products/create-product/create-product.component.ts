import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/services/product.services';
import Product from '../product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {

  updateSubs:Subscription;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.productService.createProduct({name: 'Test Nuevo'}).subscribe((product:Product) => {
      console.log('Creado');
    });
  }

  ngOnDestroy(){
    this.updateSubs.unsubscribe();
  }

}
