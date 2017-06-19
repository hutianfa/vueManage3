<template>
 <div class="main">
    <template>
      <header class="head-nav">
        <myhead></myhead>
      </header>
    </template>
  <div class="tab-content">
    <el-row>
     <el-col :span="3" class="left-menu grid-content ">
     	<myleft></myleft>
     </el-col>
     <el-col :span="21" v-loading="loading2" element-loading-text="拼命加载中">
		<div class="grid-content bg-purple-light right-content">
		  	<router-view ></router-view>	
		</div>
     </el-col>
    </el-row>
  </div>
 </div>
</template>
<script>
import myhead from './Head.vue'
import myleft from './Left.vue'
export default {
  components:{myleft,myhead}
}
</script>
