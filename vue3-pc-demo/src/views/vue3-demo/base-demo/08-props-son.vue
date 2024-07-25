<script setup lang="ts">
// 注意：由于写了 setup，所以无法直接配置 props 选项
// 所以：此处需要借助于 “编译器宏” 函数接收子组件传递的数据

const props = defineProps({
    car: String,
    money: Number
})
console.log(props.car)
console.log(props.money)

// 子传父 emit，注册emit
const emit = defineEmits(['changeMoney'])
const buy = () => {
    emit('changeMoney', 5)
}

</script>

<template>
    <div class="son">
        我是子组件 - {{ car }} - {{ money }}

        <button @click="buy">花钱-5</button>
    </div>
</template>

<style scoped>
.son {
    border: 1px solid green;
    padding: 30px;
}
</style>