import { z } from "zod";

import UserSchema from "@/schemas/modelSchema/UserSchema";

export const UserEntity = z.object(UserSchema.shape).extend({
  email: z.string().email().nullish(),
});
export type TUserEntity = z.infer<typeof UserEntity>;
