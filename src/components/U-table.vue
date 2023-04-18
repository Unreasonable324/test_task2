<template>
  <div class="U-table">
    <div class="table-wrapper">
      <div class="table_titles">
        <div class="table_titles__preview">
          <slot></slot>
        </div>
        <div class="table_titles__manufacturer" v-if="isVivsibleTitles(this,'manufacturer')">
          производитель
        </div>

        <div class="table_titles__release-year" v-if="isVivsibleTitles(this,'releaseYear')">год релиза </div>

        <div class="table_titles__diagonal" v-if="isVivsibleTitles(this, 'diagonal')">
          Диагональ экрана (дюйм)
        </div>
        <div class="table_titles__country-of-origin" v-if="isVivsibleTitles(this,'countryOfOrigin')">
          Страна-производитель
        </div>
        <div class="table_titles__memory-capacity" v-if="isVivsibleTitles(this,'memoryCapacity')">
          Объем памяти
        </div>
        <div class="table_titles__screen-refresh-rate" v-if="isVivsibleTitles(this,'screenRefreshRate')">
          Частота обновления экрана
        </div>
        <div class="table_titles__nfc" v-if="isVivsibleTitles(this,'nfc')">nfc</div>
        <div class="table_titles__eSIM-support" v-if="isVivsibleTitles(this,'eSIMSupport')">
          Поддержка eSIM
        </div>
        <div
          class="table_titles__support-wireless-charging"
          v-if="isVivsibleTitles(this,'supportWirelessCharging')"
        >
          Поддержка беспроводной зарядки
        </div>
        <div class="table_titles__price" v-if="isVivsibleTitles(this,'price')">стоимость</div>
      </div>
      <UTableItem
        :phone_data="phone_data"
        :remainsPhones_data="remainsPhones_data"
        v-for="phone_data in phones_data"
        :key="phone_data.article"
        @replacementPhone="replacementPhone"
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
      isVivsibleTitles: function (self, key) {
        console.log(self.phones_data)
        for (let phone_data of self.phones_data) {
          if (phone_data[key] === "duplicate") {
            return false
          }
        }
        return true
      },
    };
  },
  props: {
    phones_data: {
      type: Array,
    },
    remainsPhones_data: {
      type: Array,
    },
  },
  methods: {
    replacementPhone(item, article) {
      this.$emit("replacementPhone", item, article);
    },
   
  },
  computed: {
    //   manufacturerVisible() {
    //     return this.phones_data.some(({ manufacturer }) => manufacturer !== "duplicate");
    //   },
    //   releaseYearVisible() {
    //     return this.phones_data.some(({ releaseYear }) => releaseYear !== "duplicate");
    //   },
    //   diagonalVisible() {
    //     return this.phones_data.some(({ diagonal }) => diagonal !== "duplicate");
    //   },
    //   countryOfOriginVisible() {
    //     return this.phones_data.some(
    //       ({ countryOfOrigin }) => countryOfOrigin !== "duplicate"
    //     );
    //   },
    //   memoryCapacityVisible() {
    //     return this.phones_data.some(({ memoryCapacity }) => memoryCapacity !== "duplicate");
    //   },
    //   screenRefreshRateVisible() {
    //     return this.phones_data.some(
    //       ({ screenRefreshRate }) => screenRefreshRate !== "duplicate"
    //     );
    //   },
    //   nfcVisible() {
    //     return this.phones_data.some(({ nfc }) => nfc !== "duplicate");
    //   },
    //   eSIMSupportVisible() {
    //     return this.phones_data.some(({ eSIMSupport }) => eSIMSupport !== "duplicate");
    //   },
    //   supportWirelessChargingVisible() {
    //     return this.phones_data.some(
    //       ({ supportWirelessCharging }) => supportWirelessCharging !== "duplicate"
    //     );
    //   },
    //   priceVisible() {
    //     return this.phones_data.some(({ price }) => price !== "duplicate");
    //   },
    // },
  }
};
</script>

<style>
.table-wrapper {

  width: 100%;
  line-height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 90px;
  position: relative;
}
.table-wrapper::before {
  content: "";
  width: 99vw;
  height: calc(100% - 213px);
  background: #f4f9fc;
  position: absolute;
  z-index: -1;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0px;
}

.table_titles {
  flex: 1;
}
.table_titles > div {
  padding: 0 5px;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #cdcfd2;
}
.table_titles > div:nth-child(1) {
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
  display: flex;
  align-items: center;
}

.table_titles__preview {
  display: inline-block;
  position: relative;
}
</style>
