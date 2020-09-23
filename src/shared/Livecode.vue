<template>
    <div class="dbox">
        <div class="livebox">
            <span :class="{'glyphicon': true, 'glyphicon-dot': true, 'dot-live': $services.$generator.isPlaying}" aria-hidden="true"></span>LIVE
        </div>
    </div>
    <div class="dbox">
        <div class="codebox" :style="{display: ($services.$generator.isPlaying) ? 'inline' : 'none'}">YOUR CODE: {{$services.$generator.code}} </div>
    </div>
</template>

<style scoped>
.glyphicon.glyphicon-dot:before {
    content: "\25cf";
    font-size: 1.6em;
}

.dot-live{
    color: red;
}

.dbox{
    text-align: center;
}

.codebox{
    display: inline;
    font-size: 20px;
    padding: 5px 20px;
    border: 1px solid darkslategray;
    border-radius: 3px;
}

.livebox{
    padding: 3px 10px;
    font-size: 20px;
}
</style>

<script>
export default {
    mounted: function() {
        this.$services.$eventbus.on('grid-change', () => {
            this.$forceUpdate();
        });
    }
}
</script>