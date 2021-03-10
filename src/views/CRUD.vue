<template>
    <div>
        <table id="info_table">
            <thead>
                <tr>
                    <td>欄位1</td>
                    <td>欄位2</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td data-th="項次">{{item.col1}}</td>
                    <td data-th="年級">{{item.col2}}</td>
                    <td data-th="操作">
                        <button type="button" class="el-button el-button--primary is-circle" @click="action(item)">
                            <i class="el-icon-edit"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <div>
                col1:
                <input type="text" v-model="data.col1">
            </div>
            <div>
                col2:
                <input type="text" v-model="data.col2">
            </div>
            <div>
                <button @click="del" :disabled="data.id === 0">刪除</button>
                <button @click="update" :disabled="data.id === 0">更改</button>
                <button @click="add">新增</button>
                <button @click="cancel">取消</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [],
        data: {
            col1: '',
            col2: '',
            id: 0,
        },
    }),
    methods: {
        action(item) {
            this.data.col1 = item.col1;
            this.data.col2 = item.col2;
            this.data.id = item.id;
        },
        del() {
            this.items = this.items.filter(ele => ele.id !== this.data.id);
        },
        add() {
            let nextId = Math.max(this.items.map(ele => ele.id)) + 1;
            this.items.push({
                col1: this.data.col1,
                col2: this.data.col2,
                id: nextId
            })
        },
        update() {
            let target = this.items.find(ele => ele.id === this.data.id);
            target.col1 = this.data.col1;
            target.col2 = this.data.col2
        },
        cancel() {
            this.data = {
                col1: '',
                col2: '',
                id: 0,
            };
        }
    },
    mounted() {
        this.items = [
            {
                id: 1,
                col1: 'test01',
                col2: 'test01',
            },
            {
                id: 2,
                col1: 'test02',
                col2: 'test02',
            },
            {
                id: 3,
                col1: 'test03',
                col2: 'test03',
            },
        ];
    }
}
</script>