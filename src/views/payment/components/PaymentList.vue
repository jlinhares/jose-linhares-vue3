<template>
    <h4>PAYMENT LIST</h4>
    <div class="list-group"  >
        <div class="list-group-item" style="background-color: #eee;">
            <div class="flex-container">
                <div class="list-group-item-element">NAME</div>
                <div class="list-group-item-element">AMOUNT</div>
                <div class="list-group-item-element">CODE</div>
                <div class="list-group-item-element">GRID</div>
            </div>
        </div>
        <div class="list-group" >
            <div class="list-group-item" v-for="(payment, index) in $services.$payment.payments" :key="index">
                <div class="flex-container">
                    <div class="list-group-item-element" style="flex-grow: 9;">
                        {{payment.name}}
                    </div>
                    <div class="list-group-item-element">
                        {{payment.amount}}  
                    </div>
                    <div class="list-group-item-element">
                        {{payment.code}} 
                    </div>
                    <div class="list-group-item-element">
                        {{payment.grid.length}} 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted: function(){
        this.$services.$eventbus.on('payment', ()=> {
            this.$forceUpdate();
        });
    }

}
</script>

<style>
.flex-container {
    display: flex;
    flex-direction: row;
}

.list-group {
    padding-left: 0;
    margin-bottom: 20px;
}


.list-group-item:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid #ddd;
}

.list-group-item:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.list-group-item {
    position: relative;
    display: block;
    padding: 0px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}

.list-group-item-element {
    width: 100px;
    padding: 10px 10px;
    border-left: 1px solid #ddd;
    text-align: center;
}

.list-group-item-element:first-child {
    flex-grow: 9;
    padding: 10px 0px;
    border-left: none;
    text-align: left;
}

.list-group-item-element:last-child {
    padding: 10px 0px;
    padding-left:  10px;
}
</style>