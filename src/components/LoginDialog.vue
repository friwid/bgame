<script setup>
import { ref, inject } from "vue";

const bus = inject("$bus");
let loginOverlay = ref(false);

bus.$on("openLoginDialog", () => {
  loginOverlay.value = true;
});
</script>

<template>
  <v-dialog
    v-model="loginOverlay"
    persistent
    no-click-animation
    class="align-center justify-center"
  >
    <v-card width="450" class="mx-auto">
      <v-toolbar>
        <v-toolbar-title>Login</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            icon
            variant="plain"
            size="small"
            @click="loginOverlay = false"
            :ripple="false"
          >
            <v-icon>fas fa-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-sheet width="400" class="mx-auto mt-5 mb-5">
        <v-form @submit.prevent>
          <v-text-field
            v-model="firstName"
            :rules="rules"
            label="First name"
            autofocus
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>
<style scoped></style>
