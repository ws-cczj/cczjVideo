import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import client from './request'
import type { ApiResponse } from './interface/resp';
import { Log } from '../utils/log';

type Method = 'get' | 'post' | 'put' | 'delete'

class requset {
  constructor() {
  }

  private async exec<T>(method: Method, url: string, params?: any, config?: AxiosRequestConfig): Promise<any> {
    const resp: AxiosResponse<ApiResponse<T>> = await client[method](url, params, config);
    const { code, data, msg } = resp.data;
    switch (code) {
      case success: return data;
      case notfound: {
        Log.warning('gateway/api.ts', msg);
        return null;
      }
      default: {
        return null;
      }
    }
  }

  public get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.exec<T>('get', url, params, config)
  }
  public post<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.exec<T>('post', url, params, config)
  }
  public put<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.exec<T>('put', url, params, config)
  }
  public delete<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.exec<T>('delete', url, params, config)
  }
}
const req = new requset()

const success = 200
const notfound = 404