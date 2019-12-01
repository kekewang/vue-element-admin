<template>
  <div class="app-container">
    <BindingChannel></BindingChannel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BindingChannel from './components/BindingChannel'

export default {
  name: 'Profile',
  components: { BindingChannel },
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  methods: {
  }
}
</script>
