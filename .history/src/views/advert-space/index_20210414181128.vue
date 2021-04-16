<template>
  <div class="advert-space">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button @click="$router.push({ name: 'advert-create' })">
          添加广告位
        </el-button>
        <el-table :data="menus" style="width: 100%">
          <el-table-column
            prop="id"
            label="spaceKey"
            min-width="150"
            type="index"
          />
          <el-table-column prop="name" label="广告位名称" min-width="150" />
          <el-table-column prop="level" label="创建时间" min-width="150" />
          <el-table-column prop="icon" label="更新时间" min-width="150" />
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
import Vue from "vue";

export default Vue.extend({
  name: "AdvertSpaceIndex",
});
</script>

<style lang="scss" scoped></style>
