<template>
    <div class="flex-container">
        <div style="display: flex; flex-direction: column;">
            <div><label>NAME</label></div>
            <div><input class="form-control" style="width: 100px;" v-model="name" required maxlength="70"></div>
        </div>
        <div style="display: flex; flex-direction: column; padding-left:30px;">
            <div><label>AMOUNT</label></div>
            <div><input type="number" class="form-control" style="width: 100px;" v-model="amount" value="0" min="0" required></div>
        </div>
        <div style="padding-left:30px; vertical-align: bottom; margin-top: auto;">
            <!--<button class="btn btn-primary" :disabled="!(paymentForm.valid && $services.$generator.isPlaying)">+ ADD</button>-->
            <button class="btn btn-primary" @click="add" :disabled="!(name!=='' && amount>0 && $services.$generator.isPlaying)">+ ADD</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: "",
            amount: 0
        }
    },
    methods: {
        add() {
            this.$services.$payment.addPayment(this.name, this.amount);
            this.name="";
            this.amount=""; 
        }
    }
}
</script>

<style scoped>
    .flex-container {
        display: flex;
        flex-direction: row;
    }
</style>