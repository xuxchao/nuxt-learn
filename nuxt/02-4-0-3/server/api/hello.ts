import { delay } from 'es-toolkit'


let num = 1;

export default defineEventHandler(async (_event) => {
    // console.log('开始')
    await delay(3000)
    num++;
    // console.log('结束')
    // throw createError({
    //     statusCode: 500,
    //     message: '服务器错误',
    // })
  return {
    message: 'hello world' + num,
  }
})