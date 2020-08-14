<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <div class="card-title">
            {{job.title}} -
            <span class="text-muted font-weight-light">{{job.company}}</span>
          </div>
          <div
            class="card-subtitle text-muted mb-2"
          >{{new Date(job.created_at).toLocaleDateString()}}</div>
          <div class="badge badge-secondary mr-2">{{job.type}}</div>
          <div class="badge badge-secondary">{{job.location}}</div>
          <div style="word-break: break-all;">{{job.how_to_apply}}</div>
        </div>
        <img class="d-none d-md-block" height="50" :src="job.company_logo" :alt="job.company" />
      </div>
      <div class="card-text">
        <button
          class="btn btn-primary"
          type="button"
          @click="open = !open"
        >{{!open ? 'View Details' : 'Hide Details'}}</button>
      </div>
      <div v-if="open">
        <div class="mt-4">{{job.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: Object,
  },
  data: function () {
    return {
      open: false,
    };
  },
};
</script>

<style>
</style>