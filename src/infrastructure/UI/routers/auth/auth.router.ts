import type { IncomingMessage, ServerResponse } from 'http';
import { authController } from '../../../../DIConnect';

export const authRouter = async (req: IncomingMessage, res: ServerResponse, arrParse: string[]) => {
  if (arrParse[2] === "register") {
    //authController.login(req.body)
  }
}
