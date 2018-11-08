import { TestBed } from '@angular/core/testing';
import { HttpServicioService } from './http-servicio.service';
describe('HttpServicioService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(HttpServicioService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-servicio.service.spec.js.map