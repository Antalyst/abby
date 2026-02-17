<template>
  <div>
    <div v-if="isMobile" class="relative min-h-dvh w-full bg-gradient-to-b from-[#F39EB6] from-70% to-[#F7F6D3] font-grandstander flex flex-col items-center p-6 pt-10 gap-6">
      <div class="w-full flex justify-center">
          <img src="/images/section1/heroimage.png" alt="Hero Image" class="w-2/3 h-auto drop-shadow-lg">
      </div>

      <div class="w-full">
          <div class="flex flex-col gap-3 bg-white p-3 rounded-xl shadow-lg">
              <div class="p-5 bg-[#F39EB6] rounded-lg">
                  <h1 class="text-white text-xl font-bold pb-2 text-center">The Iron Sanctuary</h1>
                  <p class="text-white text-sm leading-relaxed text-center">
                    Though she stands as a fortress built of iron will and sharp independence, carrying a guarded "man-hater" fire that refuses to let any soul diminish her light or demand her submission, she remains a rare paradox whose fierce exterior protects a heart of pure gold, proving that one can be both a warrior who owes nothing to the world and a sanctuary of kindness for those she chooses to love; she is a woman who needs no hero because she is her own, yet her strength is softened by a grace that only the most deserving will ever truly see.
                  </p>
              </div>
              
              <div class="flex flex-col items-center gap-3 p-2">
                  <h1 class="text-[#F39EB6] font-bold text-xl tracking-tight">ABEGAIL DALOS</h1>
                  <div class="flex gap-6"> 
                    <div v-for="icon in icons" :key="icon.name">
                      <Icon class="text-[#F39EB6]" :name="icon.name" :style="{ color: icon.color }" :size="'28px'" :color="icon.color" />
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <div v-else class="relative h-dvh w-full bg-gradient-to-b from-[#F39EB6] from-70% to-[#F7F6D3] font-grandstander flex items-center justify-center p-40 gap-8"> 
        <div class="flex">
            <img src="/images/section1/heroimage.png" alt="Hero Image">
        </div>

        <div class="p-10">
            <div class="flex flex-col gap-4 bg-white p-4 rounded-xl shadow-lg">
                <div class="p-8 bg-[#F39EB6] rounded-lg">
                    <div><h1 class="text-white text-2xl font-bold pb-4">The Iron Sanctuary</h1></div>
                    <div class="max-w-md">
                      <p class="text-white text-xl pl-4">
                        Though she stands as a fortress built of iron will and sharp independence, carrying a guarded "man-hater" fire that refuses to let any soul diminish her light or demand her submission, she remains a rare paradox whose fierce exterior protects a heart of pure gold, proving that one can be both a warrior who owes nothing to the world and a sanctuary of kindness for those she chooses to love; she is a woman who needs no hero because she is her own, yet her strength is softened by a grace that only the most deserving will ever truly see.
                      </p>
                    </div>
                </div>
                <div class="flex justify-between gap-4 items-center p-4">
                    <div><h1 class="text-[#F39EB6] font-bold text-3xl">ABEGAIL DALOS</h1></div>
                    <div class="flex gap-4"> 
                      <div v-for="icon in icons" :key="icon.name">
                        <Icon class="text-[#F39EB6]" :name="icon.name" :style="{ color: icon.color }" :size="icon.size" :color="icon.color" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const icons = ref([
    {
        name: 'material-symbols:favorite',
        size: '32px',
        color:"#F39EB6"
    },
    {
        name: 'iconamoon:comment-dots-fill',
        size: '32px',
        color:"#F39EB6"
    },
    {
        name: 'material-symbols:share',
        size: '32px',
        color:"#F39EB6"
    }
])
</script>