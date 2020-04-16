import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

export const setProfile = (profile)=> {
	return {
		type: 'SET_PROFILE',
		payload: {

		}
	}
}

//const baseURL =""

export const clearSwipes = ()=> async (dispatch) => {
	await axios.put (`${baseURL}/gabriela/clear`)
}