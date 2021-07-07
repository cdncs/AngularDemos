import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Running Interceptor...')
    console.log(req)
    const authToken = 'SOME-TOKEN-ABC-123...'
    const headers = new HttpHeaders({
      'AUTH-TOKEN': authToken
    });

    const request = req.clone({
      headers
    });
    const started = Date.now();
    return next.handle(request).pipe(
      tap(
          // Succeeds when there is a response; ignore other events
          (event) => {
            console.log('Request Succeed!')
            console.log(event)
          },
          // Operation failed; error is an HttpErrorResponse
          (error) => {
            console.log('Request Failed!')
            console.log(error)
          }
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}" used ${elapsed} ms.`;
        console.log(msg)
      })
    );
  }

  constructor() { }
}
