<template>
	<footer class="footer">
		<p> <icon name="heart" color="#c51e1e"></icon> by <a :href="url" target="_blank" rel="noopener">Hugo Almeida</a> | &copy; {{year}}</p>
	</footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      url: 'https://hhalmeida.github.io/',
      year: new Date().getFullYear(),
    }
  },
}
</script>
