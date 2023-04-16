<template>
  <div class="U-table">
    <div class="table-wrapper">
      <div class="table_titles">
        <div class="table_titles__preview">
          <input type="checkbox" id="checked" @click="checked" /><label for="checked"
            >Показать различия</label
          >
        </div>
        <div class="table_titles__manufacturer">производитель</div>
        <div class="table_titles__release-year">год релиза</div>
        <div class="table_titles__diagonal">Диагональ экрана (дюйм)</div>
        <div class="table_titles__country-of-origin">Страна-производитель</div>
        <div class="table_titles__memory-capacity">Объем памяти</div>
        <div class="table_titles__screen-refresh-rate">Частота обновления экрана</div>
        <div class="table_titles__nfc">nfc</div>
        <div class="table_titles__eSIM-support">Поддержка eSIM</div>
        <div class="table_titles__support-wireless-charging">
          Поддержка беспроводной зарядки
        </div>
        <div class="table_titles__price">стоимость</div>
      </div>
      <UTableItem
        :phone_data="phone_data"
        v-for="phone_data in phones_data"
        :key="phone_data.name"
      ></UTableItem>
    </div>
  </div>
</template>

<script>
import UTableItem from "./U-table-item";
export default {
  name: "U-table",
  components: {
    UTableItem,
  },
  created() {},
  data() {
    return {
      // Tr: true,
    };
  },
  props: {
    phones_data: {
      type: Array,
    },
  },
  methods: {
    checked() {
      // this.Tr = true;
      this.$emit("checked");
    },
    // showTr(data) {
    //   if (data) {
    //     this.Tr = true;
    //     return data;
    //   } else {
    //     this.Tr = false;
    //     return "";
    //   }
    // },
  },
};
</script>

<style>
.table-wrapper {
  /* display: flex;
  justify-content: space-between; */
  width: 100%;
  /* display: table;
table-layout:fixed; */
  line-height: 100%;
  display: flex;
  align-items: flex-end;
  /* gap: 5px; */
}

.table_titles {
  /* display: table-cell; */
  flex: 1;
}
.table_titles > div {
  padding: 0 5px;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #cdcfd2;
  /* display: table-row; */
  /* width: 172px; */
  /* color: #3b4157; */
}
.table_titles > div:nth-child(1) {
  /* display: table-row; */
  /* padding: 30px 0px; */
  display: flex;
  align-items: flex-end;
  height: 195px;
  padding-bottom: 50px;
  margin-top: 20px;
  justify-content: flex-start;
}
.table_titles:nth-child(1) > div {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: #a4a9b9;
  padding-right: 4px;
  padding-left: 0px;
}
.table_titles:nth-child(1) > div:nth-child(1) {
  display: flex;
  justify-content: flex-start;

  text-transform: none;
  font-weight: 400;
  font-size: 16px;
  color: #0d5adc;
}
.table_titles > div:nth-child(n + 2) {
  /* display: table-row; */
  /* padding: 30px 0px; */
  display: flex;
  align-items: center;
}
.table_titles__preview {
  display: inline-block;
  /* position: relative; */

  /* height: 205px; */
  /* display: flex;
  align-items: flex-end;
  justify-content: center; */
}
.select-png {
  /* position: absolute;
  right: 0;
  top: 50%; */
}
.table_titles__preview-data {
  /* width: 100%; */
}
.table_titles__preview__phone-img {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  /* display: table;
  margin: 0 auto; */
}
.table_titles__preview__phone-name {
  /* display: flex;
  justify-content: center; */
}
.table_titles__manufacturer {
}
.table_titles__release-year {
}
.table_titles__diagonal {
}
.table_titles__country-of-origin {
}
.table_titles__memory-capacity {
}
.table_titles__screen-refresh-rate {
}
.table_titles__nfc {
}
.table_titles__eSIM-support {
}
.table_titles__support-wireless-charging {
}
.table_titles__price {
}
.table_titles__preview__phone-img {
}
.table_titles__preview__phone-name {
}
</style>
