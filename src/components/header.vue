<template>
  <header>
    <router-link id="logo" to="/">
      <img src="@/assets/images/logo.png" alt="翰林出版社LOGO" />
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <img src="../assets/images/btnShelf1.png" alt="" />
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <img src="../assets/images/signOut.png" alt="" />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Vheader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #067bf0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  #logo {
    display: inline-block;
    width: 250px;
    // height: 50px;
    img {
      width: 100%;
    }
  }
  nav {
    ul {
      display: flex;
      li {
        height: 80px;
        width: 80px;
        a {
          display: inline-block;
          transition: 0.3s;
          img {
            width: 100%;
            height: 100%;
          }
          &:hover {
            transform: rotate(360deg);
            margin: 5px;
            border: 1px solid #fff;
          }
        }
      }
    }
  }
}
</style>
