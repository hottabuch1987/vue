<template>
  <MainLayout>
    <div class="py-6">
      <!-- Заголовок дашборда -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Дашборд</h1>
          <p class="text-gray-600">Обзор вашей активности и статистики</p>
        </div>
        <div class="mt-4 md:mt-0 flex items-center space-x-3">
          <AppButton variant="outline">
            <span class="material-icons mr-2">download</span>
            Экспорт
          </AppButton>
          <AppButton>
            <span class="material-icons mr-2">add</span>
            Создать
          </AppButton>
        </div>
      </div>

      <!-- Статистика -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div 
          v-for="stat in stats" 
          :key="stat.id"
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <div class="flex items-center justify-between mb-4">
            <span class="text-gray-500">{{ stat.label }}</span>
            <span class="material-icons" :class="stat.iconColor">{{ stat.icon }}</span>
          </div>
          <div class="text-3xl font-bold text-gray-900 mb-2">{{ stat.value }}</div>
          <div class="flex items-center text-sm" :class="stat.trendColor">
            <span class="material-icons mr-1 text-sm">{{ stat.trendIcon }}</span>
            {{ stat.trend }}%
          </div>
        </div>
      </div>

      <!-- График и таблица -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- График -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-lg font-semibold mb-6">Активность за неделю</h3>
          <div class="h-64 flex items-end space-x-2">
            <div 
              v-for="(bar, index) in chartData" 
              :key="index"
              class="flex-1 flex flex-col items-center"
            >
              <div 
                class="w-full bg-blue-500 rounded-t-lg"
                :style="{ height: `${bar.value}%` }"
              ></div>
              <span class="text-xs text-gray-500 mt-2">{{ bar.label }}</span>
            </div>
          </div>
        </div>

        <!-- Последние действия -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-lg font-semibold mb-6">Последние действия</h3>
          <div class="space-y-4">
            <div 
              v-for="activity in recentActivities" 
              :key="activity.id"
              class="flex items-center p-3 hover:bg-gray-50 rounded-lg transition"
            >
              <div class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                <span class="material-icons text-gray-600">{{ activity.icon }}</span>
              </div>
              <div class="flex-1">
                <p class="font-medium">{{ activity.title }}</p>
                <p class="text-sm text-gray-500">{{ activity.time }}</p>
              </div>
              <AppButton size="sm" variant="outline">
                Просмотр
              </AppButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Загрузка данных -->
      <div v-if="loading" class="flex justify-center py-12">
        <AppLoader :text="'Загрузка данных...'" />
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MainLayout from '@components/layouts/MainLayout.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppLoader from '@/components/ui/AppLoader.vue'

const loading = ref(true)
const showModal = ref(false)

const stats = ref([
  {
    id: 1,
    label: 'Всего пользователей',
    value: '2,543',
    icon: 'people',
    iconColor: 'text-blue-500',
    trend: '+12',
    trendIcon: 'trending_up',
    trendColor: 'text-green-600'
  },
  {
    id: 2,
    label: 'Активные сессии',
    value: '142',
    icon: 'visibility',
    iconColor: 'text-green-500',
    trend: '+8',
    trendIcon: 'trending_up',
    trendColor: 'text-green-600'
  },
  {
    id: 3,
    label: 'Конверсия',
    value: '4.8%',
    icon: 'trending_up',
    iconColor: 'text-purple-500',
    trend: '-2',
    trendIcon: 'trending_down',
    trendColor: 'text-red-600'
  },
  {
    id: 4,
    label: 'Доход',
    value: '$12,840',
    icon: 'attach_money',
    iconColor: 'text-yellow-500',
    trend: '+23',
    trendIcon: 'trending_up',
    trendColor: 'text-green-600'
  }
])

const chartData = ref([
  { label: 'Пн', value: 60 },
  { label: 'Вт', value: 80 },
  { label: 'Ср', value: 45 },
  { label: 'Чт', value: 70 },
  { label: 'Пт', value: 90 },
  { label: 'Сб', value: 40 },
  { label: 'Вс', value: 75 }
])

const recentActivities = ref([
  {
    id: 1,
    title: 'Новый заказ #1234',
    time: '10 минут назад',
    icon: 'shopping_cart'
  },
  {
    id: 2,
    title: 'Обновление профиля',
    time: '1 час назад',
    icon: 'person'
  },
  {
    id: 3,
    title: 'Оплата получена',
    time: '2 часа назад',
    icon: 'payments'
  },
  {
    id: 4,
    title: 'Комментарий к задаче',
    time: '3 часа назад',
    icon: 'comment'
  }
])

// Имитация загрузки данных
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1500)
})
</script>