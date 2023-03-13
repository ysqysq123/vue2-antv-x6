<style scoped>

</style>
<template>
    <div>
      <Table :columns="columns" :data="tableData">
        <template slot="label" slot-scope="{ row, index }">
          <div style="display: flex;">
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
            row: Object
        },
        data () {
          return {
            columns: [
              {
                title: '数据集名称',
                key: 'name'
              },
              {
                title: '数据集类型',
                key: 'type'
              },
              {
                title: '标签',
                key: 'labels',
                slot: 'label'
              },
              {
                title: '是否关联',
                key: 'isRelevance'
              },
              {
                title: '继承分组token',
                key: 'token'
              },
              {
                title: '操作',
                slot: 'action'
              }
            ],
            tableData: [
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
            ]
          }
        },
    };
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