<template>
  <div>
    <div class="container mx-auto md:p-10">
      <div v-if="product" class="grid gap-4 p-4">
        <div class="grid lg:grid-cols-2 gap-5 mt-4">
          <!-- Product Image Gallery -->
          <Galleria :value="product.image" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="{ item }">
              <img :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image" :alt="item.name" />
            </template>
            <template #thumbnail="{ item }">
              <img :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image" :alt="item.alt" class="lg:grid-cols-1" />
            </template>
          </Galleria>

          <!-- Product Details and Actions -->
          <div class="grid gap-4">
            <!-- Product Details -->
            <div class="card border font-semibold p-0">
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

            <!-- Safety Tips -->
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

            <!-- Action Buttons -->
            <div class="card bg-slate-100 flex items-center justify-start gap-5">
              <a
                v-if="showNumber[index]"
                :href="'tel:' + product.phone"
                class="absolute bg-green-600 rounded p-2 mt-24 -ml-12 font-semibold text-white"
              >
                {{ product.phone }}
              </a>              <Button  @click="ShowNumber(index)" class="pi pi-phone bg-green-500 p-3 rounded text-white">Call</Button>
              <Sidebar v-model:visible="visibleRight" position="right" class="w-full">
                <p class="text-2xl flex items-center justify-center h-screen text-gray-400">Coming Soon</p>
            </Sidebar>
            <Button class="pi pi-comment bg-green-600 text-white p-3"  @click="visibleRight = true">Chat</Button>
            </div>
          </div>
        </div>

        <!-- Product Description -->
        <Textarea v-model="product.description" autoResize rows="5" cols="30" readonly placeholder="Description" class="w-full mt-4" />
      </div>

      <!-- Loading Skeleton -->
      <div v-else class="mt-40 grid gap-4">
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

const product = ref(null);
const showNumber = ref([])
const visibleRight = ref(false);
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

const ShowNumber = (index) => {
  showNumber.value[index] =!showNumber.value[index];
}

const getProductDetails = async () => {
  const productId = route.params.id;
  product.value = await ProductService.getProductById(productId);
};
</script>

<style scoped>
/* Add any additional styling here */
</style>
