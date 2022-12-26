<template>
<input :value="modelValue" @input="updateInput" :placeholder="placeholder_text" type="text" class="input">
</template>

<script>
export default {
    name: 'my-input',

    props: {
        modelValue: [String, Number],
        placeholder_text: {type: String}
    },

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 15px;
  outline: none;
}
</style>