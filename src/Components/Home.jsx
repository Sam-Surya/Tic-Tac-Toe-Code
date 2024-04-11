import React, { useEffect, useState } from 'react';
import '../CSS/styles.css'
export default function Home() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const [fifth, setFifth] = useState('');
    const [sixth, setSixth] = useState('');
    const [seventh, setSeventh] = useState('');
    const [eight, setEight] = useState('');
    const [nine, setNinth] = useState('');
    const [winner, setWinner] = useState('');
    const [playerone, setPlayerone] = useState('0');
    const [playertwo, setPlayertwo] = useState('1');

    function updateStateWithValidation(setState, value) {
        if (value === '0' || value === '1' || value === '') {
            setState(value);
        }
    }

    function firstChangeHandler(event) {
        updateStateWithValidation(setFirst, event.target.value);
    }

    function secondChangeHandler(event) {
        updateStateWithValidation(setSecond, event.target.value);
    }

    function thirdChangeHandler(event) {
        updateStateWithValidation(setThird, event.target.value);
    }

    function fourthChangeHandler(event) {
        updateStateWithValidation(setFourth, event.target.value);
    }

    function fifthChangeHandler(event) {
        updateStateWithValidation(setFifth, event.target.value);
    }

    function sixthChangeHandler(event) {
        updateStateWithValidation(setSixth, event.target.value);
    }

    function seventhChangeHandler(event) {
        updateStateWithValidation(setSeventh, event.target.value);
    }

    function eighthChangeHandler(event) {
        updateStateWithValidation(setEight, event.target.value);
    }

    function ninthChangeHandler(event) {
        updateStateWithValidation(setNinth, event.target.value);
    }

    function playeroneChangeHandler() {
        if (playerone === '0') {
            setPlayerone('1');
            setPlayertwo('0');
        } else {
            setPlayerone('0');
            setPlayertwo('1');
        }
    }

    function playertwoChangeHandler() {
        if (playertwo === '0') {
            setPlayertwo('1');
            setPlayerone('0');
        } else {
            setPlayertwo('0');
            setPlayerone('1');
        }
    }


    function checkWinner() {
        if (
            (first === second && second === third && first !== '') ||
            (fourth === fifth && fifth === sixth && fourth !== '') ||
            (seventh === eight && eight === nine && seventh !== '') ||
            (first === fourth && fourth === seventh && first !== '') ||
            (second === fifth && fifth === eight && second !== '') ||
            (third === sixth && sixth === nine && third !== '') ||
            (first === fifth && fifth === nine && first !== '') ||
            (third === fifth && fifth === seventh && third !== '')
        ) {
            if (first === '0') {
                if (playerone === '0') {
                    setWinner('Player 1');
                } else {
                    setWinner('Player 2');
                }
            } else if (first === '1') {
                if (playertwo === '1') {
                    setWinner('Player 2');
                } else {
                    setWinner('Player 1');
                }
            }
        }
    }

    let c = 0;

    function clearInputs() {
        c = 1;
        setFirst('');
        setSecond('');
        setThird('');
        setFourth('');
        setFifth('');
        setSixth('');
        setSeventh('');
        setEight('');
        setNinth('');
        setWinner('');
        setPlayerone('0');
        setPlayertwo('1');

    }

    useEffect(() => {
        checkWinner();
    }, [first, second, third, fourth, fifth, sixth, seventh, eight, nine]);

    return (
        <>


            <br></br>



            <div className="card-container">
                <div className="card mx-5 shadow-lg">
                    <div className='card-header' >
                        <h5 style={{ textAlign: 'center' }}>Tic-Tac-Toe</h5>

                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Player 1</span>
                            <input class="form-control" type="text" value={playerone} onChange={playeroneChangeHandler} style={{ width: '50px', height: '50px' }} required />
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Player 2</span>
                            <input type="text" class="form-control" value={playertwo} onChange={playertwoChangeHandler} style={{ width: '50px', height: '50px' }} required />
                        </div>
                    </div>


                    <div class="card-body">
                        <div class="input-group">
                            <input class="input-group mb-3 " type="text" value={first} onChange={firstChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <input class="input-group mb-3 mx-3" type="text" value={second} onChange={secondChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <input class="input-group mb-3 " type="text" value={third} onChange={thirdChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <br />
                        </div>

                        <div class="input-group">
                            <input class="input-group mb-3 " type="text" value={fourth} onChange={fourthChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <input class="input-group mb-3 mx-3" type="text" value={fifth} onChange={fifthChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <input class="input-group mb-3 " type="text" value={sixth} onChange={sixthChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <br />
                        </div>
                        <div class="input-group">
                            <input class="input-group mb-3 " type="text" value={seventh} onChange={seventhChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <input class="input-group mb-3 mx-3" type="text" value={eight} onChange={eighthChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <input class="input-group mb-3 " type="text" value={nine} onChange={ninthChangeHandler} style={{ width: '200px', height: '50px' }} />
                            <br />
                        </div>
                        <div className="text-center">
                        {winner && <h5 style={{ color: 'blue' }}>Winner : {winner}</h5>}



                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-dark" onClick={clearInputs}>New Game</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
