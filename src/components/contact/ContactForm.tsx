import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <div className="mb-6">
        <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="name">
          名前
        </label>
        <input className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="名前を入力" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="email">
          メールアドレス
        </label>
        <input className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="メールアドレスを入力" />
      </div>
      <div className="mb-6">
        <label className="block text-gray-800 text-lg font-semibold mb-2" htmlFor="message">
          メッセージ
        </label>
        <textarea className="shadow appearance-none border-2 border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="メッセージを入力" />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
          type="submit">
          送信
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
