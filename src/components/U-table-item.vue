<template>
    <div class="table_titles" >
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
              @click="showSearchPhone"
            />
          </div>
          <div class="table_titles__preview__phone-name">{{ phone_data.name }}</div>
        </div>
      </div>
      <div class="table_titles__manufacturer">{{ phone_data.manufacturer }}</div>
      <div class="table_titles__release-year">{{ phone_data.releaseYear }}</div>
      <div class="table_titles__diagonal">{{ phone_data.diagonal }}</div>
      <div class="table_titles__country-of-origin">
        {{ phone_data.countryOfOrigin }}
      </div>
      <div class="table_titles__memory-capacity" >
        {{ phone_data.memoryCapacity }}
      </div>
      <div class="table_titles__screen-refresh-rate">
        {{ phone_data.screenRefreshRate }}
      </div>
      <div class="table_titles__nfc">
        <img src="../assets/images/checked.png" alt="" v-if="phone_data.nfc" />
        <img src="../assets/images/noChecked.png" alt="" v-else />
      </div>
      <div class="table_titles__eSIM-support">
        <img src="../assets/images/checked.png" alt="" v-if="phone_data.eSIMSupport" />
        <img src="../assets/images/noChecked.png" alt="" v-else />
      </div>
      <div class="table_titles__support-wireless-charging">
        <img
          src="../assets/images/checked.png"
          alt=""
          v-if="phone_data.supportWirelessCharging"
        />
        <img src="../assets/images/noChecked.png" alt="" v-else />
      </div>
      <div class="table_titles__price">{{ phone_data.price }} ₽</div>
    </div>
</template>

<script>
export default {
  name: "U-table-item",
  created() {},
  data() {
    return {};
  },
  props: {
    phone_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style >

</style>
