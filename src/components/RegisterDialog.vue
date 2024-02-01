<script setup>
import { ref, inject } from "vue";

const registerForm = ref({
  username: "",
  email: "",
  password: "",
});

const isLoading = ref(false);

function submit() {
  isLoading.value = true;
  console.table(registerForm.value);
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
}

// Listen to registerLoginDialog event
const bus = inject("$bus");
let registerOverlay = ref(false);

bus.$on("openRegisterDialog", () => {
  registerOverlay.value = true;
});

const openLoginDialog = () => {
  bus.$emit("openLoginDialog");
};
</script>

<template>
  <v-dialog
    v-model="registerOverlay"
    persistent
    no-click-animation
    class="align-center justify-center"
  >
    <v-card width="450" class="mx-auto">
      <v-toolbar>
        <v-toolbar-title>Register</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            icon
            variant="plain"
            size="small"
            @click="registerOverlay = false"
            :ripple="false"
          >
            <v-icon>fas fa-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form @submit.prevent="submit" fluid class="mx-5 mt-5">
        <v-text-field
          v-model="registerForm.username"
          label="Username"
          prepend-inner-icon="fas fa-user"
          type="text"
          autofocus
        ></v-text-field>
        <v-text-field
          v-model="registerForm.email"
          label="Email"
          prepend-inner-icon="fas fa-envelope"
          type="email"
        ></v-text-field>
        <!-- TODO: :rules="rules" -->
        <v-text-field
          v-model="registerForm.password"
          label="Password"
          type="password"
          prepend-inner-icon="fas fa-key"
        ></v-text-field>
        <!-- TODO: Add :disabled="dialog"
      :loading="dialog"-->
        <v-btn type="submit" block class="mt-2" color="primary" :disabled="isLoading" :loading="isLoading">Register</v-btn>
      </v-form>

      <v-card-actions class="justify-center"
        ><v-btn
          variant="plain"
          @click="(registerOverlay = false), openLoginDialog()"
          >Already registered? Login here</v-btn
        ></v-card-actions
      >
    </v-card>
  </v-dialog>
</template>
<style scoped></style>
