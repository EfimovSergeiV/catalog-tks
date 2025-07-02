<script setup>
  const currentTime = ref(new Date().toLocaleTimeString());

  // Функция для прибавления 1 часа
  const addOneHour = () => {
    const date = new Date();
    date.setHours(date.getHours() + 0);
    return date.toLocaleTimeString();
  };

  const intervalId = ref(null);

  onMounted(() => {
    intervalId.value = setInterval(() => {
      currentTime.value = addOneHour(); // Обновляем время с прибавленным 1 часом
    }, 1000);
  });
</script>


<template>
  <div class="">
    <div class="container mx-auto px-6 py-6">


      <div class="text-right">
        <div class="bg-red-500 w-full">

          <PdfFlipbook  class=""/>
          
        </div>        
      </div>


    </div>
  </div>
</template>