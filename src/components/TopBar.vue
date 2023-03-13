<!-- 顶部导航栏 -->
<template>
    <div class="top">
        <span class="logo">
            <img src="../assets/img/topbar/logo.jpg" alt="">
        </span>
        <a-menu theme="dark" mode="horizontal">
            <a-menu-item key="1">头像+个人中心</a-menu-item>
            <a-menu-item key="2">设置</a-menu-item>
            <a-menu-item key="3">退出登录</a-menu-item>
        </a-menu>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        return {

        };
    },
});
</script>

<style lang="less" scoped>
.top {
    display: flex;
    justify-content: space-between;
    position: 'fixed';
    z-index: 1;
    width: '100%';

    .logo {
        img {
            width: 50px;
            height: 50px;
            display: inline;
        }
    }
}
</style>