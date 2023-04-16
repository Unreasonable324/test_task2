<template>
  <div class="U-main-wrapper">
    <div class="container">
      <UHeader></UHeader>
      <div class="header-comparsion">
        <div class="header-comparsion__title">Смартфоны</div>
        <div class="header-comparsion__navigation">
          Отобразить товары:<span
            v-for="qty in quantity"
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
              <input
                type="checkbox"
                id="checked"
                v-model="isChecked"
                @click="checked"
              /><label for="checked">Показать различия</label>
            </td>
            <td v-for="phone in phones" :key="phone.name">
              <div class="table_titles__preview-data">
                <div class="table_titles__preview__phone-img">
                  <img
                    :src="require('../assets/images/phonesImg/' + phone.image)"
                    alt="phoneImg"
                  />
                </div>
                <img
                  src="../assets/images/chevron_small.png"
                  @click="xxx = !xxx"
                  alt=""
                  class="select-png"
                /><UModalWindow v-if="xxx">
                  <div
                    class="wrapper-remains-phones"
                    v-for="remainPhone in remainsPhones"
                    :key="remainPhone.name"
                  >
                    <div class="wrapper-remains-phones__item">
                      <img src="../assets/images/Vector.png" alt="" />
                      <div class="wrapper-remains-phones__item-image">
                        <img
                          :src="
                            require('../assets/images/phonesImg/' + remainPhone.image)
                          "
                          alt="phoneImg"
                        />
                      </div>
                      {{ remainPhone.name }}
                    </div>
                  </div>
                </UModalWindow>
                <div class="table_titles__preview__phone-name">{{ phone.name }}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>производитель</td>
            <td v-for="phone in phones" :key="phone.name">{{ phone.manufacturer }}</td>
          </tr>
          <tr>
            <td>год релиза</td>
            <td v-for="phone in phones" :key="phone.name">{{ phone.releaseYear }}</td>
          </tr>
          <tr>
            <td>Диагональ экрана (дюйм)</td>
            <td v-for="phone in phones" :key="phone.name">{{ phone.diagonal }}</td>
          </tr>
          <tr v-if="Tr">
            <td>Страна-производитель</td>
            <td v-for="phone in phones" :key="phone.name">
              {{ showTr(phone.countryOfOrigin) }}
            </td>
          </tr>
          <tr v-if="Tr">
            <td>Объем памяти</td>
            <td v-for="phone in phones" :key="phone.name">
              {{ showTr(phone.memoryCapacity) }}
            </td>
          </tr>
          <tr>
            <td>Частота обновления экрана</td>
            <td v-for="phone in phones" :key="phone.name">
              {{ phone.screenRefreshRate }}
            </td>
          </tr>
          <tr>
            <td>nfc</td>
            <td v-for="phone in phones" :key="phone.name">
              <img src="../assets/images/checked.png" alt="" v-if="phone.nfc" />
              <img src="../assets/images/noChecked.png" alt="" v-else />
            </td>
          </tr>
          <tr>
            <td>Поддержка eSIM</td>
            <td v-for="phone in phones" :key="phone.name">
              <img src="../assets/images/checked.png" alt="" v-if="phone.eSIMSupport" />
              <img src="../assets/images/noChecked.png" alt="" v-else />
            </td>
          </tr>
          <tr>
            <td>Поддержка беспроводной зарядки</td>
            <td v-for="phone in phones" :key="phone.name">
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
            <td v-for="phone in phones" :key="phone.name">{{ phone.price }} ₽</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UModalWindow from "./U-modal-window";
