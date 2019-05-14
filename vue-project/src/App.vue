<template>
  <div class="container pt-2">
    <form action="" class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          v-model="email"
          @blur="$v.email.$touch()"
          >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqueEmail">This email is already exists</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          v-model="password"
          @blur="$v.password.$touch()"
        >
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
        </div>

      </div>
      <div class="form-group">
        <label for="confirm">Confirm Password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch()"
        >
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Password is not the same
        </div>

      </div>
      <button type="submit"
              class="btn btn-success"
              :disabled="$v.$invalid">Submit</button>
    </form>
  </div>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('Email', this.email, 'Pass',this.password)
      }
    },
    validations: {
      email: {
        required,
        email,
        uniqueEmail: function(newEmail) {
          return new Promise((resolve,reject) => {
            setTimeout(()=> {
              const value = newEmail !== 'test@mail.ru';
              resolve(value)
            },1000)
          })
        }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs('password')
      }

    }
  }
</script>

<style scoped>

</style>
