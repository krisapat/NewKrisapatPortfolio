import { UserIcon } from "@/components/ui/UserIcon";

const UserProfile = () => {
  return (
    <div className="flex items-center">
      <UserIcon className="w-8 h-8" />
      <span className="sr-only">Toggle profile</span>
    </div>
  );
};

export default UserProfile;
