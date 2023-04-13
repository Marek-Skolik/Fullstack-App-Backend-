import axios from 'axios';
import { startRequest, endRequest, addRequest } from './requestRedux';
import { API_URL } from '../../src/config'


// selectors
export const adsList = state => state.announcements;
export const getAdsBySearchPhrase = (state, searchPhrase) => {
  console.log(state, searchPhrase)
return (state.announcements.filter(ad => ad.title.toLowerCase().includes( searchPhrase.toLowerCase())) )}
export const getOfferById = (state, offerId) => state.announcements.find(offer => offer._id === offerId);

//actions 
const createActionName = actionName => `app/announcements/${actionName}`;

const LOAD_ADS = createActionName('LOAD_ADS');
const ADD_AD = createActionName('ADD_AD');
const EDIT_AD = createActionName('EDIT_AD');

// action creators
export const loadAds = payload => ({ type: LOAD_ADS, payload});
export const addAd = payload => ({ type: ADD_AD, payload});
export const editAd = payload => ({ type: EDIT_AD, payload });

export const fetchAds = () => {
  return async (dispatch) => {
    dispatch(startRequest())
    try {
      let res = await axios.get(`${API_URL}/api/ads`)
      dispatch(loadAds(res.data))
      dispatch(endRequest())
    }
    catch (err) {
      
    }
  }
};

export const addOffer = (title, price, location, publicDate, content, img) => {
  return async (dispatch) => {
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('price', price);
      data.append('location', location);
      data.append('date', publicDate);
      data.append('content', content);
      data.append('pic', img);
      dispatch(startRequest())

      /*const res = await axios.post(
        `${API_URL}/api/ads`,
        data,
        { withCredentials: true },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )*/
      const options = {
        method: 'POST',
        credentials: 'include',
        body: data,
        };

      fetch(`${API_URL}/api/ads`, options)
      .then((res) => {
      if (res.status === 201) {
      return res.json();
      }
      })
      .then((res) => {
      dispatch(addAd(res));
      });

      //await dispatch(addAd(res.data));
      dispatch(addRequest())
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const editOffer = (title, price, location, date, description, photo, id) => {
  return async (dispatch) => {
    try {
      const data = new FormData();
      data.append('title', title);
      data.append('price', price);
      data.append('location', location);
      data.append('date', date);
      data.append('content', description);
      data.append('img', photo);
      dispatch(startRequest())

      await axios.put(
        `${API_URL}/api/ads/${id}`,
        data,
        { withCredentials: true },
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      await dispatch(editAd({ _id: id, title, content: description, date, img: photo, price, location }));
      dispatch(endRequest())
    }
    catch (err) {
      console.log(err)
    }
  }
}


export const searchOffer = (searchPage) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${API_URL}/api/announcements/search/${searchPage}`)
      dispatch(loadAds(res.data));
    }
    catch (err) {
      console.log(err)
    }
  }
}

const reducer = (statePart = [], action) => {
  console.log(statePart, action);
  switch (action.type) {
    case LOAD_ADS:
      return [...action.payload]
    case ADD_AD:
      return [...statePart, {...action.payload}]
    case EDIT_AD:
      return [...statePart.map((offer) => offer._id === action.payload._id ? {...offer, ...action.payload} : offer)]
    default:
      return statePart
  };
};

export default reducer;
