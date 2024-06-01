<template>
    <div>
      <navbar />
      <div class="container mx-auto">
        <div v-if="product" class="card flex flex-col gap-4">
          <div class="flex justify-evenly gap-5">
            <Galleria :value="product.image" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="min-width: 640px">
              <template #item="{ item }">
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image" :alt="item.name" style="min-width: 640px" />
              </template>
              <template #thumbnail="{ item }">
                <img :src="item.thumbnail" :alt="item.alt" />
              </template>
            </Galleria>
            <div class="parent-card-container w-full container">
              <div class="card bg-slate-100 font-semibold flex flex-col gap-4">
                <p class="text-slate-500">Item Name: {{ product.name }}</p>
                <p class="text-slate-500">Condition: {{ product.inventoryStatus }}</p>
                <p class="text-slate-500">Price: N{{ product.price }}</p>
                <p class="text-slate-500">Product Category: {{ product.cateogry }}</p>
                <p class="text-slate-500">Publish Date: {{ product.publishDate }}</p>
              </div>
              <div class="card border">
                <p class="text-2xl font-semibold">Safety tips</p>
                <p class="mt-4">
                  Avoid paying in advance, even for delivery<br />
                  Meet with the seller at a safe public place<br />
                  Inspect the item and ensure it's exactly what you want<br />
                  Make sure that the packed item is the one you've inspected<br />
                  Only pay if you're satisfied
                </p>
              </div>
              <div class="card bg-slate-100 flex gap-5">
                <Button class="pi pi-phone bg-green-600 text-white p-3 w-full">Call</Button>
                <Button class="pi pi-comment bg-green-600 text-white p-3 w-full">Chat</Button>
              </div>
            </div>
          </div>
          <Textarea v-model="product.description" autoResize rows="5" cols="30" placeholder="Description" class="w-auto" />
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { ProductService } from '@/service/ProductService';
  import navbar from '@/components/navbar.vue';
  
  const product = ref(null);
  const route = useRoute();
  
  onMounted(() => {
    getProductDetails();
  });
  
  const responsiveOptions = ref([
    {
      breakpoint: '1300px',
      numVisible: 4
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ]);
  
  const getProductDetails = async () => {
    const productId = route.params.id;
    product.value = await ProductService.getProductById(productId);
  };
  
  </script>
  