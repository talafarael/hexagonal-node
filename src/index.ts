//init server
import { repo } from "./DIConnect";
import { router } from "./infrastructure/UI/routers/router";

const hostname = "127.0.0.1";
const port = 3000;
const server = router
repo.connect()

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})



