import { Hono } from "hono";
import { getConnInfo } from "hono/bun";

const app = new Hono();

app.get("/", async (c) => {
  const ip = getConnInfo(c).remote.address;
  return c.text(`OK: Your IP is ${ip}`);
});

app.onError(async (e, c) => {
  console.error(e);
  return c.text(`Error: ${e}`, 500);
});

export default app;
