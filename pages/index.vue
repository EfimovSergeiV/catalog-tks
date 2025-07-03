<template>
  <div class="">
    <div class="container mx-auto p-4 text-gray-100">

      <!-- Name Page {{ $route.params.name }} -->

      <p class="text-4xl mt-20">Каталоги</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

        <div>
          <div class="flex items-center justify-center">
            <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding'} }" class="" >
              <div class="">
                <img src="/1/page_1.png" class="w-[240px]" >
              </div>
              <div class=" mt-2">
                <p class="text-center">Рельсосварочное оборудование</p>
              </div>
            </nuxt-link>          
          </div>
        </div>

        <div>
          <div class="flex items-center justify-center">
            <nuxt-link :to="{ name: 'name', params: { 'name': 'katalog-produktsii'} }" class="" >
              <div class="">
                <img src="/2/page_1.png" class="w-[240px]" >
              </div>
              <div class=" mt-2">
                <p class="text-center">Сварочное оборудование</p>
              </div>
            </nuxt-link>          
          </div>
        </div>

        <div>
          <div class="flex items-center justify-center">
            <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding'} }" class="" >
              <div class="">
                <img src="/1/page_1.png" class="w-[240px]" >
              </div>
              <div class=" mt-2">
                <p class="text-center">Рельсосварочное оборудование</p>
              </div>
            </nuxt-link>          
          </div>
        </div>
      
      </div>

      <!-- <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding'} }" >Go to About</nuxt-link> -->

    </div> 
  </div>
</template>