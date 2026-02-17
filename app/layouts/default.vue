<template>
  <div class="relative min-h-screen bg-[#FFFBFB] font-grandstander scroll-smooth"> 

    <div>
        <slot />
    </div>
    
    <nav class="bg-white flex items-center p-2 px-6 fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/50 shadow-lg transition-all duration-500 ease-in-out">
      
      <div class="flex-shrink-0">
        <a href="#home">
          <img src="/logo/logo.png" alt="logo" class="w-6 hover:rotate-12 transition-transform duration-300" :class="{'rotate-180': navigationList}">
        </a>
      </div>

      <div 
        class="overflow-hidden transition-all duration-1000 ease-in-out flex items-center"
        :class="navigationList ? 'max-w-[400px] ml-6 opacity-100' : 'max-w-0 ml-0 opacity-0'"
      >
        <ul class="flex items-center gap-6 text-gray-500 text-sm tracking-wide whitespace-nowrap">
          <li class="hover:text-pink-400 transition-colors">
            <a href="#nature">Nature</a>
          </li>
          <li class="hover:text-pink-400 transition-colors">
            <a href="#about">About me</a>
          </li>
          <li class="hover:text-pink-400 transition-colors">
            <a href="#travels">Travels</a>
          </li>
        </ul>
      </div>

      <div class="ml-4">
        <button 
          @click="toggleNavigation" 
          class="font-grandstander text-gray-400 hover:text-pink-400 transition-transform duration-1000"
          :class="{'rotate-180': navigationList}"
        >
          <span class="text-xl">❯</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
  const navigationList = ref(false);
  const toggleNavigation = () => {
      navigationList.value = !navigationList.value;
  }
</script>

<style>

::-webkit-scrollbar {
  width: 12px;
}


::-webkit-scrollbar-track {
  background: #FFFBFB; 
}

::-webkit-scrollbar-thumb {
  background-color: #F39EB6 !important; 
  border-radius: 20px;
  border: 3px solid #FFFBFB; 
}

::-webkit-scrollbar-thumb:hover {
  background-color: #ef86a3 !important;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #F39EB6 #FFFBFB;
}
</style>