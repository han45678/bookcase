<template>
  <div class="about">
    <div class="background">
      <img src="../assets/images/banner02.png" alt="" />
    </div>
    <div class="content">
      <div class="title">
        <h1>登入</h1>
      </div>
      <el-form>
        <el-input v-model="account" placeholder="請輸入帳號"></el-input>
        <el-input
          placeholder="請輸入密碼"
          v-model="password"
          show-password
        ></el-input>
        <router-link to="/">
          <el-button type="primary">登入</el-button>
        </router-link>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
};
</script>
<style scoped lang="scss">

.about {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .background {
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    animation-name: login_background;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    img {
      height: 100%;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 3;
    width: 100%;
    max-width: 300px;
    background-color: #fff;
    padding: 15px;
    .el-form {
      margin-top: 45px;
      .el-input {
        margin-bottom: 15px;
      }
      button {
        margin-top: 30px;
      }
    }
  }
}
@keyframes login_background {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
