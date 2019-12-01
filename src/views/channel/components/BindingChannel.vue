<template>
  <div class="bindingChannel-container">
    <el-card class="bind-card " :body-style="{ padding: '10px' }" shadow="hover">
      <div style="padding-top: 50px;" class="align-vertical">
        <svg-icon icon-class="plus" class="bind-icon" />
        <router-link class="bind-btn pan-btn light-blue-btn" to="/channel/add">
          {{ $t('channel.add') }}
        </router-link>
        <router-link class="bind-btn pan-btn pink-btn" to="http://www.baidu.com/">
          {{ $t('channel.thirdBind') }}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'BindingChannel',
  props: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  created() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(id)
    }

    // Why need to make a copy of this.$route here?
    // Because if you enter this page and quickly switch tag, may be in the execution of the setTagsViewTitle function, this.$route is no longer pointing to the current page
    // https://github.com/PanJiaChen/vue-element-admin/issues/1221
    this.tempRoute = Object.assign({}, this.$route)
  },
  methods: {
    onBind() {

    },

    onThirdBind() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.bindingChannel-container {
  .bind-card {
    background: #fff;
    width: 267px;
    height: 300px;
    float: left;
    margin: 0 15px 15px 0;
    -webkit-box-shadow: 0 0 8px 0 hsla(0,0%,78%,.5);
    box-shadow: 0 0 8px 0 hsla(0,0%,78%,.5);
    border-radius: 4px;
    border: 1px solid #fff;
    padding: 20px;
    cursor: pointer;
    text-align: center;
  }

  .align-vertical{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }

  .bind-icon {
    color: rgba(140, 147, 157, 0.29);
    width: 60px;
    height: 60px;
  }

  .bind-btn {
    margin-top: 15px;
    width: 140px;
    height: 20px;
    line-height: 5px;
    text-align-all: center;
    font-size: x-small;
  }
}

</style>
