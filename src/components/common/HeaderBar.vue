<template>
  <header class="bg-gray-900 text-white py-3">
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <a href="#" class="hover:text-blue-300 transition">Главная</a>
          <a href="#" class="hover:text-blue-300 transition">О нас</a>
          <a href="#" class="hover:text-blue-300 transition">Контакты</a>
        </div>
        <div class="text-sm text-gray-400">
          Текущее время: {{ currentTime }}
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  updateTime()
  const interval = setInterval(updateTime, 60000)
  onUnmounted(() => clearInterval(interval))
})
</script>