import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { SortPipe } from './shared/pipes/sort.pipe';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShortTextPipe,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  providers: [
    SortPipe
  ]
})
export class ProductsModule { }
