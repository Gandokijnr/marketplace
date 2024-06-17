<template>
    <indexNavbar />
    <div class="form-container flex justify-center mt-5 md:p-10">
      <form @submit.prevent="SubmitAds">
        <div class="card flex flex-col gap-4 justify-center">
          <span>Kindly Fill in your item details</span>
  
          <FloatLabel>
            <InputText id="productTitle" v-model="productName" class="w-full" />
            <label for="productTitle">Title</label>
          </FloatLabel>
  
          <FloatLabel>
            <InputNumber v-model="productAmount" inputId="currency-naira" mode="currency" currency="NGN" locale="en-NG" class="w-full" />
            <label for="productAmount">Price</label>
          </FloatLabel>

          <FloatLabel>
            <InputNumber v-model="productNumber" :useGrouping="false"  class="w-full" />
            <label for="productAmount">Contact Number</label>
          </FloatLabel>
  
          <Dropdown v-model="selectedCategory" :options="category" optionLabel="name" placeholder="Select Category" class="w-full md:w-[14rem] border p-1" />
  
          <TreeSelect v-model="selectedLocation" :options="nodes" selectionMode="checkbox" placeholder="Select Location" class="md:w-[20rem] w-full border p-1" />
  
          <Dropdown v-model="selectCondition" :options="condition" optionLabel="name" placeholder="Condition" class="w-full md:w-[14rem] border p-1" />
  
          <Textarea v-model="productDescription" autoResize placeholder="Description" class="w-full" />
  
          <div class="border p-2 rounded">
            <Toast />
  
            <InlineMessage severity="warn">
              Add or drag and drop photos for this category
              First picture - is the title picture.
              Click Upload to confirm the selected photos then proceed
            </InlineMessage>
            <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="100000">
              <template #empty>
                <p class="bg-slate-100 p-3 rounded">Drag and drop files to here to upload.</p>
              </template>
            </FileUpload>
          </div>
          <button type="submit" class="bg-green-600 p-2 px-4 w-full text-center text-white">Submit Ads</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useToast } from 'primevue/usetoast';
  import indexNavbar from '@/components/indexNavbar.vue';
  import { db, collection, addDoc } from '../firebaseConfig';
  
  import { NodeService } from '@/service/NodeService';
  
  const toast = useToast();
  
  const nodes = ref(null);
  
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
  
  const productName = ref('')
  const productAmount = ref(null)
  const selectedCategory = ref('')
  const selectCondition = ref('')

  const selectedLocation = ref('')
  const productDescription = ref('')
  const productNumber = ref(null)
  const date = ref(null)
  const status = ref('success')
  
  const refDoc = collection(db, 'postads');
  
  const SubmitAds = async () => {
    try {
      await addDoc(refDoc, {
        productName: productName.value,
        productAmount: productAmount.value,
        selectedCategory: selectedCategory.value,
        selectCondition: selectCondition.value,
        selectedLocation: selectedLocation.value,
        productDescription: productDescription.value,
        productNumber: productNumber.value,
        date: new Date(),
        status: 'pending'
      });
      console.log('Document successfully written!');
      toast.add({ severity: 'success', summary: 'Success', detail: 'Document successfully written!', life: 3000 });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.add({ severity: 'error', summary: 'Error', detail: 'Error adding document', life: 3000 });
    }
  };
  </script>
  