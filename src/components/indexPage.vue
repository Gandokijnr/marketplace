<template>
    <indexNavbar />
    <div>
      <div class="p-5"> 
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <router-link to="/phones-and-accessories">
            <button class="bg-green-500 border bg-transparent h-28 px-20 w-72 text-2xl text-white rounded-lg">Phones and Accessories</button>
          </router-link>
          <router-link to="/laptops">
            <button class="bg-green-500 border bg-transparent h-28 px-20 w-72 text-2xl text-white rounded-lg">Laptops</button>
          </router-link>
          <router-link to="/television">
            <button class="bg-green-500 border bg-transparent h-28 px-20 w-72 text-2xl text-white rounded-lg">Television</button>
          </router-link>
          <router-link to="/sounds">
            <button class="bg-green-500 border bg-transparent h-28 px-20 w-72 text-2xl text-white rounded-lg">Sounds</button>
          </router-link>
          <router-link to="/furniture">
            <button class="bg-green-500 border bg-transparent h-28 px-20 w-72 text-2xl text-white rounded-lg">Furniture</button>
          </router-link>
          <router-link to="/sports">
            <button class="bg-green-500 border bg-transparent h-28 px-20 w-72 text-2xl text-white rounded-lg">Sports</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import indexNavbar from '@/components/indexNavbar.vue'
  </script>
  