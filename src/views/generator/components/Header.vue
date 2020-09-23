<template>
    <div class="flex-container">
    
        <div style="flex-grow: 9;">
            <div style="display: flex; flex-direction: column;">
                
                <div><label>Character</label></div>
                <div><input class="form-control" style="width: 100px;" maxlength="1" @keyup="lettersOnly" type="text" :disabled="!$services.$generator.isPlaying" v-model="$services.$generator.character" ></div>
                
            </div>
        </div>
        <div style="display:flex; align-items:center;">
            <button type="button" class="btn btn-primary" title="GENERATE 2D GRID" @click="onclick()" :disabled="$services.$generator.isPlaying">
                GENERATE 2D GRID
            </button>
        </div>
   
    </div>
</template>

<script>
export default {
    methods: {
        lettersOnly(ev){ 
            if (ev.key.length === 1) {
                const newLetter = ev.key.replace(/[^a-z]/g, '');
                if (ev.target.value !== newLetter) {
                    ev.target.value = newLetter;
                    //this.charChange.emit(newLetter);
                    this.$services.$generator.character = newLetter;
                    setTimeout(() => { this.disabledInput = false; }, 4000);
                }
            }
        }, 
        onclick() {
            this.$services.$generator.start();
        }
    },
    mounted: function() {
        this.$services.$eventbus.on('grid-change', () => {
            this.$forceUpdate();
        });
    }
}
</script>

<style >
    .flex-container {
        display: flex;
        flex-direction: row;
    }
</style>