<template>
  <form>
    <div class="form-row align-items-end">
      <div class="form-group col">
        <label for="description">Description</label>
        <input class="form-control" name="description" type="text" v-model="description" />
      </div>
      <div class="form-group col">
        <label for="location">Location</label>
        <input class="form-control" name="location" type="text" v-model="location" />
      </div>
      <div class="form-group col-md-2 ml-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" name="full_time" v-model="full_time" />
          <label class="form-check-label" for="full_time">Only Full Time</label>
        </div>
      </div>
      <div class="form-group col-md-2">
        <button class="btn btn-primary" @click.prevent="search(params)">Search</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      description: "",
      location: "",
      full_time: false,
    };
  },
  methods: {
    search: function (params) {
      this.$emit("setPage", 1);
      this.$emit("fetchJobs", params);
    },
  },
  computed: {
    params() {
      return {
        description: this.description,
        location: this.location,
        full_time: this.full_time,
      };
    },
  },
};
</script>

<style>
</style>