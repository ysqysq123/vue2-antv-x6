<template>
    <Table :columns="columns10" :data="data9" :show-header="false" @on-expand ="expand"  @on-row-click="onRowClick">
        <template slot="img" slot-scope="{ row, index }">
            <div class="img">
                <img :src= "row._expanded ? open : close"  alt="">
            </div>
        </template>
        <template slot="action" slot-scope="{ row, index }">
            <span class="action-btn">新增数据集</span>
            <span class="action-line"></span>
            <Dropdown transfer >
            <a href="javascript:void(0)"> 更多 </a>
            <DropdownMenu slot="list">
                <DropdownItem name="rename">重命名</DropdownItem>
                <DropdownItem name="delete">删除</DropdownItem>
                <DropdownItem name="import">导入</DropdownItem>
                <DropdownItem name="setting">设置</DropdownItem>
                <DropdownItem name="copy">复制</DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </template>
    </Table>
</template>
<script>
    import expandRow from './table-expand.vue';
    import close from '../assets/img/close.png';
    import open from '../assets/img/open.png';
    export default {
        components: {
          expandRow,
        },
        data () {
            return {
                close,
                open,
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row,
                                }
                            })
                        }
                    },
                    {
                        title: 'img',
                        slot: 'img',
                        width: 30,
                        align: 'left'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        slot: 'action',
                        align: 'right'
                    }
                ],
                data9: [
                    {
                        name: '数据集一',
                        _expanded: false,
                        childrenData: [
                            {
                                name: '数据集1',
                                type: 'string',
                                labels: ['123', '456'],
                                isRelevance: true,
                                token: '456c1a1va3va'
                            },
                            {
                                name: '数据集2',
                                type: 'number',
                                labels: ['789', '999'],
                                isRelevance: false,
                                token: 'faklfa1023a1g23a1ga3g'
                            }
                        ],
                    },
                    {
                        name: '数据集二',
                        _expanded: false,
                        childrenData: [
                            {
                                name: '数据集3',
                                type: 'string',
                                labels: ['123', '456'],
                                isRelevance: true,
                                token: '456c1a1va3va'
                            },
                            {
                                name: '数据集4',
                                type: 'number',
                                labels: ['789', '999'],
                                isRelevance: false,
                                token: 'faklfa1023a1g23a1ga3g'
                            }
                        ]
                    },
                    {
                        name: '数据集三',
                        _expanded: false,
                    },
                    {
                        name: '数据集四',
                        _expanded: false,
                    }
                ],

            }
        },
        methods: {
            expand (row, status) {
                // console.log(row);
                row._expanded = status
                const index = this.data9.findIndex(item => item.name === row.name)
                this.$set(this.data9[index], '_expanded', status)
            },
            onRowClick (row, index) {
                const status = !row._expanded
                this.$set(this.data9[index], '_expanded', status)
// this.$set(this.data[index], "highlight",status);
            }
        },
    }
</script>
<style scoped>
.action-btn {
  color: #2d8cf0;
  cursor: pointer;
}
.action-line {
  width: 1px;
  height: 14px;
  display: inline-block;
  background-color: #eee;
  margin: 0 8px;
  vertical-align: middle;
}
/deep/.ivu-table-expanded-cell{
  padding: 0px;
}
/deep/.ivu-table:before {
  height: 0px;
}
/deep/ .ivu-table-cell{
    padding-left: 0px;
}
/deep/ .ivu-table:before {
        background: white;
      }
</style>
