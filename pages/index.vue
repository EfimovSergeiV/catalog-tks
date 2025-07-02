


<template>
  <div class="">
    <div class="container mx-auto p-4">

      <!-- Name Page {{ $route.params.name }} -->

      <p class="text-4xl mt-20">Каталоги</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

        <div>
          <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding'} }" class="" >Рельсосварочное оборудование</nuxt-link>
        </div>
        <div>
          <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding2'} }" class="" >Рельсосварочное оборудование 2</nuxt-link>
        </div>

        <div>
          <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding3'} }" class="" >Рельсосварочное оборудование 3</nuxt-link>
        </div>
      </div>
      
      <!-- <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding'} }" >Go to About</nuxt-link> -->

    </div> 
  </div>
</template>