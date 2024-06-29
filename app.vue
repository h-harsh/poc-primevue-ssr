<script setup>
import { ref } from 'vue'
import { useAsyncData } from 'nuxt/app'

// Reactive state
const value = ref(null)
let starCount = 0
const maxStars = 5
let isAnimationRunning = false

// Async data fetching
const { data } = useAsyncData('fetchData', () =>
  Promise.resolve({ message: 'This is server-side rendered content' })
)

function startAnimation() {
  if (isAnimationRunning) {
    return
  }

  let a = document.getElementById('charging')

  const intervalId = setInterval(function () {
    if (starCount < maxStars) {
      a.innerHTML += `
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 25 25" fill="none">
        <path d="M24.6176 9.69633C24.5627 9.52224 24.4599 9.36716 24.3208 9.24895C24.1817 9.13073 24.0121 9.05417 23.8314 9.02808L16.7296 7.99294L13.5455 1.55934C13.4549 1.40731 13.3264 1.28142 13.1725 1.194C13.0186 1.10657 12.8446 1.06061 12.6676 1.06061C12.4906 1.06061 12.3167 1.10657 12.1628 1.194C12.0089 1.28142 11.8804 1.40731 11.7897 1.55934L8.60569 7.99294L1.50384 9.02808C1.32318 9.05417 1.15356 9.13073 1.01448 9.24895C0.875402 9.36716 0.772516 9.52224 0.717658 9.69633C0.659093 9.86978 0.650142 10.0561 0.691814 10.2344C0.733487 10.4127 0.824125 10.5758 0.953513 10.7053L6.11611 15.7106L4.89753 22.7863C4.86664 22.9684 4.88705 23.1556 4.95647 23.3269C5.02589 23.4981 5.14159 23.6467 5.29062 23.7559C5.43989 23.8623 5.61592 23.9248 5.79884 23.9363C5.98176 23.9479 6.16427 23.9081 6.32576 23.8214L12.6676 20.4801L19.0226 23.8214C19.1632 23.8985 19.3209 23.9391 19.4812 23.9393C19.6874 23.937 19.8881 23.8731 20.0577 23.7559C20.2068 23.6467 20.3225 23.4981 20.3919 23.3269C20.4613 23.1556 20.4817 22.9684 20.4508 22.7863L19.2192 15.7106L24.3686 10.7053C24.5003 10.5772 24.5934 10.4147 24.6374 10.2364C24.6814 10.0581 24.6745 9.87097 24.6176 9.69633Z" fill="#41B883"/>
      </svg>
    `
      starCount++
    } else {
      clearInterval(intervalId)
      isAnimationRunning = false
    }
  }, 1200)

  isAnimationRunning = true
}
</script>

<template>
  <div class="main-wrapper">
    <div class="main-container">
      <div class="hero-section">
        <div class="logo">
          <img src="./assets/primevue.svg" alt="logo" />
          <img src="./assets/primevue-text-white.svg" alt="logo-text" />
        </div>
        <div class="hero-content">
          <h1>Start your next project with powerful PrimeVue</h1>
          <span>We strongly advise you to explore the <a href="https://primevue.org/configuration/" target="_blank" class="doc-text">PrimeVue documentation</a> to enhance your skills.</span>
        </div>
      </div>

      <div class="grid-section">
        <div id="components" class="card forms">
          <div class="form-wrapper">
            <FloatLabel class="form-input-wrapper">
              <InputText id="username" class="form-input" v-model="value" />
              <label for="username">Username</label>
            </FloatLabel>
            <Button class="form-button p-button-sm" label="Button" />
          </div>

          <a href="https://primevue.org/installation" target="_blank" class="card-footer-link">
            <span>Components</span>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>

        <div class="card primeland">
          <a href="https://discord.gg/j2DQFtPD8z" target="_blank">
            <img src="./assets/primeland.svg" alt="primeland" />
          </a>
        </div>

        <div class="card discussions">
          <a href="https://github.com/orgs/primefaces/discussions" target="_blank">
            <img src="./assets/discussions.svg" alt="primeland" />
          </a>
        </div>

        <div class="card github">
          <div class="github-wrapper" @mouseenter="startAnimation">
            <img src="./assets/github.svg" alt="github" />
            <div id="charging" class="stars" style="display: flex; gap: 1.5rem"></div>
          </div>
          <a href="https://github.com/primefaces/primevue" target="_blank" class="card-footer-link">
            <span>Please star PrimeVue on GitHub</span>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>

        <div class="card templates">
          <img src="./assets/primetemplates.png" alt="prime-template" class="box-image" />
          <a href="https://primevue.org/templates/" target="_blank" class="card-footer-link">
            <span>Vue Templates Powered by PrimeVue</span>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>

        <div class="card blocks">
          <img src="./assets/primeblocks.png" alt="prime-template" class="box-image" />
          <a href="https://blocks.primevue.org/" target="_blank" class="card-footer-link">
            <span>400+ Ready to Use UI Blocks</span>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>

        <div class="card primeone">
          <img src="./assets/primeone.png" alt="prime-template" class="box-image" />
          <a href="https://primevue.org/uikit/" target="_blank" class="card-footer-link">
            <span>Figma UI Kit</span>
            <i class="pi pi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-content">
        <a href="https://github.com/primefaces/primevue/blob/master/LICENSE.md" target="_blank" class="license">PrimeVue - MIT License</a>
        <a class="footer-logo">
          <img src="./assets/primevue.svg" alt="logo" />
        </a>

        <div class="socials">
          <a href="https://github.com/primefaces/primevue" target="_blank">
            <i class="pi pi-github"></i>
          </a>
          <a href="https://discord.gg/j2DQFtPD8z" target="_blank">
            <i class="pi pi-discord"></i>
          </a>
          <a href="https://twitter.com/primevue" target="_blank">
            <i class="pi pi-twitter"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Display async data fetched during SSR -->
    <div v-if="data" class="ssr-content">
      <p>{{ data.message }}</p>
    </div>
  </div>
</template>


