<script setup>
import { RouterView } from 'vue-router'
import navbar from '@/components/navbar.vue';
import footerpage from '@/components/footerpage.vue';
</script>

<template>
  <navbar />
  <RouterView />
  <footerpage />
</template>
