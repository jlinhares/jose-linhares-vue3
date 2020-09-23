<template>
    <div v-if="$services.$generator.grid" class="grid-container" >
        <div class="grid-cell" v-for="(value, index) in $services.$generator.grid" :key="index">{{value}}</div>
    </div>
    <div v-else class="grid-warning">Please, start generating grid</div>
</template>

<style scoped>
.grid-container{
    display: grid;
    grid-template-columns:  repeat(10, auto);
    justify-items: stretch;
    grid-gap: 1px;
    background-color: darkslategray;
    border: 1px solid darkslategray;
    margin-top: 10px ;

}

.grid-cell {
    font-size: 20px;
    padding: 4px;
    font-weight: bold;
    background-color: white;
    text-align: center;
    vertical-align: bottom;
}

.grid-warning{
    font-size: 25px;
    font-weight: bold;
    color: red;
    text-align: center;
}
</style>

<script>
export default {
    mounted: function(){
        this.$services.$eventbus.on('grid-change', ()=> {
            this.$forceUpdate();
        });
    }
}
</script>