
<template>
    <navbar />
    <div class="form-container flex justify-center">
        <form action="">
            <div class="card flex flex-col gap-4 justify-center  ">
                <span>Kindly Fill in your item details</span>

                <FloatLabel>
                    <InputText id="title" v-model="title" class="w-full"/>
                    <label for="title">Title</label>
                </FloatLabel>

                <FloatLabel>
                    <InputNumber v-model="value1" inputId="currency-naira" mode="currency" currency="NGN" locale="en-NG" class="w-full" />
                    <label for="description">Price</label>
                </FloatLabel>

                <Dropdown v-model="selectedCategory" :options="category" optionLabel="name" placeholder="Select Category" class="w-full md:w-[14rem] border p-1" />

                <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Select Location" class="md:w-[20rem] w-full border p-1" />
                

                <Dropdown v-model="selectCondition" :options="condition" optionLabel="name" placeholder="Condition" class="w-full md:w-[14rem] border p-1" />


                <Textarea v-model="value" autoResize placeholder="Description" class="w-full" />

                <div class="border p-2 rounded">
                <Toast />
                
                <InlineMessage severity="warn">
                    Add or drag and drop photos for this category
                    First picture - is the title picture.
                    Click Upload to confirm the selected photos then proceed
                </InlineMessage>
                <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="100000">
                    <template #empty>
                        <p  class="bg-slate-100 p-3 rounded">Drag and drop files to here to upload.</p>
                    </template>
                </FileUpload>
                </div>

                <Button label="Publish" class="w-full bg-green-600 p-4 text-white" />
            </div>
            
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast"
import navbar from '@/components/navbar.vue'

import { NodeService } from '@/service/NodeService';

const selectedCategory = ref()
const selectCondition = ref()
const toast = useToast()

const nodes = ref(null);
const selectedValue = ref(null);


const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const category = ref([
    { name: 'Furniture', code: 'FN' },
    { name: 'Electronics', code: 'ELC' },
    { name: 'Sports', code: 'SPT' },
    { name: 'Phones and Accessories', code: 'PA' },
]);

const condition = ref([
    { name: 'New', code: 'NW' },
    { name: 'Used like new', code: 'ULN' },
    { name: 'Used', code: 'US' },
]);

const groupedCities = ref([
    {
        label: 'Popular State',
        code: 'popular',
        items: [
            { label: 'Lagos State', value: 'Lagos' },
            { label: 'Abuja', value: 'abuja' },
            { label: 'Ogun State', value: 'ogun' },
            { label: 'Oyo State', value: 'oyo' },
            { label: 'River State', value: 'river' }
        ]
    },
    {
        label: 'Other State',
        code: 'other',
        items: [
            { label: 'Abia State', value: 'Abia' },
            { label: 'Adamawa State', value: 'Adamawa' },
            { label: 'Akwa Ibom State', value: 'Akwa' },
            { label: 'Anambra State', value: 'Anambra' },
            { label: 'Bauchi State', value: 'Bauchi' },
            { label: 'Bayelsa State', value: 'Bayelsa' },
            { label: 'Benue State', value: 'Benue' },
            { label: 'Borno State', value: 'Borno' },
            { label: 'Cross River State', value: 'Cross' },
            { label: 'Delta State', value: 'Delta' },
            { label: 'Ebonyi State', value: 'Ebonyi' },
            { label: 'Edo State', value: 'Edo' },
            { label: 'Ekiti State', value: 'Ekiti' },
            { label: 'Enugu State', value: 'Enugu' },
            { label: 'Gombe State', value: 'Gombe' },
            { label: 'Imo State', value: 'Imo' },
            { label: 'Jigawa State', value: 'Jigawa' },
            { label: 'Kaduna State', value: 'Kaduna' },
            { label: 'Kano State', value: 'Kano' },
            { label: 'Katsina State', value: 'Katsina' },
            { label: 'Kebbi State', value: 'Kebbi' },
            { label: 'Kogi State', value: 'Kogi' },
            { label: 'Kwara State', value: 'Kwara' },
            { label: 'Nasarawa State', value: 'Nasarawa' },
            { label: 'Niger State', value: 'Niger' },
            { label: 'Ondo State', value: 'Ondo' },
            { label: 'Osun State', value: 'Osun' },
            { label: 'Plateau State', value: 'Plateau' },
            { label: 'Sokoto State', value: 'Sokoto' },
            { label: 'Taraba State', value: 'Taraba' },
            { label: 'Yobe State', value: 'Yobe' },
            { label: 'Zamfara State', value: 'Zamfara' }
        ]
    },
]);
</script>
