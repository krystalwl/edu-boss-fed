<template>
  <div class="advert-create">
    <el-form label-width="80px">
      <el-form-item label="广告名称">
        <el-input v-model="course.name"></el-input>
      </el-form-item>
      <el-form-item label="广告位置">
        <el-input v-model="course.position"></el-input>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker
          v-model="course.startTimeFormatString"
          type="date"
          placeholder="选择日期时间"
          value-format="yyyy-MM-dd"
        />
      </el-form-item>
      <el-form-item label="到期时间">
        <el-date-picker
          v-model="course.endTimeFormatString"
          type="date"
          placeholder="选择日期时间"
          value-format="yyyy-MM-dd"
        />
      </el-form-item>

      <el-form-item label="课程封面">
        <!--
            upload 上传文件组件，它支持自动上传，你只需要把上传需要参数配置一下就可以了
            -->
        <!--
            1. 组件需要根据绑定的数据进行图片预览
            2. 组件需要把上传成功的图片地址同步到绑定的数据中
            v-model 的本质还是父子组件通信
              1. 它会给子组件传递一个名字叫 value 的数据（Props）
              2. 默认监听 input 事件，修改绑定的数据（自定义事件）
            -->
        <course-image v-model="course.img" :limit="5" />
      </el-form-item>
      <el-form-item label="广告链接">
        <el-input
          v-model="course.link"
          type="textarea"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="广告备注">
        <el-input
          v-model="course.text"
          type="textarea"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import Vue from "vue";
import { getAdById, saveOrUpdate } from "@/services/advert";
import CourseImage from "../course/components/CourseImage.vue";

export default Vue.extend({
  name: "advertCreate",
  components: {
    CourseImage,
  },
  data() {
    return {
      course: {
        name: "",
        id: "",
        text: "",
        img: "",
        link: "",
        startTimeFormatString: "",
        endTimeFormatString: "",
      },
    };
  },
  created() {
    console.log(`this.$router.parmas`, this.$route.params);
    if (this.$route.params?.type === "edit") {
      this.getInfo();
      // this.course = this.$route.params?.info;
    }

    console.log(`this.course`, this.course);
  },
  methods: {
    async onSubmit() {
      // 1. 表单验证
      // 2. 验证通过，提交表单
      const form = { ...this.course };
      const res = await saveOrUpdate({ promotionAdDTO: form });
      console.log(`res1111`, res, form);
      if (res.data.code === "000000") {
        this.$message.success("提交成功");
        this.$router.back();
      }
    },
    async getInfo() {
      if (this.$route.params && this.$route.params.id) {
        const res = await getAdById({ id: this.$route.params.id });
        this.course = res.data.content;
        console.log(`res.data.content`, res.data.content);
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
