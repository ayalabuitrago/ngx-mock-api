import { Inject, Injectable, Optional } from "@angular/core";
import { Handler } from "./mockapi.types";
import { MOCK_API_DEFAULT_TIMEOUT } from "./mockapi.toke";

@Injectable({ providedIn: 'root' })
export class HandlerService {
  handlers: Handler[] = [];
  constructor(
    @Optional() @Inject(MOCK_API_DEFAULT_TIMEOUT) private defaultTime: number
  ) {}

  addHandler(handler: Handler) {
    if (!handler.timeout && !this.defaultTime)
      throw Error(
        'not default time provided, you can set on method or provider'
      );

    this.handlers.push(handler);
  }
}
