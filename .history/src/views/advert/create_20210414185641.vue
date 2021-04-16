<template>
  <div class="advert-crate">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ isEdit ? "编辑广告" : "添加广告" }}</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="广告名称：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="广告位置：">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
        <el-form-item label="开始时间：">
          <el-input v-model="form.startTimeFormatString"></el-input>
        </el-form-item>
        <el-form-item label="到期时间：">
          <el-input v-model="form.endTimeFormatString"></el-input>
        </el-form-item>
        <el-form-item label="上线/下线">
          <el-radio-group v-model="form.status">
            <el-radio :label="1">上线</el-radio>
            <el-radio :label="0">下线</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="广告图片">
          <img :src="form.img" />
        </el-form-item>
        <el-form-item label="广告链接：">
          <el-input v-model="form.icon"></el-input>
        </el-form-item>
        <el-form-item label="广告备注：">
          <el-input v-model="form.icon"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button v-if="!isEdit">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import Vue from "vue";
import { getAdById, saveOrUpdate } from "@/services/advert";

export default Vue.extend({
  data() {
    return {
      info: {},
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
