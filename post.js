const postContainer = document.getElementById('post')

const getPostIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('id')
}

const getPost = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!res.ok) throw new Error('Пост не найден')
        return await res.json()
    } catch (error) {
        console.error('Ошибка при получении поста:', error)
        return null
    }
}

const getComments = async (postId) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        return await res.json()
    } catch (error) {
        console.error('Ошибка при получении комментариев:', error)
        return []
    }
}

const renderPostDetails = async () => {
    const postId = getPostIdFromUrl()
    if (!postId) return

    const post = await getPost(postId)
    const comments = await getComments(postId)

    if (!post) {
        postContainer.innerHTML = '<p>Пост не найден.</p>'
        return
    }

    const commentsHtml = comments.map(comment => `
        <div class="comment">
            <h4>${comment.name}</h4>
            <p>${comment.body}</p>
            <small>${comment.email}</small>
        </div>
    `).join('')

    postContainer.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <h3>Комментарии:</h3>
        ${commentsHtml || '<p>Нет комментариев</p>'}
    `
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPostDetails)
} else {
    renderPostDetails()
}
