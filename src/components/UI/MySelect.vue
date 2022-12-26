<template>
    <select class="select" :value="modelValue" @change="changeOption">
        <option disabled value="">Выберите и списка</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'my-select',

    props: {
        modelValue: {
            type: String
        },

        options: {
            type: Array,
            default: () => []
        }
    },

    methods: {
        changeOption (event) {
            this.$emit('update:modelValue', event.target.value);
            console.log(event.target.value)
        }
    }
}
</script>

<style scoped>
.select {
    align-self: flex-end;
    margin: 15px 15px 0px 0px;
    padding: 10px;
    background: none;
    border: 2px solid black;
    border-radius: 10px;
}
</style>