<template>
  <div class="flex items-start gap-3.5 mb-3">
    <span
      class="text-[10px] tracking-wide font-medium min-w-[44px] pt-0.5"
      :style="{ color: colorHora }"
    >
      {{ hora }}
    </span>
    <div class="flex flex-col gap-0.5">
      <span class="text-sm font-medium text-[#1a1814]">{{ nombre }}</span>
      <span class="text-xs font-light text-[#9a9189] leading-snug">{{ desc }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hora: { type: String, required: true },
  nombre: { type: String, required: true },
  desc: { type: String, required: true },
  colorHora: { type: String, default: '#1a4a6e' }
})
</script>