import * as z from "zod";

export enum Steps {}

export const reportSchema = z.object({});

export type Report = z.infer<typeof reportSchema>;
