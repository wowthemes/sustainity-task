<script setup>

// console.log(formCompoable);
const form = useForm()
</script>

<template>
  <el-form :model="form" label-position="top">
    <el-form-item label="Baseline date" class="mb-8">
      <el-date-picker v-model="form.baseline" />
    </el-form-item>
    <el-form-item label="Deadline" class="mt-8">
      <el-date-picker v-model="form.deadline" />
    </el-form-item>
    <el-form-item label="Target" class="mt-8">
      <el-input-number v-model="form.target" />
    </el-form-item>
    <el-form-item label="Target Done" class="mt-8">
      <el-input-number v-model="form.currentTarget" />
    </el-form-item>
    <el-form-item label="Unit" class="mt-8">
      <el-select v-model="form.unit">
        <el-option value="MNOK">MNOK</el-option>
        <el-option value="USD">USD</el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>