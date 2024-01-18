<script setup>
useSeoMeta({
    title: 'Assessment',
})
const form = useForm();
const { currentPercent } = useHelpers();
</script>

<template>
    <div class="flex w-full gap-14">
        <div class="w-1/2 border border-dashed p-12">
            <div class="flex justify-between">
                <h3 class="bold text-2xl">{{ form.showResults ? `$${form.currentTarget} ${form.unit}` : `${currentPercent}%` }}</h3>
                <toggle-input v-model="form.showResults" on="Result" off="Progress" />
            </div>
            <progress-view />
        </div>
        <div class="w-1/2 border border-dashed p-12">
            <config-fields />
        </div>
    </div>
</template>