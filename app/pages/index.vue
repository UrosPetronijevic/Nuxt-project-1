<template>
  <h1>Hello world</h1>
  <NuxtLink to="/about">About</NuxtLink>
  {{ counter }}
  <button @click="counter++">Click</button>
  <button @click="counter2++">Click2</button>
  {{ counter2 }}
  <p v-if="pending">loading...</p>
  <!-- <p v-if="error">THERE WAS AN ERROR {{ error.data.message }}</p> -->
  <ul v-else class="list-disc list-inside p-4">
    <li v-for="fruit in data?.fruits">
      {{ fruit }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
const counter = ref(0);
const counter2 = useState<number>("count", () => 0);

counter.value;

const { data, pending, error } = useFetch("/api/hello", { server: false });

useHead({
  title: "My nuxt app",
});
</script>
