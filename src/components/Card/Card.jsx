import React from "react";
import module from "../Card/Card.module.css";
import { DestructruingData } from "../../utils/utilsFunctions";

const Card = ({ data, Tittle }) => {
 let [ MainTittle ,SecondaryTittle ,WhereToBuy ,IamgeSource,ID ] = DestructruingData(data,Tittle)
  
  return (
    <div className={module.Card}>
        <div className={module.imageWrapper}>
          <img  src={IamgeSource} className={Tittle=='Stores'? module.SmallIamgesContent :module.IamgesContent}></img>
        </div>
        <div className={module.InfoWrapper}>
          <div className={module.InnerInfoWrapper}>
          <label>{MainTittle}</label>
          <p>{SecondaryTittle}</p>
          </div>


          {WhereToBuy != undefined ? (
            <div className={module.StoresWrapper}>
              <label>Stores:</label>
              <div className={module.StoresItems}>
                {WhereToBuy.map((record) => {
                  return (
                    <div key={ID+ record.StoreName} className={module.Item}>
                      <label>{record.StoreName}</label>
                      <label>{record.Price}</label>

                      <button>Sell</button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
    </div>
  );
};

export default Card;
