<template>
    <div>
        <HomeIndex id="home" />
        <SectionTwo id="nature" />
        <ThirdSection id="about" />
        <FouthSection id="travels" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant' 
  })
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname)
  }
})
</script>