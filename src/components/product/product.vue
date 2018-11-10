<template>
  <div class="product">
    <div class="product-inner">
      <h2 class="title">projects</h2>
      <a href="http://liangyonggang.cn/sell">
        <dl class="pro-item">
          <dt><img src="./img/eee.jpg" alt=""></dt>
          <dd>
            <div class="pro-title">仿饿了吗</div>
            <div class="pro-desc">该项目高仿饿了吗点餐软件，用vue框架搭建，亮点是添加了动画效果。</div>
            <div class="pro-bottom">
              <span class="block vue">VUE</span><span class="block phone">PHONE</span>
            </div>
          </dd>
        </dl>
      </a>
      <a href="http://liangyonggang.cn/bgm">
        <dl class="pro-item">
          <dt><img src="./img/bgm.jpg" alt=""></dt>
          <dd>
            <div class="pro-title">后台管理系统</div>
            <div class="pro-desc">该项目使用了element UI库，实现了后台管理系统的一般功能。</div>
            <div class="pro-bottom">
              <span class="block vue">VUE</span><span class="block pc">PC</span>
            </div>
          </dd>
        </dl>
      </a>
      <a href="http://liangyonggang.cn/news">
        <dl class="pro-item">
          <dt><img src="./img/news.jpg" alt=""></dt>
          <dd>
            <div class="pro-title">新闻网站</div>
            <div class="pro-desc">该项目js框架采用了react，使用了react-responsive实现了适配pc端及移动端</div>
            <div class="pro-bottom">
              <span class="block react">REACT</span><span class="block pc">PC</span><span class="block phone">PHONE</span>
            </div>
          </dd>
        </dl>
      </a>
      <a href="http://liangyonggang.cn/selectHouse">
        <dl class="pro-item">
          <dt><img src="./img/house.jpg" alt=""></dt>
          <dd>
            <div class="pro-title">抢房APP</div>
            <div class="pro-desc">一款在线抢房的webAPP</div>
            <div class="pro-bottom">
              <span class="block vue">VUE</span><span class="block phone">PHONE</span>
            </div>
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
      .title{
        font-size: 20px;
        line-height: 40px;
      }
      a{
        text-decoration: none;
      }
      .pro-item{
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #00c850;
        display: flex;
        dt{
          flex: 0 0 100px;
          width: 100px;
          height: 100px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        dd{
          flex: 1;
          margin-left: 20px;
          position: relative;
          .pro-title{
            color: #333;
            font-size: 16px;
            line-height: 25px;
            margin-bottom: 10px;
          }
          .pro-desc{
            font-size: 12px;
            color: #969ea9;
            line-height: 14px;
            margin-bottom: 10px;
          }
          .pro-bottom{
            position: absolute;
            bottom: 5px;
            .block{
              display: inline-block;
              height: 20px;
              line-height: 20px;
              padding: 0 10px;
              margin-right: 10px;
              border-radius: 10px;
              font-size: 15px;
            }
            /* 各标签样式 */
            .vue{
              background: #4fc08d;
              color: #fff;
            }
            .react{
              background: #61dafb;
              color: #fff;
            }
            .phone{
              background: rgb(216, 224, 232);
              color: #fff;
            }
            .pc{
              background: #555;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
