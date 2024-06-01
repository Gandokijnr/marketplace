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
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image" :alt="item.alt" style="max-width: 100px"/>
              </template>
            </Galleria>
            <div class="parent-card-container w-full container">
              <div class="card border font-semibold flex flex-col gap-2 p-0">
                <p class="text-slate-500 hover:bg-slate-100 p-2 px-4">Name: {{ product.name }}</p>
                <hr />
                <p class="text-slate-500 hover:bg-slate-100 p-2 px-4">Status: {{ product.inventoryStatus }}</p>
                <hr />
                <p class="text-slate-500 hover:bg-slate-100 p-2 px-4">Price: N{{ product.price }}</p>
                <hr />
                <p class="text-slate-500 hover:bg-slate-100 p-2 px-4">Product Category: {{ product.cateogry }}</p>
                <hr />
                <p class="text-slate-500 hover:bg-slate-100 p-2 px-4">Publish Date: {{ product.publishDate }}</p>
              </div>
              <div class="card border">
                <p class="text-2xl font-semibold">Safety tips</p>
                <hr />
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
        <div v-else class="mt-40">
            <Skeleton class="mb-2"></Skeleton>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="40rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="4rem" class="mb-5"></Skeleton>       
            <Skeleton width="80rem"></Skeleton>  
            <Skeleton class="mt-32" height="15rem"></Skeleton>
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
        setTimeout(() => {
            getProductDetails();
        }, 1000);
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
  