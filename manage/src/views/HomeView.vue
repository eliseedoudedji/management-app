<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-dark py-5">
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <div class="my-5 text-center text-xl-start">
            <h1 class="display-5 fw-bolder text-white mb-2">Manage your time</h1>
            <p class="lead fw-normal text-white-50 mb-4">
              Welcom to our time manager tool! Here, you can shedule every thing that you want!
            </p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
              <RouterLink class="btn btn-primary btn-lg px-4 me-sm-3" to="/register">Get Started</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
          <img class="img-fluid rounded-3 my-5" src="../assets/images/main.png" alt="..." />
        </div>
      </div>
    </div>
  </header>
  <section id="features" class="py-5">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h2 class="fw-bolder mb-0">Somme features here !</h2>
        </div>
        <div class="col-lg-8">
          <div class="row gx-5 row-cols-1 row-cols-md-2">
            <div class="col mb-5 h-100">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style="
                  justify-items: center;
                  align-items: center;
                  display: grid;
                  width: 60px;
                  padding: 10px 4px;
                ">
                <img src="../assets/images/calendar.png" alt="" style="width: 30px" />
              </div>
              <h2 class="h5">Calendar</h2>
              <p class="mb-0">
                You will have acces to a calendar that can help you to schedule correctely
              </p>
            </div>
            <div class="col mb-5 h-100">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style="
                  justify-items: center;
                  align-items: center;
                  display: grid;
                  width: 60px;
                  padding: 10px 4px;
                ">
                <img src="../assets/images/share.png" alt="" style="width: 30px" />
              </div>
              <h2 class="h5">Sharing</h2>
              <p class="mb-0">
                You have a fonctionality to share everything of your programs with others
              </p>
            </div>
            <div class="col mb-5 mb-md-0 h-100">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style="
                  justify-items: center;
                  align-items: center;
                  display: grid;
                  width: 60px;
                  padding: 10px 4px;
                ">
                <img src="../assets/images/user.png" alt="" style="width: 30px" />
              </div>
              <h2 class="h5">Create acount</h2>
              <p class="mb-0">
                You can create juste acount to have acces to all tools of this plateform
              </p>
            </div>
            <div class="col h-100">
              <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3" style="
                  justify-items: center;
                  align-items: center;
                  display: grid;
                  width: 60px;
                  padding: 10px 4px;
                ">
                <img src="../assets/images/advertising.png" alt="" style="width: 30px" />
              </div>
              <h2 class="h5">Meet us</h2>
              <p class="mb-0">Follow us on social media ! We want to know you more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container px-5 mt-5">
      <!-- Call to action-->
      <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5">
        <div
          class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
          <div class="mb-4 mb-xl-0">
            <div class="fs-3 fw-bold text-white">New feature, get information</div>
            <div class="text-white-50">Sign up for our newsletter for the latest updates.</div>
          </div>
          <div class="ms-xl-4">
            <div class="input-group mb-2">
              <input class="form-control" type="text" placeholder="Email address..." aria-label="Email address..."
                aria-describedby="button-newsletter" />
              <button class="btn btn-outline-light" id="button-newsletter" type="button">
                Sign up
              </button>
            </div>
            <div class="small text-white-50">
              We care about privacy, and will never share your data.
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>

  <footer class="bg-dark py-4 mt-auto">
    <div class="container px-5">
      <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="col-auto">
          <div class="small m-0 text-white">Copyright © Your Website 2023</div>
        </div>
        <div class="col-auto">
          <a class="link-light small" href="#!">Contact</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.hero {
  width: 100%;
  min-height: 80vh;
  position: relative;
  padding: 120px 0 60px 0;
  display: flex;
  align-items: center;
}

section,
.section {
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 60px 0;
  scroll-margin-top: 88px;
  overflow: clip;
}

.dark-background {
  --background-color: #37517e;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #4668a2;
  --contrast-color: #ffffff;
}
</style>