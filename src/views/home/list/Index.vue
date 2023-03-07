<template>
    <div id="list_page" class="w-full h-full flex-col">
        <Title title="用户列表">
            <div class="flex items-center">
                <el-input size="small" v-model="queryString" class="mr-2"></el-input>
                <el-icon class="text_active">
                    <Filter />
                </el-icon>
            </div>
        </Title>
        <div>
            <!-- 数据表格 -->
            <el-table :data="currentData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="scope">
                        <el-button link type="primary">
                            <el-icon>
                                <View />
                            </el-icon>
                        </el-button>
                        <el-button link type="primary" @click="handleEdit(scope.row)">
                            <el-icon>
                                <Edit />
                            </el-icon>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <DrawerEdit ref="EditRef" :currentItem="currentItem" @update="handleUpdate"></DrawerEdit>
    </div>
</template>

<script setup>
import { ref, toRaw, reactive, computed } from 'vue';
import Title from '@/components/Title.vue';
import DrawerEdit from './DrawerEdit.vue';

const tableData = reactive([
    {
        id: 1,
        date: '2016-05-03',
        name: 'a',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 2,
        date: '2016-05-02',
        name: 'b',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 3,
        date: '2016-05-04',
        name: 'c',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 4,
        date: '2016-05-01',
        name: 'd',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 5,
        date: '2016-05-01',
        name: 'e',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 6,
        date: '2016-05-01',
        name: 'f',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 7,
        date: '2016-05-01',
        name: 'g',
        address: 'No. 189, Grove St, Los Angeles',
    },
])

// 抽屉
const EditRef = ref()
const currentItem = ref({})

// 筛选
const queryString = ref('')
const currentData = computed(() => tableData.filter(item => ~item.name.indexOf(queryString.value)))

const handleEdit = (item) => {
    currentItem.value = { ...toRaw(item) }
    EditRef.value.setVisible(true)
}

const handleUpdate = (data) => {
    const index = tableData.findIndex(item => item.id === data.id)
    if(~index){
        currentData[index] = data
    }
}
</script>

<style></style>