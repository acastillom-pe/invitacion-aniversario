<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-6 py-12 gap-12 text-center">
    
    <div>
      <span class="block text-[10px] tracking-[5px] uppercase text-[#9a9189] mb-4">Tu elección</span>
      <h2 class="font-['Playfair_Display'] text-[clamp(26px,6vw,42px)] font-normal italic text-[#1a1814] leading-tight mb-2">
        Dos sobres.<br>Tú decides.
      </h2>
      <p class="text-[13px] font-light text-[#9a9189]">Confía en lo que sientas.</p>
    </div>

    <div class="flex gap-7 items-end justify-center flex-wrap">
      <Sobre tipo="fria" label="Lazo azul" @elegir="elegir('fria')" />
      <span class="font-['Playfair_Display'] text-[32px] italic text-[#d5cfc5] pb-3">o</span>
      <Sobre tipo="cal" label="Lazo naranja" @elegir="elegir('cal')" />
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Sobre from './base/Sobre.vue'

const router = useRouter()

function elegir(tipo) {
  router.push(`/carta/${tipo}`)
}
</script>