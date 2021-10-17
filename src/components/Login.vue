<template>
  <div class="login_container">
    <div class="login_box">
      <div class="icon_big">
        <img src="./pic/b.gif" alt />
      </div>

      <el-form
        ref="loginFormRef"
        label-width="0"
        :model="loginForm"
        :rules="loginFormRules"
        class="login_form"
      >
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="loginForm.username">
            <svg slot="prefix" class="icon" aria-hidden="true">
              <use xlink:href="#icon-yonghu"></use>
            </svg>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="请输入密码" type="password"  v-model="loginForm.password">
            <svg slot="prefix" class="icon" aria-hidden="true">
              <use xlink:href="#icon-mima"></use>
            </svg>
          </el-input>
        </el-form-item>

        <el-form-item class="btns">
          <el-button type="primary" @click="login">提交</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
       loginFormRules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
           password: [
              { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
           ]

       }
    };
  },
  methods:{
    reset(){
      this.$refs.loginFormRef.resetFields()
     
    },
    login(){
      this.$refs.loginFormRef.validate(async vali =>{
        if(!vali) return;
       const {data: res} = await this.$http.post('login', this.loginForm);
       if(res.flag==='ok'){
        this.$message.success('登陆成功');
        this.$router.push({path:"/home"});
       console.log(res.user)
       }else{
         this.$message.error('登陆失败');
       }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
  background-image: url("./pic/bg4.gif");
}

.login_form {
    position: absolute;
    bottom: 0%;
    width: 100%;
    padding:15px;
    box-sizing: border-box;

  .btns {
    display: flex;
    justify-content: flex-end;
  }
}
.login_box {
  width: 450px;
  height: 300px;
  border-radius: 5px;
  background-color: #f0fff0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%;);
  box-shadow: 0 0 10px #ddd;

  .icon_big {
    width: 100px;
    height: 100px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd ;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #eee;
   
  
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    
    }
  }
}
</style>



