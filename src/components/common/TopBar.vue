<template>
  <nav class="h-14 lg:h-16 flex items-center justify-between px-4 sm:px-6">
    <!-- Логотип -->
    <div class="flex items-center space-x-3">
      <div class="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span class="text-white font-bold">L</span>
      </div>
      <span class="text-lg font-semibold hidden sm:block">Logo</span>
    </div>

    <!-- Поиск (скрыт на мобильных) -->
    <div class="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
      <AppInput 
        placeholder="Поиск..."
        class="w-full"
      />
    </div>

    <!-- Действия -->
    <div class="flex items-center space-x-2 sm:space-x-4">
      <button class="p-2 hover:bg-gray-100 rounded-lg">
        <span class="material-icons">notifications</span>
      </button>
      <button class="p-2 hover:bg-gray-100 rounded-lg">
        <span class="material-icons">account_circle</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import AppInput from '@/components/ui/AppInput.vue'
</script>