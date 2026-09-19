import { factory } from "@/v1/utils/vars";

export const createUser = factory.createHandlers(async (c) => {
  return c.json(
    { message: "User created successfully" },
    { status: 201, statusText: "Created" },
  );
});
