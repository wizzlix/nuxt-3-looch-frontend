<template>
  <div>
    <Multiselect
        v-model="value"
        mode="tags"
        placeholder="Выберете элементы..."
        :options="options"
        :searchable="true"
        :createTag="false"

    />
  </div>
</template>

<script>
import Multiselect from 'assets/js/@vueform/multiselect'

export default {
  components: { Multiselect },
  data() {
    return {
      value: [],
      options: [
        { label: '2.4 Сцинтиблок : ЛУЧ.602.01.02.00 - TH7345 154-09.19', value: 1 },
        { label: 'Адаптер USB-4UART : ОКР.057.00.02.00 - 22-51-2', value: 2 },
        { label: 'Адаптер USB-BLE5-BT52 : ЛУЧ.950.00.04.00 - 21-371-2', value: 3 }
      ]
    }
  }
}
</script>

<style src="assets/js/@vueform/multiselect/themes/default.css"></style>

<style lang="scss">

.multiselect-tag {
  position: relative;
  display: inline-block;
  padding: 4px 4px 4px 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: #fff;
  line-height: 1;
  background: $main-blue;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
}

.multiselect__option--highlight {
  background: $main-blue;
  outline: none;
  color: #fff;
}

.multiselect__tag-icon:after {
  content: "\D7";
  color: #000;
  font-size: 14px;

  &:hover{
    border-top-color:$main-blue;
  }
}

.multiselect__tags {
  border: 0px solid #e8e8e8;
}

.multiselect__tag-icon:hover {
  background-color: $main-blue
}


</style>