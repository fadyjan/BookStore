import React from "react";
import module from "../Card/Card.module.css";
import LargeBookstore from "../../assets/LargeBookstore.png";
import { countBooksByAuthor } from "../../store/DataSlices/DataSlices";

const Card = ({ data, Tittle }) => {
  let MainTittle = "";
  let SecondaryTittle = "";
  let WhereToBuy = "";
  let IamgeSource = '';

  if (Tittle == "Stores") {
    MainTittle = data.title;
    SecondaryTittle = data.authors[0];
    WhereToBuy = data.stores;
    IamgeSource = LargeBookstore

  } else if (Tittle == "Authors") {
    MainTittle = data.authors[0];
    SecondaryTittle = "Publish books :" + countBooksByAuthor(data.authors[0]);
    IamgeSource = data.authorImage

  } else if (Tittle == "Books") {
    MainTittle = data.title;
    SecondaryTittle = data.authors[0];
    IamgeSource = data.thumbnailUrl

  }

  return (
    <div className={module.Card}>
      <div className={module.CardInnerWrapper}>
        <div className={module.imageWrapper}>
          <img  src={IamgeSource} className={Tittle=='Stores'? module.SmallIamgesContent :module.IamgesContent}></img>
        </div>
        <div className={module.InfoWrapper}>
          <label>{MainTittle}</label>
          <p>{SecondaryTittle}</p>

          {WhereToBuy != "" ? (
            <div className={module.StoresWrapper}>
              <label>Stores:</label>
              <div className={module.StoresItems}>
                {WhereToBuy.map((record) => {
                  return (
                    <div className={module.Item}>
                      <label>{record}</label>
                      <button>Sell</button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
