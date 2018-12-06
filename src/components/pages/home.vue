<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <h1>HOME</h1>
    {{headLineList}}
    {{headDetails}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('home', ['headLineList', 'headLineListStatus', 'headDetails', 'headDetailStatus'])
  },
  methods: {
    ...mapActions('home', ['getquery', 'getHeadDetail'])
  },
  mounted () {
    window.xxx = this
    this.getquery({ channelId: 99, pageSize: 10 })
    this.getHeadDetail({ id: 75 })
  }
}
</script>
