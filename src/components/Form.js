import React from "react";

const Form = () => {
  return (
    <div>
      <h1>İLETİŞİM</h1>
      <form
        className="myForm"
        action="mailto:felmas61@gmail.com"
        enctype="text/plain"
        method="post"
      >
        <label>Isim</label>
        <input type="text" placeholder="Isim" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Konu</label>
        <input type="text" placeholder="Konu" />
        <label>Mesaj</label>
        <textarea rows="6" placeholder="Mesajinizi buraya yaziniz!" />
        <button className="formBtn">Gönder</button>
      </form>
    </div>
  );
};

export default Form;
