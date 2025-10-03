<script lang="ts">
	import Icon from '@iconify/svelte'

	export let selectedSong: IMusic
	export let songOperation: (action: 'next' | 'prev') => void

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

<div class="w-full flex-center flex-col px-[20px] gap-[20px]">
	<audio
		bind:paused
		bind:currentTime
		bind:duration
		bind:muted
		bind:volume
		on:ended={() => songOperation('next')}
		autoplay
		src={selectedSong.src}
	></audio>
	<input
		bind:value={currentTime}
		type="range"
		step="1"
		min="0"
		max={duration}
		class="w-full input-range"
	/>
	<div class="flex items-center justify-between w-full px-[10px] select-none">
		<h2>{calcCurrentTime.minute}:{calcCurrentTime.second}</h2>
		<div class="flex-center w-full gap-[10px]">
			<button
				aria-label="prev"
				class="btn-player"
				on:click={() => songOperation('prev')}
				type="button"
			>
				<Icon icon="mage:previous-fill" class="text-[20px]" />
			</button>
			<button
				aria-label="play-pause"
				class="btn-player"
				on:click={() => (paused = !paused)}
				type="button"
			>
				{#if paused}
					<Icon icon="mage:play-fill" class="text-[20px]" />
				{:else}
					<Icon icon="mage:pause-fill" class="text-[20px]" />
				{/if}
			</button>
			<button
				aria-label="next"
				class="btn-player"
				on:click={() => songOperation('next')}
				type="button"
			>
				<Icon icon="mage:next-fill" class="text-[20px]" />
			</button>
		</div>
		<h2>{calcDuration.minute}:{calcDuration.second}</h2>
	</div>
	<div class="mt-[10px] w-full flex-center gap-[10px]">
		<input
			bind:value={volume}
			on:change={() => (muted = false)}
			type="range"
			step="0.01"
			min="0"
			max="1"
			class="w-[100px] input-range"
		/>
		<button
			aria-label="next"
			class="btn-player"
			on:click={() => (muted = !muted)}
			type="button"
		>
			{#if muted}
				<Icon icon="mage:volume-mute-fill" class="text-[25px]" />
			{:else}
				<Icon icon="mage:volume-up-fill" class="text-[25px]" />
			{/if}
		</button>
	</div>
</div>
