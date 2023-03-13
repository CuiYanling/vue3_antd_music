<template>
    <a-layout>
        <a-layout-header><TopBar></TopBar></a-layout-header>
        <a-layout-content>Content</a-layout-content>
        <a-layout-footer><BottomBar></BottomBar></a-layout-footer>
    </a-layout>
</template>

<script setup>
import TopBar from './TopBar.vue';
import BottomBar from './BottomBar.vue';

</script>