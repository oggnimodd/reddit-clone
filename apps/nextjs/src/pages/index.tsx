"use client";

import { api } from "utils";
import { useAuth, SignInButton, SignOutButton } from "@clerk/nextjs";
import { LoadingWithMessage } from "@acme/ui";
import { Button } from "@nextui-org/react";

const Home = () => {
  const { data: hello } = api.post.hello.useQuery();

  const { isLoading, data, error } = api.post.all.useQuery();
  const { isSignedIn, isLoaded } = useAuth();
  const { mutate, isLoading: createLoading } = api.post.create.useMutation();
  const utils = api.useContext();
  const { mutate: deletePost, isLoading: deleteLoading } =
    api.post.delete.useMutation();

  if (!isLoaded) {
    return <LoadingWithMessage message="loading haha..." />;
  }

  // add random post
  const addPost = () => {
    mutate(
      {
        title: `random post${Math.random()}`,
        content: `random content${Math.random()}`,
      },
      {
        onSuccess() {
          utils.post.all.invalidate();
        },
      },
    );
  };

  const deletePostYeah = (id: string) => {
    deletePost(id, {
      onSuccess() {
        utils.post.all.invalidate();
      },
    });
  };

  if (hello) {
    console.log(hello);
  }

  return (
    <div className="mx-auto max-w-[200px]">
      {!isSignedIn && (
        <div>
          <p>You need to login</p>
          <SignInButton>
            <Button color="danger">Login</Button>
          </SignInButton>
        </div>
      )}

      {isSignedIn && (
        <div>
          <p>You need to logout</p>
          <SignOutButton>
            <Button color="primary">SignOut</Button>
          </SignOutButton>
        </div>
      )}

      {isSignedIn && (
        <div>
          <h1 className="text-2xl font-bold text-center mb-4 mt-10">Posts</h1>
          {!isLoading &&
            !error &&
            data.length > 0 &&
            data.map((post) => {
              return (
                <div key={post.id} className="mb-10">
                  <p>{post.title}</p>
                  <p>{post.content}</p>
                  <hr />
                  <Button
                    color="primary"
                    onClick={() => deletePostYeah(post.id)}
                    isLoading={deleteLoading}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          <div className="mt-10">
            <Button color="primary" onClick={addPost} isLoading={createLoading}>
              Add random post
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
