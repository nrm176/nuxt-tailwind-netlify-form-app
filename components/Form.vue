<template>
  <form
      class="w-full max-w-lg"
      name="simpleContactFormVersion2"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      id="simple-contact-form-version-2"
      action="/thankyou/"
  >
    <input type="hidden" name="form-name" value="simpleContactFormVersion2"/>
    <!-- First and last name -->
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
        >
          姓
        </label>
        <input
            name="last_name"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="徳川"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
        >
          名
        </label>
        <input
            name="first_name"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="家康"
        />
      </div>
    </div>
    <!-- Email -->
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-email"
        >
          E-mail
        </label>
        <input
            name="user_email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="email"
        />
      </div>
    </div>
    <!-- Text Message -->
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-message"
        >
          Message
        </label>
        <textarea
            name="inquiry_text_area"
            class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="grid-message"
        ></textarea>
      </div>
    </div>
    <!-- Submit Button -->
    <div data-netlify-recaptcha="true"></div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
            class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
            type="submit"
        >
          送信
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>
</template>