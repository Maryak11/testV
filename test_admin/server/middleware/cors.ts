import { defineEventHandler, sendError } from "h3";

export default defineEventHandler((event) => {
  event.res.setHeader("Access-Control-Allow-Origin", "*");
  event.res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  event.res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (event.req.method === "OPTIONS") {
    event.res.statusCode = 204;
    return "";
  }
});
