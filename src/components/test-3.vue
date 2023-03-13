<template>
    <Table :columns="columns10" :data="data9" :show-header="false">
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
    import expandRow from './table-expand.vue'
    export default {
        components: {
          expandRow,
        },
        data () {
            return {
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row,
                                    index: params.index
                                }
                            })
                        }
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        slot: 'action',
                        width: 180
                    }
                ],
                data9: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        job: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        job: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        job: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        job: 'Data Analyst',
                        interest: 'snooker',
                        birthday: '1988-7-25',
                        book: 'A Dream in Red Mansions',
                        movie: 'A Chinese Ghost Story',
                        music: 'actor'
                    }
                ]
            }
        }
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
</style>
