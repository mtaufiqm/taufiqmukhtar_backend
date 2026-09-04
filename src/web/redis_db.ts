import * as redis from "redis";

export const redisClient = redis.createClient({
    url: (process.env.ENV_MODE === "PROD")?process.env.REDIS_PROD_URL!:process.env.REDIS_DEV_URL!
});
console.info(`Redis URL : ${process.env.REDIS_DEV_URL}`);
redisClient.on("connection", () => {
    console.info(`Connection Binded!`);
});
redisClient.connect();