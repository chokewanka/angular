import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Product from '../../../product.model';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

    @Input() model: Product;
    @Input() type: string;
    @Output() handleSubmit:EventEmitter<string> = new EventEmitter<string>();
    buttonTitle: string = '';

    constructor() {}

    ngOnInit(){
        this.buttonTitle = this.type === 'edit' ? 'Actualizar' : 'Crear';
    }

    onChildClick(){
        this.handleSubmit.emit('Hello World');
    }
}