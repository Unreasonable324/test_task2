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
            @click="showSearchPhone(phone_data.article)"
          />
          <UModalWindow v-if="showSearchPhoneModal">
            <div class="wrapper-slot" >
              <input
                type="text"
                placeholder="Поиск"
                v-model="inputStr"
                v-if="remainsPhones_data.length > 3"
              />

              <div
                class="wrapper-remains-phones"
                v-for="(item, index) of filteredMovies"
                :key="index"
              >
                <div class="wrapper-remains-phones__item">
                  <img
                    src="../assets/images/Vector.png"
                    alt=""
                    @click="replacementPhone(item)"
                  />
                  <div class="wrapper-remains-phones__item-image">
                    <img
                      :src="require('../assets/images/phonesImg/' + item.image)"
                      alt="phoneImg"
                    />
                  </div>
                  {{ item.name }}
                </div>
              </div>
            </div>
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
      showSearchPhoneModal: false,
      inputStr: "",
      article: "",
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
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    showSearchPhone(key) {
      this.article = key;
      // console.log(this.article);
      this.showSearchPhoneModal = !this.showSearchPhoneModal;
    },
    replacementPhone(item) {
      this.$emit("replacementPhone", item, this.article);
    },
   
  },

  computed: {
    filteredMovies() {
      if (this.inputStr) {
        let inputLowerCase = this.inputStr.toLowerCase();
        // console.log(inputLowerCase);
        return this.remainsPhones_data.filter((item) => {
          let itemNameLowerCase = item.name.toLowerCase();
          console.log(itemNameLowerCase);
          return itemNameLowerCase.includes(inputLowerCase);
        });
      }
      return this.remainsPhones_data;
    },
  },
  // mounted(){
  //   let vm = this
  //   document.addEventListener('click',function(item){
  //     if (item.target != vm.$refs['modal_wrapper']){
  //       console.log(123);
  //       vm.showSearchPhoneModal = false
  //     }
  //   })
  // }
};
</script>

<style>
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
