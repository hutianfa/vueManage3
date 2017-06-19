<template>
<div class="container-fluid">
	<div class="logindiv" style="">
	  <div class="el-row">
	    <div class="el-col el-col-24">
	     <div class="content">
	       <form class="el-form demo-ruleForm card-box loginform el-form--label-left" element-loading-text="正在登录..." :style="setPos">
	         <h3  class="title">主题模板登录</h3> 
	         <div  class="el-form-item is-required">
	          <div class="el-form-item__content" style="margin-left: 0px;">
	           <div class="el-input">
	             <input type="text" placeholder="账号" v-model="username" autocomplete="off" class="el-input__inner">
	           </div>
	          </div>
	         </div>
	         <div class="el-form-item is-required">
	           <div class="el-form-item__content" style="margin-left: 0px;">
	             <div class="el-input">
	              <input type="password" placeholder="密码" v-model="password" autocomplete="off" class="el-input__inner">
	             </div>
	           </div>
	         </div>
	         <div class="el-form-item is-required">
	         	<el-checkbox v-model="checked">记住密码</el-checkbox>
	         </div>	         
	        <div class="el-form-item" style="width: 100%;">
	         <div class="el-form-item__content" style="margin-left: 0px;">
	          <button type="button" class="el-button el-button--primary" v-on:click="dologin" v-loading:loading="loading" element-loading-text="登录中">
	            <!-- <router-link :to="{path:'/hello/index'}"> --><span>登录</span><!-- </router-link> -->
	          </button> 
	          <button type="button" class="el-button el-button--default">
	            <span>重置</span>
	          </button>
	         </div>
	        </div>
	    </form>
	   </div>
	 </div>
    </div>
   </div>
  </div>
</template>
<style type="text/css">
	.logindiv,.card-box{
		box-shadow: 0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);
	    border-radius: 5px;
	    -moz-border-radius: 5px;
	    background-clip: padding-box;
	    margin-bottom: 20px;
	    background-color: #f9fafc;
	    border: 2px solid #8492a6;
	}
	.logindiv .loginform{
		width: 350px;
    	padding: 35px 35px 15px;
    	box-sizing: border-box;
    	margin: 0px;
	}
</style>
<script type="text/javascript">
 export default{
 	data(){ 		
		return{
			loading:false,
			setPos:{
				position:'absolute',
				top:'150px',
				left:'750px'
			},
			winSize:{
				width:'',
				height:''
			}
		}
 	},
 	methods:{
 		dologin:function(){ 
 			var name=this.username;
 			var pwd=this.password;
 			var check=this.checked;
 			if(name != null && pwd != null){
 				setTimeout(function() {
		         	this.loading = true;
		        },3000);
 				this.$router.push({path:'./hello/index'});
 			}else{
 				this.$message({
		          showClose: true,
		          message: '您未输入用户名和密码或您输入的用户名和密码不正确!',
		          type: 'error'
		        });
		    }		 			
 		},
 		setSize:function(){
 			this.winSize.width = document.documentElement.clientWidth + "px";
 			this.winSize.height = document.documentElement.clientHeight + "px";
 			this.setPos.top = (parseInt(this.winSize.height)-340)/2 +'px';
 			this.setPos.left = (parseInt(this.winSize.width)-350)/2 +'px'; 
 		}
 	},
 	mounted(){    
 		this.setSize(); 
		window.onresize = () => {
			this.setSize();
		}
 	}
 }
</script>