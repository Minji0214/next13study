import getUserPosts from "@/lib/getUserPosts";
import getUser from "@/lib/getUser";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getUsers from "@/lib/getUsers";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  return {
    title: user.name,
    description: `this is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = awaitㅌ userData;
  return (
    <>
      <h2>
        {user.name}
        <br />
        <Suspense fallback={<h2>로딩중~~...</h2>}>
          <UserPosts promise={userPostsData} />
        </Suspense>
      </h2>
    </>
  );
}

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getUsers();
}
