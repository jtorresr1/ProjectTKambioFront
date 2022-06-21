<template>
  <div class="body_main">
    <h1 class="title_main"> Generador de reportes TK</h1>
    <TableMain/>
    <button class="button_generate" @click="onShowModal">
      <span class="button_generate_text">
        Crear reporte
      </span>
    </button>
    <ModalMain :show='showModal' @close="onCloseModal"/>

  </div>

</template>

<script>

  import TableMain from "@/components/Table/Table";
  import ModalMain from "@/components/Modal/Modal";

  export default {
    name : 'BodyMain',
    components: {
      TableMain,
      ModalMain
    },
    data(){
      return{
        showModal : false
      }
    },
    methods : {
      onShowModal(){
        this.showModal = true;
      },
      onCloseModal(){
        this.showModal = false;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "style";
</style>