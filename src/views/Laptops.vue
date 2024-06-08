<template>
    <indexPage />

    <div class="main-recent-item mt-5 p-2 container mx-auto">
      <span class="text-3xl font-bold text-gray-400">Laptops</span>
      
      <div v-if="paginatedProducts.length > 0" class="main-items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <div
          v-animateonscroll="{ enterClass: 'fadein' }"
          v-for="(product, index) in paginatedProducts"
          :key="index"
          class="border-1 surface-border border-round m-2 p-3 hover:shadow-lg"
        >
          <RouterLink :to="{ name: 'detailspage', params: { id: product.id } }" class="mb-3 relative cursor-pointer">
            <img
              :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image"
              :alt="product.name"
              class="border-round w-full"
            />
        
          </RouterLink>
          <div class="mb-3 font-medium">{{ product.name }}</div>
          <div class="flex justify-between items-center">
            <div class="font-semibold text-xl">₦{{ product.price }}</div>
            <div>
              <Button icon="pi pi-heart" severity="secondary" outlined class="border p-2 rounded" />
              <a
                v-if="showNumber[index]"
                :href="'tel:' + product.phone"
                class="absolute bg-green-600 rounded p-2 mt-12 -ml-12 font-semibold text-white"
              >
                {{ product.phone }}
              </a>
              <Button icon="pi pi-phone" class="ml-2 bg-green-500 p-2 rounded text-white" @click="ShowNumber(index)" />
            </div>
          </div>
        </div>
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
  </template>
  
  <script setup>
  import indexPage from '@/components/indexPage.vue'
  import { ref, computed, onMounted } from "vue";
import navbar from '@/components/navbar.vue'
import { RouterLink } from "vue-router";
import { ProductService } from '@/service/ProductService';


const products = ref([]);
const first = ref(0);
const rowsPerPage = 24;
const showNumber = ref([])
const totalRecords = ref(1);

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

const ShowNumber = (index) => {
  showNumber.value[index] =!showNumber.value[index];
}


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
  