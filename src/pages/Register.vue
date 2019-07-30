<template>
  <div>
    <RegisterSearch class="register-search"/>
    <RegisterList/>
  </div>
</template>
<script>
import RegisterSearch from "../components/RegisterSearch"
import RegisterList from "../components/RegisterList"
export default {
  name: "Register",
  components:{
    RegisterSearch,
    RegisterList
  }
}
</script>