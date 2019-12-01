<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">

      <div class="createPost-main-container">
        <el-col :span="24">
          <el-form-item style="margin-bottom: 40px;" prop="name">
            <MDinput v-model="postForm.name" :maxlength="100" name="name" required>
              {{ $t('channel.name') }}
            </MDinput>
          </el-form-item>

          <div class="channelInfo-container">
            <el-form-item label-width="110px" style="margin-bottom: 20px;" prop="type" :label="$t('channel.type')">
              <el-select
                v-model="postForm.type"
                filterable
                default-first-option
                remote
                :placeholder="$t('channel.typePlaceholder')"
              >
                <el-option v-for="(item,index) in channelTypes" :key="index" :label="item.value" :value="item" />
              </el-select>
            </el-form-item>

            <el-row>
              <el-col :span="10">
                <el-form-item
                  label-width="110px"
                  style="margin-bottom: 20px;"
                  prop="appid"
                  :label="$t('channel.appid')"
                >
                  <el-input v-model="postForm.appid" :placeholder="$t('channel.appidPlaceholder')" />
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item
                  v-if="postForm.type === 1"
                  label-width="80px"
                  style="margin-bottom: 20px; width: 250px"
                  prop="agentid"
                  :label="$t('channel.agentid')"
                >
                  <el-input v-model="postForm.agentid" :placeholder="$t('channel.agentidPlaceholder')" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item
              label-width="110px"
              style="margin-bottom: 20px;"
              prop="appsecret"
              :label="$t('channel.appsecret')"
            >
              <el-input
                v-model="postForm.app_secret"
                style="width: 400px"
                :placeholder="$t('channel.appsecretPlaceholder')"
              />
            </el-form-item>
            <el-form-item
              label-width="110px"
              style="margin-bottom: 20px;"
              prop="app_secret"
              :label="$t('channel.encoding')"
            >
              <el-input
                v-model="postForm.encoding_aes"
                style="width: 200px"
                :placeholder="$t('channel.encodingPlaceholder')"
              />
            </el-form-item>
            <el-form-item
              label-width="110px"
              style="margin-bottom: 20px;"
              prop="token"
              :label="$t('channel.token')"
            >
              <el-input v-model="postForm.token" style="width: 200px" :placeholder="$t('channel.tokenPlaceholder')" />
            </el-form-item>
            <el-form-item
              label-width="110px"
              style="margin-bottom: 20px;"
              prop="encrypt_type"
              :label="$t('channel.encryptType')"
            >
              <el-radio-group v-model="postForm.encrypt_type">
                <el-radio :label="3">
                  {{ $t('channel.plaintext') }}
                </el-radio>
                <el-radio :label="6">
                  {{ $t('channel.compatibility') }}
                </el-radio>
                <el-radio :label="9">
                  {{ $t('channel.security') }}
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-col>
      </div>
    </el-form>
    <FooterButton :submit="onSubmit" :cancel="onCancel" />
  </div>
</template>

<script>
import MDinput from '@/components/MDinput'
import FooterButton from '@/components/FooterButton'
import { bindChannel } from '@/api/channel'

const channelInfo = {
  type: '',
  name: '', //  渠道名称
  appid: '', // 应用id
  agentid: '', // 子应用id
  app_secret: '', // 密钥
  token: '', // 令牌
  encoding_aes: '', // 消息加解密密钥
  encrypt_type: 0 // 加解密方式
}

export default {
  name: 'AddChannel',
  components: { FooterButton, MDinput },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + this.$t('message.required'),
          type: 'error'
        })
        callback(new Error(rule.field + this.$t('message.required')))
      } else {
        callback()
      }
    }

    return {
      channelTypes: [{ key: 0, value: '公众号' }, { key: 1, value: '小程序' }, { key: 2, value: '企业微信' }, { key: 3, value: '生活号' }],
      postForm: Object.assign({}, channelInfo),
      loading: false,
      rules: {
        appid: [{ validator: validateRequire }],
        app_secret: [{ validator: validateRequire }],
        token: [{ validator: validateRequire }],
        name: [{ validator: validateRequire }],
        encoding_aes: [{ validator: validateRequire }]
      }
    }
  },
  computed: {},
  created() {

  },
  methods: {
    async onSubmit() {
      await bindChannel(this.postForm)
    },

    onCancel() {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";

  .createPost-container {
    position: relative;

    .createPost-main-container {
      padding: 40px 45px 20px 50px;

      .channelInfo-container {
        position: relative;
        @include clearfix;
        margin-bottom: 10px;

        .channelInfo-container-item {
          float: left;
        }
      }
    }

    .word-counter {
      width: 40px;
      position: absolute;
      right: 10px;
      top: 0px;
    }
  }

  .article-textarea /deep/ {
    textarea {
      padding-right: 40px;
      resize: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #bfcbd9;
    }
  }
</style>
