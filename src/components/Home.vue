<template>
  <el-container class="big-container">
    <el-header>
      <div @click="backHome">
        <img src="./pic/a.jpg" />
        <span>运动管理平台</span>
      </div>

      <el-button type="info" @click="quit" size="mini">安全退出</el-button>
    </el-header>

    <el-container class="big-side">
      <el-aside width='isCollapse?"200px":"64px"'>
        <div class="toggleaside" @click="toggleAside" >|||</div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          :collapse=isCollapse
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <el-submenu :index="item.path" 
          v-for="item in menuList"
           :key="item.id">
            <template slot="title">
              <i :class="iconsObject[item.id]"></i>
              <span>{{ item.title }}</span>
            </template>

            <el-menu-item
              :index="item1.path"
              v-for="item1 in item.sList"
              :key="item1.id"
              @click="savNavState(item1.path)">
              <template slot="title">
                <i :class="iconsObject[item1.id]"></i>
                <span>{{ item1.title }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activePath: '/welcome',
      isCollapse:false,
      menuList: [],
       iconsObject: {
              '100':'el-icon-star-on',
              '200':'el-icon-star-off',
              '101':'el-icon-grape',
              '102':'el-icon-potato-strips',
              '103':'el-icon-goblet',
              '104':'el-icon-ice-cream-square',
              '201':'el-icon-goblet',
              '202':'el-icon-goblet',
              '203':'el-icon-goblet',
              '204':'el-icon-goblet',
            },
    };
  },
  created() {
    this.getMenuList();
   this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    savNavState(activePath){
       window.sessionStorage.setItem("activePath",activePath)
      this.activePath = activePath
    },
    backHome(){
      if(this.$router.currentRoute.path !== '/welcome'){
   this.$router.push('./home')
      }
     
    },
    toggleAside(){
      this.isCollapse = !this.isCollapse;

    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.flag !== 200) return this.$message.error("获取菜单数据失败");
      this.menuList = res.menus;
     
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
    align-items: center;

    .el-button {
      margin-bottom: 12px;
      margin-top: 12px;
    }

    div {
      display: flex;
      border-radius: 50%;
      cursor: pointer;

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
  
    text-align: center;
   
  }
}

.big-side {
  background-color: #545c64;
  .el-aside {
    height: 100%;

    .el-menu {
      border-right: none;
    }
  };
  .toggleaside {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }

}
</style>