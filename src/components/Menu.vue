<template>
    <div>
        <h5 class="my-4 text-xl flex items-center justify-center"><el-icon>
                <Menu />
            </el-icon>订单管理系统</h5>
        <el-menu active-text-color="#ffd04b" background-color="transparent" class="border-0" default-active="2"
            text-color="#fff">
            <el-menu-item index="1">
                <router-link to="/home/dashboard">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>系统看板</span>
                </router-link>
            </el-menu-item>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>数据列表</span>
                </template>
                <router-link to="/home/list"><el-menu-item index="1-1">订单列表</el-menu-item></router-link>
                <router-link to="/home/list"><el-menu-item index="1-2">用户列表</el-menu-item></router-link>
                <router-link to="/home/list"><el-menu-item index="1-3">权限列表</el-menu-item></router-link>
                <el-sub-menu index="1-4">
                    <template #title>item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="3">
                <el-icon>
                    <document />
                </el-icon>
                <span>系统配置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>

</script>

<style></style>