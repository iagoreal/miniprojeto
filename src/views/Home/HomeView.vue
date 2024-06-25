<script lang="ts">
import { HomeService } from './home.service.ts'
import { defineComponent } from "vue";
import { pipe } from "rxjs";
import { Movie } from "@/model/Movie/movie.model";
import { TVShow } from "@/model/TV/tv.model";

export default defineComponent({
  data(){
    return{
      data:{}
    }
  },
  methods:{
    getAllHome(){
      this.service.allPopular.pipe().subscribe({next:(response:any) => {
        this.data = response.results;
        console.log(response.results);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
      this.service.getAllHomePopular()
    }
  },
  computed:{
    service(){
      return new HomeService()
    }
  },
  mounted(){
    this.getAllHome()
  }
})
</script>

<template>
      <h1 class="text-2xl font-bold">This is Home page</h1>
</template>
<style>

</style>