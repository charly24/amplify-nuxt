# amplify-nuxt

Amplifyを利用してCognitoでの認証をNuxtで行うためのサンプル。
Federation ID ProviderとしてGoogleとOneLoginのIdPでSAML Test Connector（Advance）を利用した際の挙動までは動作確認している。

## Settings
.envとして以下を設定する必要があります。
```
AWS_AMPLIFY_AUTH_REGION=ap-northeast-1
AWS_AMPLIFY_AUTH_USER_POOL_ID=ap-northeast-1_xxx
AWS_AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID=1oo4p1jxxxxx
AWS_COGNITO_DOMAIN=xxx.auth.ap-northeast-1.amazoncognito.com
AWS_COGNITO_OAUTH_SCOPE=email|profile|openid|aws.cognito.signin.user.admin
AWS_COGNITO_REDIRECT_SIGN_IN=http://localhost:3001
AWS_COGNITO_REDIRECT_SIGN_OUT=http://localhost:3001
AWS_COGNITO_RESPONSE_TYPE=code
```
## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3001
$ yarn run dev --port=3001
```
