<template>
  <span 
    :class="[
      'material-icons',
      'select-none',
      'inline-flex',
      'items-center',
      'justify-center',
      sizeClass,
      colorClass
    ]"
    :style="{ 'font-size': pixelSize }"
  >
    {{ name }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  },
  color: {
    type: String,
    default: 'current'
  }
})

const sizeClass = computed(() => {
  const sizes = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'md': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl'
  }
  return sizes[props.size] || 'text-base'
})

const pixelSize = computed(() => {
  const sizes = {
    'xs': '12px',
    'sm': '16px',
    'md': '20px',
    'lg': '24px',
    'xl': '28px',
    '2xl': '32px'
  }
  return sizes[props.size] || '20px'
})

const colorClass = computed(() => {
  const colors = {
    'blue': 'text-blue-600',
    'blue-500': 'text-blue-500',
    'green': 'text-green-600',
    'red': 'text-red-600',
    'yellow': 'text-yellow-500',
    'purple': 'text-purple-600',
    'gray': 'text-gray-600',
    'gray-500': 'text-gray-500',
    'white': 'text-white',
    'black': 'text-black',
    'current': 'text-current'
  }
  return colors[props.color] || 'text-current'
})
</script>