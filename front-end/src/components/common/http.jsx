export const aipUrl = "http://127.0.0.1:8000/api/";
export const fileUrl = "http://127.0.0.1:8000/";
export const token = () => {
  const userInfor = localStorage.getItem("userInfo");
  const data = JSON.parse(userInfor);
  return data.token;
};
