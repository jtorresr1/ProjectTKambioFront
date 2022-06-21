<template>
  <div class="table_div">
    <table class="table_main">
      <thead class="table_main_Theader">
      <tr class="table_main_Ttext">
        <th class="align_left"> Titulo </th>
        <th class="align_center"> Fecha de creación </th>
        <th class="align_right"> Acción </th>
      </tr>
      </thead>
      <tbody class="table_main_Tbody">
      <TableRow v-for="report in reports" :key="report.id" :reportData="report"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "@/components/Table/TableRow/TableRow";
import DataJSON from "@/assets/data/data.json"

export default {
  name : 'TableMain',
  data() {
    return {
      reports : []
    }
  },
  created() {
    this.reports = DataJSON.data;
  },
  components: {
    TableRow,
  }

}
</script>

<style lang="scss" scoped>
  @import "style";
</style>

