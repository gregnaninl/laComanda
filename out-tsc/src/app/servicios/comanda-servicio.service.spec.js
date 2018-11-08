import { TestBed } from '@angular/core/testing';
import { ComandaServicioService } from './comanda-servicio.service';
describe('ComandaServicioService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ComandaServicioService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=comanda-servicio.service.spec.js.map