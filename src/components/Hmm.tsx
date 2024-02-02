import { Button } from '../../@/components/ui/button';
import { AvatarImage, Avatar } from '../../@/components/ui/avatar';
import { useEffect } from 'react';

export default function Component() {
	const highlights = ['🌎', '✨', 'NYC', '🖤', '🍷'];
	const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	useEffect(() => {
		console.log('HMM');
		if (navigator.geolocation) {
			navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
				if (result.state === 'granted') {
					console.log(result.state);
					navigator.geolocation.getCurrentPosition((e) =>
						fetch(`/test.json?lat=${e.coords.latitude}&long=${e.coords.longitude}`).then(
							(response) => console.log(response)
						)
					);
					//If granted then you can directly call your function here
				} else if (result.state === 'prompt') {
					console.log(result.state);
					navigator.geolocation.getCurrentPosition((e) =>
						fetch(`/test.json?lat=${e.coords.latitude}&long=${e.coords.longitude}`).then(
							(response) => console.log(response)
						)
					);
				} else if (result.state === 'denied') {
					//If denied then you have to show instructions to enable location
					console.log(result.state);
				}
				result.onchange = function () {
					console.log(result.state);
				};
			});
		} else {
			alert('Sorry N');
		}
	}, []);
	return (
		<div className="max-w-sm mx-auto  text-gray-800 p-0">
			<div className="flex justify-between items-center p-3 py-1">
				<svg
					aria-label="Instagram"
					className="x1lliihq x1n2onr6 x5n08af"
					fill="currentColor"
					height="29"
					role="img"
					viewBox="32 4 113 32"
					width="103"
				>
					<title>Instagram</title>
					<path
						clip-rule="evenodd"
						d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
						fill="currentColor"
						fill-rule="evenodd"
					></path>
				</svg>
				<div className="space-x-2">
					<button className="btn btn-sm normal-case text-[#0095f6] btn-ghost  border-none">
						Log in
					</button>
					<button className="btn btn-sm normal-case bg-[#0095f6] text-white border-none px-3.5">
						Open App
					</button>
				</div>
			</div>

			<hr className="solid" />
			<div className="px-2 py-4">
				<div className="flex items-center space-x-4">
					<img
						className="aspect-square h-20 w-20  ring-[#ff385c] rounded-full p-1 ring-[3px]"
						alt="Profile picture"
						src="/pic.png"
					/>
					<div className="flex-1">
						<h2 className="text-lg flex gap-2 items-center">lovelynoe__ </h2>
						<div className="flex space-x-2">
							<button className="font-medium btn btn-base-200 normal-case btn-sm my-2 px-8 bg-zinc-100 text-gray-800 border-none">
								Follow
							</button>
							<button className="font-medium btn btn-base-200 normal-case btn-sm my-2 px-8 bg-zinc-100 text-gray-800 border-none">
								Message
							</button>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<p className="font-semibold text-sm">Noe 💗</p>
					<p className="text-sm text-gray-500">Blogger</p>
					<p className="text-sm">UNT '27 💚</p>
					<p className="text-sm">𝓜𝓪𝓽𝓱𝓮𝔀 19:26</p>
				</div>
				<div className="flex mt-4 space-x-2 overflow-auto pt-3">
					{highlights.map((icon, idx) => (
						<div className="flex flex-col items-center gap-2 text-gray-800">
							<img
								className="aspect-square h-[3.75rem] w-[3.75rem]  ring-slate-200 rounded-full p-0.5 ring-1"
								alt="Profile picture"
								src={`/highlights/${idx + 1}.png`}
							/>
							<span className="text-xs">{icon}</span>
						</div>
					))}
				</div>
				<div className="flex justify-center items-center mt-4 gap-12">
					<div className="text-center mx-5">
						<p className="text-xs font-bold text-gray-800">10</p>
						<p className="text-xs">posts</p>
					</div>
					<div className="text-center mx-5">
						<p className="text-xs font-bold text-gray-800">1,833</p>
						<p className="text-xs">followers</p>
					</div>
					<div className="text-center mx-5">
						<p className="text-xs font-bold text-gray-800">1,539</p>
						<p className="text-xs">following</p>
					</div>
				</div>
			</div>
			<div className="flex justify-around border-t p-2 gap-6">
				<svg
					aria-label="Posts"
					className="x1lliihq x1n2onr6 x173jzuc stroke-gray-500"
					fill="currentColor"
					height="24"
					role="img"
					viewBox="0 0 24 24"
					width="24"
				>
					<title>Posts</title>
					<rect
						fill="none"
						height="18"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						width="18"
						x="3"
						y="3"
					></rect>
					<line
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						x1="9.015"
						x2="9.015"
						y1="3"
						y2="21"
					></line>
					<line
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						x1="14.985"
						x2="14.985"
						y1="3"
						y2="21"
					></line>
					<line
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						x1="21"
						x2="3"
						y1="9.015"
						y2="9.015"
					></line>
					<line
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						x1="21"
						x2="3"
						y1="14.985"
						y2="14.985"
					></line>
				</svg>

				<svg
					aria-label="Feed"
					className="x1lliihq x1n2onr6 x1roi4f4 stroke-gray-500"
					fill="#ffffff"
					height="24"
					role="img"
					viewBox="0 0 24 24"
					width="24"
				>
					<title>Feed</title>
					<rect
						fill="none"
						height="10"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						width="12"
						x="6"
						y="7"
					></rect>
					<line
						fill="none"
						stroke-linecap="round"
						stroke-miterlimit="10"
						stroke-width="2"
						x1="6.002"
						x2="18"
						y1="3.004"
						y2="3.004"
					></line>
					<line
						fill="none"
						stroke-linecap="round"
						stroke-miterlimit="10"
						stroke-width="2"
						x1="6.002"
						x2="18"
						y1="21"
						y2="21"
					></line>
				</svg>
				<svg
					aria-label="Tagged"
					className="x1lliihq x1n2onr6 x1roi4f4 stroke-gray-500"
					fill="currentColor"
					height="24"
					role="img"
					viewBox="0 0 24 24"
					width="24"
				>
					<title>Tagged</title>
					<path
						d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					></path>
					<path
						d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					></path>
					<circle
						cx="12.072"
						cy="11.075"
						fill="none"
						r="3.556"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
					></circle>
				</svg>
			</div>
			<div className="grid grid-cols-3 gap-1">
				{array.map((_, idx) => (
					<div className="relative">
						<img
							alt={`Post ${idx + 1}`}
							className="w-full h-auto"
							height="125"
							src={`/posts/${idx + 1}.jpg`}
							style={{
								aspectRatio: '125/125',
								objectFit: 'cover'
							}}
							width="125"
						/>
						<div className="absolute top-2 right-2">
							<svg
								aria-label="Carousel"
								className="x1lliihq x1n2onr6"
								color="rgb(255, 255, 255)"
								fill="rgb(255, 255, 255)"
								height="22"
								role="img"
								viewBox="0 0 48 48"
								width="22"
							>
								<title>Carousel</title>
								<path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
							</svg>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function BookmarkIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
		</svg>
	);
}

function CircleEllipsisIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M17 12h.01" />
			<path d="M12 12h.01" />
			<path d="M7 12h.01" />
		</svg>
	);
}

function LayoutGridIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="7" height="7" x="3" y="3" rx="1" />
			<rect width="7" height="7" x="14" y="3" rx="1" />
			<rect width="7" height="7" x="14" y="14" rx="1" />
			<rect width="7" height="7" x="3" y="14" rx="1" />
		</svg>
	);
}
