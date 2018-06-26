<template>
	<div>
		<el-button type="primary" icon="el-icon-edit" @click = "addList">新增</el-button>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		<el-table
      		:data="tableData"
      		style="width: 100%">
      			<el-table-column
			        prop="date"
			        label="日期"
			        width="180">
      			</el-table-column>
      			<el-table-column
			        prop="name"
			        label="姓名"
			        width="180">
     			</el-table-column>
			    <el-table-column
			        prop="address"
			        label="地址">
			    </el-table-column>
			    <el-table-column
      				fixed="right"
      				label="操作"
      				width="100">
			      	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			        	<el-button @click="editItem(scope)" type="text" size="small">编辑</el-button>
			        	<el-button @click="delItem(scope)" type="text" size="small">删除</el-button>
			      	</template>
    			</el-table-column>
    	</el-table>
    	<el-pagination
			  background
			  :layout= "paginations.layout"
			  :page-size="paginations.page_size"
			  :current-page='paginations.page_index'
			  :total="paginations.total"
			  @current-change='handleCurrentChange'
              @size-change='handleSizeChange'
			  >
		</el-pagination>
		<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
		  	<child v-bind:gridData= "gridData" v-on:listToChidEvent = 'fromChildEvent'></child>
		</el-dialog>

	</div>
</template>
<script>
	import axios from 'axios'
	import child from '../components/child.vue'
	export default {
		name: 'info-list',
		components:{
			child
		},
		data(){
			return {
				dialogTableVisible: false,
				paginations: {
                    page_index: 1,  // 当前位于哪页
                    total: 100,        // 总数
                    page_size: 20,   // 1页显示多少条
                    layout: "total, prev, pager, next"   // 翻页属性
                },
				tableData: [],
				gridData: {
					name: 'ss',
					address: '2',
					date: '2019'
				}
			}
		},
		mounted(){
            this.getMockData(this,{
            	pageSize: this.paginations.page_size,
				currentPageNo: this.paginations.page_index
            });
        },
		methods:{
			fromChildEvent: function(params){
				debugger
			},
			handleClick: function(row){
				this.dialogTableVisible = true;
				this.gridData = row;
			},
			editItem: function(){
			},
			delItem: function(item){
				this.tableData.splice(item.$index,1);
			},
			addList: function(){
				var obj = {
					name: 'ss',
					address: '2',
					date: '2019'
				}
				this.tableData.unshift(obj);
			},
			handleCurrentChange: function(page){
				var params = {
					pageSize: this.paginations.page_size,
					currentPageNo: page
				}
				this.getMockData(this,params);
			},
			handleSizeChange: function(){
			},
			getMockData: function(that,data){
	            axios.get('../../static/data/table.json',{
	            	params: data
	            })
	            .then(function(response){
	            	that.paginations.total = response.data.tableData.total;
	            	that.tableData = response.data.tableData.rows;
	            	that.paginations.page_size = 10;
	            })
	            .catch(function(err){
	              console.log(err);
	            });
    		}
		}
	}
</script>