
<template>
  <header class="sticky top-0 z-10">
    <div class="card flex justify-content-end position-absolute right-0 align-items-center justify-content-between ">
      <div >
        <router-link :to="{ name: 'home' }" class="text-2xl font-semibold border-e-4 rounded-full px-3 border-r-primary-inverse">Marketplace</router-link>
      </div>
      <div class="flex items-center">
        <MegaMenu :model="items" class="font-semibold"/>
        <router-link :to="{name: 'signup' }" class="bg-slate-100 p-2 px-4 mr-2">Sign up</router-link>
        <router-link :to="{name: 'signup' }" class="bg-slate-100 p-2 px-4">Sign in</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from "vue";


const items = ref([
  {
      label: 'Furniture',
      icon: 'pi pi-box',
      items: [
          [
              {
                  label: 'Living Room',
                  items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
              }
          ],
          [
              {
                  label: 'Kitchen',
                  items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
              },
              {
                  label: 'Bathroom',
                  items: [{ label: 'Accessories' }]
              }
          ],
          [
              {
                  label: 'Bedroom',
                  items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
              }
          ],
          [
              {
                  label: 'Office',
                  items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
              }
          ]
      ]
  },
  {
      label: 'Electronics',
      icon: 'pi pi-mobile',
      items: [
          [
              {
                  label: 'Computer',
                  items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
              }
          ],
          [
              {
                  label: 'Home Theather',
                  items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
              }
          ],
          [
              {
                  label: 'Gaming',
                  items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
              }
          ],
          [
              {
                  label: 'Appliances',
                  items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
              }
          ]
      ]
  },
  {
      label: 'Sports',
      icon: 'pi pi-clock',
      items: [
          [
              {
                  label: 'Football',
                  items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
              }
          ],
          [
              {
                  label: 'Running',
                  items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
              }
          ],
          [
              {
                  label: 'Swimming',
                  items: [
                    { label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
              }
          ],
          [
              {
                  label: 'Tennis',
                  items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
              }
          ]
      ]
  }
]);

</script>