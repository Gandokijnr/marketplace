<template>
    <header class="sticky top-0 z-10 bg-white shadow-md">
      <div class="container mx-auto p-2">
        <div class="flex justify-between items-center py-4">
          <!-- Logo and Branding -->
          <div>
            <router-link :to="{ name: 'home' }" class="text-2xl font-semibold border-e-4 border-e-slate-600 rounded-full px-3 border-r-primary-inverse">Marketplace</router-link>
          </div>
          
          <!-- Navigation and Actions -->
          <div class="hidden md:flex items-center justify-between">
            <!-- Mega Menu -->
            <MegaMenu :model="items" class="font-semibold mr-4"/>
  
            <!-- Links -->
            <div class="flex space-x-4">
              <router-link :to="{ name: 'signup' }" class="bg-green-600 text-white rounded p-2 px-4">Sign up</router-link>
              <router-link :to="{ name: 'signin' }" class="bg-green-600 rounded text-white p-2 px-4">Sign in</router-link>
              <router-link :to="{ name: 'postads' }" class="bg-green-600 rounded text-white p-2 px-4">Sell</router-link>
            </div>
          </div>
  
          <!-- Mobile Navigation Toggle -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-500 focus:outline-none">
              <svg class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden">
          <MegaMenu :model="items" class="font-semibold"/>
          
          <div class="flex flex-col space-y-2 mt-4">
            <router-link :to="{ name: 'signup' }" class="bg-green-600 text-white rounded p-2 px-4">Sign up</router-link>
            <router-link :to="{ name: 'signin' }" class="bg-green-600 rounded text-white p-2 px-4">Sign in</router-link>
            <router-link :to="{ name: 'postads' }" class="bg-green-600 rounded text-white p-2 px-4">Sell</router-link>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const items = ref([
    {
      label: 'Furniture',
      icon: 'pi pi-box',
      items: [
        [
          { label: 'Living Room', items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }] }
        ],
        [
          { label: 'Kitchen', items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }] },
          { label: 'Bathroom', items: [{ label: 'Accessories' }] }
        ],
        [
          { label: 'Bedroom', items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }] }
        ],
        [
          { label: 'Office', items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }] }
        ]
      ]
    },
    {
      label: 'Electronics',
      icon: 'pi pi-mobile',
      items: [
        [
          { label: 'Computer', items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }] }
        ],
        [
          { label: 'Home Theater', items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }] }
        ],
        [
          { label: 'Gaming', items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }] }
        ],
        [
          { label: 'Appliances', items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vacuum Cleaner' }, { label: 'Washing Machine' }] }
        ]
      ]
    },
    {
      label: 'Sports',
      icon: 'pi pi-clock',
      items: [
        [
          { label: 'Football', items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }] }
        ],
        [
          { label: 'Running', items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }] }
        ],
        [
          { label: 'Swimming', items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }] }
        ],
        [
          { label: 'Tennis', items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }] }
        ]
      ]
    }
  ]);
  
  let isMobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  