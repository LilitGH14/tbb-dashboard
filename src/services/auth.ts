import HttpClient from "@/services/HttpClient";
import { ResponseGeneralType } from "@/types/types";

export const loginUser: (user: any) => Promise<ResponseGeneralType> = async (
  user
) => {
  const request: ResponseGeneralType = await HttpClient.post(`/auth/login`, {
    email: user.email,
    password: user.password,
  });
  return request;
};


