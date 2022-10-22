<template>
  <div class="flex flex-wrap ">
    <div class="w-1/5">
      <div class="mb-4">
        <div
          aria-label="Basic example"
          class="relative inline-flex align-middle flex-col items-start justify-center buttons"
          role="group"
        >
          <button class="y-btn y-btn-secondary" @click="add">Add</button>
          <button class="y-btn y-btn-secondary" @click="replace">Replace</button>
        </div>

        <div class="relative block mb-2">
          <input
            id="disabled"
            v-model="enabled"
            class="absolute mt-1 -ml-6"
            type="checkbox"
          />
          <label class="text-gray-700 pl-6 mb-0" for="disabled">DnD enabled</label>
        </div>
      </div>
    </div>

    <div class="w-1/2">
      <h3>Draggable {{ draggingInfo }}</h3>

      <draggable
        :disabled="!enabled"
        :list="list"
        :move="checkMove"
        class="flex flex-col pl-0 mb-0 border rounded border-gray-300"
        ghost-class="ghost"
        @end="dragging = false"
        @start="dragging = true"
      >
        <div
          v-for="element in list"
          :key="element.name"
          class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <rawDisplayer :value="list" class="w-1/4" title="List"/>
  </div>
</template>

<script>
import draggable from "vuedraggable";

let id = 1;
export default {
  name: "simple",
  display: "Simple",
  order: 0,
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      list: [
        {name: "John", id: 0},
        {name: "Joao", id: 1},
        {name: "Jean", id: 2}
      ],
      dragging: false
    };
  },
  computed: {
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },
  methods: {
    add: function () {
      this.list.push({name: "Juan " + id, id: id++});
    },
    replace: function () {
      this.list = [{name: "Edgard", id: id++}];
    },
    checkMove: function (e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  }
};
</script>
<style scoped>
.buttons {
  margin-top: 35px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
