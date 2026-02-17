<template>
  <div class="w-full h-dvh flex flex-col items-center justify-start gap-10 p-5">
    <h1 class="text-[#F39EB6] text-7xl font-grandstander drop-shadow-lg font-bold">About</h1>
    
    <main class="hidden md:block">
      <div class="flex items-center gap-4">
        <button class="text-6xl text-[#F39EB6] pr-10 outline-none transition transition-transform duration-500" 
        :class="leftPeom ? '-rotate-180': 'rotate-0'"
         @click="toggleLeftPeom()"><</button>
        
        <Transition name="expand">
          <div class="overflow-hidden flex flex-col gap-10 p-10 rounded-lg shadow-lg"  v-if="leftPeom">
            <div class="w-[600px]"> 
              <div class="flex items-center gap-4 justify-between">
                <div class="flex items-center gap-2">
                  <img src="/images/section3/image 12.png" alt="">
                  <h1 class="font-bold">Abby</h1>
                </div>
                <button class="bg-[#F39EB6] text-white py-2 px-6 rounded-full">Follow +</button>
              </div>
              <div class="flex flex-col gap-2 mt-10">
                <h1 class="font-bold text-2xl">The Bridge of Words and Worlds</h1>
                <p class="pl-10 text-md leading-relaxed">By day, she guides the voices seeking flight, An ESL teacher turning dawn to light. With patience forged in grammar and in prose, She plants the seeds where new expression grows. Independent, steady, leading every class, Watching boundaries of the language pass. But as the sun begins its steady bend, She masters platforms where the stories blend. A manager of reach, of trend, and tone, Building digital empires on her own. Fierce in her logic, serious in her aim, A powerhouse who plays no idle game. Yet, past the lesson and the screen's soft glow, Is a heart that only those she trusts can know. The "iron" teacher and the strategist so bold, Has a spirit that is clingy, sweet, and gold. Healed by the green and tethered by the heart, She is a masterpiece of every single part.</p>
              </div>
            </div>
          </div>
        </Transition>

        <div class="flex justify-center items-center transition-all duration-500 ease-in-out" :class="(rightPeom || leftPeom) ? 'gap-4' : 'gap-10'">
            <img class="transition duration-500 h-auto rounded-2xl" src="/images/section3/image 9.png" :class="rightPeom ? 'grayscale' : 'grayscale-0'" alt="">
            <img class="transition duration-500 delay-100 h-auto rounded-2xl" src="/images/section3/image 10.png" :class="(rightPeom || leftPeom) ? 'grayscale' : 'grayscale-0'" alt="">
            <img src="/images/section3/image 11.png" class="transition duration-500 delay-100 h-auto rounded-2xl" :class="leftPeom ? 'grayscale' : 'grayscale-0'" alt="">
        </div>

        <Transition name="expand">
          <div class="overflow-hidden flex flex-col gap-10 p-10 rounded-lg shadow-lg" v-if="rightPeom">
            <div class="w-[600px]"> 
              <div class="flex items-center gap-4 justify-between">
                <div class="flex items-center gap-2">
                  <img src="/images/section3/image 12.png" alt="">
                  <h1 class="font-bold">Abby</h1>
                </div>
                <button class="bg-[#F39EB6] text-white py-2 px-6 rounded-full">Follow +</button>
              </div>
              <div class="flex flex-col gap-2 mt-10">
                <h1 class="font-bold text-lg">The Architect of the Silent Heart</h1>
                <p class="pl-10 text-md leading-relaxed">She builds in the light where the skyscrapers grow, A serious mind with a narrative flow. Independent and fierce, an "iron" decree, Yet she longs for the anchor of "you and me." A manager of stories, of brands, and of fame, But she carries a heart with a much softer name. To the world, she is steel, standing firm and alone, But she’s clingy and sweet when the seeds have been sown. She mends her own spirit through nature’s own art, While keeping the treasures of home in her heart.</p>
              </div>
            </div>
          </div>
        </Transition>

        <button class="text-6xl text-[#F39EB6] pl-10 outline-none transition transition-transform duration-500" 
        @click="toggleRightPeom()" 
        :class="rightPeom ? 'rotate-180': 'rotate-0'">></button>
      </div>
    </main>
    
    <div class="md:hidden w-full flex flex-col items-center gap-6 px-4 pb-10">
      <div class="flex items-center justify-center gap-2 w-full pt-4">
        <div class="w-24 h-48 overflow-hidden rounded-full shadow-sm">
          <img 
            src="/images/section3/image 9.png" 
            class="w-full h-full object-cover" 
            alt="Left"
          >
        </div>
        
        <div class="relative w-28 h-72 overflow-hidden rounded-full shadow-xl border-4 border-white">
          <img 
            src="/images/section3/image 10.png" 
            class="w-full h-full object-cover" 
            alt="Center"
          >

        </div>

        <div class="w-24 h-48 overflow-hidden rounded-full shadow-sm">
          <img 
            src="/images/section3/image 11.png" 
            class="w-full h-full object-cover" 
            alt="Right"
          >
        </div>
      </div>

      <div class="w-full bg-white p-6 rounded-[3rem] shadow-2xl border border-pink-50 mt-4">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F39EB6]">
              <img src="/images/section3/image 12.png" class="w-full h-full object-cover" alt="Abby">
            </div>
            <h1 class="font-bold text-gray-800 text-lg">Abby</h1>
          </div>
          <button class="bg-[#F39EB6] text-white text-xs font-bold py-2.5 px-6 rounded-full shadow-md active:scale-95 transition-all">
            Follow +
          </button>
        </div>

        <div class="flex flex-col gap-3">
          <h2 class="font-bold text-xl text-[#F39EB6] leading-tight">The Bridge of Words and Worlds</h2>
          <p class="text-gray-600 text-sm leading-relaxed italic">
            By day, she guides the voices seeking flight, An ESL teacher turning dawn to light...
          </p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
const rightPeom = ref(false)
const leftPeom = ref(false)

const toggleRightPeom = () => {
  rightPeom.value = !rightPeom.value
  leftPeom.value = false
}
const toggleLeftPeom = () => {
  leftPeom.value = !leftPeom.value
  rightPeom.value = false
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease-in-out;
  max-width: 100vw; 
  opacity: 1;
}

.expand-enter-from,
.expand-leave-to {
  max-width: 0;
  opacity: 0;
  padding-left: 0;
  padding-right: 0;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
</style>