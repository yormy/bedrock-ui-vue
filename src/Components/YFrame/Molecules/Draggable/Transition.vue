<template>
  <div class="flex flex-wrap ">
    <div class="w-1/5">
      <button class="y-btn y-btn-secondary" @click="sort">
        To original order
      </button>
    </div>

    <div class="w-1/2">
      <h3>Transition</h3>
      <draggable
        v-model="list"
        class="flex flex-col pl-0 mb-0 border rounded border-gray-300"
        tag="ul"
        v-bind="dragOptions"
        @end="isDragging = false"
        @start="isDragging = true"
      >
        <transition-group name="flip-list" type="transition">
          <li
            v-for="element in list"
            :key="element.order"
            class="relative block py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline"
          >
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              aria-hidden="true"
              @click="element.fixed = !element.fixed"
            ></i>
            {{ element.name }}
          </li>
        </transition-group>
      </draggable>
    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

export default {
  name: "transition-example",
  display: "Transition",
  order: 6,
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return {name, order: index + 1};
      })
    };
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
