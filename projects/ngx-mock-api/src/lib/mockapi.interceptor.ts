import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { HandlerService } from "./handler.service";
import { of } from "rxjs";

export const mockapiInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {

  // check matchs on request
  const handlerService = inject(HandlerService);
  const handler = handlerService.matchQuery(req)
  if ( handler ) {
    const res = handlerService.buildHttpReponse(handler, req);
    return of(res);
  }

  return next(req);
}
