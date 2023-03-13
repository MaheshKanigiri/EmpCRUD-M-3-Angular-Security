import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) { }
   
  showSuccess(message: any){
      this.toastr.success(message)
  }
   
  showError(message: any){
      this.toastr.error(message)
  }
   
  showInfo(message: any){
      this.toastr.info(message)
  }
   
  showWarning(message: any){
      this.toastr.warning(message)
  }
  //https://www.tutsmake.com/angular-14-toastr-notifications-example/
}
