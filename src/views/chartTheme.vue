<template>
	<div class="container-fluid">
	   <el-row>
	  	 <el-col :span="4">
	  	 	<div class="maintitle">新主题模板</div>
	  	 </el-col>
	  	 <el-col :span="20">
	  	  <el-breadcrumb class="tooltip">
		    <el-breadcrumb-item>我的工作台</el-breadcrumb-item>
		    <el-breadcrumb-item>新主题模板</el-breadcrumb-item>
		    <el-breadcrumb-item>新主题模板3</el-breadcrumb-item>
		  </el-breadcrumb>
	  	 </el-col>
	   </el-row>
	   <div class="grid-content bg-purple-light toolform">
	    <div class="main-up">
	        <IEcharts :option="bar" :loading="loading" ></IEcharts>
	    </div>
	   </div>
	</div>
</template>
<style type="text/css">
	.main-up{
		width: 80%;
		height: 400px;
		padding: 10px;
	}
</style>
<script>
 import IEcharts from 'vue-echarts-v3';
 export default{
    data: function(){
		return {
	    	loading:true,
	        bar: {
		        title: {
		          text: 'ECharts Hello World'
		        },
		        tooltip: {},
		        xAxis: {
		          data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
		        },
		        yAxis: {},
		        series: [{
		          name: 'Sales',
		          type: 'bar',
		          data: [5, 20, 36, 10, 10, 20]
		        }]
		    }
		}		
	},
	components: {
	    IEcharts								
	},
	methods:{
	   
	},
	wacth:{		
	  	loading:function(){
	  		let self =this;
			console.log(self.loading);	   
		    setTimeout(function(){	    	
			   self.loading = false;
			},1000);
	  	}	
	}
	
 } 	
</script>