var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var HttpServicioService = /** @class */ (function () {
    function HttpServicioService(http) {
        this.http = http;
        this.url = "http://localhost/comanda/";
    }
    HttpServicioService.prototype.get = function (metodo) {
        console.log(httpOptions);
        return this.http.get(this.url + metodo, httpOptions)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HttpServicioService.prototype.post = function (metodo, data) {
        return this.http.post(this.url + metodo, data, httpOptions)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HttpServicioService.prototype.delete = function (metodo) {
        return this.http.delete(metodo, httpOptions)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HttpServicioService.prototype.put = function (metodo, objeto) {
        return this.http.put(metodo, objeto, httpOptions)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HttpServicioService.prototype.extractData = function (res) {
        return res || {};
    };
    HttpServicioService.prototype.handleError = function (error) {
        return error;
    };
    HttpServicioService.prototype.updateTokenHeaders = function (token) {
        if (token == '') {
            httpOptions.headers = httpOptions.headers.delete('Authorization');
        }
        else {
            httpOptions.headers = httpOptions.headers.append('Authorization', token);
        }
        console.log(httpOptions);
    };
    HttpServicioService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpServicioService);
    return HttpServicioService;
}());
export { HttpServicioService };
/*constructor(private http: Http) {

 }

 public httpGetP ( metodo:string): Observable<any>
 {
   return this.http
   .get( this.url+ metodo)
   .pipe(
   
   catchError(this.handleError),
   tap(data=> { return this.extractData(data)})
   
   );
   

 }

 public httpPostP( metodo:string, objeto: any )
 {
   return this.http.post(this.url+ metodo,objeto)
        
 }

 public httpDelete (metodo:string,id: number): Observable<{}> {
  const url = this.url+ metodo+'/'+id; // DELETE api/heroes/42
  return this.http.delete(url)
    .pipe(
      catchError(this.handleError('delete'))
    );
}


public httpPut(metodo:string, objeto: any) {
 // return this.http.put(url, objeto, httpOptions)
  return this.http.put(this.url+metodo, objeto)
  .pipe(
    catchError(this.handleError('Modifi'))
  );

}




 private extractData ( res: Response )
 {
   return res.json() || {};
 }

 private handleError ( error: Response | any )
 {
   return error;
 }

 public updateTokenHeaders(token: string) {
  if (token == '') {
    httpOptions.headers = httpOptions.headers.delete('Authorization');
  } else {
    httpOptions.headers = httpOptions.headers.append('Authorization', token);
  }
  console.log(httpOptions);
}

*/
//# sourceMappingURL=http-servicio.service.js.map