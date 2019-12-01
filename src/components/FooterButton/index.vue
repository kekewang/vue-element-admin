<template>
  <div class="footer-button-container">
    <div>
      <el-button type="warning" @click="cancel">
        取消
      </el-button>
      <el-button type="primary" @click="submit">
        保存
      </el-button>
    </div>
  </div>

</template>
<script>

export default {
  name: 'FooterButton',
  props: {},
  data() {
    return {

    }
  },
  methods: {
    submit() {
      this.$emit('submit')
    },

    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer-button-container {
    height: 90px;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column
  }
</style>
