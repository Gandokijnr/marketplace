
<template>
<navbar />
<main>
    <div class="main-slider">
      <div class="card">
        <Carousel
          :value="products"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="3000"
        >
          <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 p-3">
              <div class="mb-3">
                <div class="relative mx-auto">
                  <img
                    :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                    :alt="slotProps.data.name"
                    class="w-full border-round"
                  />
                  <Tag
                    :value="slotProps.data.inventoryStatus"
                    :severity="getSeverity(slotProps.data.inventoryStatus)"
                    class="absolute"
                    style="left:5px; top: 5px"
                  />
                </div>
              </div>
              <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
              <div class="flex justify-content-between align-items-center">
                <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                <span>
                  <Button icon="pi pi-heart" severity="secondary" outlined />
                  <Button icon="pi pi-shopping-cart" class="ml-2" />
                </span>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>

    <div class="infinite-scroll w-full bg-gray-100 rounded overflow-auto mt-5">
      <div class="scroll-content flex justify-evenly">
        <img
          v-for="(image, index) in images"
          :src="image.src"
          :alt="image.alt"
          :key="index"
          class="h-24 transition duration-500 ease-in-out transform grayscale hover:grayscale-0"
        />
      </div>
    </div>
    <hr class="mt-5" />

    <div class="main-recent-item mt-5 p-2 container mx-auto">
      <span class="text-3xl font-bold text-gray-400">Recent Products</span>
      
      <div class="main-items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <RouterLink
          v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
          v-for="(product, index) in products"
          :key="index"
          :to="{ name: 'detailspage', params: { id: product.id } }"
          class="border-1 surface-border border-round m-2 p-3 hover:shadow-lg"
        >
          <div class="mb-3 relative">
            <img
              :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image"
              :alt="product.name"
              class="border-round w-full"
            />
            <Tag
              :value="product.inventoryStatus"
              :severity="getSeverity(product.inventoryStatus)"
              class="absolute top-2 left-2"
            />
          </div>
          <div class="mb-3 font-medium">{{ product.name }}</div>
          <div class="flex justify-between items-center">
            <div class="font-semibold text-xl">${{ product.price }}</div>
            <div>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" />
            </div>
          </div>
        </RouterLink>
      </div>
    </div>



    <ScrollTop class="bg-green-600" />
  </main>
 
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import navbar from '@/components/navbar.vue'
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0,9)));
})

const products = ref();

const images = ref([
      { src: '/prada.png', alt: 'Prada' },
      { src: '/pay on delivery.png', alt: 'Pay on delivery' },
      { src: '/visa.png', alt: 'visa' },
      { src: '/master card.png', alt: 'master card' },
      { src: '/interswitch.png', alt: 'interswitch' },
      // Add more images as needed
    ])

const getSeverity = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};


</script>
