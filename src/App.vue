<template>
      <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style lang="less" scoped>
.all {
  height: 100%;
  display: flex;
  .left{
    width: 200px;
    height: 100%;
  }
}
.fall {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 20px;
  > div{
    // height: 300px;
    box-shadow: dimgray;
    background-color: aqua;
    text-align: center;
  }
  img {
    width: 100%;
    // height: calc(100% - 21px);
  }
}
</style>
