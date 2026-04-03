<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-7 py-12 text-center">
    
    <span class="block text-[11px] font-medium tracking-[5px] uppercase text-[#9a9189] mb-6 animate-[rise_1s_0.2s_both]">
      3 de abril · 2026
    </span>

    <span class="block text-xl text-[#c0846a] mb-6 animate-[rise_1s_0.4s_both]">♡</span>

    <h1 class="font-['Playfair_Display'] text-[clamp(44px,11vw,80px)] font-normal leading-[1.05] mb-5 animate-[rise_1s_0.6s_both]">
      Buenos días,<br>
      <em class="italic text-[#9a9189]">amor mío.</em>
    </h1>

    <p class="text-[15px] font-light text-[#9a9189] leading-[1.7] mb-12 animate-[rise_1s_0.8s_both]">
      Hoy el día es tuyo.<br>Hay algo esperándote.
    </p>

    <div class="animate-[rise_1s_1s_both]">
      <BtnPrimary @click="siguiente">Abrir</BtnPrimary>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BtnPrimary from './base/BtnPrimary.vue'

const router = useRouter()

function siguiente() {
  router.push('/sobres')
}
</script>