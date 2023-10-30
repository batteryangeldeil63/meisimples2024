import { useState } from "react";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./style";

export function OutfitTag({ $detail, $modelDetail }) {
  const [ tag, setTag ] = useState("");
  const [ tagList, setTagList ] = useState([]);

  function handleAddTag() {
    setTagList([...tagList, tag]);
    setTag("");

    if($detail) {
      document.querySelectorAll(".boxNewTag input")[0].value = "";
    } else {
      document.querySelectorAll(".boxNewTag input")[1].value = "";
    }
    
  }

  function handleDeleteTag(item) {
    setTagList(tagList.filter(value => value != item));
  }

  return (
    <Container>
        <div className="boxNewTag">
          <input type="text" placeholder="Adicionar" onChange={e => setTag(e.target.value) } />
          <Button icon={ <AiOutlinePlus /> } onClick={ handleAddTag } />
        </div>

      {
        tagList.length > 0 &&
        tagList.map((item, index) => (
          <div key={ index }>
            <input type="text" value={ item } readOnly />
            <Button icon={ <AiOutlineClose /> } onClick={() => handleDeleteTag(item)} />
          </div>
        )).reverse()
      }
    </Container>
  )
}