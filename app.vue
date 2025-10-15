<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="#049b35"
      :duration="2000"
      :height="1200"
      :throttle="0"
    >
    </NuxtLoadingIndicator>

    <NuxtPage />
  </NuxtLayout>
</template>