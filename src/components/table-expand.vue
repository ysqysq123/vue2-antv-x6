<style scoped>

</style>
<template>
    <div>
      <Table :columns="columns" :data="row.childrenData" @on-row-click="onRowClick">
        <template slot="label" slot-scope="{ row }">
          <div style="display: flex;justify-content: center;align-items: center;">
            <div v-for="item in row.labels" :key="item" class="label">
              <div>{{ item }}</div>
            </div>
          </div>
        </template>
        <template slot="action" slot-scope="{ row, index }">
        <div style="display: flex;">
          <div class="action-btn"> 查看</div>
          <div class="action-line"></div>
          <div class="action-btn">复制</div>
          <div class="action-line"></div>
          <div class="action-btn">编辑</div>
          <div class="action-line"></div>
          <div class="action-btn">删除</div>
          <div class="action-line"></div>
          <div class="action-btn">成员</div>
        </div>
      </template>
      </Table>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object,
        },
        data () {
          return {
            columns: [
              {
                title: '数据集名称',
                key: 'name',
                align: 'center'
              },
              {
                title: '数据集类型',
                key: 'type',
                align: 'center'
              },
              {
                title: '标签',
                key: 'labels',
                slot: 'label',
                align: 'center'
              },
              {
                title: '是否关联',
                key: 'isRelevance',
                align: 'center'
              },
              {
                title: '继承分组token',
                key: 'token',
                align: 'center'
              },
              {
                title: '操作',
                width: 250,
                slot: 'action',
                align: 'center'
              }
            ],
          }
        },
        methods: {
          onRowClick(row) {
          console.log(this.$parent);
        }
        },
    }
</script>
<style scoped>
.label{
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  margin-right: 5px;
  background: #e6f7ff;
  border:1px solid #91d5ff;
  font-size: 12px;
  color: #91d5ff;
  border-radius: 3px;
}
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
</style>