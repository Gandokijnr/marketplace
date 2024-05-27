
<template>
  <header class="sticky top-0 z-10">
    <div class="card flex justify-content-end position-absolute right-0 align-items-center justify-content-between ">
      <div >
        <RouterLink class="text-2xl font-semibold border-e-4 rounded-full px-3 border-r-primary-inverse">Marketplace</RouterLink>
      </div>
      <div>
        <MegaMenu :model="items" class="font-semibold"/>
      </div>
    </div>
  </header>

  <main>
       <div class="main-slider">
        <div class="card">
          <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
              <template #item="slotProps">
                  <div class="border-1 surface-border border-round m-2  p-3">
                      <div class="mb-3">
                          <div class="relative mx-auto">
                              <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round" />
                              <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                          </div>
                      </div>
                      <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
                      <div class="flex justify-content-between align-items-center">
                          <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                          <span>
                              <Button icon="pi pi-heart" severity="secondary" outlined />
                              <Button icon="pi pi-shopping-cart" class="ml-2"/>
                          </span>
                      </div>
                  </div>
              </template>
          </Carousel>
        </div>
       </div>
       <div class="infinite-scroll w-full bg-gray-100 rounded overflow-auto mt-5">
        <div class="scroll-content flex justify-evenly">
          <img v-for="(image, index) in images" :src="image.src" :alt="image.alt" :key="index" class="h-24 transition duration-500 ease-in-out transform grayscale hover:grayscale-0" />
        </div>
    </div>
    <hr class="mt-5" />

    <div class="main-recent-item mt-5 p-4">
      <span class="text-3xl font-bold text-gray-400">Recent Products</span>

      <div class="main-items flex flex-wrap justify-around">
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" v-for="( product, index) in product" :key="index" class="border-1 surface-border border-round m-2 p-3 w-96 hover:shadow-lg animation-duration-1000">
          <div class="mb-3">
            <div class="relative mx-auto">
              <img :src="'https://primefaces.org/cdn/primevue/images/product/' + product.image" :alt="product.name" class="border-round" />
              <Tag :value="product.inventoryStatus" :severity="getSeverity(product.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
            </div>
          </div>
          <div class="mb-3 font-medium">{{ product.name }}</div>
            <div class="flex justify-content-between align-items-center">
              <div class="mt-0 font-semibold text-xl">${{ product.price }}</div>
              <span>
                <Button icon="pi pi-heart" severity="secondary" outlined />
                <Button icon="pi pi-shopping-cart" class="ml-2"/>
              </span>
            </div>
        </div>
      </div>
    </div>
  </main>
 
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();

const product = ref([
  {
    name: 'Bamboo Watch',
    price: 65,
    image: 'bamboo-watch.jpg',
    inventoryStatus: 'INSTOCK'
  },
  {
    name: 'Black Watch',
    price: 72,
    image: 'black-watch.jpg',
    inventoryStatus: 'LOWSTOCK'
  },
  {
    name: 'Blue Band',
    price: 79,
    image: 'blue-band.jpg',
    inventoryStatus: 'OUTOFSTOCK'
  },
  {
    name: 'Purple Gemstone Necklace',
    price: 120,
    image: 'purple-gemstone-necklace.jpg',
    inventoryStatus: 'INSTOCK'
  },
  {
    name: 'Silver Bracelet',
    price: 90,
    image: 'headphones.jpg',
    inventoryStatus: 'INSTOCK'
  },
  {
    name: 'Gold Earrings',
    price: 150,
    image: 'teal-t-shirt.jpg',
    inventoryStatus: 'LOWSTOCK'
  },
  {
    name: 'Red T-shirt',
    price: 25,
    image: 'sneakers.jpg',
    inventoryStatus: 'INSTOCK'
  },
  {
    name: 'Blue Jeans',
    price: 55,
    image: 'yellow-earbuds.jpg',
    inventoryStatus: 'INSTOCK'
  },
  {
    name: 'Black Leather Shoes',
    price: 100,
    image: 'yoga-mat.jpg',
    inventoryStatus: 'OUTOFSTOCK'
  },
  {
    name: 'White Sneakers',
    price: 80,
    image: 'yoga-set.jpg',
    inventoryStatus: 'INSTOCK'
  }
])

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
