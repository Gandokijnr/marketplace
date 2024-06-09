<template>
  <navbar />
  <div class="signup-height flex flex-col items-center w-full md:p-10">
    <form @submit.prevent="signUp" class="flex flex-col items-center justify-center rounded p-3 shadow-lg bg-white">
      <span class="flex items-center justify-center text-2xl font-bold">Sign Up</span>
      <div class="flex flex-col gap-4 p-5 rounded">
        <FloatLabel>
          <InputText id="email" v-model="email" />
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel>
          <Password id="password" v-model="password" toggleMask />
          <label for="password">Password</label>
        </FloatLabel>
        <FloatLabel>
          <Password id="Cpassword" v-model="Cpassword" toggleMask />
          <label for="Cpassword">Confirm Password</label>
        </FloatLabel>
      </div>
      <span class="text-slate-300 w-80">By continuing you agree to the Policy and Rules</span>
      <Toast />
      <Button label="Sign Up" type="submit" class="w-80 bg-green-500 rounded p-2 text-white" />
      <span class="pt-4">Already have an account <router-link :to="{ name: 'signin' }" class="underline">Sign in</router-link></span>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import navbar from '@/components/navbar.vue';
import { useToast } from 'primevue/usetoast';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const toast = useToast();
const email = ref('');
const password = ref('');
const Cpassword = ref('');
const router = useRouter();

const signUp = () => {
  if (password.value !== Cpassword.value) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match', life: 3000 });
    return;
  }

  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        toast.add({ severity: 'success', summary: 'Success', detail: 'Account created successfully!', life: 3000 });
        router.push({ name: 'indexPage' });
      }
    })
    .catch((error) => {
      let errorMessage;
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email is already in use.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Operation not allowed.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Weak password.';
          break;
        default:
          errorMessage = 'An unknown error occurred.';
      }
      toast.add({ severity: 'error', summary: 'Error', detail: errorMessage, life: 3000 });
    });
};
</script>

<style>
/* Add your custom styles here */
</style>
