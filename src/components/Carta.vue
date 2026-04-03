<template>
  <div
    class="min-h-screen w-full flex flex-col items-center justify-start py-12 px-5 pb-20"
    :class="tipo === 'fria' ? 'bg-[#eef6fb]' : 'bg-[#fdf0e8]'"
  >
    <div class="bg-white max-w-[460px] w-full px-11 py-12 relative shadow-xl">

      <!-- Número decorativo -->
      <div
        class="absolute top-11 right-11 font-['Playfair_Display'] text-[72px] italic leading-none pointer-events-none select-none"
        :style="{ color: tipo === 'fria' ? 'rgba(13,43,69,0.05)' : 'rgba(107,32,16,0.05)' }"
      >{{ ruta.num }}</div>

      <!-- Tag -->
      <div
        class="inline-flex text-[9px] tracking-[3.5px] uppercase font-medium px-3 py-1.5 rounded-sm mb-8"
        :style="tipo === 'fria' ? { background: '#0d2b45', color: '#7eb8d4' } : { background: '#6b2010', color: '#e8b090' }"
      >{{ ruta.tag }}</div>

      <!-- Saludo y título -->
      <span class="block font-['Playfair_Display'] text-sm italic text-[#9a9189] mb-2">Para ti, hoy,</span>
      <h2
        class="font-['Playfair_Display'] text-[clamp(28px,6vw,40px)] font-medium leading-tight mb-7"
        :style="{ color: tipo === 'fria' ? '#0d2b45' : '#6b2010' }"
      >{{ ruta.titulo }}</h2>

      <!-- Texto -->
      <div class="text-[15px] font-light leading-[1.85] text-[#555] mb-8 flex flex-col gap-4">
        <p v-for="(p, i) in ruta.texto" :key="i">{{ p }}</p>
      </div>

      <!-- Divider -->
      <div
        class="h-px my-7"
        :style="tipo === 'fria' ? { background: 'linear-gradient(to right, #7eb8d4, transparent)' } : { background: 'linear-gradient(to right, #e8b090, transparent)' }"
      ></div>

      <!-- Restaurante -->
      <RestaurantCard
        :emoji="ruta.emoji"
        :nombre="ruta.restNombre"
        :sub="ruta.restSub"
        :color="tipo === 'fria' ? '#0d2b45' : '#6b2010'"
      />

      <!-- Plan -->
      <div class="mb-8">
        <span class="block text-[9px] tracking-[4px] uppercase font-medium text-[#9a9189] mb-4">El plan del día</span>
        <PlanItem
          v-for="(item, i) in ruta.plan"
          :key="i"
          :hora="item.hora"
          :nombre="item.nombre"
          :desc="item.desc"
          :color-hora="tipo === 'fria' ? '#1a4a6e' : '#b8431a'"
        />
      </div>

      <!-- Divider -->
      <div
        class="h-px my-7"
        :style="tipo === 'fria' ? { background: 'linear-gradient(to right, #7eb8d4, transparent)' } : { background: 'linear-gradient(to right, #e8b090, transparent)' }"
      ></div>

      <!-- Cierre -->
      <p class="font-['Playfair_Display'] text-[15px] italic text-[#9a9189] leading-[1.75] text-right mb-1.5">
        Hoy no hay apuro.<br>Solo nosotros y lo que venga.
      </p>
      <p class="text-[11px] tracking-[2px] text-[#c8c0b4] text-right">— Andresito ♡</p>

    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { rutas } from '../services/invitacion.js'
import RestaurantCard from './base/RestaurantCard.vue'
import PlanItem from './base/PlanItem.vue'

const route = useRoute()

const tipo = computed(() => route.params.tipo)
const ruta = computed(() => rutas[tipo.value])
</script>