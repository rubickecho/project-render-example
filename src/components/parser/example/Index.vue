<template>
  <div class="test-form">
    <parser :form-conf="formConf" @submit="sumbitForm2" />
  </div>
  <!-- <lwc-padding :top="20" :right="20" :bottom="20" :left="20">
    <parser :form-conf="formConf" @submit="sumbitForm1" />
  </lwc-padding> -->
</template>

<script>
import Parser from '../Parser'

// 若parser是通过安装npm方式集成到项目中的，使用此行引入
// import Parser from 'form-gen-parser'

import allData from './mock/test.js';
export default {
  components: {
    Parser
  },
  props: {},
  data() {
    return {
	  formConf: allData
	}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    sumbitForm1(data) {
      console.log('sumbitForm1提交数据：', data)
    },
    sumbitForm2(data) {
      console.log('sumbitForm2提交数据：', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.test-form {
  margin: 15px auto;
  width: 800px;
  padding: 15px;
}
</style>
