<template>
  <div class="bg-gray-700 h-full">
    <!-- <div class="bg-fixed bg-no-repeat bg-cover bg-center bg-[url('welt.webp')] dark:bg-[url('welt.webp')] min-h-screen"> -->
      
      <div class="bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-900/80 backdrop-blur-sm min-h-screen">
        <div class="absolute top-0 left-0 z-50 w-full">
          <NavBar />      
        </div>

        <slot />      

      </div>
    <!-- </div> -->
  </div>
</template>