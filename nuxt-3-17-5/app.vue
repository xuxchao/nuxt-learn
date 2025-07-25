<template>
  <div>
    <h1>我是 app.vue</h1>
    <!-- <NuxtPage :keepalive="{
      max: 1,
      include: ['keep-alive-default-alive', 'keep-alive-keep-alive']
    }"></NuxtPage> -->

    <KeepAlive :max="2">
      <NuxtLayout>
        <NuxtPage :keepalive="{max: 2}"></NuxtPage>
      </NuxtLayout>
    </KeepAlive>
  </div>
</template>
