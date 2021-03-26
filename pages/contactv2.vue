<template>
  <div class="container">
    <form
        ref="form"
        action="/thankyou"
        method="post"
        @submit.prevent="onSubmit"
        data-netlify="true"
        data-netlify-recaptcha="true"
        name="simpleContactFormVersion"
    >
      <input
          type="text"
          name="name"
          placeholder="Name"
      />
      <input
          type="email"
          name="emil"
          placeholder="Email"
      />
      <recaptcha @error="onError" @success="onSuccess" @expired="onExpired"/>
      <button
          type="submit"
      >
        Submit Form
      </button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    onSuccess(token) {
      console.log('Succeeded:', token)
      // here you submit the form
      // this.$refs.form.submit()
    },
    onExpired() {
      console.log('Expired')
    }
  }
}
</script>