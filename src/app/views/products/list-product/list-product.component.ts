import { Component, OnInit } from '@angular/core';
import Product from '../product.model';
import { ProductsModule } from '../products.module';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { products } from 'src/app/mocks/products';
import { ProductService } from '../shared/services/product.services';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  allProducts: Product[];

  constructor(
    private sortPipe: SortPipe,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.allProducts = products;
    });
  }

  onSort(value:string){
    this.sortPipe.transform(this.allProducts,value);
  }

  onRemove(id: number){
    this.productService.deleteProduct(id).subscribe((response) => {
      this.allProducts = this.allProducts.filter(prod => prod.id !== id);
    });
  }

}
