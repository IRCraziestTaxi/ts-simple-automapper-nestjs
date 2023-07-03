import { Injectable } from "@nestjs/common";
import { Mapper } from "ts-simple-automapper";

@Injectable()
export class AppService {
    public constructor(private readonly _mapper: Mapper) {}

    // Note: You realistically wouldn't expose _mapper; this is just to test that it is defined.
    public get mapper(): Mapper {
        return this._mapper;
    }
}
