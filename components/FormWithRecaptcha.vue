<template>
  <form
      ref="form"
      action="/thankyou"
      method="post"
      @submit.prevent="onSubmit"
      data-netlify="true"
      data-netlify-recaptcha="true"
      name="simpleContactFormVersion"
      id="simpleContactFormVersion"
      class="w-full max-w-lg"
  >
    <div class="flex flex-wrap -mx-3 mb-6">
      <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name">姓</label>
      <input
          name="last_name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="徳川"
      />
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
      >名</label>
      <input
          name="first_name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="家康"
      />
    </div>
    <recaptcha @error="onError" @success="onSuccess" @expired="onExpired"/>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
            class="shadow bg-green-500 bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
            type="submit"
        >
          送信
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>

  </form>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      isDisabled: true
    }
  },
  methods: {
    onError(error) {
      console.log('Error happened:', error)
      this.token = ''
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
      this.token = token
      this.isDisabled = false
      // here you submit the form
      // this.$refs.form.submit()
    },
    onExpired() {
      console.log('Expired')
    }
  }
}
</script>

<style>
  button[type="submit"][disabled] {
    opacity: .4;
  }
</style>