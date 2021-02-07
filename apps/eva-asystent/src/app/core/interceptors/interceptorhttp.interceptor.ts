import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { SpinnerService } from '../../shared/component/spinner.service';
import { ErrordialogService } from '../service/errordialog/errordialog.service';



@Injectable({
  providedIn: 'root'
})
export class InterceptorHttp implements HttpInterceptor {
  constructor(private data: SpinnerService,
              public errorDialogService: ErrordialogService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('loooooooooooooooooooooooooooo');
    this.data.showSpinner();
    return next.handle(request).pipe(tap(
    event => {
    if (event instanceof HttpResponse) {
      this.data.hideSpinner();
    }
  },
  error => {
    if (error instanceof HttpErrorResponse) {
      console.log(error);
      this.data.hideSpinner();
      let data = {};
      data = {
      reason: error && error.error && error.error.reason ? error.error.reason : error.statusText,
      status: error.status
      };
      this.data.hideSpinner();
      this.errorDialogService.openDialog(data);
      return throwError(error);
    }}
  ));
  }
}
