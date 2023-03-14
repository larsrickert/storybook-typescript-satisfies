<script setup lang="ts">
import { reactive } from "vue";

type SomeType = { name: string; email: string; phone?: string };

// FIXME: This does not work
const formData = reactive({ name: "", email: "" }) satisfies SomeType;

// however, if you replace it with the following line, it works
// const formData = reactive<SomeType>({ name: "", email: "" });
</script>

<template>
  <div>
    This is an example of the current storybook bug when using the satisfies
    keyword (introduced by TypeScript 4.9) inside of a .vue component

    <pre> {{ formData }} </pre>
  </div>
</template>
