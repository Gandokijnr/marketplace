
<template>
    <navbar />
    <div class="signup-height flex flex-col items-center w-full md:p-10">
       <form class="flex flex-col items-center justify-center rounded p-3 shadow-lg bg-white">
        <span class="flex items-center justify-center text-2xl font-bold">Sign In</span>
        <div class="flex flex-col gap-4 p-5 rounded">
         <FloatLabel>
            <InputText id="email" v-model="email" />
            <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel>
                <Password v-model="password" toggleMask />
                <label for="password">Password</label>
        </FloatLabel>
        </div>
        <span class="text-slate-300 w-80">By continuing you agree to the Policy and Rules</span>
        <Toast />
        <Button label="Sign In" class="w-80 bg-green-500 rounded p-2 text-white" @click="signIn()" />
        <span class="pt-4">Yet to have an account <router-link :to="{ name: 'signup' }" class="underline">Sign Up</router-link></span>
       </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import navbar from '@/components/navbar.vue'
import { useToast } from "primevue/usetoast";
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const toast = useToast();
const email = ref();
const router = useRouter()
const password = ref();

const signIn = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          toast.add({ severity: 'success', summary: 'Success', detail: 'Logged in successfully!', life: 3000 });
          router.push({ name: 'indexPage' });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.add({ severity: 'error', summary: 'Error', detail: errorMessage, life: 3000 });
      });
  };

</script>
