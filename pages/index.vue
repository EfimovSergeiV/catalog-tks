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
    <div class="container mx-auto">


      <div class="">
        <div class="">

          <PdfFlipbook  class=""/>
          
        </div>        
      </div>


    </div>
  </div>
</template>