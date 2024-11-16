/**
 * Uptime (Seconds)
 */
export let uptime = 0;

export async function Uptime() {
    console.log('[Uptime] Called');
    setInterval(() => {
        uptime++;
    }, 1000);
}
