<template>
  <div
    class="flex items-center gap-4 p-5 rounded-sm mb-8"
    :style="{ background: color }"
  >
    <span class="text-2xl">{{ emoji }}</span>
    <div class="flex flex-col gap-1">
      <span class="text-[9px] tracking-[3px] uppercase text-white/45">Empezamos aquí</span>
      <span
        class="font-['Playfair_Display'] text-[22px] text-white leading-tight"
      >{{ nombre }}</span>
      <span class="text-[11px] font-light text-white/50">{{ sub }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  emoji: { type: String, required: true },
  nombre: { type: String, required: true },
  sub: { type: String, required: true },
  color: { type: String, required: true }
})
</script>