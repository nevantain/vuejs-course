<template>
<button class="btn">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    height: 40px;
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    border: 2px solid black;
    border-radius: 10px;
    cursor: pointer;
}
</style>
