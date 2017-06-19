<template>
	<div class="container-fluid">
	  <el-row>
	  	 <el-col :span="4">
	  	 	<div class="maintitle">主题模板1</div>
	  	 </el-col>
	  	 <el-col :span="20">
	  	  <el-breadcrumb class="tooltip">
		    <el-breadcrumb-item>我的工作台</el-breadcrumb-item>
		    <el-breadcrumb-item>原主题模板</el-breadcrumb-item>
		    <el-breadcrumb-item>主题模板1</el-breadcrumb-item>
		  </el-breadcrumb>
	  	 </el-col>
	  </el-row>
	  <div class="toolbar  grid-content bg-purple-light">
	  	<form class="el-form el-form--inline">
	  		<div class="el-form-item">
	  		  <el-input v-model="input" placeholder="请输入内容" style="padding-left: 10px;"></el-input>
	  		</div> 
	  		<div class="el-form-item">	  		
	  		   <el-button type="primary" icon="search">查询</el-button>
	  		</div> 
	  		<div class="el-form-item" id="add-a">	  		 
	  		    <el-button type="primary"><router-link :to="{path:'./theme'}">新增</router-link></el-button>
	  		</div>
	  	</form>
	  </div>
	  <div style="width:99%;margin:0 auto">
		  <el-table
		    :data="tableData"
		    border
		    style="width: 100%;"
		    :default-sort = "{prop: 'date', order: 'descending'}"
		    @selection-change="handleSelectionChange" >
		    <el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="日期"
		      sortable
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      sortable
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址"
		      :formatter="formatter">
		    </el-table-column>
		    <el-table-column label="操作">
		      <template scope="scope">
		          <el-button type="primary text" icon="edit" @click="dialogFormVisible = true">编辑</el-button>
		          <el-button type="danger" icon="delete">删除</el-button>
		      </template>
		    </el-table-column>
		  </el-table>
		</div>
	    <div class=" grid-content bg-purple-light" >
		  <div class="block">
		    <el-pagination
		      layout="prev, pager, next"
		      :total="1000">
		    </el-pagination>
		  </div>
	    </div>
	    <!-- 弹出层-->	
	    <!-- <mydialog @dialogVisible="isdialogVisible"></mydialog> -->  
	    <el-dialog title="主题模板" v-model="dialogFormVisible">
 		  <el-form>
 		    <el-form-item label="活动名称" :label-width="formLabelWidth">
 		      <el-input  auto-complete="off"></el-input>
 		    </el-form-item>
 		    <el-form-item label="活动区域" :label-width="formLabelWidth">
 		      <el-select  placeholder="请选择活动区域">
 		        <el-option label="区域一" value="shanghai"></el-option>
 		        <el-option label="区域二" value="beijing"></el-option>
 		      </el-select>
 		    </el-form-item>
 		  </el-form>
 		  <div slot="footer" class="dialog-footer">
 		    <el-button @click="dialogFormVisible = false">取 消</el-button>
 		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
 		  </div>
 		</el-dialog>    	    	 
    </div>
</template>  
<style type="text/css">
	.maintitle{
		float:left;
		line-height: 40px;
		padding: 10px 0 0 20px;
	}s
	.toolbar{
		width: 99%;
		margin:0 0 10px 10px;
		background: #f2f2f2;
		height:60px;
		line-height: 60px;
	}
	.block{
		line-height: 44px;
		text-align: right;
		margin-right: 4px;
	}
	#add-a a{
		color: #fff;
		text-decoration: none;
	}
</style>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        multipleSelection: [],
        dialogTableVisible: false,
    	dialogFormVisible: false,
    	formLabelWidth: '120px'
      }
    },
    /*components:{mydialog},*/
    methods: {
      formatter(row, column) {
        return row.address;
      },
       handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

