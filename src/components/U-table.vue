<template>
  <div class="U-table">
    {{}}
    <div class="table-wrapper">
      <div class="table_titles">
        <div class="table_titles__preview">
          <slot></slot>
        </div>
        <div class="table_titles__manufacturer" v-if="manufacturerVisible">
          производитель
        </div>
        <div class="table_titles__release-year" v-if="releaseYearVisible">год релиза</div>
        <div class="table_titles__diagonal" v-if="diagonalVisible">
          Диагональ экрана (дюйм)
        </div>
        <div class="table_titles__country-of-origin" v-if="countryOfOriginVisible">
          Страна-производитель
        </div>
        <div class="table_titles__memory-capacity" v-if="memoryCapacityVisible">
          Объем памяти
        </div>
        <div class="table_titles__screen-refresh-rate" v-if="screenRefreshRateVisible">
          Частота обновления экрана
        </div>
        <div class="table_titles__nfc" v-if="nfcVisible">nfc</div>
        <div class="table_titles__eSIM-support" v-if="eSIMSupportVisible">
          Поддержка eSIM
        </div>
        <div
          class="table_titles__support-wireless-charging"
          v-if="supportWirelessChargingVisible"
        >
          Поддержка беспроводной зарядки
        </div>
        <div class="table_titles__price" v-if="priceVisible">стоимость</div>
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
  props: {
    phones_data: {
      type: Array,
    },
    remainsPhones_data: {
      type: Array,
    },
  },
  methods: {
    // checked() {
    //   // this.Tr = true;
    //   this.$emit("checked");
    // },
    replacementPhone(item, article) {
      this.$emit("replacementPhone", item, article);
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
  computed: {
    manufacturerVisible() {
      return this.phones_data.some(({ manufacturer }) => manufacturer != "duplicate");
    },
    releaseYearVisible() {
      return this.phones_data.some(({ releaseYear }) => releaseYear != "duplicate");
    },
    diagonalVisible() {
      return this.phones_data.some(({ diagonal }) => diagonal != "duplicate");
    },
    countryOfOriginVisible() {
      return this.phones_data.some(
        ({ countryOfOrigin }) => countryOfOrigin != "duplicate"
      );
    },
    memoryCapacityVisible() {
      return this.phones_data.some(({ memoryCapacity }) => memoryCapacity != "duplicate");
    },
    screenRefreshRateVisible() {
      return this.phones_data.some(
        ({ screenRefreshRate }) => screenRefreshRate != "duplicate"
      );
    },
    nfcVisible() {
      return this.phones_data.some(({ nfc }) => nfc != "duplicate");
    },
    eSIMSupportVisible() {
      return this.phones_data.some(({ eSIMSupport }) => eSIMSupport != "duplicate");
    },
    supportWirelessChargingVisible() {
      return this.phones_data.some(
        ({ supportWirelessCharging }) => supportWirelessCharging != "duplicate"
      );
    },
    priceVisible() {
      return this.phones_data.some(({ price }) => price != "duplicate");
    },
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
  padding-bottom: 90px;
  position: relative;

  /* gap: 5px; */
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
  /* right: 0; */
  bottom: 0px;
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
  position: relative;

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
