<template>
  <div ref="dropdownRef" class="dropdown">
    <!-- Dropdown button -->
    <button @click="toggleDropdown">
      {{ selectedOption }}
      <svg :class="isOpen ? 'down' : ''" aria-hidden="true" class="icon icon-caret" role="presentation"
        viewBox="0 0 10 6">
        <path clip-rule="evenodd"
          d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
          fill="currentColor" fill-rule="evenodd"></path>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

export default {
  name: "DropDownButton",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    // Reactive variables
    const isOpen = ref(false); // Dropdown open/close state
    const selectedOption = ref(props.options[0]); // Currently selected option
    const dropdownRef = ref(null); // Reference to dropdown element

    // Toggle dropdown open/close state
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    // Select an option from the dropdown
    const selectOption = (option) => {
      selectedOption.value = option; // Update selected option
      isOpen.value = false; // Close the dropdown
    };

    // Close dropdown when clicking outside
    const closeDropdown = (event) => {
      if (!dropdownRef.value.contains(event.target)) {
        isOpen.value = false;
      }
    };

    // Lifecycle hook: mounted
    onMounted(() => {
      nextTick(() => {
        document.addEventListener("click", closeDropdown); // Listen for click events outside dropdown
      });
    });

    // Lifecycle hook: unmounted
    onUnmounted(() => {
      document.removeEventListener("click", closeDropdown); // Remove event listener when component is unmounted
    });

    return {
      isOpen,
      selectedOption,
      toggleDropdown,
      selectOption,
      dropdownRef,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown button {
  background: none;
  color: inherit;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
}

.dropdown-menu {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 10px);
  background-color: #f9f9f9;
  min-width: 180px;
  max-height: 300px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin: 0;
  padding: 0;
  overflow-y: auto;
}

.dropdown-menu li {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
}

.dropdown-menu li:hover {
  background-color: #f1f1f1;
}

.icon-caret {
  color: #666;
  stroke: #666;
  height: 1.3rem;
  width: 1.3rem;
  margin-left: 0.3rem;
  stroke-width: 0.02rem;
  pointer-events: auto;
  transition: transform 0.2s ease-in-out;

  &.down {
    transform: rotate(180deg);
  }
}
</style>
