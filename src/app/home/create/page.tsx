import { Dashboard, DashboardDescription, DashboardHeader, DashboardTitle } from '@/components/dashboard-header';
import { PostForm } from '@/components/post-form';

export default function CreatePage() {
  return (
    <>
      <Dashboard className="mb-6">
        <DashboardHeader>
          <DashboardTitle>Create new post</DashboardTitle>
          <DashboardDescription>Manage your post information</DashboardDescription>
        </DashboardHeader>
      </Dashboard>
      <PostForm action="create" />
    </>
  );
}
