import React, { useEffect, useState } from "react";

function Post(props) {
  const [post, setPost] = useState({
    userId: undefined,
    id: undefined,
    title: "",
    body: "",
  });
  const [page, setPage] = useState(0);

  function nextPage(){
    let p = page +1;
    setPage(p);
  }
  async function download() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
  }

  // 한번만 실행하겠다. 그림그려질때!!
  useEffect(() => {
    console.log("userEffect");
    download();
  }, [page]);

  return (
    <div>
      userId: {post.userId}, id: {post.id}, title: {post.title} <br />
      body: {post.body}
      <button onClick={nextPage}>다음페이지</button>
    </div>
  );
}

export default Post;