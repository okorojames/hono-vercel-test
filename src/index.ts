import { Hono } from "hono";
import { v1 } from "./v1";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";

const app = new Hono();
app.use(cors());
app.use(logger());
app.use(secureHeaders());
app.get("/", (c) => {
  return c.text("This is the base route");
});
app.route("/v1", v1);

export default {
  port: 5040,
  fetch: app.fetch,
};
