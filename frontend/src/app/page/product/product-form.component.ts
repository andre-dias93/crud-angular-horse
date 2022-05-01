import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {Product} from "../../model/product.model";

import {ProductService} from "./product.service";

@Component({
  selector: 'app-produto-form',
  templateUrl: './product-form.component.html',
  styles: [`
    .mat-form {
      width: 100%;
    }

    .button-mat {
      width: 100%;
    }
  `]
})
export class ProductFormComponent implements OnInit {

  product: Product = new Product();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.productService.productById$(id).subscribe(product => this.product = product);
    }
  }

  salvar() {
    this.product.id ?
      this.productService.put$(this.product.id, this.product).subscribe(() => this.cancelar()) :
      this.productService.post$(this.product).subscribe(() => this.cancelar())
  }

  cancelar() {
    this.router.navigate(['produtos']);
  }
}
