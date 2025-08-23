<template>
    <div>
        <h1>PrimeVue</h1>
        <Button label="Verify" />

        <Button label="Search" icon="pi pi-search" unstyled
            pt:root="bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2"
            pt:label="text-white font-bold text-lg" pt:icon="text-white text-xl" />

        <AutoComplete unstyled v-model="value" :suggestions="items" @complete="search" />

        <div class="card">
            <div class="flex flex-wrap gap-8">
                <div class="flex-auto">
                    <h5>Image</h5>
                    <VoltAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2"
                        size="xlarge" shape="circle" />
                    <VoltAvatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2"
                        size="large" shape="circle" />
                    <VoltAvatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
                        shape="circle" />
                </div>


                <div class="flex-auto">
                    <h5>Gravatar</h5>
                    <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"
                        size="xlarge" />
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import type { AutoCompleteCompleteEvent } from "primevue";
import { AutoComplete, Button } from "primevue";

// import aa from '@/components/volt/Accordion.vue'

const value = ref("");
const items = ref([
    {
        label: "Item 1",
        value: 1,
    },
    {
        label: "Item 2",
        value: 2,
    },
    {
        label: "Item 3",
        value: 3,
    },
]);

const search = (query: AutoCompleteCompleteEvent) => {
    items.value = items.value.filter((item) => item.label.includes(query.query));
};
</script>