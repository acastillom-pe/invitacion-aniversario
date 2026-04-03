<template>
  <div
    class="flex flex-col items-center gap-3 cursor-pointer group"
    @click="$emit('elegir')"
  >
    <div
      class="relative drop-shadow-xl transition-all duration-400"
      :class="tipo === 'fria' ? 'group-hover:-translate-y-2.5 group-hover:-rotate-2' : 'group-hover:-translate-y-2.5 group-hover:rotate-2'"
    >
      <span class="absolute -top-5 left-1/2 -translate-x-1/2 text-2xl pointer-events-none">🎀</span>
      <svg viewBox="0 0 160 115" width="160" height="115" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="115" rx="4" :fill="colores.base"/>
        <polygon points="0,0 160,0 80,64" :fill="colores.flap"/>
        <line x1="0" y1="115" x2="80" y2="64" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <line x1="160" y1="115" x2="80" y2="64" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <text x="80" y="95" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-family="Jost,sans-serif" font-size="8" letter-spacing="3">PARA TI</text>
      </svg>
    </div>
    <span
      class="text-[10px] tracking-[3px] uppercase font-medium"
      :style="{ color: colores.label }"
    >{{ label }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tipo: { type: String, required: true },
  label: { type: String, required: true }
})

defineEmits(['elegir'])

const paleta = {
  fria: { base: '#0d2b45', flap: '#1a4a6e', label: '#1a4a6e' },
  cal:  { base: '#6b2010', flap: '#b8431a', label: '#b8431a' }
}

const colores = computed(() => paleta[props.tipo])
</script>