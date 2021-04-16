<template>
  <div class="advert-create">
    <el-form label-width="80px">
      <el-form-item label="广告名称">
        <el-input v-model="course.courseName"></el-input>
      </el-form-item>
    </el-form>
  </div>
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
      course: {},
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
      const { data } = await saveOrUpdate(this.course);
      if (data.code === "000000") {
        this.$message.success("提交成功");
        this.$router.back();
      }
    },
    async getInfo() {
      if (this.$route.params && this.$route.params.id) {
        const res = await getAdById(this.$route.params.id);
        this.course = res.data;
        console.log(`res`, res);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
