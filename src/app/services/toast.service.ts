import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toastMessage: string = '';
  public isActive: boolean = false;
  constructor() { }

  showToast(message: string){
    this.toastMessage = message;
    this.isActive = true;
    setTimeout(() => {
      this.isActive = false;
    }, 5000);
  }

}