import UHeader from "./U-header.vue";
// import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    UModalWindow,
    UHeader,
  },
  name: "U-main-wrapper",
  created() {},
  data() {
    return {
      phones: [
        {
          image: "Apple_iPhone_12.png",
          name: "Apple iPhone 12",
          manufacturer: "Apple",
          releaseYear: "2020",
          diagonal: "6,1",
          countryOfOrigin: "Китай",
          memoryCapacity: "128 Гб",
          screenRefreshRate: "60 Гц",
          nfc: false,
          eSIMSupport: false,
          supportWirelessCharging: false,
          price: 81990,
        },

        {
          image: "Xiaomi_Mi_11_Lite.png",
          name: "Xiaomi Mi 11 Lite ",
          manufacturer: "Xiaomi",
          releaseYear: "2021",
          diagonal: "6,55",
          countryOfOrigin: "Китай",
          memoryCapacity: "128 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: false,
          price: 27490,
        },
        {
          image: "Samsung_Galaxy_A72.png",
          name: "Samsung Galaxy A72",
          manufacturer: "Samsung",
          releaseYear: "2021",
          diagonal: "6,7",
          countryOfOrigin: "Вьетнам",
          memoryCapacity: "128 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: false,
          supportWirelessCharging: true,
          price: 32890,
        },
        {
          image: "Apple_iPhone_Xr.png",
          name: "iPhone XR",
          manufacturer: "Apple",
          releaseYear: "2018",
          diagonal: "6,1",
          countryOfOrigin: "Китай",
          memoryCapacity: "256 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: true,
          price: 65990,
        },
        {
          image: "Samsung_Galaxy_S21.png",
          name: "Samsung Galaxy S21",
          manufacturer: "Samsung",
          releaseYear: "2021",
          diagonal: "6,2",
          countryOfOrigin: "Вьетнам",
          memoryCapacity: "256 Гб",
          screenRefreshRate: "90 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: true,
          price: 65990,
        },
        {
          image: "Realme_8_Pro.png",
          name: "Realme 8 Pro",
          manufacturer: "Realme",
          releaseYear: "2021",
          diagonal: "6,51",
          countryOfOrigin: "Китай",
          memoryCapacity: "256 Гб",
          screenRefreshRate: "60 Гц",
          nfc: true,
          eSIMSupport: true,
          supportWirelessCharging: true,
          price: 27990,
        },
      ],
      clonePhones: [],
      quantity: [2, 3, 4, 5, 6],
      remainsPhones: [],
      visiblePhone: 3,
      isChecked: false,
      xxx: false,
      Tr: true,
      showTr: function (data) {
        if (data) {
          this.Tr = true;
          return data;
        } else {
          this.Tr = false;
          return "";
        }
      },
    };
  },
  props: {},
  methods: {
    getQuantity(qty) {
      const spans = document.querySelectorAll(".header-comparsion__navigation span");
      spans.forEach(function (span) {
        span.style.textDecoration = "none";
      });
      spans[qty - 2].style.textDecoration = "underline";
      this.visiblePhone = qty;
      if (this.isChecked != false) {
        this.checked();
        this.isChecked = false;
      }

      this.getPhonesVisible();
    },
    getPhonesVisible() {
      let remainsPhonesLength = this.remainsPhones.length;
      while (remainsPhonesLength--) this.phones.push(this.remainsPhones.pop());
      this.visiblePhone = this.phones.length - this.visiblePhone;
      while (this.visiblePhone--) this.remainsPhones.push(this.phones.pop());
    },
    checked() {
      this.Tr = true;
      if (this.clonePhones.length != this.phones.length) {
        this.clonePhones = structuredClone(this.phones);
        console.log("спопировал");
      } else {
        this.phones = structuredClone(this.clonePhones);
      }

      if (this.isChecked === !true) {
        Object.entries(this.phones[0]).forEach(([key, value]) => {
          const isSameValuse = this.phones.every((phone) => phone[key] === value);
          console.log(isSameValuse);
          if (isSameValuse) {
            this.phones.forEach((phone) => delete phone[key]);
          }
        });
      }
    },
  },
  mounted() {
    this.getPhonesVisible();
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
.header-comparsion__navigation span:nth-of-type(2) {
  text-decoration: underline;
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
.wrapper-remains-phones {
  box-sizing: border-box;
  height: 50px;
}
.wrapper-remains-phones__item {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
}
.wrapper-remains-phones__item-image {
  height: 100%;
}
.wrapper-remains-phones__item-image img {
  height: 100%;
}
</style>
