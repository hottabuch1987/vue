<template>
  <aside class="bg-white rounded-xl shadow-sm p-4 lg:p-6">
    <h2 class="font-bold text-lg mb-4 text-gray-800">Навигация</h2>
    
    <nav class="space-y-2">
      <router-link
        v-for="item in menuItems" 
        :key="item.id"
        :to="item.to"
        class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition group"
        :class="{ 'bg-blue-50 text-blue-600': $route.path === item.to }"
      >
        <span class="material-icons mr-3 text-gray-500 group-hover:text-blue-500">
          {{ item.icon }}
        </span>
        <span>{{ item.title }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  { id: 1, title: 'Главная', icon: 'home', to: '/' },
  { id: 2, title: 'Дашборд', icon: 'dashboard', to: '/dashboard' },
]
</script>