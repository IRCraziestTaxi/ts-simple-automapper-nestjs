import { Test, TestingModule } from "@nestjs/testing";
import { TsSimpleAutomapperModule } from "../src";
import { AppService } from "./app.service";

describe("AppService", () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [TsSimpleAutomapperModule.forRoot()],
            providers: [AppService]
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("should have mapper", () => {
        expect(service.mapper).toBeDefined();
    });
});
