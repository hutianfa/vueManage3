<template>
	<div class="el-row elborbg">
		<div class="logo-container el-col el-col-4 el-menu--dark">
			<img src="../assets/logoTitle.png"  class="logo" />
			<span class="nametitle">个人后台管理模板</span>
		</div>
		<div class="el-col el-col-16">
			<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			  <el-menu-item index="1">
			  		信息中心
			  	  <el-badge :value="3" class="item">					 
				  </el-badge>
			  </el-menu-item>
			  <el-submenu index="2">
			    <template slot="title">我的主题模板</template>
			    <el-menu-item index="2-1"><router-link :to="{path:'./theme'}">原主题模板</router-link></el-menu-item>
			    <el-menu-item index="2-2"><router-link :to="{path:'./newtheme'}">新主题模板</router-link></el-menu-item>
			  </el-submenu>
			  <!-- <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">数据采集</a></el-menu-item> -->
			</el-menu>
		</div>
		<div class="logo-container el-col el-col-4 el-menu--dark">
		  <span class="usename">
			 <el-col :span="20" style="text-align:right">
			    <el-dropdown trigger="click">
			      <span class="el-dropdown-link nametitle">
			        <span v-bind:style="marleft">hutianfa</span><i class="el-icon-caret-bottom el-icon-right"></i>
			      </span>
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>hutianfa</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
			  </el-col>
			
		  </span>		  
		</div>
	</div>
</template>
<style type="text/css">
	.elborbg img{
		float: left;
		margin-right: 10px;
	}
	.nametitle{
		float: left;
		line-height: 60px;
		color: #bfcbd9;
	}
</style>
<script type="text/javascript">
	export default {
		data:{
			marleft:{
				'margin-right':"10px"
			}
		}
	}
</script>