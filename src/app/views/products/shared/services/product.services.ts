import { Injectable } from '@angular/core';

import Product from '../../product.model';

import { HttpClient } from '@angular/common/http';
//import { filter } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class ProductService{

    private api:string = environment.api;
    private endpoint:string = 'products';

    constructor(
        private http: HttpClient
    ){

    }

    getProducts(){
        const URL:string = `${this.api}/${this.endpoint}`;
        return this.http.get(URL);
    }

    getProduct(id: number){
        const URL:string = `${this.api}/${this.endpoint}/${id}`;
        return this.http.get(URL);
    }

    deleteProduct(id: number){
        const URL:string = `${this.api}/${this.endpoint}/${id}`;
        return this.http.delete(URL);
    }

    createProduct(product:Product){
        const URL:string = `${this.api}/${this.endpoint}`;

        return this.http.post(URL, product, {
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    updateProduct(product:Product){
        const URL:string = `${this.api}/${this.endpoint}/${product.id}`;

        return this.http.put(URL, product, {
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

}
