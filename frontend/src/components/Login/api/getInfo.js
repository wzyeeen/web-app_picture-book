import axios from 'axios';

export const signIn = async (email, password) => {
  try {
    const data = { username: email, password: password };
    const response = await axios.post('https://web-app-backend-r3ac.onrender.com/login', data);
    return response.data;
  } catch (error) {
    if (error) {
      alert('Cannot find this user!');
    }
    throw error;
  }
};

export const signUp = async (email, password) => {
    try {
      const data = { username: email, password: password };
      const response = await axios.post('https://web-app-backend-r3ac.onrender.com/register', data);
      return response.data;
    } catch (error) {
      if (error) {
        alert('This email is already registered!');
      }
      throw error;
    }
  };
