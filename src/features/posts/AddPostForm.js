import React, { useState } from 'react'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (event) => {
    const value = event.target
    setTitle(value)
  }

  const onContentChanged = (event) => {
    const value = event.target
  }

  return (
    <section>
      <h2>새 게시글 추가하기</h2>
      <form>
        <label htmlFor="postTitle">게시글 제목:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        ></input>
        <label htmlFor="postContent">내용:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button">게시물 저장하기</button>
      </form>
    </section>
  )
}
