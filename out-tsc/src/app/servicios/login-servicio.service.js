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
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { HttpServicioService } from './http-servicio.service';
import { Subject } from 'rxjs';
var LoginServicioService = /** @class */ (function () {
    function LoginServicioService(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.jwtHelper = new JwtHelperService();
        this.userTokenData = new Subject();
        this._token = localStorage.getItem('comandaToken');
        this.userTokenData.subscribe(function (value) {
            _this._token = value;
        });
        { }
    }
    LoginServicioService.prototype.isLogued = function () {
        try {
            var rta = this.jwtHelper.isTokenExpired() || false;
            return rta;
        }
        catch (error) {
            return false;
        }
    };
    LoginServicioService.prototype.getToken = function () {
        try {
            return this.jwtHelper.decodeToken(this._token);
        }
        catch (error) {
            return undefined;
        }
    };
    LoginServicioService.prototype.getExpirationDate = function () {
        try {
            return this.jwtHelper.getTokenExpirationDate(this._token);
        }
        catch (error) {
            return null;
        }
    };
    LoginServicioService.prototype.logIn = function (object) {
        var _this = this;
        this.http.post('login', object)
            .then(function (data) {
            if (data.status == 200) {
                _this.http.updateTokenHeaders(data.comandaToken);
                localStorage.setItem('comandaToken', data.comandaToken);
                _this._token = localStorage.getItem('comandaToken');
                _this.userTokenData.next(!_this._token);
                window.location.href = '/';
            }
            else {
                //this.popup.show("error", data.mensaje);+
                console.info("error", data.error);
                // this.alert.mostrar("ERROR",data.error);
            }
        })
            .catch(function (e) {
            console.info(e);
        });
    };
    LoginServicioService.prototype.logOut = function () {
        try {
            localStorage.setItem('comandaToken', null);
            this.http.updateTokenHeaders('');
            window.location.href = '/';
        }
        catch (error) {
            return false;
        }
    };
    LoginServicioService.prototype.getSector = function () {
        if (this.jwtHelper.decodeToken(this._token).sector || this.jwtHelper.decodeToken(this._token).sector === 0)
            return this.jwtHelper.decodeToken(this._token).sector;
        else
            return 1000;
    };
    LoginServicioService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Router, HttpServicioService])
    ], LoginServicioService);
    return LoginServicioService;
}());
export { LoginServicioService };
//# sourceMappingURL=login-servicio.service.js.map