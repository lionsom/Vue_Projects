<template>
	<div class="container-fluid wraper">
		<h1 class="title">
			Vue3 组件间通信
		</h1>
		<hr>
		<div class="row">
			<div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
				<!-- 导航区 -->
				<ul>
					<ol><router-link active-class="active" class="list-group-item" to="/props">1. props </router-link></ol>
					<ol><router-link active-class="active" class="list-group-item" to="/event">2. 自定义事件 </router-link></ol>
					<ol><router-link active-class="active" class="list-group-item" to="/mitt">3. mitt </router-link></ol>
					<ol><router-link active-class="active" class="list-group-item" to="/model">4. v-model </router-link></ol>
					<ol><router-link active-class="active" class="list-group-item" to="/attrs">5. $attrs </router-link></ol>
					<ol><router-link active-class="active" class="list-group-item" to="/ref-parent">6. <span class="small">$refs、$parent </span></router-link></ol>
					<ol><router-link active-class="active" class="list-group-item" to="/provide-inject">7. provide、inject </router-link></ol>
				</ul>
			</div>
			<div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
				<div class="panel-body">
					<!-- 占位一个展示区 -->
					<router-view></router-view>
				</div>
			</div>

			<img src="@/assets/images/组件通信一览.png" alt="组件通信">
		</div>
	</div>
</template>

<script setup lang="ts" name="App">
</script>

<style>
	.wraper .title {
		padding: 20px;
		text-align: center;
		min-width: 610px;
	}
	.wraper .small{
		font-size: 15px;
	}
	.wraper .list-group-item {
		min-width: 230px;
	}
</style>