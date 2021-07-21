import React from "react";
import "./App.css";
import Monster from "./Component/Monster.js";

const monsterList = [
    {
        name: "스타로드",
        attack: 0,
        magic: 5,
        debuff: ["실명, 빙결, 화상, 기절"],
        elemental: ["불속성"],
        img: "/img/starload.png",
        etc: "",
    },
    {
        name: "헬",
        attack: 8,
        magic: 0,
        debuff: ["방깎, 중독, 실명, 기절"],
        elemental: [""],
        img: "/img/hel.png",
        etc: "디버프상태면 좆댐",
    },
    {
        name: "수르트",
        attack: 6,
        magic: 1,
        debuff: ["방깎, 공깎, 출혈"],
        elemental: ["불속성"],
        img: "/img/surtr.png",
        etc: "디버프상태면 좆댐",
    },
    {
        name: "페이게이저",
        attack: 1,
        magic: 5,
        debuff: ["실명, 저주, 공깎, 주문깎, 방깍, 저항깎"],
        elemental: ["아케인, 불, 물, 번개, 땅"],
        img: "/img/fey_gazer.png",
        etc: "4속성상태이상걸림!!!",
    },
    {
        name: "페이드래곤",
        attack: 3,
        magic: 3,
        debuff: ["역병, 화상"],
        elemental: ["불, 용"],
        img: "/img/fey_dragon.png",
        etc: "거대한 화구 딜 조심",
    },
    {
        name: "퍼스트호스맨",
        attack: 2,
        magic: 5,
        debuff: ["실명, 부패"],
        elemental: ["어둠, 땅, 빛"],
        img: "/img/horseman_famine.png",
        etc: "한방기있음!!",
    },
    {
        name: "세컨드호스맨",
        attack: 0,
        magic: 4,
        debuff: ["역병, 실명, 중독, 맹독, 부패, 마비, 화상"],
        elemental: ["빛, 어둠"],
        img: "/img/horseman_pestilence.png",
        etc: "한방기있음!!",
    },
    {
        name: "페이코카트리스",
        attack: 3,
        magic: 3,
        debuff: ["역병, 화상, 중독, 석화"],
        elemental: ["드래곤, 불"],
        img: "/img/fey_cockatrice.png",
        etc: "",
    },
    {
        name: "이그드라실",
        attack: 3,
        magic: 4,
        debuff: ["공깎, 방깎, 저항깎, 석화"],
        elemental: ["땅"],
        img: "/img/yggdrasil.png",
        etc: "",
    },
];

class App extends React.Component {
    state = {
        monsters: [],
    };

    componentDidMount() {
        this.setState({ monsters: monsterList });
    }
    render() {
        const { monsters } = this.state;
        return (
            <div className="App">
                <div className="monsters">
                    {monsters.map((monster) => (
                        <Monster
                            key={monster.name}
                            name={monster.name}
                            attack={monster.attack}
                            magic={monster.magic}
                            debuff={monster.debuff}
                            img={monster.img}
                            etc={monster.etc}
                            elemental={monster.elemental}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
