<template >
    <div class="bg">
        <a-form class="form" :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
            autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="Username" name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item label="Password" name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password" />
            </a-form-item>

            <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit" @click="handleEnter">Enter</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

import router from '@/router';


export default defineComponent({
    setup() {
        const formState = reactive({
            username: '',
            password: '',
            remember: false,
        });
        const onFinish = values => {
            console.log('Success:', values);
        };
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        // 登录按钮
        const handleEnter = () => {
            router.push("/homepage/list");
        }

        return {
            formState,
            onFinish,
            onFinishFailed,
            handleEnter,
        };
    },
});


</script>

<style lang="less" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/img/login/login.jpg);
    background-size: cover;
    position: relative;

    .form {
        width: 400px;
        height: 350px;
        background: url(../assets/img/login/login2.jpg);
        position: absolute;
        left: 10%;
        top: 25%;
        padding-top: 70px;
        padding-right: 30px;
        color: aliceblue;

        .ant-form-item-label>label {
            color: #fafafa !important;
        }
    }
}
</style>