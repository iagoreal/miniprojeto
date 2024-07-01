<script lang="ts">
import { defineComponent } from 'vue';
import { SeriesService } from '../views/Series/service.serie'
import { TVShow } from "../model/TV/tv.model";
import { pipe } from "rxjs";

export default defineComponent({
  name: 'About',
  data() {
    return {
      data:{} as TVShow
    }
  },
  computed: {
    service() {
      return new SeriesService();
    }
  },
  methods:{
    getPopularSerie(){
      this.service.allPopular.pipe().subscribe({next:(response: any) => {
        this.data = response.results;
        console.log(response.results)
      }


      })
    }
  },
  mounted(){
    this.getPopularSerie();
  }
});
</script>

<template>
  <h1>This is About page</h1>
</template>
<style scoped>

</style>