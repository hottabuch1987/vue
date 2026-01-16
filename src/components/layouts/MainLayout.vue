<script setup>
import TopBar from '@/components/common/TopBar.vue'
import BannerSection from '@/components/common/BannerSection.vue'
import HeaderBar from '@/components/common/HeaderBar.vue'
import LeftSidebar from '@/components/common/LeftSidebar.vue'
import CenterContent from '@/components/common/CenterContent.vue'
import RightSidebar from '@/components/common/RightSidebar.vue'
import FooterBar from '@/components/common/FooterBar.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- TopBar -->
    <TopBar class="fixed top-0 left-0 right-0 z-40 w-full bg-white shadow-sm" />

    <main class="pt-14 lg:pt-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- BannerSection -->
        <BannerSection class="mb-6 md:mb-8" />

        <div class="flex flex-col lg:flex-row gap-4 md:gap-6 w-full">
          
          <!-- Левая боковая панель -->
          <aside class="lg:order-1 lg:w-64 xl:w-72 lg:shrink-0 w-full">
            <LeftSidebar class="sticky top-20" />
          </aside>
          
          <!-- Центральный контент (СЛОТ ДЛЯ СТРАНИЦ) -->
          <div class="lg:order-2 flex-1 w-full min-w-0">
            <slot />  <!-- ← ЗДЕСЬ БУДЕТ HomeView или DashboardView -->
          </div>
          
          <!-- Правая боковая панель -->
          <aside class="lg:order-3 lg:w-64 xl:w-72 lg:shrink-0 w-full">
            <RightSidebar class="sticky top-20" />
          </aside>
          
        </div>

        <!-- Footer -->
        <FooterBar class="mt-6 md:mt-8" />

      </div>
    </main>
  </div>
</template>


<style scoped>
/* Плавный скролл для sticky элементов */
.sticky {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f1f5f9;
}

.sticky::-webkit-scrollbar {
  width: 6px;
}

.sticky::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.sticky::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.sticky::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Гарантируем, что контент не выходит за пределы экрана на мобильных */
@media (max-width: 1023px) {
  .sticky {
    position: static;
    max-height: none;
  }
}
</style>