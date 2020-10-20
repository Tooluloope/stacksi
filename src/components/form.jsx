import React from "react";
import { Input } from "./input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validator } from "./validation";

export const Form = () => {
	const { register, handleSubmit, errors, formState, reset } = useForm({
		mode: "all",
		resolver: yupResolver(Validator),
	});
	return (
		<div className="form text-black font-bold text-xl">
			<p>Create Account</p>

			<Input
				label="First Name"
				name="firstName"
				type="text"
				register={register}
				autoComplete="given-name"
				error={errors.firstName}
				required
				className="input w-full px-5 py-2 text-black outline-none text-sm font-medium"
				style={{ borderColor: errors.firstName && "#CC3A00" }}
			/>

			<Input
				label="Last Name"
				name="lastName"
				type="text"
				autoComplete="family-name"
				register={register}
				error={errors.lastName}
				required
				className="input w-full px-5 py-2 text-black outline-none text-sm font-medium"
				style={{ borderColor: errors.lastName && "#CC3A00" }}
			/>

			<Input
				label="Email Address"
				name="email"
				type="email"
				register={register}
				error={errors.email}
				required
				autoComplete="email"
				className="input w-full px-5 py-2 text-black outline-none text-sm font-medium"
				style={{ borderColor: errors.email && "#CC3A00" }}
			/>

			<Input
				label="Phone Number"
				name="phoneNumber"
				type="tel"
				autoComplete="tel"
				register={register}
				error={errors.phoneNumber}
				required
				className="input w-full px-5 py-2 text-black outline-none text-sm font-medium"
				style={{ borderColor: errors.phoneNumber && "#CC3A00" }}
			/>
		</div>
	);
};
