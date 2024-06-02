
<template>
    <div class="signup-height flex flex-col items-center justify-center w-full">
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
        <span class="text-slate-300">By continuing you agree to the Policy and Rules</span>
        <Button label="Sign In" class="w-full bg-green-500 rounded p-2 text-white" />
        <span class="pt-4">Yet to have an account <router-link :to="{ name: 'signup' }" class="underline">Sign Up</router-link></span>
       </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
</script>
