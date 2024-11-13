<script lang="ts">
	export let selectedMusic
	export let songOperation

	let currentTime = 0
	let duration: number
	let muted = false
	let volume = 1
	let paused = true

	const calcTime = (time: number) => {
		return {
			minute: Math.floor(time / 60),
			second:
				time % 60 < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60),
		}
	}

	$: calcDuration = calcTime(duration)
	$: calcCurrentTime = calcTime(currentTime)
</script>

<div class="w-full flex-center flex-col px-[20px]">
	<audio
		bind:paused
		bind:currentTime
		bind:duration
		bind:muted
		bind:volume
		on:ended={() => songOperation(1)}
		autoplay
		src={selectedMusic.src}
	></audio>
	<input
		bind:value={currentTime}
		type="range"
		step="1"
		min="0"
		max={duration}
		class="w-full in-range-player"
	/>
	<div
		class="flex items-center justify-between w-full px-[10px] select-none mt-[20px]"
	>
		<h2 class="text-text">{calcCurrentTime.minute}:{calcCurrentTime.second}</h2>
		<div class="flex-center w-full gap-[10px]">
			<button
				aria-label="prev"
				class="btn-player"
				on:click={() => songOperation(0)}
				type="button"
			>
				<i class="fa fa-step-backward"></i>
			</button>
			<button
				aria-label="play-pause"
				class="btn-player"
				on:click={() => (paused = !paused)}
				type="button"
			>
				{#if paused}
					<i class="fa fa-play"></i>
				{:else}
					<i class="fa fa-pause"></i>
				{/if}
			</button>
			<button
				aria-label="next"
				class="btn-player"
				on:click={() => songOperation(1)}
				type="button"
			>
				<i class="fa fa-step-forward"></i>
			</button>
		</div>
		<h2 class="text">{calcDuration.minute}:{calcDuration.second}</h2>
	</div>
	<!-- <input
		bind:value={volume}
		type="range"
		step="0.01"
		min="0"
		max="1"
		class="w-[400px] hover:accent-black"
	/> -->
</div>
