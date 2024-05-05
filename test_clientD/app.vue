<template>
  <div class="container">
    <Card />
  </div>
</template>
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
