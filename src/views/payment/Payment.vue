<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-livecode></app-livecode>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-payment-form ></app-payment-form>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-payment-list></app-payment-list>
            </div>
        </div>
    </div>
</template>

<script>

import Livecode from "../../shared/Livecode.vue";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";

export default {
    components:{
        "app-livecode": Livecode,
        "app-payment-form": PaymentForm,
        "app-payment-list": PaymentList
    }
}
</script>