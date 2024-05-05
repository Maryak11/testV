<template>
  <div class="wrapper">
    <codemirror
      :model-value="modelValue"
      @update:modelValue="updateValue"
      placeholder="Code goes here..."
      :style="{ height: '250px', width: '800px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @ready="handleReady"
    />
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: `console.log('Hello, world!')`,
  },
});

const updateValue = (newValue) => {
  emits("update:modelValue", newValue);
};
const extensions = [javascript()];

const view = shallowRef();

const handleReady = (payload) => {
  view.value = payload.view;
};
</script>
<style>
.wrapper {
  border: 2px solid rgb(208, 1, 208);
  border-radius: 10px;
  overflow: hidden;
}
</style>
