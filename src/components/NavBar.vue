<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    path: '/'
                },
                {
                    label: 'Filmes',
                    path: '/movies'
                },
                {
                    label: 'Séries',
                    path: '/series'
                }
            ]
        };
    }
};
</script>
<template>
          <Menubar :model="items" class="!bg-neutral-900 !rounded-none !border-0 h-16">
              <template #start>
                <RouterLink to="/" class="custom-router-link">
                    <img src="https://pirataflix.netlify.app/static/media/logo.dc3d4eba.png" alt="Logo" width="35" height="40" class="h-8" />
                </RouterLink>
              </template>
              <template #item="{ item, props }">
                  <RouterLink v-bind="props" :to="item.path" class="text-gray-300 !bg-transparent">
                      <span class="ml-2">{{ item.label }}</span>
                  </RouterLink>
              </template> 
              <template #end>
                  <div class="flex items-center gap-2">
                    <RouterLink to="/favorites" class="custom-router-link">
                        <i class="pi pi-heart-fill" style="font-size: 1rem; color: red;"></i>
                    </RouterLink>
                  </div>
              </template>
          </Menubar>
  </template>
  <style>

  </style>
  