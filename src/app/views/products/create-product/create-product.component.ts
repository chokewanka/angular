import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/services/product.services';
import Product from '../product.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {

  createSubs:Subscription;

  constructor(
    private productService: ProductService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(product: Product){
    this.createSubs = this.productService.createProduct(product).subscribe((product:Product) => {
      this.router.navigate(['/products']);
    });
  }

  ngOnDestroy(){
    if (this.createSubs){
      this.createSubs.unsubscribe();
    }
  }

}
