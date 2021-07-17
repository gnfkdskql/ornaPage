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
