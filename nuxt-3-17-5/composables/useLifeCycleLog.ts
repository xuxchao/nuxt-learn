export function useLifeCycleLog() {
    const route = useRoute()
    onMounted(() => {
        console.log('生命周期-挂载', route.path)
    })

    onUnmounted(() => {
        console.log('生命周期-卸载', route.path)
    })
}