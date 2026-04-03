<template>
  <button
    class="px-11 py-4 bg-[#1a1814] text-white text-[11px] font-medium tracking-[4px] uppercase cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85 border-none outline-none"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineEmits(['click'])
</script>