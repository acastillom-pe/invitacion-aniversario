<template>
  <RouterView />
  <audio ref="audioRef" src="/audio/PistaDeMusica.webm" loop preload="auto"></audio>
</template>

<script setup>
import { ref, provide } from 'vue'

const audioRef = ref(null)

function playMusica() {
  audioRef.value?.play()
}

provide('playMusica', playMusica)
</script>
