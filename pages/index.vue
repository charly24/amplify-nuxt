<template>
  <section class="container">
    <div>
      <logo/>
      <no-ssr>
        <amplify-authenticator :auth-config="authConfig"/>
        <amplify-sign-out/>
      </no-ssr>
    </div>
  </section>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        authConfig: {
          // 通常のログイン
          signInConfig: {
            header: 'Sign in !!'
          },
          // 登録
          signUpConfig: {
            hideDefaults: true,
            signUpFields: [
              { label: 'Name', key: 'name', required: true, type: 'text', displayOrder: 0 },
              { label: 'Email', key: 'username', required: true, type: 'email', displayOrder: 1 },
              { label: 'Password', key: 'password', required: true, type: 'password', displayOrder: 2 }
            ]
          },
          // 登録confirm
          confirmSignUpConfig: {},
          // パス忘れ
          forgotPasswordConfig: {},
          // MFA
          confirmSignInConfig: {}
        }
      }
    }
  }
</script>
