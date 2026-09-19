import { factory } from "@/v1/utils/vars";

export const getUser = factory.createHandlers(async (c) => {
  return c.json(
    {
      data: {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        age: 30,
        address: "123 Main St, Anytown, USA",
      },
    },
    { status: 200, statusText: "OK" },
  );
});
