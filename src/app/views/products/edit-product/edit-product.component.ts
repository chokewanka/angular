import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/services/product.services';
import Product from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  product: Product;
  updateSubs: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.productService.getProduct(parseInt(id)).subscribe((productResponse:Product) => {
      this.product = productResponse
      console.log(this.product);
    });

  }

  onSubmit(){
    this.productService.updateProduct({id: this.product.id, name: 'Test Modificado'}).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  ngOnDestroy(){
    this.updateSubs.unsubscribe();
  }

}
