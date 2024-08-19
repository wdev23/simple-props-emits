<template>
  <div class="app_container min-h-screen bg-cl_gray">

    <header class="h-20 bg-cl_black flex justify-center items-center">
      <h1 class="text-2xl text-white font-bold">Vitória</h1>
    </header>

    <section class="primeira h-full bg-cl_blackLight py-5">
    <div class="container space-y-8">
      <HomePage v-for="(i, index) in valores" :key="index" :valores="i" @adicionar="addNew"/>
    </div>
  </section>

  <!-- <section class="segunda h-[520px] bg-cl_blue">
    <div class="container">
      
    </div>
  </section> -->

  </div>
</template>

<script setup>
import { ref } from 'vue';
import HomePage from './components/primeiro_treino/HomePage.vue';

const valores = ref([
  {
    title: 'Portugues',
    desc1: 'Coragem',
    desc2: 'Perseveranca',
    desc3: 'Disciplina'
  },
  {
    title: 'Vuejs',
    desc1: 'Progresso',
    desc2: 'Compromomisso',
    desc3: 'Etapa'
  },
  {
    title: 'Laravel',
    desc1: 'Processo interno',
    desc2: 'Alcancar',
    desc3: 'Quero'
  },
  {
    title: 'English',
    desc1: 'Eu Falo',
    desc2: 'Metas',
    desc3: 'Ir para cima'
  },
])

const addNew = (item) => {
  alert(`You pressed button with title ${item.title}`)
}

</script>

<style scoped></style>