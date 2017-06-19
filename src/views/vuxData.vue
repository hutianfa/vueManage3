<template>
	<div class="container-fluid">
		<el-row>
	  	 <el-col :span="4">
	  	 	<div class="maintitle">vuex数据</div>
	  	 </el-col>
	  	 <el-col :span="20">
	  	  <el-breadcrumb class="tooltip">
		    <el-breadcrumb-item>数据采集</el-breadcrumb-item>
		    <el-breadcrumb-item>vuex数据</el-breadcrumb-item>
		    <el-breadcrumb-item>数据获取</el-breadcrumb-item>
		  </el-breadcrumb>
	  	 </el-col>
	   </el-row>
	  <div class="grid-content bg-purple-light">
	   <div class="main-up">
		   <el-row>
	   	 	<div style="width:99%;margin:0 auto">
			  <el-table
			    :data="tableData" 
			    border
			    style="width:1300px"
			    :default-sort = "{prop: 'id',order: 'descending'}"
			   >
			    <el-table-column
			      prop="id"
			      width="100"
			      label="编号"
				  sortable
				>
			    </el-table-column>
			    <el-table-column
			      prop="oname"
			      label="名称"
			      sortable
			      width="700">
			    </el-table-column>
			    <el-table-column
			      prop="price"
			      label="价格"
			      sortable
			      width="120"> 
			    </el-table-column>   
			    <el-table-column
			      prop="num"
			      label="数量"
			      :formatter="formatter"
			      width="120">
			    </el-table-column>   
			    <el-table-column label="操作">
			      <template scope="scope">
			        <div class="caption" v-model="shopstate" v-if="shopstate === '1' ">
			        	<el-button type="primary text" v-on:click="addCartShop(scope.$index,scope.row)">加入购物车</el-button>
			        </div>
			        <div class="caption" v-model="shopstate" v-else> 
			            <el-button type="primary" v-on:click="addnum">+</el-button>
			            <el-button type="warning" v-on:click="movenum">-</el-button> 
			        </div>
			      </template>			    
			    </el-table-column>
			  </el-table>
			</div>
		   </el-row> 
		   <el-row>
	   	 	<div style="width:99%;margin:0 auto;padding-top:20px;padding-bottom: 20px;">
			  <el-table
			    :data="newtableData"
			    border
			    style="width:1300px"
			    :default-sort = "{prop: 'id', order: 'descending'}"
			    @selection-change="handleSelectionChange" >
			    <el-table-column
			      prop="id"
			      width="100"   
			      label="编号"
				  sortable
				>
			    </el-table-column>
			    <el-table-column
			      prop="oname"
			      label="名称"
			      sortable
			      width="600">
			    </el-table-column>
			    <el-table-column
			      prop="price"
			      label="价格"
			      sortable
			      width="110">
			    </el-table-column>
			    <el-table-column
			      prop="num"
			      label="数量"
			      :formatter="formatter"
			      width="110">
			    </el-table-column>
			    <el-table-column
			      prop="subnum"
			      label="总价"
			      :formatter="formatter"
			      width="110">
			    </el-table-column>
			    <el-table-column label="操作">
			      <template scope="scope">
			          <el-button type="primary" v-on:click="addnum">+</el-button>
 			          <el-button type="warning" v-on:click="movenum">-</el-button>
 			          <el-button type="danger" v-on:click="clearnum">x</el-button>			          
			      </template>
			    </el-table-column>
			  </el-table>
			</div>
		   </el-row>
		   <el-row>
		    <div style="width:99%;margin:0 auto">
		   	 <el-col :span="10">
		   	   <el-col :span="4"><span>总数:<span class="divider">50</span></span></el-col>
		   	   <el-col :span="6"><span>总价:<span class="divider">120</span></span></el-col>			   	
		   	 </el-col>
		   	 <el-col :span="13" style="text-align:right;">
		   	 	<el-button type="danger" v-on:click="moveCart">清空购物车</el-button> 
		   	 </el-col>
		   	</div>
		   </el-row>
	   </div>
	  </div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
		        shopstate:'1',
				tableData: [{
				  id:'1',	
		          oname: '米饭',
		          price: '15',
		          num: ''
		        }, {
		          id:'2',	
		          oname: '土豆丝',
		          price: '12',
		          num: ''
		        }, {
		          id:'3',	
		          oname: '鱼香肉丝',
		          price: '20',
		          num: ''
		        }, {
		          id:'4',	
		          oname: '炒饭',
		          price: '5',
		          num: ''
		        }] 
		    }  
		},
		methods:{
			formatter(row, column) {
                return row;
            },
			addCartShop:function($index,$row){
			/*	this.shopstate = 0; */
		     let that=this;
			console.log(this); 	
			this.shopstate = 0;	
			},
			moveCart:function(){
				
			},
			addnum:function(){

			},
			movenum:function(){

			},
			clearnum:function(){

			}
		}
		

	}
</script> 