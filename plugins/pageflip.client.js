import { defineNuxtPlugin } from '#app'
import { PageFlip } from 'page-flip'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      pageFlip: PageFlip
    }
  }
})