<template>
  <main>
    <div class="main-slider">
      <div v-if="products.length > 0" class="card">
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
                <div class="mt-0 font-semibold text-xl">₦{{ slotProps.data.price }}</div>
                <span>
                  <Button icon="pi pi-heart" severity="secondary" outlined />
                  <Button icon="pi pi-shopping-cart" class="ml-2" />
                </span>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
      <div v-else class="mt-20 flex justify-evenly">
            <Skeleton width="30rem" height="20rem" class="mb-2"></Skeleton>
            <Skeleton width="30rem" height="20rem" class="mb-2"></Skeleton>
            <Skeleton width="30rem" height="20rem" class="mb-2"></Skeleton>
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
      
      <div v-if="paginatedProducts.length > 0" class="main-items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <RouterLink
          v-animateonscroll="{ enterClass: 'fadein' }"
          v-for="(product, index) in paginatedProducts"
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
            <div class="font-semibold text-xl">₦{{ product.price }}</div>
            <div>
              <Button icon="pi pi-heart" severity="secondary" outlined class="border p-2 rounded" />
              <Button icon="pi pi-shopping-cart" class="ml-2 bg-green-500 p-2 rounded text-white" />
            </div>
          </div>
        </RouterLink>
      </div>
      <div v-else class="mt-20 flex justify-evenly">
            <Skeleton width="10rem" height="10rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="10rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="10rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="10rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="10rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="10rem" class="mb-2"></Skeleton>
         </div>
      <Paginator v-model:first="first" :rows="rowsPerPage" :totalRecords="totalRecords" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" @page="onPageChange" />
    </div>


    <ScrollTop class="bg-green-600" />
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { ProductService } from '@/service/ProductService';


const products = ref([]);
const first = ref(0);
const rowsPerPage = 6;
const totalRecords = ref(0);

onMounted(() => {
  setTimeout(() => {
    fetchProducts();
  }, 1000)
});

const images = ref([
    { src: '/prada.png', alt: 'Prada' },
    { src: '/pay on delivery.png', alt: 'Pay on delivery' },
    { src: '/visa.png', alt: 'visa' },
    { src: '/master card.png', alt: 'master card' },
    { src: '/interswitch.png', alt: 'interswitch' },
    // Add more images as needed
]);

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

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
    },
];

const paginatedProducts = computed(() => {
    const start = first.value * rowsPerPage;
    const end = start + rowsPerPage;
    return products.value.slice(start, end);
});

const onPageChange = (event) => {
    first.value = event.page;
    fetchProducts();
};

const fetchProducts = () => {
    ProductService.getProductsSmall().then((data) => {
        products.value = data;
        totalRecords.value = data.length;
    });
};
</script>

<style>
/* Add any additional styling here */
</style>
