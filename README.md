# ts-simple-automapper-nestjs
Injectable Mapper service for using ts-simple-automapper in NestJS.

## Installation
After creating your Nest.JS application, install `ts-simple-automapper` and `ts-simple-automapper-nestjs`:

```
npm i ts-simple-automapper ts-simple-automapper-nestjs
```

## Import module globally
To inject `Mapper` globally in your app's services, import `TsSimpleAutomapperModule.forRoot()` in your `AppModule`.

```ts
import { Module } from "@nestjs/common";
import { TsSimpleAutomapperModule } from "ts-simple-automapper-nestjs";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppleModule } from "./apple/apple.module";
import { OrangeModule } from "./orange/orange.module";

@Module({
    imports: [
        AppleModule,
        OrangeModule,
        // Use Mapper globally.
        TsSimpleAutomapperModule.forRoot()
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
```

## Inject Mapper into services
After importing the module globally as demonstrated above, you can inject `Mapper` into your injectable services.

```ts
import { Injectable } from "@nestjs/common";
import { Mapper } from "ts-simple-automapper";

@Injectable()
export class AppService {
    public constructor(private readonly _mapper: Mapper) {}
}
```
