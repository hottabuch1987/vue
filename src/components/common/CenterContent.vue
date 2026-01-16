<template>
  <div class="bg-white rounded-xl shadow-sm p-4 lg:p-6">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        Основной контент
      </h1>
      <p class="text-gray-600">
        Это центральная область с основным содержимым страницы
      </p>
    </div>

    <!-- Пример динамического контента -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div 
        v-for="card in cards" 
        :key="card.id"
        class="border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
      >
        <div class="flex items-start justify-between mb-3">
          <h3 class="font-semibold text-lg">{{ card.title }}</h3>
          <span class="material-icons text-blue-500">{{ card.icon }}</span>
        </div>
        <p class="text-gray-600 mb-4">{{ card.description }}</p>
        <AppButton size="sm">
          Подробнее
        </AppButton>
      </div>
    </div>

    <!-- Пользовательский ввод -->
    <div class="bg-gray-50 rounded-lg p-5">
      <h3 class="font-medium mb-4">Пример формы</h3>
      <div class="space-y-4 max-w-md">
        <AppInput 
          v-model="inputValue"
          placeholder="Введите текст..."
          label="Поле ввода"
        />
        <AppButton 
          :loading="isLoading"
          @click="handleSubmit"
        >
          Отправить
        </AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppInput from '@/components/ui/AppInput.vue'

const inputValue = ref('')
const isLoading = ref(false)

const cards = [
  {
    id: 1,
    title: 'Карточка 1',
    icon: 'rocket_launch',
    description: 'Описание первой карточки с полезной информацией'
  },
  {
    id: 2,
    title: 'Карточка 2',
    icon: 'trending_up',
    description: 'Вторая карточка с другой информацией'
  }
]

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    alert(`Отправлено: ${inputValue.value}`)
    inputValue.value = ''
  }, 1500)
}
</script>