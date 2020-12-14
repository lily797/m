<template>
  <div>
      <search-reset></search-reset>
      <report-data></report-data>
      <date-list></date-list>
  </div>
</template>

<script>
import searchReset from '../../components/common/searchReset.vue'
import reportData from '../../components/common/reportData.vue'
import dateList from '../../components/common/dateList.vue'
export default {
    components:{
        'search-reset': searchReset,
        'report-data': reportData,
        'date-list': dateList
    }
}
</script>

<style>

</style>