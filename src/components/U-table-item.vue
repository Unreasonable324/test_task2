<template>
  <div class="table_titles">
    <div class="table_titles__preview">
      <div class="table_titles__preview-data">
        <div class="table_titles__preview__phone-img">
          <img
            :src="require('../assets/images/phonesImg/' + phone_data.image)"
            alt="phoneImg"
          />
          <img
            src="../assets/images/chevron_small.png"
            alt=""
            class="select-png"
            v-if="remainsPhones_data.length"
            :style="styleSelect"
            @click="showSearchPhone(phone_data.article)"
          />
          <UModalWindow
            v-if="isShowSearchPhoneModal"
            :remainsPhones_data="remainsPhones_data"
            @replacementPhone="replacementPhone"
          >
          </UModalWindow>
        </div>
        <div class="table_titles__preview__phone-name">{{ phone_data.name }}</div>
      </div>
    </div>
    <div class="table_titles__manufacturer" v-if="phone_data.manufacturer != 'duplicate'">
      {{ phone_data.manufacturer }}
    </div>
    <div class="table_titles__release-year" v-if="phone_data.releaseYear != 'duplicate'">
      {{ phone_data.releaseYear }}
    </div>
    <div class="table_titles__diagonal" v-if="phone_data.diagonal != 'duplicate'">
      {{ phone_data.diagonal }}
    </div>
    <div
      class="table_titles__country-of-origin"
      v-if="phone_data.countryOfOrigin != 'duplicate'"
    >
      {{ phone_data.countryOfOrigin }}
    </div>
    <div
      class="table_titles__memory-capacity"
      v-if="phone_data.memoryCapacity != 'duplicate'"
    >
      {{ phone_data.memoryCapacity }}
    </div>
    <div
      class="table_titles__screen-refresh-rate"
      v-if="phone_data.screenRefreshRate != 'duplicate'"
    >
      {{ phone_data.screenRefreshRate }}
    </div>
    <div class="table_titles__nfc" v-if="phone_data.nfc != 'duplicate'">
      <img src="../assets/images/checked.png" alt="" v-if="phone_data.nfc" />
      <img src="../assets/images/noChecked.png" alt="" v-else />
    </div>
    <div class="table_titles__eSIM-support" v-if="phone_data.eSIMSupport != 'duplicate'">
      <img src="../assets/images/checked.png" alt="" v-if="phone_data.eSIMSupport" />
      <img src="../assets/images/noChecked.png" alt="" v-else />
    </div>
    <div
      class="table_titles__support-wireless-charging"
      v-if="phone_data.supportWirelessCharging != 'duplicate'"
    >
      <img
        src="../assets/images/checked.png"
        alt=""
        v-if="phone_data.supportWirelessCharging"
      />
      <img src="../assets/images/noChecked.png" alt="" v-else />
    </div>
    <div class="table_titles__price" v-if="phone_data.price != 'duplicate'">
      {{ phone_data.price }} ₽
    </div>
  </div>
</template>

<script>
import UModalWindow from "./U-modal-window";

export default {
  name: "U-table-item",
  components: {
    UModalWindow,
  },
  created() {},
  data() {
    return {
      isShowSearchPhoneModal: false,
      styleSelect: "",
    };
  },
  props: {
    phone_data: {
      type: Object,
      default() {
        return {};
      },
    },
    remainsPhones_data: {
      type: Array,
    },
  },
  methods: {
    showSearchPhone(key) {
      this.article = key;
   
      this.isShowSearchPhoneModal = !this.isShowSearchPhoneModal;
      
      if (this.isShowSearchPhoneModal === true) {
        this.styleSelect = "transform: rotate(180deg);";
      } else {
        this.styleSelect = "";
      }
    },
    replacementPhone(item) {
      this.$emit("replacementPhone", item, this.article);
    },
  },
  
};
</script>

<style>

.table_titles__preview__phone-img {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.select-png {
  transition: all 0.3s ease;
}
</style>
