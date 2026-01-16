<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="show" 
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="handleBackdropClick"
      >
        <div class="flex items-center justify-center min-h-screen p-4">
          <!-- Overlay -->
          <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>
          
          <!-- Modal -->
          <div 
            :class="modalClasses"
          >
            <!-- Header -->
            <div v-if="title" class="flex items-center justify-between p-6 pb-0">
              <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
              <button 
                @click="$emit('close')"
                class="p-1 hover:bg-gray-100 rounded-full transition"
              >
                <span class="material-icons text-gray-500">close</span>
              </button>
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <slot />
            </div>
            
            <!-- Footer -->
            <div v-if="showActions" class="flex items-center justify-end space-x-3 p-6 pt-0">
              <AppButton 
                variant="outline" 
                @click="$emit('close')"
              >
                Отмена
              </AppButton>
              <AppButton 
                @click="$emit('confirm')"
                :loading="confirmLoading"
              >
                Подтвердить
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import AppButton from './AppButton.vue'

const props = defineProps({
  show: Boolean,
  title: String,
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  showActions: {
    type: Boolean,
    default: true
  },
  confirmLoading: Boolean,
  closeOnBackdrop: {
    type: Boolean,
    default: true
  }
})

defineEmits(['close', 'confirm'])

const modalClasses = computed(() => {
  const base = 'relative bg-white rounded-xl shadow-xl w-full mx-auto'
  
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  }
  
  return `${base} ${sizes[props.size]}`
})

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    emit('close')
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>