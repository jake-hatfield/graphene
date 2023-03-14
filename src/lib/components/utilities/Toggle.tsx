'use client';

// react
import { useState } from 'react';

// types
interface Props {
	error?: boolean;
	defaultIsChecked?: boolean;
	isLoading?: boolean;
	itemLeft?: React.ReactNode;
	itemRight?: React.ReactNode;
	name: string;
	onChange?: () => void;
}

const Tooltip: React.FC<Props> = ({
	error = false,
	defaultIsChecked = false,
	isLoading = false,
	itemLeft,
	itemRight,
	name,
	onChange,
}) => {
	// state
	const [isChecked, setIsChecked] = useState(defaultIsChecked ?? false);

	return (
		<label
			htmlFor={name}
			className='flex w-fit cursor-pointer items-center font-semibold text-zinc-500 dark:text-zinc-300'
			data-testid={`toggle-${name}`}
		>
			{itemLeft && itemLeft}
			<div
				className={`relative ${itemLeft ? 'ml-1.5' : ''} ${
					itemRight ? 'mr-1.5' : ''
				}`}
			>
				<input
					disabled={isLoading}
					id={name}
					type='checkbox'
					checked={isChecked}
					onChange={() => {
						setIsChecked(!isChecked);
						onChange && onChange();
					}}
					className='sr-only'
				/>
				<div
					className={`block h-6 w-12 rounded-full border-2 shadow-sm transition-colors group-hover:shadow ${
						error
							? 'border-red-400 bg-red-300'
							: isChecked
							? 'border-cyan-600 bg-cyan-500 dark:border-cyan-500 dark:bg-cyan-400'
							: 'border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800'
					}`}
				/>
				<span
					className={`absolute left-0.5 top-0.5 h-5 w-5 transform rounded-full shadow transition ${
						error
							? 'bg-red-900'
							: isChecked
							? 'translate-x-6 bg-white'
							: 'bg-zinc-500 dark:bg-zinc-300'
					}`}
				/>
			</div>
			{itemRight && itemRight}
		</label>
	);
};

export default Tooltip;
