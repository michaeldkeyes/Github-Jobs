<template>
  <div id="app" class="container my-4">
    <h1 class="mb-4">Github Jobs</h1>
    <SearchForm @fetchJobs="fetchJobs" @setPage="setPage" />
    <h1 v-if="loading">Loading...</h1>
    <h1 v-if="error">Error. Try Refreshing</h1>
    <JobsPagination
      :page="page"
      :hasNextPage="hasNextPage"
      @setPage="setPage"
      @adjustPage="adjustPage"
    />
    <Job v-for="job in jobs" :key="job.id" :job="job" />
    <JobsPagination :page="page" :hasNextPage="hasNextPage" />
  </div>
</template>

<script>
const axios = require("axios");
import Job from "./components/Job";
import JobsPagination from "./components/JobsPagination";
import SearchForm from "./components/SearchForm";

export default {
  name: "App",
  components: {
    Job,
    JobsPagination,
    SearchForm,
  },
  data: function () {
    return {
      jobs: [],
      loading: false,
      error: false,
      params: {},
      page: 1,
      hasNextPage: false,
      BASE_URL:
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
    };
  },
  methods: {
    fetchJobs: function (params, page = 1) {
      const cancelToken1 = axios.CancelToken.source();
      this.loading = true;
      this.jobs = [];
      this.hasNextPage = false;
      axios
        .get(this.BASE_URL, {
          cancelToken: cancelToken1.token,
          params: { markdown: true, page: page, ...params },
        })
        .then((res) => {
          this.loading = false;
          this.jobs = res.data;
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          this.loading = false;
          this.error = true;
          this.jobs = [];
          console.log(e);
        });

      const cancelToken2 = axios.CancelToken.source();
      axios
        .get(this.BASE_URL, {
          cancelToken: cancelToken2.token,
          params: { markdown: true, page: page + 1, ...params },
        })
        .then((res) => {
          if (res.data.length !== 0) {
            this.hasNextPage = true;
          }
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          this.loading = false;
          this.error = true;
          console.log(e);
        });

      return () => {
        cancelToken1.cancel();
        cancelToken2.cancel();
      };
    },
    adjustPage: function (amount) {
      this.page += amount;
    },
    setPage(page) {
      this.page = page;
    },
  },
  created: function () {
    this.fetchJobs(this.params, this.page);
  },
  watch: {
    page() {
      this.fetchJobs(this.params, this.page);
    },
  },
};
</script>

<style>
</style>
