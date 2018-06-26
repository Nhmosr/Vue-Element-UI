<template>
	<div>
		<el-menu :default-openeds="['1', '3']">
				<router-link :to="{name: 'home'}">
					<el-menu-item index="1-1">首页</el-menu-item>
				</router-link>
				<router-link :to="{name: 'infoList'}">
					<el-menu-item index="1-2">信息列表</el-menu-item>
				</router-link>
      		<el-submenu index="2">
        		<template slot="title"><i class="el-icon-message"></i>信息管理</template>
		        <el-menu-item-group>
		        	<router-link :to="{name: 'personInfo'}">
		        		<el-menu-item index="2-1">个人信息</el-menu-item>
		        	</router-link>
		          	<router-link :to="{name: 'updateInfo'}">
		        		<el-menu-item index="2-2">修改信息</el-menu-item>
		        	</router-link>
		          
		        </el-menu-item-group>
      		</el-submenu>
	      	<el-submenu index="3">
	        	<template slot="title"><i class="el-icon-menu"></i>资金管理</template>
		        <el-menu-item-group>
		        	<router-link :to="{name: 'account'}">
		        		 <el-menu-item index="3-1">资金流水</el-menu-item>
		        	</router-link>
		        </el-menu-item-group>
	      	</el-submenu>
    </el-menu>
	</div>
</template>
<script>
	export default {
		name: 'left-menu',
		data(){
			return {

			}
		}
	}
</script>