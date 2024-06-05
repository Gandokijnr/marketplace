
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
        <span class="text-slate-300 w-80">By continuing you agree to the Policy and Rules</span>
        <Toast />
        <Button label="Sign In" class="w-80 bg-green-500 rounded p-2 text-white" @click="showInfo" />
        <span class="pt-4">Yet to have an account <router-link :to="{ name: 'signup' }" class="underline w-">Sign Up</router-link></span>
       </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

const toast = useToast();
const email = ref();
const password = ref();

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Try the calm down, i never do this part 😁😀', life: 3000 });
};
</script>
