<!-- <template>
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
</template>
<script type="text/javascript">
	export default{
		data(){
			return{  	
				
			}
		},
		methods:{
			dialogFormVisible(){
				this.$emit('dialogVisible',true);
			}
		}
	}
</script>   -->