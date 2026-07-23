"use server";
import z from "zod";
import { registerSchema } from "@/domain/validators/auth";
import { makeRegisterUser } from "@/application/factories";

type Properties = {
  email?: { errors: string[] };
  password?: { errors: string[] };
  confirmPassword?: { errors: string[] };
};

type RegisterUserState = {
  success: boolean;
  message: string;
  errors?: Properties;
};

type RegisterUserResponse = Promise<RegisterUserState>;

export default async function registerUserAction(
  prevState: unknown,
  formData: FormData,
): RegisterUserResponse {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassowrd: formData.get("confirmPassword"),
  };

  const validatedFields = registerSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid fields value.",
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }

  try {
    const { email, password } = validatedFields.data;

    const registerUserService = makeRegisterUser();
    const newUser = await registerUserService.execute({
      email,
      password,
    });

    return {
      success: true,
      message: `Welcome, ${newUser.name ?? newUser.email}!`,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: "Something went wrong while registering new user.",
    };
  }
}
