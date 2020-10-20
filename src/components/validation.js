import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const Validator = Yup.object().shape({
	phoneNumber: Yup.string()
		.matches(phoneRegExp, "Phone Number is not valid")
		.required("Phone Number is Required"),
	email: Yup.string()
		.email("Incorrect Email Format")
		.required("Email is required"),
});
