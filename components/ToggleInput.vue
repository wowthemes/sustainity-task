<script setup>
const props = defineProps({
  on: {
    type: String,
    default: 'On'
  },
  off: {
    type: String,
    default: 'Off'
  },
})
const modelValue = defineModel();
</script>
<template>
    <div class="flex items-center space-x-2 gap-1">
    <span class="text-gray-600">{{ off }}</span>
    <label for="toggle" class="flex items-center cursor-pointer">
        <div class="relative">
          <input type="checkbox" id="toggle" class="hidden" v-model="modelValue" />
          <div class="toggle__line w-10 h-4 bg-gray-200 rounded-full shadow-inner"></div>
          <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow-xl border -top-1 left-0"></div>
        </div>
    </label>
    <span class="text-green-500">{{ on }}</span>
    </div>
</template>

<style scoped>
/* Tailwind CSS */
/* Add the following custom styles to your CSS file or within your Tailwind CSS config */

.toggle__line, .toggle__dot {
  transition: background-color 0.8s;
}

#toggle:checked + div + .toggle__dot {
  transition: background-color 0.8s;
  transform: translateX(100%);
}

#toggle:checked + div + .toggle__dot {
  background-color: #34d399; /* Change this to your desired "On" color */
}



</style>