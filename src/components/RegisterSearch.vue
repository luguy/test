<template>
  <div :style="{ height: '100px', margin: '10px 16px', padding: '10px', background: '#fFf' }">
    <a-form :layout="formLayout">
      <!-- <a-form-item
        label="Form Layout"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-radio-group
          default-value="horizontal"
          @change="handleFormLayoutChange"
        >
          <a-radio-button value="horizontal">
            Horizontal
          </a-radio-button>
          <a-radio-button value="vertical">
            Vertical
          </a-radio-button>
          <a-radio-button value="inline">
            Inline
          </a-radio-button>
        </a-radio-group>
      </a-form-item> -->
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

    </a-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterSearch',  
  data () {
    return {
      formLayout: 'inline',
    };
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
