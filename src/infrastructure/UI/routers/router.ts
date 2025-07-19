//router
import http, { IncomingMessage, ServerResponse } from 'http';

export const router = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const arrParse = req.url?.split("/")
  if (!arrParse) return
  if (arrParse[1] === "auth") {

  }

});

