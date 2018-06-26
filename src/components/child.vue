<template>
	<div>
		<p>{{gridData.name}}</p>
		<p>{{gridData.address}}</p>
		<p>{{gridData.date}}</p>
		<el-button type="primary" icon="el-icon-edit" @click = "sendMsgToParent">向父组件传值</el-button>
	</div>
</template>
<script>
	export default {
		props: ['gridData'],
		methods:{
			sendMsgToParent: function(){
				this.$emit('listToChidEvent','this message id from child');
			}
		}
	}
</script>
