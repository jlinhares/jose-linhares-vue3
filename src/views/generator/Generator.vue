<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="container">
                    <app-header></app-header>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-grid></app-grid>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-livecode></app-livecode>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Grid from './components/Grid.vue';
import Livecode from '../../shared/Livecode.vue';

export default {
    components: {
        'app-header': Header,
        'app-grid': Grid,
        'app-livecode': Livecode
    }
}
</script>