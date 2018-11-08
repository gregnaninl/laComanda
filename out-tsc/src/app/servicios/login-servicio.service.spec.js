import { TestBed } from '@angular/core/testing';
import { LoginServicioService } from './login-servicio.service';
describe('LoginServicioService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LoginServicioService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=login-servicio.service.spec.js.map