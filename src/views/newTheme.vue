<template>
	<div class="container-fluid">
	   <el-row>
	  	 <el-col :span="4">
	  	 	<div class="maintitle">新模板</div>
	  	 </el-col>
	  	 <el-col :span="20">
	  	  <el-breadcrumb class="tooltip">
		    <el-breadcrumb-item>我的工作台</el-breadcrumb-item>
		    <el-breadcrumb-item>新主题模板</el-breadcrumb-item>
		    <el-breadcrumb-item>新模板</el-breadcrumb-item>
		  </el-breadcrumb>
	  	 </el-col>
	   </el-row>
	  <div class="grid-content bg-purple-light toolform">
	   <div class="main-up">
	    <img :src="src">
		<vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']"
           :crop="true"										
           text="上传图片"
           url=""											
           extensions="png,gif,jpeg,jpg"					
           @:imageuploaded="imageuploaded">					
		</vue-core-image-upload>
	   </div>
	  </div>
	  <div class="grid-content bg-purple-light toolform">
	   <div class="main-up">
		 <el-steps :space="200" :active="active" :click="next" finish-status="success">
		  <el-step title="未完成" description="任务未开始"></el-step>
		  <el-step title="进行中" description="任务进行中"></el-step>
		  <el-step title="已完成" description="任务已结束"></el-step>
		 </el-steps>
	   </div>
	  </div>
	</div>
</template>
<style type="text/css">
	.main-up{
		width: 80%;
		height: 100%;
		padding: 10px;
	}
</style>
<script type="text/javascript">
 import VueCoreImageUpload  from 'vue-core-image-upload';
 export default {
    data() {
      return{
            src:'./assets/logo.png', 
        	active:1
      };
    },
    components: {
        VueCoreImageUpload				// 声明组件VueCoreImageUpload
    },
    methods: {
	    imageuploaded(res) {			// 定义上传完成执行的方法
            console.log(res);
            
        },
        next() {
      	    this.active++ > 2 ? this.active=1 : this.active;
        }
    }
  }
</script>