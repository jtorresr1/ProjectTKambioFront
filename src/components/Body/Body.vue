<template>
  <div class="body_main">
    <h1 class="title_main"> Generador de reportes TK</h1>
    <TableMain/>
    <button> Crear reporte</button>
  </div>

</template>

<script>

  import TableMain from "@/components/Table/Table";

  export default {
    name : 'BodyMain',
    components: {
      TableMain
    }
  }
</script>
<style lang="scss" scoped>
  @import "style";
</style>