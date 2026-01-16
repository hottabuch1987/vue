<template>
  <section class="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6">
    <div class="relative z-10 max-w-2xl">
      <h1 class="text-3xl md:text-4xl font-bold text-white mb-3">
        Добро пожаловать!
      </h1>
      <p class="text-blue-100 text-lg mb-6">
        Это пример баннер-секции ...
      </p>
      <div class="flex flex-wrap gap-3">
        <AppButton variant="white">
          Начать
        </AppButton>
        <AppButton variant="transparent" class="text-white border-white">
          Узнать больше
        </AppButton>
      </div>
    </div>
    <div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
      <div class="h-full bg-gradient-to-l from-white to-transparent"></div>
    </div>
  </section>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
</script>