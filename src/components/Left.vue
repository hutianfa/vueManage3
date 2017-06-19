<template>
	<div class="tab-content">
	    <el-menu default-active="2" unique-opened="true" class="el-menu-vertical-demo el-menu--dark" @open="handleOpen" @close="handleClose" >
	      <el-submenu index="1">
	        <template slot="title"><i class="el-icon-message"></i>我的工作台</template>
	        <el-menu-item-group >
	          <template slot="title">原主题模板</template>
	          <el-menu-item index="1-1">
	            <router-link :to="{path:'./index'}">主题模板1</router-link>
	          </el-menu-item>
	        </el-menu-item-group>
	         <el-submenu index="1-2">
	          <template slot="title">新增主题模板</template>
	          <el-menu-item index="1-2-1"><router-link :to="{path:'./theme'}">创建模板</router-link></el-menu-item>
	        </el-submenu>
	        <el-menu-item-group title="新主题模板" >
	          <el-menu-item index="1-3">
	           <router-link :to="{path:'./charttheme'}">主题模板3</router-link>
	        </el-menu-item>
	        </el-menu-item-group>
	        <el-submenu index="1-4">
	          <template slot="title">主题模板4</template>
	          <el-menu-item index="1-4-1"><router-link :to="{path:'./newtheme'}">新模板</router-link></el-menu-item>
	        </el-submenu>
	      </el-submenu>
	      <el-submenu index="2" >
	        <template slot="title"><i class="el-icon-menu"></i>个人中心</template>
			<el-menu-item-group >
				<template slot="title">信息资料</template>
				<el-menu-item index="2-1"><router-link :to="{path:'./useradmin'}">编辑用户信息</router-link></el-menu-item>
			</el-menu-item-group >
	      </el-submenu>	     
	      <el-menu-item index="3"><i class="el-icon-setting"></i>文件管理</el-menu-item>
	      <el-submenu index="4" >
			<template slot="title"><i class="el-icon-upload2"></i>数据采集</template>
			<el-menu-item-group >
				<template slot="title">vuex数据</template>
				<el-menu-item index="4-1"><router-link :to="{path:'./vuxdata'}">动态数据获取</router-link></el-menu-item>
			</el-menu-item-group>
	      </el-submenu>
	    </el-menu>
	</div>
</template>
<script type="text/javascript">
</script>