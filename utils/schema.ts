import { z } from "zod"

export const validateWithZod = <T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
): z.infer<T> => {
  const result = schema.safeParse(data)
  if (!result.success) {
    const errors = result.error.issues.map((err) => err.message).join(", ")
    throw new Error(errors)
  }
  return result.data
}

// Define a schema for image file validation

export const ProjectSchema = z.object({
  name: z.string().min(2, { message: "Project name is required 2" }).max(30, { message: "Project name should be less than 30 characters" }),
  descriptionCard: z.string().min(2, { message: "descriptionCard is required 2" }).max(500, { message: "descriptionCard should be less than 500 characters" }),
  descriptionDetail: z.string().min(2, { message: "descriptionDetail is required 2" }),
  demoLink: z.string(),
})

const validateImage = z
  .instanceof(File)
  .refine((file) => file.size <= 2 * 1024 * 1024, {
    message: "File size should be less than 2MB"
  })

export const imageSchema = z.object({
  image: validateImage,
})

