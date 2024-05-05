<template>
  <div class="container">
    <div class="wrapper-redactor">
      <div class="redactor">
        <CodeMirror template v-model="templateInfo.template" />
        <CodeMirror style v-model="templateInfo.styles" />
        <div>
          <button @click="changeTemplate" class="btn-save">SAVE</button>
        </div>
      </div>
      <div class="card-wrapper">
        <Card :key="cardKey" />
      </div>
    </div>
  </div>
</template>
<script setup>
const templateInfo = ref({
  template: "",
  styles: "",
});

const cardKey = ref(0);

const setTemplate = async () => {
  const data = await fetch("http://localhost:3000/api/card");
  const res = await data.json();
  templateInfo.value = res;
};

const changeTemplate = async () => {
  await fetch("http://localhost:3000/api/card", {
    method: "PUT",
    body: JSON.stringify(templateInfo.value),
  });
  cardKey.value++;
};

onMounted(() => {
  console.log("PAGE MOUNT");
  setTemplate();
});
</script>
<style scoped>
.redactor {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.wrapper-redactor {
  width: auto;
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  height: 380px;
  border-radius: 15px;
  border: 1px solid rgb(206, 9, 224);
  padding: 10px;
  overflow: hidden;
}

.btn-save {
  width: auto;
  display: inline-block;
  background-color: rgb(107, 27, 246);
  padding: 8px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
</style>
