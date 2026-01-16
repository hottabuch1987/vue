<template>
  <MainLayout>
    <div class="py-8">
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Добро пожаловать домой
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Это главная страница с демонстрацией возможностей приложения
        </p>
      </div>
      
      <!-- КНОПКА ПЕРЕХОДА НА ДАШБОРД -->
      <div class="text-center mb-12">
        <router-link to="/dashboard">
          <AppButton size="lg" class="mx-auto">
            <span class="material-icons mr-2">dashboard</span>
            Перейти в Дашборд
          </AppButton>
        </router-link>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
        >
          <div class="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
            <span class="material-icons text-blue-600 text-2xl">{{ feature.icon }}</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 mb-4">{{ feature.description }}</p>
          <AppButton variant="outline" size="sm">
            Подробнее
          </AppButton>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p class="text-lg text-gray-700 mb-8">
            Присоединяйтесь к тысячам довольных пользователей
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <AppButton size="lg">
              Начать бесплатно
            </AppButton>
            <AppButton variant="outline" size="lg">
              Запланировать демо
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue'
import AppButton from '@/components/ui/AppButton.vue'

const features = [
  {
    id: 1,
    icon: 'bolt',
    title: 'Быстро',
    description: 'Мгновенная загрузка и отклик интерфейса'
  },
  {
    id: 2,
    icon: 'security',
    title: 'Безопасно',
    description: 'Защита данных и конфиденциальность'
  },
  {
    id: 3,
    icon: 'group',
    title: 'Для команд',
    description: 'Совместная работа и управление проектами'
  }
]
</script>