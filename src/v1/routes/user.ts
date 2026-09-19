import { Hono } from "hono";
import { createUser } from "../controllers/user/createUser";
import { getUser } from "../controllers/user/getUser";

export async function userRoutes(app: Hono) {
  app.post("/user", ...createUser);

  app.get("/user", ...getUser);
}
