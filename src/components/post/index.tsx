import React from 'react'
import { MdLock, MdAlarm } from 'react-icons/md'
import { BiWorld, BiLike, BiCommentDots } from 'react-icons/bi'
import { RiArrowDropDownLine, RiShareForward2Fill } from 'react-icons/ri'
import './style.css'

interface User {
  image: string
  name: string
}

interface PostProps {
  likes: number
  isPrivate?: boolean
  user?: User
  share: number
  comment: number
}

const Post: React.FC<PostProps> = ({ isPrivate, likes, share, comment }) => {
  return (
    <div className="postContainer">
      <div className="userPostData">
        <div className="userData">
          <div className="imgProfileContainer" style={{ marginTop: 0 }}>
            <img
              style={{ width: 40, height: 40 }}
              src="https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Foto de perfil"
            />
          </div>
          <div className="postData">
            <span className="userName"> Yasmin Miranda </span>
            <div className="postTimeAndPrivacy">
              <div className="postTime">
                <MdAlarm size="13" /> <span>Há cerca de 8 horas</span>
              </div>
              {isPrivate ? (
                <div className="postPrivacy">
                  <MdLock /> <span>Somente eu</span>{' '}
                </div>
              ) : (
                <div className="postPrivacy">
                  <BiWorld /> <span>Público</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <RiArrowDropDownLine color="#000" size="28" />
      </div>
      <div className="postContent">
        {isPrivate ? (
          <span>
            Essa publicação está configurada no moodo privado "somente eu".
          </span>
        ) : (
          <span> Hello World! </span>
        )}
      </div>

      <div className="likeAndComment">
        <div className="likes">
          <BiLike />
          {likes > 0 ? (
            <span className="likesDescription">{likes} pessoa curtiu isso</span>
          ) : (
            <span className="likesDescription">
              Seja o primeiro a curtir isso
            </span>
          )}
        </div>

        <div className="commentAndShare">
          <div>
            <span className="comments">0 Comentários</span>
          </div>
          <div>
            <span> {share} Compartilhamentos</span>
          </div>
        </div>
      </div>

      <div className="postActions">
        <button className="action">
          <BiLike /> curtir
        </button>
        <button className="action">
          <BiCommentDots /> comentário
        </button>
        <button className="action">
          <RiShareForward2Fill /> compartilhar
        </button>
      </div>
    </div>
  )
}

export default Post
