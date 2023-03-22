import { RuntimeOptionsConfig } from '@alilc/lowcode-types'
import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios'
import * as utils from './'
const { objectToQuery } = utils;

export { create as dataSource } from '@alilc/lowcode-datasource-engine/runtime'

export function requestHandle(config?: Record<string, unknown>) {
  return async function (
    options: RuntimeOptionsConfig & { query: Record<string, string> }
  ) {
    let _options = options
    // hook
    if ((utils as any).__beforeRequest) {
      _options = (utils as any).__beforeRequest(options)
      if (_options.then && typeof _options.then === 'function') {
        _options = await (_options as any)()
      }
    }
    const { contentType, uri, query, params, method, headers = {} } = _options
    const data =
      contentType === 'FORM' && Object.keys(params as any).length > 0
        ? new FormData()
        : params
    if (contentType === 'FORM') {
      for (const k in params) {
        if (typeof params[k] !== 'undefined') {
          (data as FormData).append(k, params[k] as any)
          delete params[k];
        }
      }
    }
    delete _options.contentType
    const url =
      uri + (query && Object.keys(query).length > 0 ? objectToQuery(query) : '')
    const requestConfig: AxiosRequestConfig = {
      ..._options,
      url,
      method: method as Method,
      data,
      headers: headers as AxiosRequestHeaders,
      ...config
    }
    let response = await axios(requestConfig)
    // hook
    if ((utils as any).__afterRequest) {
      response = (utils as any).__afterRequest(response)
      // @ts-ignore
      if (response.then && typeof response.then === 'function') {
        response = await (response as any)()
      }
    }
    return response
  }
}
