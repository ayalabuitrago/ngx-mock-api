import { HttpRequest } from "@angular/common/http";
import { inject, Inject, Injectable, Optional } from "@angular/core";
import { Handler, ReplyFn } from "./mockapi.types";
import { MOCK_API_DEFAULT_TIMEOUT } from "./mockapi.toke";
import { HandlerService } from "./handler.service";

@Injectable({ providedIn: 'root' })
export class MockapiRegisterService {
  private _handlers: Handler[] = [];
  constructor(private _handlerService: HandlerService) {}

  public onGet(onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      method: 'get',
      replyFn: onReply,
      timeout: timeout,
    });
  }

  public onPost(onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      method: 'post',
      replyFn: onReply,
      timeout: timeout,
    });
  }

  public onPut(onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      method: 'put',
      replyFn: onReply,
      timeout: timeout,
    });
  }

  public onDelete(onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      method: 'delete',
      replyFn: onReply,
      timeout: timeout,
    });
  }
}
