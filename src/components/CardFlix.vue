<template>
    <div class="grid grid-cols-2 gap-3 mx-3 my-8 md:m-8 md:gap-6 md:grid-cols-4">
      <Card
        v-for="(imageUrl, index) in imageUrls"
        :key="index"
        unstyled
        class="rounded-lg hover:opacity-50 md:hover:bg-[#354f75d3] duration-300 ease-in-out cursor-pointer"
      >
        <template #content>
          <div class="md:p-4 duration-300 hover:p-2 ease-in-out md:hover:p-[20px] h-[70vw] md:h-[28vw] lg:h-[30vw] xl:h-[33vw]">
            <img
              :src="imageUrl"
              alt="Imagem"
              class="object-cover w-full h-full rounded-lg "
            />
          </div>
        </template>
      </Card>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        imageUrls: [
          '../src/assets/moviePoster.jpg'
        ],
      };
    },
  };
  </script>