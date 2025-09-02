

export default defineEventHandler(async (_event) => {
    console.log('开始')
    // await delay(5000)
    console.log('结束')
    throw createError({
        statusCode: 500,
        message: '服务器错误',
    })
  return {
    message: 'hello world',
  }
})