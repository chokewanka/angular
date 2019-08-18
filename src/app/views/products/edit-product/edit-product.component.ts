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

  onSubmit(product: Product){
    this.updateSubs = this.productService.updateProduct(product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

  ngOnDestroy(){
    if(this.updateSubs){
      this.updateSubs.unsubscribe();
    }
  }

}
