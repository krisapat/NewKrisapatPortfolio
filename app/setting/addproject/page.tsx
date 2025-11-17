import { createProjectAction } from "@/actions/actions"
import FormContainer from "@/components/Form/FormContainer"
import FormInput from "@/components/Form/FormInput"
import ImageInput from "@/components/Form/ImageInput"
import SubmitButtons from "@/components/Form/SubmitButtons"
import TextAreaInput from "@/components/Form/TextAreaInput"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import AddProjectBreadcrumb from "@/components/settings/settingsComponents/AddProjectBreadcrumb"

const Addproject = async () => {
  const user = await currentUser()
  if (!user?.privateMetadata?.isAdmin) redirect("/")

  return (
    <>
    <AddProjectBreadcrumb />
      <FadeUpWhenVisible>
        <h1 className="font-extrabold text-xl md:text-3xl text-center text-primary">
          Add Project
        </h1>
      </FadeUpWhenVisible>
      <FadeUpWhenVisible>
        <section className="group relative w-full max-w-2xl px-4 mt-6 mx-auto">
          <Card
            className="relative overflow-hidden backdrop-blur bg-white/70 dark:bg-gray-800/60 shadow-lg
        transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(0,201,80,0.3)] w-full"
          >
            <div
              className="absolute inset-0 bg-linear-to-r from-[#00c950]/20 to-[#00aaff]/20
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />

            <div className="relative z-10 space-y-6">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="bg-[#00c950]/10 p-3 rounded-xl">
                  <Shield className="text-[#00c950]" size={20} />
                </div>
                <div>
                  <CardTitle>Add Project</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Fill in project details below
                  </p>
                </div>
              </CardHeader>

              <CardContent>
                <FormContainer
                  action={createProjectAction}
                  className="flex flex-col space-y-5"
                  successMessage="Project Created Successfully"
                  failureMessage="Failed to Create Project"
                >
                  <FormInput
                    name="name"
                    label="Project Name"
                    type="text"
                    placeholder="Enter Project Name"
                    className="w-full space-y-2"
                  />
                  <TextAreaInput
                    name="descriptionCard"
                    Labeltext="Description on card"
                    defaultValue="Enter a description"
                  />
                  <TextAreaInput
                    name="descriptionDetail"
                    Labeltext="Description detail"
                    defaultValue="Enter a description"
                  />
                  <ImageInput
                    className="space-y-2"
                  />
                  <FormInput
                    name="demoLink"
                    label="Demo link"
                    type="text"
                    placeholder="Enter Demo Link"
                    className="w-full space-y-2"
                  />

                  {/* ปรับ Submit Button ให้เหมือน AdminSection */}
                  <Button
                    type="submit"
                    className="w-full bg-[#00c950] hover:bg-[#00b850] text-white font-medium
                shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]"
                  >
                    Create Project
                  </Button>
                </FormContainer>
              </CardContent>
            </div>
          </Card>
        </section>
      </FadeUpWhenVisible>
    </>
  )
}

export default Addproject
