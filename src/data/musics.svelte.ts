import {
	afterDarkMusic,
	perfectGirlMusic,
	banditoMusic,
	loveMusic,
	endlessSongMusic,
} from '../assets/music/index.svelte'

import {
	afterDarkCover,
	mareuxCover,
	endlessCover,
	loveCover,
	trenchCover,
} from '../assets/covers/index.svelte'

const musics = [
	{
		title: 'After Dark',
		singer: 'Mr Kitty',
		src: afterDarkMusic,
		cover: afterDarkCover,
	},
	{
		title: 'Perfect Girl',
		singer: 'Mareux',
		src: perfectGirlMusic,
		cover: mareuxCover,
	},
	{
		title: 'Endless Song',
		singer: 'Aaron',
		src: endlessSongMusic,
		cover: endlessCover,
	},
	{
		title: "Can't Help Falling In Love",
		singer: 'Twenty One Pilots',
		src: loveMusic,
		cover: loveCover,
	},
	{
		title: 'Bandito',
		singer: 'Twenty One Pilots',
		src: banditoMusic,
		cover: trenchCover,
	},
]

export default musics
