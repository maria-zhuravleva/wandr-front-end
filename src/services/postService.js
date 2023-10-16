//services
import * as tokenService from './tokenService'

const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`

async function create(postFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function addPostPhoto(postId, photoData) {
  try {
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const res = await fetch(`${BASE_URL}/${postId}/main-photo`, {
      method: 'PATCH',
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

async function addMorePostPhotos(postId, photoData) {
  try {
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const res = await fetch(`${BASE_URL}/${postId}/photos`, {
      method: 'PATCH',
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

async function deletePostPhoto(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/delete-main-photo`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function show(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}`)
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function index() {
  try {
    const res = await fetch(BASE_URL)
  return res.json()
  } catch (err) {
    console.log(err)
  }
}
// async function filterSearch(){
//   try {
//     const res= await fetch(`${BASE_URL}/filterSearch`)
//     return res.json()
//   }  catch (err) {
//     console.log(err)
//   }
// }

async function deletePost(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function update(postFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${postFormData._id}`, {
      method: 'PUT',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}


async function createComment(postId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/comments`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteComment(postId, commentId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function editComment(postId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/comments/${commentFormData._id}`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function createRec(postId, rec) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/recommendations`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rec)
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function deleteRec(postId, recId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/recommendations/${recId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

async function editRec(postId, recFormData){
  try {
    const res = await fetch(`${BASE_URL}/${postId}/recommendations/${recFormData._id}`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function likePost(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/likes`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (err) { 
    console.log(err)
  }
}
async function savePost(postId) {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/saves`, {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (err) { 
    console.log(err)
  }
}

export {
  create,
  show,
  index,
  // filterSearch,
  update,
  createComment,
  deleteComment,
  editComment,
  createRec,
  deleteRec,
  editRec,
  deletePost,
  likePost,
  savePost,
  addPostPhoto,
  deletePostPhoto,
  addMorePostPhotos,
}