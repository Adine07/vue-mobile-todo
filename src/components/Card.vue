<script setup>

defineProps({
    title: String,
    content: String,
    is_done: Boolean
})
</script>

<template>
    <div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box my-2">
        <div class="collapse-title text-xl font-medium flex justify-between items-center">
            <div>
                <p :class="is_done ? 'line-through' : ''">{{ title }}</p>
            </div>
            <div>
                <button class="btn btn-square">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <button class="btn btn-secondary btn-square ml-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div class="collapse-content">
            <p>{{ content }}</p>
        </div>
    </div>
</template>