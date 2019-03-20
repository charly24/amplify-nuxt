import Vue from 'vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, components } from 'aws-amplify-vue'

Amplify.configure({
  Auth: {
    region: process.env.AWS_AMPLIFY_AUTH_REGION,
    userPoolId: process.env.AWS_AMPLIFY_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.AWS_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: process.env.AWS_AMPLIFY_AUTH_IDENTITY_POOL_ID
  }
})

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.component(components)
