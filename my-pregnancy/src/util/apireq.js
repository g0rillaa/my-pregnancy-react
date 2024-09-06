import axios from 'axios';
import { getToken } from './auth.js'

const apiurl = process.env.REACT_APP_API_URL;

export const registerReq = async (role, firstname, lastname, email, password, additionalInfo) => {
  try {
    const response = await axios.post(`${apiurl}/register`, new URLSearchParams({
      role: role,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      additional: JSON.stringify(additionalInfo)
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response;
  } catch(error) {
    console.log(error);
    return error;
  }
}

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${apiurl}/login`,
      new URLSearchParams({
        email: email,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    return response;
  } catch(error) {
    console.log(error);
    return error;
  }
};

//TODO this
export const resetPassword = async (email, callback) => {
  try {
    const response = await axios.post(`${apiurl}/resetpassword`, {
      email: email,
    });
    return callback(response);
  } catch(error) {
    return callback(error)
  }
}


export const getUser = async () => {
  const token = getToken();
  try {
    const response = await axios.get(`${apiurl}/getuser`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch(error) {
    console.log(error);
    return error;
  }
};

export const updateUser = async (formData) => {
  const token = getToken();
  try {
    const response = await axios.post(`${apiurl}/updateuser`, {
      data: JSON.stringify(formData)
    }, { headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch(error) {
    console.log(error);
    return error;
  }
};


export const createJournalEntry = async (gratitude, onMyMind, selectedMoods, selfCare, waterIntake, dayRating) => {
  const token = getToken();
  try {
    const response = await axios.post(`${apiurl}/journal/newentry`, {
      gratitude: gratitude,
      onMyMind: onMyMind,
      selectedMoods: selectedMoods,
      selfCare: selfCare,
      waterIntake: waterIntake,
      dayRating: dayRating
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    console.error('Failed to create journal entry:', error);
    return error;
  }
}


export const getAllJournalEntries = async () => {
  const token = getToken();
  try {
    const response = await axios.get(`${apiurl}/journal/allentries`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    return response;
  } catch (error) {
    console.error('Failed to create journal entry:', error);
    return error;
  }
}

export const getAllFitnesVideos = async () => {
  try {
    const response = await axios.get(`${apiurl}/fitness/allvideos`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response;
  } catch (error) {
    console.error('Failed to create fetch all fitness videos:', error);
    return error;
  }
}