import * as bcrypt from "bcryptjs";
export const hashPassword = (plain: string, rounds = 12) => bcrypt.hash(plain, rounds);
export const comparePassword = (plain: string, hash: string) => bcrypt.compare(plain, hash);
