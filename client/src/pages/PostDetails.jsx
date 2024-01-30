import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail from '../images/blog22.jpg'

const PostDetails = () => {
  return (
    <section className='post-detail'>
      <div className="container post-detail__container">
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>

          </div>
        </div>
        <h1>This is the post title</h1>
        <div className='post-detail__thumbnail'>
          <img src={thumbnail} alt=''/>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione sed fugiat nobis expedita molestias cumque dolores unde soluta vero 
          blanditiis velit, minima eum. Nulla, fugiat. Ullam, molestias quia perspiciatis placeat aspernatur veniam et, illum voluptates error 
          dignissimos deleniti ad consequuntur?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut, nisi natus asperiores minima hic odio nobis alias optio,
           beatae dolorum deserunt libero consectetur. Recusandae aperiam a nemo natus facere possimus nesciunt ducimus voluptates aliquam, 
           architecto iste nulla earum cupiditate sapiente quam eum maiores soluta excepturi blanditiis eos. Quas tenetur distinctio est cumque?
           Omnis, unde.
           </p>
          <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores minus eaque nostrum, excepturi nulla, impedit assumenda
           autem repellat incidunt, quisquam unde cum. Nobis maxime maiores quis beatae nihil, ratione iure consequuntur. Accusamus voluptates
           a minus neque placeat enim amet culpa nisi soluta id quod explicabo possimus provident accusantium quibusdam praesentium nostrum 
           vitae, nam, dolor, magnam veniam voluptatem deleniti! Molestiae deserunt maxime porro dolor architecto necessitatibus commodi. 
           Laboriosam impedit, rem sint quibusdam officiis aut quaerat pariatur maxime fugiat ad suscipit non illum error porro, ea quasi
           praesentium corporis placeat atque quae accusamus eum cumque? Delectus libero vitae minima alias ab, earum vero aspernatur
           dolorum esse quod non deserunt pariatur ullam molestias.</p>
          
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, magnam! Recusandae expedita error quis neque reiciendis, 
            velit minima voluptatem officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sequi maiores, amet delectus, animi nam exercitationem harum ipsam
              veritatis aut! Sit voluptate delectus quaerat repellat pariatur maxime, sed unde vitae saepe ipsum tempora sapiente nemo 
              facere magni nulla sequi molestiae doloribus odit aperiam nihil cumque magnam! Quia voluptatibus voluptates aspernatur minus! Provident
              deleniti aut ipsam qui, rem laboriosam temporibus, amet, similique dolores dolor nobis. Necessitatibus, ullam aut! Id quod qui 
              nam numquam voluptatibus molestiae error cupiditate inventore asperiores excepturi quos quaerat voluptatem possimus odit facere 
              at, perferendis quae cum! Quidem recusandae velit voluptate neque omnis eos qui consequuntur. Maxime, voluptatem natus rerum, 
              inventore id sint, minus architecto consequuntur eaque velit vero culpa aspernatur. In ipsum minima natus! Fugit quasi provident,
              laboriosam ipsum nisi adipisci maxime ab a eligendi, fugiat totam possimus modi beatae esse ad saepe odit libero sequi, eos 
              labore commodi. Molestiae animi quaerat error beatae. Debitis hic iusto doloribus temporibus voluptatem, voluptas animi tempora.
              Beatae fugiat odio impedit corporis amet debitis, eaque at, praesentium tenetur possimus perferendis iusto similique, modi odit
              doloribus delectus repellendus nobis deserunt. Nam consequatur quisquam vel fuga et eum iste fugit distinctio itaque tenetur
              praesentium, alias eos animi exercitationem temporibus assumenda illum numquam?
            </p>
      </div>
    </section>
  )
}

export default PostDetails