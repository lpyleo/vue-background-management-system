<template>
    <el-drawer v-model="visible" title="数据编辑">
        <div class="w-full">
            <div class="grid grid-cols-1 gap-2">
                <div class="w-50px">姓名</div>
                <el-input v-model="itemData.name" />
                <div class="w-50px">日期</div>
                <el-date-picker type="date" v-model="itemData.date" class="!w-full" />
                <div class="w-50px">住址</div>
                <el-input v-model="itemData.address" />
            </div>
        </div>
        <template #footer>
            <el-button type="primary" @click="handleUpdate">OK</el-button>
        </template>
    </el-drawer>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
// 接受一个属性用来修改里面的数据
const props = defineProps({
    currentItem: {
        type: Object,
        default: () => {}
    }
})

// 发送事件
const emit = defineEmits(['update'])

// 表单数据
const itemData = ref({})
watchEffect(() => {
    itemData.value = props.currentItem
})

// 显示隐藏部分
const visible = ref(false)

const setVisible = (bool) => {
    visible.value = bool
}

const handleUpdate = () => {
    emit('update', itemData.value)
    setVisible(false)
}

defineExpose({
    setVisible
})
</script>

<style></style>