<template>
	<div class="container-fluid">
		<el-row>
	  	 <el-col :span="4">
	  	 	<div class="maintitle">添加用户</div>
	  	 </el-col>
	  	 <el-col :span="20">
	  	  <el-breadcrumb class="tooltip">
		    <el-breadcrumb-item>个人中心</el-breadcrumb-item>
		    <el-breadcrumb-item>信息资料</el-breadcrumb-item>
		    <el-breadcrumb-item>编辑用户信息</el-breadcrumb-item>
		  </el-breadcrumb>
	  	 </el-col>
	   </el-row>
	  <div class="grid-content bg-purple-light toolform">
	   <div class="main-up">
		   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		   	  <el-form-item label="用户类型" prop="usertype" style="margin-top:20px">
			    <el-input ></el-input>
			  </el-form-item>
			  <el-form-item label="活动区域" prop="region">
			    <el-select  placeholder="请选择活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <div class="bottom-right" style="margin-bottom:10px;height:100%;">
			    <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
			  </div>
			  <el-form-item>
			    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
			    <el-button @click="resetForm('ruleForm')">重置</el-button>
			  </el-form-item>
		   </el-form>
	   </div>
	  </div>
	</div>
	</div>
</template>
<style type="text/css">
	#quillWrapper{
		margin:0 0 10px 20px;
	}
</style>
<script type="text/javascript">
import  {quillEditor } from 'vue-quill-editor'
export default {
    data: function () {
      return {
        content: '',		// 编辑器的内容
        editorOption: {		// 编辑器的配置
           // something config
        },
        ruleForm: {
          username: '',
          region: '',
          desc: ''
        }
      }
    },
    components: {
      quillEditor 
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>