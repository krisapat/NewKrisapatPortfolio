"use client"

import { usePathname } from "next/navigation"
import { deleteProjectAction } from "@/actions/actions"
import FormContainer from "../Form/FormContainer"
import { CardDeleteButton } from "../Form/SubmitButtons"

const DeleteToggleButton = ({ projectId }: { projectId: string }) => {
  const pathname = usePathname()

  return (
    <FormContainer
      action={deleteProjectAction}
      successMessage="ProjectId deleted"
      failureMessage="Failed to delete"
    >
      {/* hidden inputs เพื่อส่งค่าเข้า formData */}
      <input type="hidden" name="projectId" value={projectId} />
      <input type="hidden" name="pathname" value={pathname} />
      <CardDeleteButton />
    </FormContainer>
  )
}

export default DeleteToggleButton