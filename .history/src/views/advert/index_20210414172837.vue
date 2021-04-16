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
          <el-table-column prop="icon" label="广告图片" min-width="150" />
          <el-table-column prop="orderNum" label="时间" min-width="150" />
          <el-table-column prop="orderNum" label="上线/下线" min-width="150">
            <template>
              <el-switch
                style="display: block"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费"
              >
              </el-switch>
            </template>
          </el-table-column>

          <el-table-column label="操作" min-width="150">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">
                编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
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
