<template>
  <div class="primeiro_home">
    <div class="container px-4">

        <h3 class="text-white text-lg font-semibold pt-2">All Events</h3>

        <div class="events bg-white rounded-md">
            <h4 class="font-semibold text-lg mb-2 w-full">{{ valores.title }}</h4>
            <p>{{ valores.desc1 }}</p>
            <p>{{ valores.desc2 }}</p>
            <p>{{ valores.desc3 }}</p>
            <div class="btn p-2">
                <button class="p-2.5 rounded-lg bg-cl_blue text-white text-sm"
                @click.prevent="$emit('adicionar', valores)">Adicionar</button>

            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps(['valores'])
    const emit = defineEmits(['adicionar'])
</script>

<style scoped>
.events h4, .events p {
    @apply p-4 border-b-2 border-slate-200;
}

.events p:last-child {
    @apply border-none
}
</style>