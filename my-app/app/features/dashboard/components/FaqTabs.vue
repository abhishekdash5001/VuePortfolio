<script setup lang="ts">
import { type FaqValue } from "../types";

import { faqTabsMapper } from "../utils/faqTabsMapper";





const props  = defineProps<{
  faqs: FaqValue['faqs']
}>();




</script>

<template>
   <UTabs :items="faqTabsMapper(props.faqs)" class="w-full mt-[12px]"  color="info" variant="link">

    <template #content="{ item }">
      <UAccordion :items="item.items"  type="multiple"/>
    </template>
    </UTabs>
</template>
