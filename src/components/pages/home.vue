<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <!-- <h1>HOME</h1> -->
    <!-- <h1>{{ loading }}</h1> -->
    <!-- <h1>{{ failure }}</h1> -->
    <!-- {{headLineList}} -->
    <!-- {{headDetails}} -->
    <!-- {{ headDetailStatus }} -->
    <mu-container>
      <mu-row gutter>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input v-model="value1" label="选择日期" label-float full-width></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>
        </mu-col>
        <mu-col span="12" lg="4" sm="6">
          <mu-date-input v-model="value3" label="隐藏日期展示" label-float full-width no-display></mu-date-input>
        </mu-col>
      </mu-row>
  </mu-container>
  
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CONST_REQUEST from '../../constants/request'
export default {
  data () {
    return {
      CONST_REQUEST,
      value1: undefined,
      value2: undefined,
      value3: undefined
    }
  },
  computed: {
    ...mapGetters('home', ['headLineList', 'headLineListStatus', 'headDetails', 'headDetailStatus']),
    loading () {
      return this.headDetailStatus.code === CONST_REQUEST.LOADING
    },
    failure () {
      return this.headDetailStatus.code === CONST_REQUEST.FAILURE
    },
    failureMsg () {
      return this.headDetailStatus.msg
    }
  },
  methods: {
    ...mapActions('home', ['getquery', 'getHeadDetail'])
  },
  mounted () {
    window.xxx = this
    document.cookie = 'token=;path=/'
    // this.getquery({ channelId: 99, pageSize: 10 })
    this.getHeadDetail({ id: 75 })
  }
}
</script>
