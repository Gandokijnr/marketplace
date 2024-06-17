<template>
  <navbar />
  <div class="signup-height flex flex-col items-center w-full md:p-10">
    <form @submit.prevent="signIn" class="flex flex-col items-center justify-center rounded p-3 shadow-lg bg-white">
      <span class="flex items-center justify-center text-2xl font-bold">Sign In</span>
      <div class="flex flex-col gap-4 p-5 rounded">
        <FloatLabel>
          <InputText id="email" v-model="email" :class="{'p-invalid': emailError}" />
          <label for="email">Email</label>
          <p v-if="emailError" class="p-error">{{ emailError }}</p>
        </FloatLabel>
        <FloatLabel>
          <Password id="password" v-model="password" :feedback="false" :class="{'p-invalid': passwordError}" />
          <label for="password">Password</label>
          <p v-if="passwordError" class="p-error">{{ passwordError }}</p>
        </FloatLabel>
      </div>
      <span class="text-slate-300 w-80">By continuing you agree to the Policy and Rules</span>
      <Toast />
      <Button label="Sign In" class="w-80 bg-green-500 rounded p-2 text-white" type="submit" :disabled="loading" />
      <span class="pt-4">Yet to have an account <router-link :to="{ name: 'signup' }" class="underline">Sign Up</router-link></span>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import navbar from '@/components/navbar.vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();
const toast = useToast();
const router = useRouter();
const email = ref('');
const password = ref('');
const emailError = ref(null);
const passwordError = ref(null);
const signInError = ref(null);
const loading = ref(false);

const validateForm = () => {
  emailError.value = null;
  passwordError.value = null;
  let valid = true;

  if (!email.value) {
    emailError.value = 'Email is required';
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.value = 'Email must be valid';
    valid = false;
  }

  if (!password.value) {
    passwordError.value = 'Password is required';
    valid = false;
  }

  return valid;
};

const signIn = async () => {
  if (!validateForm()) {
    return;
  }

  loading.value = true;
  signInError.value = null;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    if (user) {
      toast.add({ severity: 'success', summary: 'Success', detail: 'Logged in successfully!', life: 3000 });
      router.push({ name: 'indexPage' });
    }
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-credential':
        signInError.value = 'Please check your email or password and try again.';
        break;
      case 'auth/wrong-password':
        signInError.value = 'Incorrect password. Please try again.';
        break;
      case 'auth/user-not-found':
        signInError.value = 'No user found with this email.';
        break;
      case 'auth/too-many-requests':
        signInError.value = 'Too many failed login attempts. Please try again later.';
        break;
      case 'auth/invalid-email':
        signInError.value = 'Invalid email address.';
        break;
      default:
        signInError.value = 'An unknown error occurred. Please try again later.';
    }
    toast.add({ severity: 'error', summary: 'Error', detail: signInError.value, life: 3000 });
  } finally {
    loading.value = false;
  }
};
</script>

