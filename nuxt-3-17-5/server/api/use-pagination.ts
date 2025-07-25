export default defineEventHandler(async (event) => {
    return {
        message: 'hello world',
        dataList: [
            {
                id: 1,
                name: '张三'
            },
            {
                id: 2,
                name: '李四'
            },
            {
                id: 3,
                name: '王五'
            },
            {
                id: 4,
                name: '赵六'
            },
        ],
        total: 4
    }
})