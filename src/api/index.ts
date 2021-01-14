import { extend } from "umi-request";

const request = extend({
  prefix: process.env.BASE_URL
});
