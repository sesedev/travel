<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe602;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe601;</i>
      请输入搜索关键字
    </div>
    <div class="header-right">城市 <i class="iconfont">&#xe600;</i></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
.header{
  height: 0.86rem;
  background-color: $header-bg-color;
  color: #fff;
  font-size: 0.3rem;
  @include d-flex;
  @include align-items-center;
  &-left{
    width: 0.64rem;
    text-align: center;
  }
  &-input{
    @include col;
    height: 0.68rem;
    line-height: 0.68rem;
    background-color: #fff;
    border-radius: 0.1rem;
    padding: 0 10px;
    color: #c3c3c3;
  }
  &-right{
    width: 1.24rem;
    text-align: center;
    .iconfont{
      font-size: 0.2rem;
    }
  }
}
</style>