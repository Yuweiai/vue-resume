import axios from 'axios'
import json5 from 'json5'
import { UserInfo } from './userInfo'

export default {
  init(cb: (d: UserInfo) => void): void {
    axios.get<string>('/data.json5', {
      params: {
        // 为了解决修改完配置后无法立即生效的问题
        version: (new Date()).getTime
      }
    }).then(({ data }) => {
      cb(json5.parse(data))
    }).catch(err => {
      console.log('init_err', err)
    })
  }
}
