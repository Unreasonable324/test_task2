<template>
  <div class="U-main-wrapper">
    <div class="container">
      <UHeader></UHeader>
      <div class="header-comparsion">
        <div class="header-comparsion__title" >Смартфоны</div>
        <div class="header-comparsion__navigation">
          Отобразить товары:<span
            v-for="(qty) in quantity"
            :key="qty"
            @click="getQuantity(qty)"
          >
            {{ qty }}
          </span>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="table" style="width: 100%">
          <tr>
            <td valign="bottom">
              <input type="checkbox" name="" id="" />Показать различия
            </td>
            <td v-for="phone in PHONES" :key="phone.name">
              <div class="table_titles__preview-data">
                <div class="table_titles__preview__phone-img">
                  <img
                    :src="require('../assets/images/phonesImg/' + phone.image)"
                    alt="phoneImg"
                  />
                </div>
                <img src="../assets/images/chevron_small.png" alt="" class="select-png" />
                <div class="table_titles__preview__phone-name">{{ phone.name }}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>производитель</td>
            <td v-for="phone in PHONES" :key="phone.name">{{ phone.manufacturer }}</td>
          </tr>
          <tr>
            <td>год релиза</td>
            <td v-for="phone in PHONES" :key="phone.name">{{ phone.releaseYear }}</td>
          </tr>
          <tr>
            <td>Диагональ экрана (дюйм)</td>
            <td v-for="phone in PHONES" :key="phone.name">{{ phone.diagonal }}</td>
          </tr>
          <tr>
            <td>Страна-производитель</td>
            <td v-for="phone in PHONES" :key="phone.name">{{ phone.countryOfOrigin }}</td>
          </tr>
          <tr>
            <td>Объем памяти</td>
            <td v-for="phone in PHONES" :key="phone.name">{{ phone.memoryCapacity }}</td>
          </tr>
          <tr>
            <td>Частота обновления экрана</td>
            <td v-for="phone in PHONES" :key="phone.name">
              {{ phone.screenRefreshRate }}
            </td>
          </tr>
          <tr>
            <td>nfc</td>
            <td v-for="phone in PHONES" :key="phone.name">
              <img src="../assets/images/checked.png" alt="" v-if="phone.nfc" />
              <img src="../assets/images/noChecked.png" alt="" v-else />
            </td>
          </tr>
          <tr>
            <td>Поддержка eSIM</td>
            <td v-for="phone in PHONES" :key="phone.name">
              <img src="../assets/images/checked.png" alt="" v-if="phone.eSIMSupport" />
              <img src="../assets/images/noChecked.png" alt="" v-else />
            </td>
          </tr>
          <tr>
            <td>Поддержка беспроводной зарядки</td>
            <td v-for="phone in PHONES" :key="phone.name">
              <img
                src="../assets/images/checked.png"
                alt=""
                v-if="phone.supportWirelessCharging"
              />
              <img src="../assets/images/noChecked.png" alt="" v-else />
            </td>
          </tr>
          <tr>
            <td>стоимость</td>
            <td v-for="phone in PHONES" :key="phone.name">{{ phone.price }} ₽</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UHeader from "./U-header.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    UHeader,
  },
  name: "U-main-wrapper",
  created() {},
  data() {
    return {
      quantity: [2, 3, 4, 5, 6],
      remainsPhones: [],
      phoneVisible: [],
      visiblePhone: 3,
    };
  },
  props: {},
  computed: { ...mapGetters(["PHONES"]) },
  methods: {
    ...mapActions(["GET_PHONES_FROM_API"]),
    getQuantity(qty) {
      const spans = document.querySelectorAll(".header-comparsion__navigation span");
      spans.forEach(function (span) {
        span.style.textDecoration = "none";
      });
      spans[qty-2].style.textDecoration = "underline";
      let remainsPhonesLength = this.remainsPhones.length;
      while (remainsPhonesLength--) this.PHONES.push(this.remainsPhones.pop());
      this.visiblePhone = this.PHONES.length - qty;
      while (this.visiblePhone--) this.remainsPhones.push(this.PHONES.pop(qty));
    },
  },
  mounted() {
    this.GET_PHONES_FROM_API();
  },
};
</script>

<style>
.U-main-wrapper {
}

.header-comparsion {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.header-comparsion__title {
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 0.02em;
  color: #828286;
}
.header-comparsion__navigation {
  font-weight: 400;
  font-size: 18px;
  line-height: 60px;
  letter-spacing: 0.02em;
  color: #0d5adc;
  display: flex;
  gap: 5px;
}
.header-comparsion__navigation span {
  cursor: pointer;
}
.header-comparsion__navigation span:hover {
  text-decoration: underline;
}

.table-wrapper {
  /* display: flex; */
  padding-bottom: 90px;
}
.table {
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 10px;
  /* border-collapse: separate; */
}

.table tr {
  border-bottom: 1px solid #cdcfd2;
}
.table tr td {
  padding: 30px 10px;
}
.table tr:nth-child(1) td {
  padding: 77px 0;
}
.table tr td {
  font-weight: 500;
  font-size: 18px;
  color: #3b4157;
}
.table tr td:nth-child(1) {
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: #a4a9b9;
}
.table tr:nth-child(1) td:nth-child(1) {
  text-transform: none;
  font-size: 18px;
  font-weight: 400;
  /* line-height: 60px; */
  /* or 333% */

  letter-spacing: 0.02em;

  color: #0d5adc;
}
.table_titles__preview-data {
  /* display: inline-block; */

  position: relative;
}
.table_titles__preview__phone-img {
  display: table;
  margin: 0 auto;
}
.select-png {
  position: absolute;
  right: 0;
  top: 50%;
}
.table_titles__preview__phone-name {
  display: flex;
  justify-content: center;
}
</style>
