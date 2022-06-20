<template>
  <headerMain />
  <BodyMain />
</template>

<script>
import headerMain from "@/components/Header/Header";
import BodyMain from "@/components/Body/Body";

export default {
  name: 'PageMain',
  components: {
    BodyMain,
    headerMain,
  },


}
</script>

<style lang="scss" scoped>

</style>
