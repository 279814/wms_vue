<template>
  <div>
    <!-- 使用v-html插入iframe的HTML字符串 -->
    <div v-html="iframeHtml"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // iframe的HTML字符串
      iframeHtml: '<iframe    src="http://192.168.100.128:88/chatbot/jV73SSNb82LpffDk"    style="width: 100%; height: 100%; min-height: 700px"    frameborder="0"    allow="microphone" </iframe>'
    };
  }
}
</script>
