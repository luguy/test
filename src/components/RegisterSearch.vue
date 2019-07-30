<template>
  <div :style="{ height: '100px', margin: '10px 16px', padding: '10px', background: '#fFf' }">
    <a-form :layout="formLayout">
      
      <a-form-item
        label="患者姓名"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input class="text-box" placeholder="input placeholder" />
      </a-form-item>
      
      <a-form-item
        label="状态"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-select class=".status-box" defaultValue="lucy" style="width: 120px" @change="handleChange">
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="disabled" disabled>Disabled</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
      </a-form-item>
      
      <a-form-item
        label="挂号日期"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
         <a-date-picker class="date-box" @change="onChange" />
        -
         <a-date-picker class="date-box" @change="onChange" />
      </a-form-item>

      <br>

      <a-form-item
        :wrapper-col="buttonItemLayout.wrapperCol"
      >
        <a-button type="primary">
          查询
        </a-button>
      </a-form-item>
      {{pageData2}}
      -------
      {{pageData}}
    </a-form>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'

export default {
  name: 'RegisterSearch',  
  data () {
    return {
      formLayout: 'inline',
      pageData: null,
      pageData2: null,
    };
  },
  mounted () {
      axios
        .get('http://localhost:8888/registration/list')
        .then(response => (this.pageData = response.data.data.content))
        .catch(function (error) { // 请求失败处理
          console.log(error);
      });
      PubSub.publish('list',this.pageData);
      PubSub.subscribe('list',(msg,data)=>{
        this.pageData2 = data;
      });
  },
  computed: {
    formItemLayout () {
      const { formLayout } = this;
      return formLayout === 'horizontal' ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      } : {};
    },
    buttonItemLayout () {
      const { formLayout } = this;
      return formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 4 },
      } : {};
    },
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
};
</script>
<style>
    .text-box{
        width: 150px
    }
    .date-box{
        width: 200px
    }
    .status-box{
        width: 100px
    }
</style>
