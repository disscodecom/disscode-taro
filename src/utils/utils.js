import { createRef } from 'react';
import { preload, getStorage, getEnv, dataSource } from "cross-ui/utils";
import { requestHandle } from "./dataSource";
import constants from "./constants";
export const __beforeRequest = function (options) {
  return options;
};
export const __afterRequest = function (response) {
  return response;
};