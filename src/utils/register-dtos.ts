import z from "zod";

import { userDto } from "../dtos/user.ts";
import { errorDto } from "../dtos/error.ts";
import { postDto } from "../dtos/post.ts";

export function registerDtos() {
  z.globalRegistry.add(userDto, { id: "userDto" });
  z.globalRegistry.add(errorDto, { id: "errorDto" });
  z.globalRegistry.add(postDto, { id: "postDto" });
}
