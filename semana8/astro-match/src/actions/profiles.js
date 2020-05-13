import axios from 'axios'




export const setProfile = (profile) => {
	return {
		type: 'SET_PROFILE',
		payload:{
		profile:profile


		}
	}
}

const baseURL = "https://us.-central1-missao-newton.cloufunctions.net/astroMatch"

	export const getProfile = () => async (dispatch) => {
	const response = await
		axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriela/person")
		dispatch(setProfile(response.data.profile))
		console.log(response.data.profile)
	}


	export const chooseProfile =(id, choice) => async  (dispatch) => {
		const body = {
			id:id,
			choice:choice
		}
		const response = await
		axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriela/choose-person", body)
		dispatch(getProfile())

	}	
	export const clearSwipes = () => async (dispatch) => {
	 const response = await axios.put(`${baseURL}/gabriela/clear`)
	}

	
