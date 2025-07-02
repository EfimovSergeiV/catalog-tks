


<template>
  <div class="bg-gray-300">

    <!-- Name Page {{ $route.params.name }} -->

    <p class="text-4xl mt-60">This is index</p>
    <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding'} }" class="px-4" >Railwelding</nuxt-link>
    <!-- <nuxt-link to="/">Главная</nuxt-link>
    <nuxt-link :to="{ name: 'name', params: { 'name': 'railwelding'} }" >Go to About</nuxt-link> -->

  </div> 
</template>