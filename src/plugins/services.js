
import eventbus from "./services/eventbus";
import generator from "./services/generator";
import payment from "./services//payment";

Object.defineProperty(generator, '$eventbus', {value: eventbus}); // "injecting" eventbus

Object.defineProperty(payment, '$eventbus', {value: eventbus});  // "injecting" eventbus
Object.defineProperty(payment, '$generator',  {value: generator}); // "injecting" generator

export default {
    install: function (app, options) {
        app.config.globalProperties.$services =  {
            $eventbus: eventbus,
            $generator: generator,
            $payment: payment
        };
        app.provide('services', options);
    }
}