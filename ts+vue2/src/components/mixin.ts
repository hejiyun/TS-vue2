import { Vue, Component } from 'vue-property-decorator';

 // 如果不定义vue/types/vue实现vue接口, 那么在引入的时候就需要继承该mixin类
declare module 'vue/types/vue' {
    interface Vue {
        mixinValue: string;
    }
}

@Component
export default class myMixins extends Vue {
    mixinValue: string = 'Hello World!!!'
}