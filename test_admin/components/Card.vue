<template>
  <div v-if="load" class="loader"></div>
  <div v-if="dynamicComponent && !load">
    <component :is="dynamicComponent" />
  </div>
</template>

<script setup>
import { ref, defineComponent } from "vue";

const load = ref(true);

const testMethod = () => {
  alert("Clicked!");
};

const defaultTemplate =
  '<div class="card defult"><img src="https://artworld.ru/images/cms/content/catalog2/4_1.jpg" alt="" class="card__image"/><div class="card__desc-wrapper"><h2 class="card__title">Card title</h2><p class="card__text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><div><button class="card__btn">Buttons</button></div></div></div>';
const defaultStyles = `<style>

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  max-height: 320px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid rgb(207, 207, 207);
  overflow: hidden;
  gap: 5px;
}

.card__desc-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}

.card__title {
  font-size: 24px;
  font-weight: bold;
}

.card__btn {
  width: auto;
  display: inline-block;
  background-color: rgb(107, 27, 246);
  padding: 8px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

</style>`;

const dynamicComponent = ref(null);

function createDynamicComponent(template, styles) {
  return defineComponent({
    template: template,
    setup() {
      return {
        testMethod,
      };
    },
    mounted() {
      const styleTag = document.createElement("style");
      styleTag.textContent = styles;
      document.head.appendChild(styleTag);
    },
  });
}

function fetchData({ template, styles }) {
  dynamicComponent.value = createDynamicComponent(template, styles);
}

const setTemplate = async () => {
  const data = await fetch("http://localhost:3000/api/card");
  const res = await data.json();
  fetchData({
    template: res.template || defaultTemplate,
    styles: res.styles || defaultStyles,
  });
  setTimeout(() => {
    load.value = false;
  }, 1000);
};

onMounted(() => {
  setTemplate();
});
</script>

<style>
.default-style {
  font-size: 16px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  background: transparent;
  color: inherit;
  line-height: 1;
  text-decoration: none;
  list-style: none;
}

.loader {
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
