import { Inject, Injectable, Optional } from '@angular/core';
import { Handler } from './mockapi.types';
import { MOCK_API_DEFAULT_TIMEOUT } from './mockapi.toke';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HandlerService {
  handlers: Handler[] = [];
  constructor(
    @Optional() @Inject(MOCK_API_DEFAULT_TIMEOUT) private defaultTime: number
  ) {}

  addHandler(handler: Handler) {
    if (!handler.timeout && !this.defaultTime) throw Error('no time provided');

    this.handlers.push({
      url: handler.url,
      method: handler.method,
      replyFn: handler.replyFn,
      timeout: this.defaultTime ?? handler.timeout,
    });
  }

  /**
   * verify if some handlers registrered match with http request
   * @param req http request
   * @returns Handler
   */
  matchQuery(req: HttpRequest<unknown>): Handler | null {
    const { url } = req;
    return this.handlers.find((r) => r.url === url) ?? null;
  }

  /**
   * build http response from registred handler
   * @param handler handler registred
   * @param req http request
   * @returns http response
   */
  buildHttpReponse(
    handler: Handler,
    req: HttpRequest<unknown>
  ): HttpResponse<unknown> {
    const result = handler.replyFn(req);
    const res = new HttpResponse<unknown>({
      status: 200,
      body: result,
    });
    return res;
  }
}
