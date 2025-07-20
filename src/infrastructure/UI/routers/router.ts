//router
import http, { IncomingMessage, ServerResponse } from 'http';
import { authRouter } from './auth/auth.router';

export const router = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const arrParse = req.url?.split("/")
  if (!arrParse) return
  if (arrParse[1] === "auth") {
    authRouter(req, res, arrParse)
  }

});

