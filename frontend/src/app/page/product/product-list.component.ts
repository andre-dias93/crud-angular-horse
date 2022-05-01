import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {Product} from "../../model/product.model";

import {ProductService} from "./product.service";

@Component({
  selector: 'app-produto-list',
  templateUrl: './product-list.component.html',
  styles: [`
    table {
      width: 100%;
      box-shadow: none;
    }

    .fabButton {
      bottom: 15px;
      position: absolute;
      right: 20px;
    }
  `]
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = new Array<Product>();

  displayedColumns: string[] = ['id', 'name', 'price', 'acao'];

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productList();
  }

  private productList(): void {
    this.productService.list$.subscribe(products => {
      this.products = products;
    })
  }

  onAdd() {
    this.router.navigate(['form'], {relativeTo: this.route});
  }

  onEdit(product: Product) {
    this.router.navigate(['form', product.id], {relativeTo: this.route});
  }

  onDelete(product: Product) {
    this.productService.delete$(product.id).subscribe(() => this.productList())
  }
}
