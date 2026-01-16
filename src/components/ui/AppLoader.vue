<template>
  <div 
    v-if="show" 
    :class="loaderClasses"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="relative">
        <div class="h-12 w-12 rounded-full border-2 border-gray-200"></div>
        <div class="h-12 w-12 rounded-full border-2 border-blue-500 border-t-transparent animate-spin absolute top-0"></div>
      </div>
      <p v-if="text" class="mt-3 text-sm text-gray-600">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: Boolean,
  text: String,
  fullscreen: Boolean,
  overlay: {
    type: Boolean,
    default: true
  }
})

const loaderClasses = computed(() => {
  const base = 'fixed inset-0 z-50 flex items-center justify-center'
  const type = props.fullscreen ? base : 'absolute inset-0 flex items-center justify-center'
  const background = props.overlay ? 'bg-white bg-opacity-80' : ''
  
  return `${type} ${background}`
})
</script>