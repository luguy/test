<template>
    <div>
      部门管理
      {{info}}
    </div>
</template>
 
<script>
import axios from 'axios'
export default {
    name: 'Dept',
    data () {
      return {
        info: null
      }
    },
    mounted () {
      axios
        .get('http://localhost:8888/registration/list')
        .then(response => (this.info = response.data.data.content))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    }
}
</script>
 
<style scoped>
 
</style>