<template>
  <div class="product">
    <div class="product-inner">
      <a href="http://liangyonggang.cn/sell">
        <dl class="pro-item">
          <dt></dt>
          <dd>
            <h2>仿饿了吗</h2>
            <span>vue</span><span>移动端</span>
          </dd>
        </dl>
      </a>
      <a href="http://liangyonggang.cn/sell">
        <dl class="pro-item">
          <dt></dt>
          <dd>
            <h2>仿饿了吗</h2>
            <span>vue</span><span>移动端</span>
          </dd>
        </dl>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product'
}
</script>

<style scoped lang="stylus">
  .product{
    padding: 10px;
    .product-inner{
      .pro-item{
        margin-right: 20px;
        margin-bottom: 20px;
        padding: 10px;
        display: inline-block;
        border: 1px solid #00c850;
        dt{
          float: left;
          width: 100px;
          height: 100px;
          border: 1px solid red;
        }
        dd{
          float: left;
          margin-left: 20px;
          width: 200px;
        }
      }
    }
  }
  .clearfix:before,.clearfix:after{
    content:"";
    display:table;
    clear:both;
    height:0;
  }
</style>
