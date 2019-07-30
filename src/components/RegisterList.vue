<template>
    <a-table class="components-table-demo-nested" :style="{ height: '480px', margin: '10px 16px', padding: '10px', background: '#fff' }" :columns="columns" :dataSource="pageData" :pagination="{ pageSize: 10 }" :scroll="{ y: 350 }" />
</template>
<script>
const columns = [{
  title: '挂号编号',
  align: 'center',
  dataIndex: 'num',
  width: 100,
}, {
  title: '挂号费（元）',
  align: 'center',
  dataIndex: 'cost',
  width: 100,
}, {
  title: '科室名称',
  align: 'center',
  dataIndex: 'deptId',
  width: 50,
}, {
  title: '医生姓名',
  align: 'center',
  dataIndex: 'doctorId',
  width: 50,
}, {
  title: '患者姓名',
  align: 'center',
  dataIndex: 'patientName',
  width: 50,
}, {
  title: '挂号时间',
  align: 'center',
  dataIndex: 'createTime',
  width: 50,
}, {
  title: '操作员',
  align: 'center',
  dataIndex: 'operator',
  width: 50,
}, {
  title: '号类型',
  align: 'center',
  dataIndex: 'type',
  width: 50,
}, {
  title: '状态',
  align: 'center',
  dataIndex: 'status',
  width: 50,
}, {
  title: '操作',
  align: 'center',
  dataIndex: 'age',
  width: 50,
}
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name:  `luguy ${i}`,
    age: 32,
    deptName: `hxy ${i}`,
  });
}

import axios from 'axios'

export default {
  name: "RegisterList",
  data() {
    return {
      data,
      columns,
      pageData: null,
    }
  },
  mounted () {
      axios
        .get('http://localhost:8888/registration/list')
        .then(response => (this.pageData = response.data.data.content))
        .catch(function (error) { // 请求失败处理
          console.log(error);
      });
  }
}
</script>

<style>
 
</style>

