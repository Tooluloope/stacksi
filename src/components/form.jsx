import React, { useState } from "react";
import { Input } from "./input";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validator } from "./validation";
import { SmallLoader } from "./loader1";

export const Form = () => {
	const [error, setError] = React.useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const { register, handleSubmit, errors, formState, reset } = useForm({
		mode: "all",
		resolver: yupResolver(Validator),
	});

	const onSubmit = data => {
		setIsLoading(true);
		setError(false);

		var form_data = new FormData();

		for (var key in data) {
			form_data.append(key, data[key]);
		}

		// mutate(form_data);
		var requestOptions = {
			method: "POST",
			body: form_data,
			redirect: "follow",
		};

		fetch(`v1/guests/applications`, requestOptions)
			.then(function (response) {
				if (response.ok) {
					setError(false);
					setIsLoading(false);
					reset();
					return response;
				} else throw Error(response);
			})

			.catch(error => {
				setIsLoading(false);
				setError(
					error.response?.data?.error
						? error.response.data?.error[0]?.email
						: error.response?.data?.message
						? "Oops! Something went wrong. Keep calm and try again"
						: "Oops! Something went wrong. Keep calm and try again"
				);
			});

		return;
	};
	return (
		<div className="form text-black  ">
			<p className="font-bold text-xl">Create Account</p>

			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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

				<div className="flex items-center mb-5">
					<input
						className="mr-1"
						name="agree"
						type="radio"
						value="Yes"
						ref={register({ required: true })}
					/>
					<label className="radio">
						I agree to write Excellent Code{" "}
						<span className=" font-semibold">Terms and Conditions</span>
					</label>
				</div>
				<button
					disabled={formState.isSubmitting}
					type="submit"
					className="w-full text-white text-center text-sm outline-none focus:outline-none"
				>
					Continue {isLoading && <SmallLoader />}
				</button>
			</form>

			<p className="mt-5 text-xs">
				Already a member? <span className="sign-in"> Sign In</span>
			</p>
		</div>
	);
};
