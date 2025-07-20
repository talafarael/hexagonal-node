import type { IncomingMessage, ServerResponse } from 'http';
import { authController } from '../../../../DIConnect';
import { validatorRegister } from '../../validators/auth/register';

export const authRouter = async (req: IncomingMessage, res: ServerResponse, arrParse: string[]) => {
  if (arrParse[2] === "register") {
    try {
      const { name, password } = await validatorRegister(req)
      const result = await authController.register(name, password)
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (e: any) {
      res.writeHead(e.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify(e.message));
    }
  }
  if (arrParse[2] === "login") {
    try {
      const { name, password } = await validatorRegister(req)
      const result = await authController.login(name, password)
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (e: any) {
      res.writeHead(e.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify(e.message));
    }
  }
}
