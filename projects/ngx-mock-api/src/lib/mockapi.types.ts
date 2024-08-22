import { HttpRequest } from "@angular/common/http";

// Mock api reply fn for proccess
export type ReplyFn = (request: HttpRequest<any>) => {}


// Mock api method allowed
export type Method = 'get' | 'post' | 'put' | 'delete';

// mock api handler
export type Handler = {
  url: string;
  method: Method;
  replyFn: ReplyFn;
  timeout?: number;
}


