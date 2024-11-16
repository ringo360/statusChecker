/**
 * Uptime (Seconds)
 */
export let uptime = 0;

async function Uptime() {
    setInterval(() => {
        uptime++;
    }, 1000);
}
