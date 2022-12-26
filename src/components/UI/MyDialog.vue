<template>
<div class="dialog" v-if="show === true" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
        <slot></slot>
    </div>
</div>
</template>

<script>

export default {
    name: 'my-dialog',

    props: {
        show: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        hideDialog () {
            this.$emit('update:show', false);
        }
    }
}
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog___content {
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 15px;
}
</style>