import jwt from "jsonwebtoken";
import { env } from "../../env.js";

export function signAccessToken(payload) {
  return jwt.sign(payload, env.accessSecret, { expiresIn: "15m"});
}
export function signRefreshToken(payload) {
  return jwt.sign(payload, env.refreshSecret, { expiresIn: "7d"});
}
export function verifyAccess(token) {
  return jwt.verify(token, env.accessSecret);
}
export function verifyRefresh(token) {
  return jwt.verify(token, env.refreshSecret);
}