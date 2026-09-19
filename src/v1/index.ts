import { Hono } from "hono";
import { userRoutes } from "./routes/user";

const v1 = new Hono();

v1.get("/health", (c) => {
  return c.text("Healthy");
});

userRoutes(v1);

export { v1 };
