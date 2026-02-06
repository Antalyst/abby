<template>
  <div class="w-full h-dvh bg-[url('/images/section2/image7.png')] bg-cover bg-center p-4 flex items-start flex-col relative">
      
      <div class="absolute inset-0 bg-black/40 z-0 "></div>
        <h1 class="text-white text-7xl font-grandstander drop-shadow-lg font-bold">Nature</h1>
      <div class="relative z-10 w-full h-full flex items-center justify-center ">
        
          <div class="bg-white  p-4 rounded-xl flex items-center gap-4">
            <div class="flex flex-col items-between pr-4 ">
                <div>
                    <h1 class="text-black text-2xl font-bold pb-4">The Emerald Remedy</h1>
                </div>
                <div class="max-w-md"><p class="text-black text-xl pl-4">For her, nature is more than a destination; it is a profound obsession and a silent physician. When the digital world grows loud and her "iron will" begins to fray, she retreats into the wild’s embrace. Whether beneath the canopy of a local forest or on a distant shore, the earth’s rhythm mends what the world breaks. The rustle of leaves and the pulse of the tide act as a reset for her soul, turning exhaustion into resilience. In the sanctuary of the green, she isn't just a coder or a leader—she is a spirit finally at peace, healed by the very roots of the world.</p>
                </div>
                <div class="flex justify-between gap-4 items-center pt-12 ">
                    <div class="flex items-center gap-4">
                        <Icon class="bg-[#B8DB80] size-8" name="material-symbols:location-on-rounded"/>
                        <h1 class="text-[#B8DB80] font-bold text-lg ">Siquijor</h1></div>
                    <div class="flex gap-2"> <div v-for="icon in icons" :key="icon.name">
                        <Icon class="text-[#F39EB6 ]  " :name="icon.name" :style="{ color: icon.color }"  :size="icon.size" :color="icon.color" />
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/images/section2/image6.png" class="w-[550px] bg-cover " alt="">
            </div>
          </div>
      </div>
  </div>
</template>
<script setup>
const icons =ref([
        {
            name: 'material-symbols:favorite',
            size: '32px',
            color:"#B8DB80"

        },
        {
            name: 'iconamoon:comment-dots-fill',
            size: '32px',
            color:"#B8DB80"
        
        },
        {
            name: 'material-symbols:share',
            size: '32px',
            color:"#B8DB80"
        }
        ])
        
</script>