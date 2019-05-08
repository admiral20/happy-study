<template>
  <div class="about">
    <h1>S3</h1>
    <img v-lazy="src1">
    <img v-lazy="src2">
    <img v-lazy="src3">
    <img v-lazy="src4">
    <img v-lazy="src1">
    <img v-lazy="src2">
    <img v-lazy="src3">
    <img v-lazy="src4">
    <img v-lazy="src1">
    <img v-lazy="src2">
    <img v-lazy="src3">
    <img v-lazy="src4">
    <img v-lazy="src1">
    <img v-lazy="src2">
    <img v-lazy="src3">
    <img v-lazy="src4">
    <img v-lazy="src1">
    <img v-lazy="src2">
    <img v-lazy="src3">
    <img v-lazy="src4">
  </div>
</template>
<script>
export default {
  data () {
    return {
      src1: 'https://user-gold-cdn.xitu.io/2018/7/27/164db1a2e089c151?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
      src2: 'https://upload.jianshu.io/users/upload_avatars/726021/5b5057b9-0a41-4c07-a206-7bd353f67d23.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
      src3: 'https://gitlab.sinochem.cloud/uploads/-/system/project/avatar/98/backyard.jpeg',
      src4: '../../../static/images/4.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
    img {
        display: inline-block;
        width: 100%;
    }
</style>
