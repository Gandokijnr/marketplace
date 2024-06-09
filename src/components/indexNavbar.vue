<template>
    <header class="sticky top-0 z-10 bg-white shadow-md">
      <div class="p-2">
        <div class="flex justify-between items-center py-4">
          <!-- Logo and Branding -->
          <div>
            <router-link :to="{ name: 'indexPage' }" class="text-2xl font-semibold border-e-4 border-e-slate-600 rounded-full px-3 border-r-primary-inverse" @click="closeMobileMenu">Marketplace</router-link>
          </div>
          
          <!-- Navigation and Actions -->
          <div class="hidden md:flex items-center justify-between">
            <!-- Mega Menu -->
            <MegaMenu :model="items" class="font-semibold mr-4"/>
    
            <!-- Links -->
            <div class="flex space-x-4 items-center">
              <router-link :to="{ name: 'postads' }" class="bg-green-600 rounded text-white p-2 px-4" @click="closeMobileMenu">Sell</router-link>
              <router-link :to="{ name: 'postads' }" class="bg-green-600 rounded text-white p-2 px-4" @click="closeMobileMenu">Request</router-link>
              <Button @click="visibleRight = true">
               <img src="https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg" class="size-12 rounded-full border-2 border-green-600" alt="">
              </Button>
              <Sidebar v-model:visible="visibleRight" position="right">
                <div class="header">
                    <p class="font-semibold">Welcome</p>
                    <p>{{ user.email }}</p> <!-- Display user's display name or username -->
                    <ul class="profile-content flex flex-col gap-5 mt-4">
                        <li class="flex items-center justify-start gap-10 border p-2 rounded-lg cursor-pointer hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div>
                            <p class="font-semibold">Profile</p>
                            <p class="text-slate-400">info@gmail.com</p>
                            </div>
                        </li>
                        <li class="flex items-center justify-start gap-10 border p-2 rounded-lg cursor-pointer hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                            <div>
                            <p class="font-semibold">Billing</p>
                            <p class="text-slate-400">Lorem ipsum dolor sit</p>
                            </div>
                        </li>
                        <li class="flex items-center justify-start gap-10 border p-2 rounded-lg cursor-pointer hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div>
                            <p class="font-semibold">Settings</p>
                            <p class="text-slate-400">Lorem ipsum dolor sit</p>
                            </div>
                        </li>
                        <li class="flex items-center justify-start gap-10 border p-2 rounded-lg cursor-pointer hover:shadow" @click="logoutUser()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>
                            <div>
                            <p class="font-semibold">Sign Out</p>
                            <p class="text-slate-400">Lorem ipsum dolor sit</p>
                            </div>
                        </li>
                    </ul>
                    <p class="font-semibold mt-8">Notifications</p>
                    <p>You have 3 new notification</p>
                    <ul class="profile-notification flex flex-col gap-5">
                        <li class="flex items-center justify-start gap-10 border p-2 rounded-lg cursor-pointer hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div>
                            <p class="font-semibold">Profile</p>
                            <p class="text-slate-400">info@gmail.com</p>
                            </div>
                        </li>
                        <li class="flex items-center justify-start gap-10 border p-2 rounded-lg cursor-pointer hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div>
                            <p class="font-semibold">Profile</p>
                            <p class="text-slate-400">info@gmail.com</p>
                            </div>
                        </li>
                        <li class="flex items-center justify-start gap-10 border p-2 rounded-lg cursor-pointer hover:shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <div>
                            <p class="font-semibold">Profile</p>
                            <p class="text-slate-400">info@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                </Sidebar>
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
                <router-link :to="{ name: 'postads' }" class="bg-green-600 rounded text-white p-2 px-4" @click="closeMobileMenu">Sell</router-link>
                <router-link :to="{ name: 'postads' }" class="bg-green-600 rounded text-white p-2 px-4" @click="closeMobileMenu">Request</router-link>
                <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  import { useRouter } from 'vue-router';
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

  
  const visibleRight = ref(false);
  const router = useRouter()

  const auth = getAuth();
  const user = ref(null);

  onMounted(() => {
  user.value = auth.currentUser;
  console.log(user)

});

  async function logoutUser() {
    if (auth.currentUser) {
      await signOut(auth).then(() => {
        console.log('User signed out!');
        router.push({name: 'home'})
      }).catch((error) => {
        console.log(error.message);
      });
    } else {
      console.log('No user is signed in.');
    }
  }

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
  
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  