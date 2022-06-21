<template>
  <Transition name="modalReport">
    <div v-if="show" class="modal-wrapper">
      <div class="modal">
        <div class="modal-header">
          <h1 class="modal-header_text">
            Reporte por fecha de nacimiento
          </h1>
          <span class="modal-header_textDescription">
            Ingresa los siguientes datos para generar tu reporte
          </span>
        </div>

        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div :class="'modal-body_description'" >
              <h3 class="modal-body_description_label">Descripción del reporte</h3>
              <input type="text" class="modal-body_description_input modal-body_description_input_text"
                     v-model="form.description" @change="changeDescription">
            </div>

            <div class="modal-body_dates">
              <h3 class="modal-body_dates_label">Fecha de nacimiento</h3>
              <div class="modal-body_dates_container">
                <div class="modal-body_description">
                  <h4 class="modal-body_description_label">Inicio</h4>
                  <input type="date" class="modal-body_dates_input modal-body_dates_input_text"
                         v-model="form.startDate" @change="changeStartDate">
                </div>
                <div class="modal-body_description">
                  <h4 class="modal-body_description_label">Fin</h4>
                  <input type="date" class="modal-body_dates_input modal-body_dates_input_text" v-model="form.endDate" @change="changeEndDate">
                </div>
              </div>
            </div>

            <div class="modal-body_buttonContainer">
              <button
                  :class="[!active ? 'modal-body_buttonContainer_buttonDisabled' : 'modal-body_buttonContainer_buttonEnabled',
                  'modal-body_buttonContainer_button']">
                  <span class="modal-body_buttonContainer_text">
                    Generar Reporte
                  </span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>

export default {
  name: 'ModalMain',
  emits: ['close'],
  props: {
    show: Boolean
  },
  data() {
    return {
      active: false,
      dataValid: [false, false, false],
      form: {
        description: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  methods: {
    submitForm() {
      if(!this.active){
        return;
      }
      const startDate = new Date(this.form.startDate).getTime()
      const endDate = new Date(this.form.endDate).getTime()
      if(startDate >= endDate){
        return;
      }
      this.cleanForm();
    },

    cleanForm(){
      this.form.description = '';
      this.form.startDate = '';
      this.form.endDate = '';
      this.$emit('close');
    },

    changeDescription(){
      let flag = true;
      if(this.form.description.length === 0){
        flag = false;
      }
      this.dataValid[0] = flag;
      this.active = this.activateButton();
    },

    changeStartDate(){
      let flag = true;
      if(this.form.startDate.length === 0){
        flag = false;
      }
      this.dataValid[1] = flag;
      this.active = this.activateButton();
    },

    changeEndDate(){
      let flag = true;
      if(this.form.endDate.length === 0){
        flag = false;
      }
      this.dataValid[2] = flag;
      this.active = this.activateButton();
    },

    activateButton(){
      let flag = true;
      this.dataValid.forEach(function (value){
        if(value === false){
          flag = false;
        }
      })
      return flag;
    }

  }
}
</script>


<style lang="scss" scoped>
@import "style";
</style>