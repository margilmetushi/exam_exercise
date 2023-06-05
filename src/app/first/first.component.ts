import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ProductModel } from '../models/product-model';
import { ToastService } from '../services/toast.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  codeInput = new FormControl('', [Validators.required, Validators.pattern("^[0-9]{13}$")]);
  product: ProductModel | undefined;
  constructor(private hService: HttpService, private toastService: ToastService) { }

  ngOnInit(): void {
  }

  sendData() {
    this.hService.getSingle(this.codeInput.value).subscribe({ 
      next: (product: ProductModel) => 
      { 
        this.product = product;
      }, 
      error: (error: Error) => { 
        this.toastService.showToast(error.message);
      } 
    })
  }

  getInputClass(){
    return this.isInputValid() ? 'is-invalid' : this.codeInput.pristine ? '' : 'is-valid';
  }

  isInputValid(){
    return this.codeInput.invalid && (this.codeInput.dirty || this.codeInput.touched);
  }
}
