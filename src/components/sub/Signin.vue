<template>
  <mu-flat-button color="white" label="Sign in with Google" slot="right" @click="authenticate('google')" class="desktop-only" />
  <mu-menu-item title="Sign in with Google" @click="authenticate('google')" class="mobile-only" />
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  methods: {
    authenticate(network) {
      const hello = this.hello;
      hello(network).login().then(() => {
        const authRes = hello(network).getAuthResponse();
        /*
          performs operations using the token from authRes
        */
        hello(network).api('me').then(function (json) {
          const profile = json;
          /*
            performs operations using the user info from profile
          */
        });
      })
    },
    onSignInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      const authRes = googleUser.getAuthResponse(true)
      const accessToken = authRes.access_token
      this.updateSocialToken(accessToken)
      const userInfo = {
        socialId: profile.Eea,
        email: profile.U3,
        name: profile.ig,
        network: 'google'
      }
      this.updateUserInfo(userInfo);

      this.axios.post('/auth', {
        network: 'google',
        socialToken: accessToken
      }).then(res => {
        if (res.status == 200) {
          const serverToken = res.data.token;
          this.updateServerToken(serverToken);

          const userId = res.data.data._id;
          this.updateUserInfo({ userId });
        }
      }).catch(err => {
        this.pino.error(err);
      })
    },
    onSignInError(error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    ...mapMutations(['updateSocialToken', 'updateServerToken', 'updateUserInfo'])
  }
}
</script>

<style scoped lang=scss>
@import "node_modules/bourbon/app/assets/stylesheets/_bourbon.scss";
@import "node_modules/bourbon-neat/app/assets/stylesheets/_neat.scss";
.desktop-only {
  @include media(max-width 767px) {
    display: none;
  }
}

.mobile-only {
  @include media(768px) {
    display: none;
  }
}
</style>
