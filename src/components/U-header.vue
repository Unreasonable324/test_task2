<template>
  <div class="U-header">
      <div class="wrapper-header">
        <a href="#">Каталог</a>
        <div class="header-nav">
          <a href="#">Сравнение</a>
          <a href="#">Личный кабинет </a>
          <img src="../assets/images/userImg.svg" alt="" />
        </div>
      </div>
    </div>
</template>

<script >
export default {
  name: "U-header",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
.U-header{
  border-bottom: 1px solid #A6A5A9;
}

.wrapper-header {
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-size: 18px;
}
.wrapper-header a{
 color: #0D5ADC;
  text-decoration: none;
}
.header-nav{
  display: flex;
  align-items: center;
  font-size: 12px;
}
.header-nav :nth-child(1){
  margin-right: 48px;
  text-transform: uppercase;
  color: #3B4157;

}
.header-nav :nth-child(2){
  margin-right: 19px;
  color: #3B4157;

}
</style>
