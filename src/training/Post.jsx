import useData from "../hooks/custom-hooks/useData";

const Post = () => {
  const posts = useData("posts");
  const [data, isError, isReady] = posts;

  // if (isError) {
  //   return (
  //     <div>
  //       <p className="text-red-500">{isError}</p>
  //     </div>
  //   );
  // } else if (!isReady) {
  //   return (
  //     <div>
  //       <p className="text-green-700">Loading data...</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1 className="mb-3 text-3xl">Posts</h1>
      {data.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <b>{item.title}</b>
            <p>{item.body}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
