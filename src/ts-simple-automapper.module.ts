import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { Mapper } from "ts-simple-automapper";

const mapperFactory = (): Provider => ({
    provide: Mapper,
    useClass: Mapper
});

@Global()
@Module({})
export class TsSimpleAutomapperModule {
    public static forRoot(): DynamicModule {
        const providers = [mapperFactory()];

        return {
            providers,
            exports: providers,
            module: TsSimpleAutomapperModule
        };
    }
}
