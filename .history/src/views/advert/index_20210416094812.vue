<template>
  <div class="advert">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({ name: 'menu-create' })">
          添加广告
        </el-button>
        <el-table :data="menus" style="width: 100%">
          <el-table-column prop="id" label="id" min-width="150" type="index" />
          <el-table-column prop="name" label="广告名称" min-width="150" />
          <el-table-column prop="level" label="广告位置" min-width="150" />
          <el-table-column prop="icon" label="广告图片" min-width="150">
            <template slot-scope="scope">
              <img :src="scope.row.img" class="advert_img" />
            </template>
          </el-table-column>
          <el-table-column prop="orderNum" label="时间" min-width="150">
            <template slot-scope="scope">
              <div>
                <el-row>
                  <el-col :span="4">开始时间</el-col>
                  <el-col :span="10">{{
                    scope.row.startTimeFormatString
                  }}</el-col>
                </el-row>
                <el-row>
                  <el-col :span="4">到期时间</el-col>
                  <el-col :span="10">{{
                    scope.row.endTimeFormatString
                  }}</el-col>
                </el-row>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="orderNum" label="上线/下线" min-width="150">
            <template slot-scope="scope">
              <!-- <el-switch
                style="display: block"
                v-model="scope.row.status"
                active-color="#40586f"
                inactive-color="#dcdfe6"
                change="onChangeStatus()"
              ></el-switch> -->
              <el-switch
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#ff4949"
                :active-value="1"
                :inactive-value="0"
                :disabled="scope.row.isStatusLoading"
                @change="onStateChange(scope.row)"
              />
            </template>
          </el-table-column>

          <el-table-column label="操作" min-width="150">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import Vue from "vue";
import { getAdevrtList, updateStatus } from "@/services/advert";

export default Vue.extend({
  name: "AdvertIndex",
  data() {
    return {
      menus: [],
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    async getDataList() {
      const { data } = await getAdevrtList();
      if (data) this.menus = data.content;
      console.log(`data`, data.content, this.menus);
    },
    async onStateChange(course: any) {
      course.isStatusLoading = true;
      const { data } = await updateStatus({
        courseId: course.id,
        status: course.status,
      });
      this.$message.success(`${course.status === 0 ? "下架" : "上架"}成功`);
      course.isStatusLoading = false;
    },
    handleEdit(row: any) {
      console.log(`row`, row);
      this.$router.push({
        name: "advert-create",
        params: { id: row.id, type: "edit" },
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.advert {
  .advert_img {
    width: 100px;
    height: 80px;
  }
}
</style>
