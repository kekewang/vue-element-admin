<template>
  <div class="app-container">

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: { },
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
