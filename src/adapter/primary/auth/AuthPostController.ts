// in this controller we use use case and  get request from http

import { AuthPort } from "../../../application/Auth/port/primary/auth";

// use useCase there by interface
export class AuthPostController {
  constructor(
    // auth case
    private readonly authCase: AuthPort
  ) { }
}
