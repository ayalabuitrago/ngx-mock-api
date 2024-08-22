import { HttpRequest } from "@angular/common/http";
import { inject, Inject, Injectable, Optional } from "@angular/core";
import { Handler, ReplyFn } from "./mockapi.types";
import { MOCK_API_DEFAULT_TIMEOUT } from "./mockapi.toke";
import { HandlerService } from "./handler.service";

@Injectable({ providedIn: 'root' })
export class MockapiRegisterService {
  private _handlers: Handler[] = [];
  constructor(private _handlerService: HandlerService) {}

  public onGet(url: string, onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      url,
      method: 'get',
      replyFn: onReply,
      timeout,
    });
  }

  public onPost(url: string, onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      url,
      method: 'post',
      replyFn: onReply,
      timeout,
    });
  }

  public onPut(url: string, onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      url,
      method: 'put',
      replyFn: onReply,
      timeout: timeout,
    });
  }

  public onDelete(url: string, onReply: ReplyFn, timeout?: number) {
    // add handler
    this._handlerService.addHandler({
      url,
      method: 'delete',
      replyFn: onReply,
      timeout: timeout,
    });
  }
}
