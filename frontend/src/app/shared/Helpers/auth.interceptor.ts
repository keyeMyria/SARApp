import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let access_token = sessionStorage.getItem('token');
        if(access_token){
            const request = req.clone({
                headers : req.headers.set("Authorization", "Bearer " + access_token)
            });

            return next.handle(request);
        }

        return next.handle(req);
    }
    
}