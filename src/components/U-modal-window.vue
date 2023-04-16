<template>
  <div class="U-modal-window">
    <div class="modal-wrapper">
      <input type="text" placeholder="Поиск" />
      <div class="wrapper-slot">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "U-modal-window",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
.U-modal-window {
}
.modal-wrapper {
  width: 350px;
  /* height: 336px; */
  padding: 34px 18px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 16px 32px rgba(35, 39, 51, 0.1);
  border-radius: 4px;
}
.modal-wrapper input{
  color: #C1C1C1;
  outline: none;
  padding: 5px 16px;
  font-size: 24px;
 width: 100%;
}
.wrapper-slot {
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  gap: 30px;
}
</style>
