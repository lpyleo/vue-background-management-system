<template>
    <div class="w-full flex justify-between items-center px-2">
        <div class="text-lg font-semibold select-none">{{props.title}}</div>
        <div><slot></slot></div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: '页面标题'
        }
    })
</script>

<style></style>