import React from "react";

interface User {
  image: string;
  name: string;
}

interface PostProps {
  isPrivate?: boolean;
  user?: User;
}

const Post: React.FC<PostProps> = ({ isPrivate }) => {
  return (
    <>
      {isPrivate ? (
        <div>Essa publicação está configurada no moodo privado "somente eu". </div>
      ) : (
        <div>Post</div>
      )}
    </>
  );
};

export default Post;
