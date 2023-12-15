import axios from 'axios';

export const signIn = async (email, password) => {
  try {
    const data = { username: email, password: password };
    const response = await axios.post('https://web-app-backend-r3ac.onrender.com/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (email, password) => {
    try {
      const data = { username: email, password: password };
      const response = await axios.post('https://web-app-backend-r3ac.onrender.com/register', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
