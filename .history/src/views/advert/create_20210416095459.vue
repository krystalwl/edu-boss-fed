=<template>
  <div class="advert-create">999</div>
</template>

<script lang="ts">
/* eslint-disable */

import Vue from "vue";
import { getAdById, saveOrUpdate } from "@/services/advert";
import advertImage from "./advertImage.vue";

export default Vue.extend({
  name: "advertCreate",
  components: {
    advertImage,
  },
  data() {
    return {
      info: {},
      form: {},
    };
  },
  created() {
    console.log(`this.$router.parmas`, this.$route.params);
    this.getInfo();
  },
  methods: {
    async onSubmit() {
      // 1. 表单验证
      // 2. 验证通过，提交表单
      const { data } = await saveOrUpdate(this.form);
      if (data.code === "000000") {
        this.$message.success("提交成功");
        this.$router.back();
      }
    },
    async getInfo() {
      if (this.$route.params && this.$route.params.id) {
        const res = await getAdById(this.$route.params.id);
        this.form = res.data;
        console.log(`res`, res);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
