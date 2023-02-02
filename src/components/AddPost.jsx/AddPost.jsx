import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postContext } from '../../contexts/PostsContextProvider';
import { useSearchParams } from 'react-router-dom';


const AddPost = () => {
  const navigate = useNavigate();

  const { getPost, categories, getCategories, createPost } = useContext(postContext);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [genres, setGenres] = useState('');
  const [desc, setDesc] = useState('');
  const [dataCreated, setDataCreated] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSave() {
    let newProduct = new FormData();

    newProduct.append("title", title);
    newProduct.append("image", image)
    newProduct.append("description", desc);
    newProduct.append("genre", genres);
    createPost(newProduct, navigate)
    console.log(title, image, desc, dataCreated, genres)

  }

  return (
    <>

      <div className="text-field">
        <input type="text" name="" id="" placeholder='Добавить фанфик' value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* <select value={genres}  onChange={(e)=> setCategory(e.target.value)}>
        <option value="">choose category</option>
        {categories?.map(item=>(
          <option key={item.id} value={item.id}>{item.title}</option>
        ))}
      </select> */}
        <input type="text" name="" id="" placeholder='desc' value={desc} onChange={(e) => setDesc(e.target.value)} />
        <input type="text" name="" id="" placeholder='genres' value={genres} onChange={(e) => setGenres(e.target.value)} />
        {/* <input type="date" name="" id="" value={dataCreated} onChange={(e)=> setDataCreated(e.target.value)} /> */}
        <input type="file" name="photo" id='' multiple accept="image/*" onChange={e => setImage(e.target.files[0])} />
        <input type='submit' onClick={handleSave} value="Отправить"></input>

      </div>



    </>
  )
}

export default AddPost