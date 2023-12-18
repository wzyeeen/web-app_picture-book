import axios from 'axios';

export const getBookInfo = async (book_id) => {
    const access_token = localStorage.getItem("access_token");
    axios
      .get("https://web-app-backend-r3ac.onrender.com/book/" + book_id, { headers: { Authorization: `Bearer ${access_token}`, } })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
};

export const updatePage = async (page_id, text, img_url) => {
    const data = { text: text, image_url: img_url };
    const access_token = localStorage.getItem("access_token");
    axios
      .put("https://web-app-backend-r3ac.onrender.com/page/" + page_id, data, { headers: { Authorization: `Bearer ${access_token}`, } })
      .then((res) => {
        console.log("Page update done!");
        window.location.reload(false);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
};

export const likeAdd = (book_id) => {
  const access_token = localStorage.getItem("access_token");
  axios
    .post("https://web-app-backend-r3ac.onrender.com/thumb/" + book_id, null, { headers: { Authorization: `Bearer ${access_token}`, } })
    .then((res) => {
      console.log("Like successfully added.")
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const likeCancel = (book_id) => {
  const access_token = localStorage.getItem("access_token");
  axios
    .post("https://web-app-backend-r3ac.onrender.com/cancelthumb/" + book_id, null, { headers: { Authorization: `Bearer ${access_token}`, } })
    .then((res) => {
      console.log("Like successfully cancelled.")
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};