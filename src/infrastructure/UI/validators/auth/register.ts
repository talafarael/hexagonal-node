import { IncomingMessage } from "http";
import { IAuthCredentials } from "../../../../application/Auth/domain/IAuthCredentials";

//validate data
export const validatorRegister = (req: IncomingMessage): Promise<IAuthCredentials> => {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);

        if (typeof parsed.name !== 'string' || typeof parsed.password !== 'string') {
          return reject(new Error("Invalid data"));
        }

        const credentials: IAuthCredentials = {
          name: parsed.name,
          password: parsed.password,
        };

        resolve(credentials);
      } catch (err) {
        reject(err);
      }
    });

    req.on('error', (err) => {
      reject(err);
    });
  });

}
