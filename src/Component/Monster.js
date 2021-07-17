import React from "react";
import "./Monster.css";

function Monster({
    name,
    attack,
    magic,
    debuff,
    elemental,
    img,
    etc,
}) {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + img} alt="" />
            <h1>{name}</h1>
            <h2>
                물리기술: {attack}
                <br />
                마법기술: {magic}
            </h2>
            <h3>
                상태이상: {debuff}
                <br />
                공격속성: {elemental}
            </h3>
            <h4>특이사항: {etc}</h4>
        </div>
    );
}

export default Monster;
