<template>
  <section class="container">
    <div>
      <no-ssr>
        <amplify-authenticator :auth-config="authConfig"/>
        <button @click="loginWithGoogle">Google</button>
        <button @click="loginWithSAML">SAML</button>
        <amplify-sign-out/>
      </no-ssr>
    </div>
  </section>
</template>

<script>
  import { Auth } from 'aws-amplify'
  const getLoginUrl = (provider) => {
    const config = Auth.configure()
    const clientId = config.userPoolWebClientId
    const {
      domain,
      redirectSignIn,
      redirectSignOut,
      responseType
    } = config.oauth
    return 'https://' + domain + '/oauth2/authorize?redirect_uri=' + redirectSignIn + '&response_type=' + responseType + '&client_id=' + clientId + '&identity_provider=' + provider;
  }

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
    },
    mounted() {
      Auth.currentAuthenticatedUser()
        .then(user => {
          console.log(user.username)
          console.log(user.signInUserSession.accessToken.payload.sub)
          console.log(user.signInUserSession.accessToken)
          console.log(user)
        })
        .catch(err => console.log(err))
    },
    methods: {
      loginWithGoogle: () => {
        window.location.assign(getLoginUrl('google'));
      },
      loginWithSAML: () => {
        window.location.assign(getLoginUrl('onelogin'));
      }
    }
  }
</script>
