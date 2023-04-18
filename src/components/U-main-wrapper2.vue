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
      <UTable
        :phones_data="phones"
        :remainsPhones_data="remainsPhones"
        @replacementPhone="replacementPhone"
        ><input type="checkbox" id="checked" @click="checked" v-model="isChecked" /><label
          for="checked"
          >Показать различия</label
        ></UTable
      >
    </div>
  </div>
</template>

<script>
import UTable from "./U-table";
import UHeader from "./U-header.vue";

export default {
  name: "U-main-wrapper2",
  components: {
    UTable,
    UHeader,
  },
  created() {},
  data() {
    return {
      quantity: [2, 3, 4, 5, 6],
      remainsPhones: [],
      visiblePhone: 3,
      clonePhones: [],
      isChecked: false,
      index: "",

      phones: [
        {
          article: 1,
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
          article: 2,
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
          article: 3,
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
          article: 4,
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
          article: 5,
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
          article: 6,
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
      if (this.clonePhones.length != this.phones.length) {
        this.clonePhones = structuredClone(this.phones);
      } else {
        this.phones = structuredClone(this.clonePhones);
      }

      if (this.isChecked === false) {
        Object.entries(this.phones[0]).forEach(([key, value]) => {
          const isSameValuse = this.phones.every((phone) => phone[key] === value);
          if (isSameValuse) {
            this.phones.forEach((phone) => (phone[key] = "duplicate"));
          }
        });
      }
    },
    replacementPhone(item, article) {
      if (this.isChecked != false) {
        this.checked();
        this.isChecked = false;
      }
      let itemArticle = item.article;
      for (var i = this.phones.length - 1; i >= 0; --i) {
        if (this.phones[i].article == article) {
          this.index = this.phones.indexOf(this.phones[i]);
          this.remainsPhones.push(this.phones[i]);
          this.phones.splice(i, 1);
        }
      }
      for (var z = this.remainsPhones.length - 1; z >= 0; --z) {
        if (this.remainsPhones[z].article == itemArticle) {
          this.phones.splice(this.index, 0, this.remainsPhones[z]);
          this.remainsPhones.splice(z, 1);
        }
      }
      this.clonePhones = structuredClone(this.phones);

    },
  },
  mounted() {
    this.getPhonesVisible();
  },
};
</script>

<style>
.U-main-wrapper {
  overflow: hidden;
  position: relative;
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
</style>
