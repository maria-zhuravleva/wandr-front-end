// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function addPhoto(photoData) {
  try {
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const profileId = tokenService.getUserFromToken().profile
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoFormData,
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function showProfile(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}
async function updateProfile(profileFormData, photoData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileFormData)
    })
    const json = await res.json()

    if (json.err) throw new Error(json.err)

    if (photoData) {
      await addPhoto(photoData)
    }
    
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteProfile(profileId){
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      method:'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function addFollow(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/follow`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function unFollow(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/unfollow`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function showFollowers(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/followers`)
    return res.json()
  } catch (error) {
    console.log()
  }
}

async function showFollowing(profileId){
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/following`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function explorePage(profileId) {
  try {
    const authToken = tokenService.getToken()
    const res = await fetch(`${BASE_URL}/${profileId}/following/posts`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteSavedPosts(profileId, postId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/saves/${postId}`, {
      method:'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  getAllProfiles, 
  addPhoto,
  showProfile,
  updateProfile,
  deleteProfile,
  addFollow,
  unFollow,
  showFollowing,
  showFollowers,
  explorePage,
  deleteSavedPosts,
}
