<template>
	<div class="child">
		<h3>子组件</h3>
		<h4>只接收了a = {{ a }}</h4>
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'

	// 只接收一个a
	defineProps(['a'])
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>