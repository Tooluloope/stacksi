import React from "react";

export const Input = ({
	name,
	type,
	placeholder,
	onChange,
	className,
	value,
	error,
	children,
	label,
	register,
	...props
}) => {
	const formGroup = {
		border: `0.1px solid ${error ? "#CC3A00" : "#01143E"}`,
	};

	const labelStyle = {
		color: ` ${error ? "#CC3A00" : "#767e8d"}`,
	};
	return (
		<div className="my-10 md:my-10">
			<div style={formGroup} className="form-group relative shadow-sm">
				<label
					style={labelStyle}
					className="label md:text-base break-all "
					htmlFor={name}
				>
					{label}
				</label>
				<input
					ref={register}
					id={name}
					name={name}
					type={type}
					placeholder={placeholder}
					className={className}
					{...props}
				/>
			</div>
			{error && <p className="text-error text-xs absolute">{error.message}</p>}
		</div>
	);
};

Input.defaultProps = {
	type: "text",
	className: "",
};
