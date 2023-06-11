import type { Metadata } from "next";
import getUsers from "@/lib/getUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UserPage() {
  const usersData: Promise<User[]> = getUsers();
  const users = await usersData;
  const content = (
    <section>
      <h2>
        <Link href="/">back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </section>
  );
  return content;
}
