import { HookResult } from "@nuxt/schema";

declare module '#app' {
  // interface NuxtHooks {
  //   'app:user:registered': (payload: { id: number; name: string }) => HookResult
  // }

  interface RuntimeNuxtHooks {
    'app:user:registered': (payload: { id: number; name: string }) => HookResult
  }
}

declare module 'nuxt/schema' {
  // interface RuntimeConfig {
  //   apiSecret: string
  // }
  interface PublicRuntimeConfig {
    alovaBaseUrl: string
  }
}