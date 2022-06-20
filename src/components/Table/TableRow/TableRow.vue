<template>
  <tr>
    <td class="TBody_main TBody_main_title align_left">
        {{ report.title }}
    </td>
    <td class="TBody_main">
        <div class="TBody_main_creation align_center">
          {{ report.created_at}}
        </div>
    </td>
    <td class="TBody_main_action align_right">
      <a :href='report.report_link' class="TBody_main">
        <span>Descargar</span>
        <img class="imageHref" alt="Download File" src="@/assets/Download.svg">
      </a>
    </td>
  </tr>
</template>

<script>
import {formatToDate} from "@/utils/utils";

export default {
  name : 'TableRow',
  data(){
    return{
      report : Object,
    }
  },
  props:{
    reportData: {
      type: Object,
      required : true
    }
  },
  created() {
    this.report = {
      id: this.reportData.id,
      title: this.reportData.title,
      report_link: this.reportData.report_link,
      created_at: formatToDate(this.reportData.created_at),
    };
  }

}
</script>

<style lang="scss" scoped>
  @import "style.scss";
</style>