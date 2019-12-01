<template>
  <div class="components-container">
    <aside>
      <el-select v-model="selectChannel" style="width:200px;">
        <el-option
          v-for="channel in channels"
          :key="channel.app"
          :label="channel.name"
          :value="channel.app"
        />
      </el-select>
      <el-input v-model="keyword" :placeholder="$t('media.placeholder')" style="width:300px;" icon="el-icon-search" />

      <el-button
        :style="{background:color,borderColor:color,float:'right'}"
        type="primary"
        @click="downloadMedia"
      >
        <svg-icon class-name="download-icon" icon-class="download" />
        {{ $t('media.sync') }}
      </el-button>
    </aside>
    <split-pane split="vertical" @resize="resize">
      <template slot="paneL">
        <div class="left-container" />
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container" />
          </template>
          <template slot="paneR">
            <div class="bottom-container" />
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from 'vue-splitpane'

export default {
  name: 'Media',
  components: { splitPane },
  data() {
    return {
      selectChannel: '',
      channels: [{ app: 'wx123', name: '九点钟' }],
      keyword: ''
    }
  },
  methods: {
    resize() {
      console.log('resize')
    },

    downloadMedia() {

    }
  }
}
</script>

<style scoped>
  .components-container {
    position: relative;
    height: 100vh;
  }

  .left-container {
    background-color: #F38181;
    height: 100%;
  }

  .right-container {
    background-color: #FCE38A;
    height: 200px;
  }

  .top-container {
    background-color: #FCE38A;
    width: 100%;
    height: 100%;
  }

  .bottom-container {
    width: 100%;
    background-color: #95E1D3;
    height: 100%;
  }
</style>
