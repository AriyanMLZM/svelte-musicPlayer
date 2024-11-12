<script>
	export let selectedMusic
</script>

<section class="w-full h-full" style="--img: url({selectedMusic.cover})">
	<div class="with-backdrop w-full h-full flex">
		<div class="w-[300px] h-[300px] p-[10px]">
			<img
				src={selectedMusic.cover}
				alt={selectedMusic.title}
				class="w-full h-full object-cover rounded-[10px]"
			/>
		</div>
		<div class="flex flex-col gap-[30px] p-[30px]">
			<h1 class="text-white text-[30px] font-bold">{selectedMusic.title}</h1>
			<h2 class="text-white text-[18px]">{selectedMusic.singer}</h2>
		</div>
	</div>
</section>

<style>
	section {
		background-image: var(--img);
		background-size: cover;
	}
	.with-backdrop {
		backdrop-filter: blur(80px);
	}
</style>
