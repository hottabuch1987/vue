<template>
  <aside class="bg-white rounded-xl shadow-sm p-4 lg:p-6">
    <h2 class="font-bold text-lg mb-4 text-gray-800">Активность</h2>
    
    <div class="space-y-4">
      <div 
        v-for="activity in activities" 
        :key="activity.id"
        class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition"
      >
        <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <!-- Используем AppIcon вместо span -->
          <AppIcon 
            :name="activity.icon" 
            size="sm" 
            color="blue"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm text-gray-800">{{ activity.message }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
        </div>
      </div>
    </div>

    <div class="mt-8 pt-6 border-t border-gray-200">
      <h3 class="font-medium mb-3 text-gray-700">Быстрые действия</h3>
      <div class="space-y-3">
        <AppButton 
          variant="outline" 
          size="sm" 
          class="w-full justify-start"
          @click="showModal = true"
        >
          <AppIcon name="add" size="sm" class="mr-2" />
          Создать новое
        </AppButton>
        <AppButton 
          variant="outline" 
          size="sm" 
          class="w-full justify-start"
        >
          <AppIcon name="download" size="sm" class="mr-2" />
          Экспорт данных
        </AppButton>
      </div>
    </div>
    
    <!-- Модальное окно -->
    <AppModal 
      v-if="showModal" 
      @close="showModal = false"
      title="Создание нового"
    >
      <p>Содержимое модального окна</p>
    </AppModal>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppModal from '@/components/ui/AppModal.vue'
import AppIcon from '@/components/ui/AppIcon.vue' // Теперь этот импорт нужен

const showModal = ref(false)

const activities = [
  {
    id: 1,
    icon: 'person_add',
    message: 'Новый пользователь зарегистрирован',
    time: '10 мин назад'
  },
  {
    id: 2,
    icon: 'check_circle',
    message: 'Задача завершена',
    time: '1 час назад'
  },
  {
    id: 3,
    icon: 'warning',
    message: 'Системное уведомление',
    time: '2 часа назад'
  }
]
</script>