<template>
  <el-container class="big-container">
    <el-header>
      <div>
        <img src="./pic/a.jpg" />
        <span>运动管理平台</span>
      </div>

        <el-button type="info" @click="quit" size="mini">安全退出</el-button>
      
    </el-header>

    <el-container class="big-side">

      <el-aside width="200px">
         <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>

        <el-menu-item index="1-1">
          <template slot="title"> 
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>        
        </el-menu-item>
      </el-submenu>   
    </el-menu>
      </el-aside>

      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      menuList:[]
    } 
  },
  created(){
     this.getMenuList();
  },
  methods: {
  async  getMenuList() {   
    const {data: res}  = await this.$http.get("menus");
     console.log("res");
    },
    quit() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.big-container {
  height: 100%;


  .el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  
  .el-button {
    margin-bottom: 12px;
    margin-top: 12px;
  }


  div {
    display: flex;
    border-radius: 50%;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;


    }

    span {
      font-size: 20px;
      margin-left: 15px;
      
    }
  }
}



.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
}

.big-side {
 background-color: #545c64;
  .el-aside{
    height: 100%;

    .el-menu {
    /* border-right: solid 1px #e6e6e6; */
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #FFF;
}

  }
}


</style>