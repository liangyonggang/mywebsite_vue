<template>
  <div class="home">
    <div class="back-img" ref="backImg"></div>
    <div class="content">
      <div class="content-head" @click="changeBackImg">
        <h1>梁永刚的个人网站</h1>
        <p class="sub-title">claus.liang's website</p>
      </div>
      <div class="content-container">
        <ul class="product">
          <li><span class="symbol">&gt;&gt;</span>个人介绍</li>
          <li><span class="symbol">&gt;&gt;</span>作品</li>
          <li><span class="symbol">&gt;&gt;</span>文章</li>
        </ul>
      </div>
      <div class="content-footer">
        <span class="contact-btn">contact</span> | <span class="contact-url">liangyonggang.cn</span>
      </div>
    </div>
    <div class="footer">
      <a href="http://www.miitbeian.gov.cn/" target="_blank">京ICP备18012831号</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
    this.changeBackImg()
  },
  methods: {
    changeBackImg () {
      const random = Math.ceil(Math.random() * 4)
      this.$refs['backImg'].style.backgroundImage = "url('/static/img/" + random + ".jpg')"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .home{
    height: 100%
    .back-img{
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      background-image: url("/static/img/1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(2px);
      z-index: -1;
    }
    .content{
      position: absolute;
      width: 40%;
      height: 300px;
      left: 50%;
      top: 50%;
      background: rgba(0, 0, 0, 0.3)
      padding: 15px 20px;
      border-radius: 10px;
      box-sizing: border-box;
      color: #fefefe;
      transform: translate(-50%, -55%)
      @media (max-width 500px){
        width: 90%;
      }
      @media (min-width 501px) and (max-width 800px){
        width: 70%;
      }
      @media (min-width 801px) and (max-width 1000px){
        width: 60%;
      }
      .content-head{
        text-align: center;
        border-bottom: 1px solid rgba(250, 250, 250, 0.5);
        padding-bottom: 10px;
        h1{
          font-size: 20px;
          line-height: 25px;
          margin-top: 5px;
        }
        .sub-title{
          font-size: 14px;
          line-height: 20px;
        }
      }
      .content-container{
        border-bottom: 1px solid rgba(250, 250, 250, 0.5);
        .product{
          padding: 20px 0 20px 10px;
          li{
            margin-bottom: 15px;
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 5px;
            padding-left: 10px;
            cursor: pointer;
            &:hover{
              background: rgba(250, 250, 250, 0.9);
              color: #333;
              font-weight: bold;
            }
            .symbol{
              font-size: 12px;
              margin-right: 10px;
            }
          }
        }
      }
      .content-footer{
        text-align: right;
        font-size: 14px;
        line-height: 30px;
        .contact-btn{
          padding: 5px;
          border-radius: 3px;
          cursor: pointer;
          &:hover{
            background: rgba(250, 250, 250, 0.7);
            color: #333;
            font-weight: bold;
          }
        }
        .contact-url{
          padding-left: 5px;
        }
      }
    }
    .footer{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 20px;
      font-size: 12px;
      text-align: center;
      a{
        text-decoration: none;
        color: #333;
        background: rgba(250, 250, 250, 0.5);
      }
    }
  }
</style>
