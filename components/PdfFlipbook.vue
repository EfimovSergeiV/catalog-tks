<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const bookContainer = ref<HTMLElement | null>(null)
  // eslint-disable-next-line no-undef
  const pageFlipInstance = ref<any>(null)

  const { $pageFlip } = useNuxtApp()

  const pages = [
    '/1/page_1.png',
    '/1/page_2.png',
    '/1/page_3.png',
    '/1/page_4.png',
    '/1/page_5.png',
    '/1/page_6.png',
    '/1/page_7.png',
    '/1/page_8.png',
    '/1/page_9.png',
    '/1/page_10.png',
    '/1/page_11.png',
    '/1/page_12.png',
    '/1/page_13.png',
    '/1/page_14.png',
    '/1/page_15.png',
    '/1/page_16.png',
  ]

  // Отображаем текущую страницу (1-based) и общее количество
  const currentPage = ref(1)
  const totalPages = ref(pages.length)

  onMounted(() => {
    if (!bookContainer.value) return

    const pageFlip = new $pageFlip(bookContainer.value, {
      width: 550, // base page width
      height: 733, // base page height

      size: "stretch",

      minWidth: 315,
      maxWidth: 550,
      minHeight: 420,
      maxHeight: 733,

      maxShadowOpacity: 0.5, // Half shadow intensity
      showCover: true,
      mobileScrollSupport: false
    })

    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'))

    pageFlipInstance.value = pageFlip

    // Инициализируем totalPages, если плагин даёт метод getPageCount()
    if (pageFlip.getPageCount) {
      totalPages.value = pageFlip.getPageCount()
    }

    // Подписываемся на событие перелистывания, чтобы обновлять currentPage
    pageFlip.on('flip', () => {
      if (pageFlip.getCurrentPageIndex) {
        // getCurrentPageIndex обычно 0-based, поэтому +1 для человека
        currentPage.value = pageFlip.getCurrentPageIndex() + 1
      }
    })

    // Изначально тоже обновим currentPage
    if (pageFlip.getCurrentPageIndex) {
      currentPage.value = pageFlip.getCurrentPageIndex() + 1
    }
  })

  function goNext() {
    pageFlipInstance.value?.flipNext()
  }

  function goPrev() {
    pageFlipInstance.value?.flipPrev()
  }
</script>


<template>

  <div class="">
    
    <div>

      <!-- <div class="">
        <div class="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center z-10 bg-gray-300">
          <div class="overflow-hidden py-28 px-12">
            <div ref="bookContainer" class="page-flip">
              <div v-for="(src, index) in pages" :key="index" class="my-page cursor-pointer">
                <img :src="src" class="w-full h-full" >
              </div>
            </div>
          </div>
        </div>
      </div> -->


      <div class="">
        <div class="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center z-10 bg-gray-300">
          <div class="lg:w-[1100px]">

            <div class="overflow-hidden h-screen content-center px-12">
              <div ref="bookContainer" class="page-flip">
                <div v-for="(src, index) in pages" :key="index" class="my-page cursor-pointer">
                  <img :src="src" class="w-full h-full" >
                </div>
              </div>
            </div>

          </div>          
        </div>
      </div>


      <div class="absolute bottom-0 left-0 w-full z-10">
        <div class="py-4">

          <div class=" flex justify-center items-center mt-4 space-x-4">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mr-2" @click="goPrev">Назад</button>

            <span class="text-base text-gray-700 font-semibold">
              [{{ currentPage }} из {{ totalPages }}]
            </span>

            <button class="bg-blue-500 text-white px-4 py-2 rounded" @click="goNext">Вперед</button>

            <nuxt-link to="/">Главная</nuxt-link>
          </div>

        </div>
      </div>
    </div>


  </div>

</template>
