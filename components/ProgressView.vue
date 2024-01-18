<script setup>

const form = useForm();
const { 
  showTooltipFlag, 
  tooltipX, 
  progressLine, 
  progressText, 
  currentPercent, 
  tooltipPosition, 
  currencyFormat, 
  numberFormat, 
  targetAmountTillToday, 
  percentageAchieved 
} = useHelpers();


const showTooltip = (event) => {
  showTooltipFlag.value = true;
  tooltipPosition(event);
};

const hideTooltip = () => {
  showTooltipFlag.value = false;
};


</script>

<template>
  <div>
    <div>
      <div class="relative h-5 w-full rounded-xl bg-gray-100 mt-3 cursor-pointer" ref="progressLine"
        @mousemove="showTooltip($event)" data-key="other" @mouseleave="hideTooltip($event)">
        <span class="absolute top-[24px] left-0">{{ form.showResults ? 0 : `0%` }}</span>
        <div v-if="currentPercent < percentageAchieved" class="h-5 rounded-l-xl repeating-grad w-[70%] relative" :style="{ width: `${percentageAchieved}%` }"
          data-key="track">
          <span class="absolute top-[24px] -right-5">{{ form.showResults ? currencyFormat(targetAmountTillToday) :
            `${numberFormat(percentageAchieved)}%` }}</span>
        </div>
        <div :class="`h-5 rounded-l-xl bg-green-500 absolute left-0 top-0`" :style="{ width: `${currentPercent}%` }"
          data-key="base"><span class="absolute top-[24px] right-0 translate-x-full bg-white">{{ form.showResults ?
            currencyFormat(form.currentTarget) : `${numberFormat(currentPercent)}%` }}</span></div>
        <span class="absolute top-[24px] right-0 translate-x-full bg-white">{{ form.showResults ? currencyFormat(form.target) : '100%' }}</span>
        <span v-if="showTooltipFlag" class="absolute bg-gray-100 text-black text-sm shadow px-4 rounded"
          :style="{ left: `${tooltipX}px`, top: '130%' }">
          {{ progressText }}
        </span>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Add some styling for better visibility */
svg {
  margin-top: 20px;
  cursor: pointer;
}

.repeating-grad {
  /* with multiple color stop lengths */
  background-image: repeating-linear-gradient(-45deg,
      #efefef 0 5px,
      #ddd 0px 10px);
}</style>