<template>
  <ul class="pagination">
    <li class="page-item" v-if="page !== 1" @click="adjustPage(-1)">
      <a href="#" class="page-link" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-if="page !== 1" @click="setPage(1)">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item" v-if="page > 2">
      <a class="page-link" href="#">...</a>
    </li>
    <li class="page-item" v-if="page > 2" @click="adjustPage(-1)">
      <a class="page-link" href="#">{{page-1}}</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#">{{page}}</a>
    </li>
    <li class="page-item" v-if="hasNextPage" @click="adjustPage(1)">
      <a class="page-link" href="#">{{page+1}}</a>
    </li>
    <li class="page-item" v-if="hasNextPage" @click="adjustPage(1)">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    page: Number,
    hasNextPage: Boolean,
  },
  methods: {
    adjustPage: function (page) {
      this.$emit("adjustPage", page);
    },
    setPage: function (page) {
      this.$emit("setPage", page);
    },
  },
};
</script>

<style>
</style>