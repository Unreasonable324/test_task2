<template>
  <div class="U-modal-window">
    <div class="modal-wrapper" >
        <slot></slot>
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
  background: #fff;
  position: absolute;
  z-index: 2;
  top: 40%;
  left: 105px;
  border-radius: 4px;
overflow: hidden;
}
.modal-wrapper {
  overflow: auto;

  width: 350px;
  max-height: 330px;
  /* height: 336px; */
  padding: 34px 18px;
  border: 1px solid #e3e3e3;
  box-shadow: 0px 16px 32px rgba(35, 39, 51, 0.1);
}

.modal-wrapper::-webkit-scrollbar {
  width: 8px; /* ширина scrollbar */
}
.modal-wrapper::-webkit-scrollbar-button {
  height: 10px;
}
.modal-wrapper::-webkit-scrollbar-thumb {
  background-color:  #E3E3E3; /* цвет плашки */
  border-radius: 20px; /* закругления плашки */
  border: 3px solid white; /* padding вокруг плашки */
}

.modal-wrapper input {
  color: #c1c1c1;
  outline: none;
  padding: 5px 16px;
  font-size: 24px;
  width: 100%;
}
.wrapper-slot {
  display: flex;
  flex-direction: column;
  /* margin-top: 18px;   */
  gap: 30px;
}
</style>
