<template>
    <van-tabs v-model:active="active" scrollspy sticky>
        <van-tab v-for="index in 20" :title="'tab' + index" :key="index">
            Items
            <div class="products">
                <van-row style="gap: 5px !important;">
                    <van-col v-for="item in 10" :key="item">
                        <van-card num="3" price="2.00" desc="Description" title="Title"
                            thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
                    </van-col>
                </van-row>
            </div>
        </van-tab>
    </van-tabs>
</template>
<script lang="ts">
import { ref } from 'vue';

export default {
    setup() {
        const active = ref(0);
        const beforeChange = (index: number) => {
            // prevent change
            if (index === 1) {
                return false;
            }

            // async
            return new Promise((resolve) => {
                resolve(index !== 3);
            });
        };

        return {
            active,
            beforeChange,
        };
    },
};
</script>

<style scoped>
.products {
    padding: 10px;
    background-color: #fff;
}
</style>