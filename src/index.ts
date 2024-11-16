import { Hono } from 'hono';
import { getConnInfo } from 'hono/bun';
import { uptime } from './utils/uptime';

const port = 20000;

const app = new Hono();

app.get('/', async (c) => {
    const xff = c.req.header('x-forwarded-for');
    const ip = xff ?? getConnInfo(c).remote.address;
    return c.text(`OK: Your IP is ${ip}`);
});

app.get('/uptime', async (c) => {
    return c.text(`${uptime}seconds`);
});

app.onError(async (e, c) => {
    console.error(e);
    return c.text(`Error: ${e}`, 500);
});

export default {
    port: port,
    fetch: app.fetch,
};
