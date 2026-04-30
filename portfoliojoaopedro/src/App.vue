<template>
  <div ref="vantaRef" style="position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 0;"></div>
  <div style="position: relative; z-index: 1; min-height: 100vh; background: transparent;">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const vantaRef = ref<HTMLElement | null>(null)
let vantaEffect: any = null

onMounted(() => {
  vantaEffect = (window as any).VANTA.DOTS({
  el: vantaRef.value,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x101110,
  color2: 0x101110,
  backgroundColor: 0x000000,
  size: 7.00,
  spacing: 40.00,
  showLines: false
})
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>