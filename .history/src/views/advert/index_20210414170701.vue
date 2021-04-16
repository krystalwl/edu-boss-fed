<template>
  <div class="advert">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({ name: 'menu-create' })">
          添加广告
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AdvertIndex",
});
</script>

<style lang="scss" scoped></style>
