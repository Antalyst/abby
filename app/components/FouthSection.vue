<template>
  <div class="w-full h-dvh flex flex-col items-center justify-between p-5 md:p-10">
    <h1 class="w-full text-[#F39EB6] text-5xl md:text-7xl font-grandstander drop-shadow-lg font-bold mb-6 text-center md:text-left">
      Travels
    </h1>

    <div class="hidden md:flex relative w-full flex-grow items-center justify-center">
      <Transition name="stagger-slide" mode="out-in">
        <div :key="currentIndex" class="w-full flex items-center justify-center gap-4 p-10">
          
          <div class="stagger-item-1">
            <img :src="travels[currentIndex].heroImage" :alt="travels[currentIndex].title" class="rounded-[2rem] shadow-xl">
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex gap-4 stagger-item-2">
              <img v-for="image in travels[currentIndex].gallery[0].imagesOne" 
                   :key="image" 
                   :src="image" 
                   alt="" 
                   class="rounded-[2rem] shadow-md">
            </div>

            <div class="flex gap-4 stagger-item-3">
                <img :src="travels[currentIndex].gallery[1].images[0]" alt="" class="rounded-[2rem] shadow-md">
                
                <div class="flex flex-col gap-2">
                    <h2 class="text-2xl font-grandstander font-extrabold mt-4 mb-2">
                      {{ travels[currentIndex].title }}
                    </h2>
                    <p class="text-sm ml-4 text-gray-600 max-w-[500px]">
                      {{ travels[currentIndex].description }}
                    </p>
                    
                    <div class="flex w-full justify-end gap-3">
                        <button 
                          v-if="currentIndex > 0"
                          @click="currentIndex--" 
                          class="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition-colors"
                        >
                          Prev
                        </button>
                        
                        <button 
                          v-if="currentIndex < travels.length - 1"
                          @click="currentIndex++" 
                          class="px-6 py-2 bg-[#F39EB6] text-white rounded-full font-bold hover:opacity-90 transition-opacity"
                        >
                          Next
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div class="md:hidden w-full flex-grow flex flex-col items-center gap-6 overflow-y-auto pb-10">    
        <div class="flex items-center justify-center gap-2 w-full pt-4">
            <div class="w-20 h-40 overflow-hidden rounded-full shadow-md">
            <img :src="travels[currentIndex].gallery[0].imagesOne[0]" 
                class="w-full h-full object-cover" 
                alt="Negros Side 1">
            </div>
            
            <div class="relative w-24 h-64 overflow-hidden rounded-full shadow-xl border-4 border-white">
            <img :src="travels[currentIndex].heroImage" 
                class="w-full h-full object-cover" 
                alt="Negros Main">
           
            </div>

            <div class="w-20 h-40 overflow-hidden rounded-full shadow-md">
            <img :src="travels[currentIndex].gallery[0].imagesOne[1]" 
                class="w-full h-full object-cover" 
                alt="Negros Side 2">
            </div>
        </div>

        <div class="w-full bg-white/90 p-6 rounded-[2.5rem] shadow-xl border border-pink-50">
            <h2 class="text-3xl font-grandstander font-extrabold text-[#F39EB6] mb-3 text-center">
            {{ travels[currentIndex].title }}
            </h2>
            <p class="text-sm text-gray-600 leading-relaxed italic text-center mb-6">
            {{ travels[currentIndex].description }}
            </p>
            
            <div class="flex justify-center gap-6">
            <button 
                @click="currentIndex--" 
                :disabled="currentIndex === 0" 
                class="w-14 h-14 flex items-center justify-center bg-white shadow-lg rounded-full text-[#F39EB6] font-bold disabled:opacity-20 active:scale-90 transition-transform"
            >
                &lt;
            </button>
            <button 
                @click="currentIndex++" 
                :disabled="currentIndex === travels.length - 1"
                  class="w-14 h-14 flex items-center justify-center bg-white shadow-lg rounded-full text-[#F39EB6] font-bold disabled:opacity-20 active:scale-90 transition-transform"
            >
                &gt;
            </button>
            </div>
        </div>
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentIndex = ref(0)
const travels = ref([
  {
    id: 1,
    title: "Siquijor",
    description: "In Siquijor, where ancient spirits breathe and turquoise tides arrive, she finds the mystic rhythm that keeps her soul alive. Beneath the Balete’s heavy shade, she sheds her 'iron' skin, letting the island’s emerald heart heal everything within. No longer just a teacher or a builder of the screen, she walks the silver shoreline—a calm and quiet queen. Here, in the wild, her independent spirit finally rests, held by the healing roots.",
    heroImage: "/images/section4/siquijor/image 13.png",
    gallery: [
      { id: 1, imagesOne: ["/images/section4/siquijor/image 15.png", "/images/section4/siquijor/image 19.png"] },
      { id: 2, images: ["/images/section4/siquijor/image 14.png"] }
    ]
  },
  {
    id: 2,
    title: "Negros",
    description: "In the heart of Negros, where the mountains touch the sky, She finds her truest self where the eagles fly. A daughter of the soil, fueled by the island's green, The most resilient spirit the highlands have ever seen. Independent and fierce, like the peak’s biting air, Yet soft as the moss in a secret forest lair. She trades the digital hum for the rustle of the leaves, Finding peace in the magic that the mountain weaves. An ESL guide with the strength of the ancient trees, Whose heart is as open as the cool Visayan breeze. Though she builds for the world with an iron-clad grace, She is truly at home in a wild, emerald space.",
    heroImage: "/images/section4/negros/image 13.png",
    gallery: [
      { id: 1, imagesOne: ["/images/section4/negros/image 15.png", "/images/section4/negros/image 17.png"] },
      { id: 2, images: ["/images/section4/negros/image 18.png"] }
    ]
  }
])
</script>

<style scoped>
.stagger-slide-enter-active,
.stagger-slide-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.stagger-slide-enter-from { opacity: 0; transform: translateX(100px); }
.stagger-slide-leave-to { opacity: 0; transform: translateX(-100px); }

.stagger-slide-enter-active .stagger-item-1 { transition: all 0.6s ease; transition-delay: 0.1s; }
.stagger-slide-enter-active .stagger-item-2 { transition: all 0.6s ease; transition-delay: 0.3s; }
.stagger-slide-enter-active .stagger-item-3 { transition: all 0.6s ease; transition-delay: 0.5s; }

.stagger-slide-enter-from .stagger-item-1,
.stagger-slide-enter-from .stagger-item-2,
.stagger-slide-enter-from .stagger-item-3 {
  opacity: 0;
  transform: translateY(20px);
}
</style>