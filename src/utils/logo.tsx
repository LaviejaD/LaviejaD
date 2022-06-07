export const logo = (e: string) =>
	`/LaviejaD/${
		//@ts-ignore
		import.meta.env.MODE === 'dev' ? 'src' : 'dist'
	}/assets/${e}`;
