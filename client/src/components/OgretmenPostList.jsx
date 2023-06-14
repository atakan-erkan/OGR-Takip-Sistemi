import axios from "axios";
import React, { useEffect, useState } from "react";

const OgretmenPostList = () => {
  const [posts, setPosts] = useState([]);
  const monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts/post");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <h3>Akademisyen Duyuruları</h3>
        {posts.map((post) => (
          <div className="row mt-3" key={post._id}>
            <div className="col-sm-1">
              <div className="tarih">
                <div className="ay">
                  {monthNames[new Date(post.date).getMonth()]}
                </div>
                <div className="gun">{new Date(post.date).getDate()}</div>
              </div>
            </div>
            <div className="col-sm-11">
              <div class="media-body">
                <h4 class="media-heading">
                  {post.ad} {post.soyad}
                </h4>
                <p>{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OgretmenPostList;
